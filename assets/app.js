(function () {
  "use strict";

  var ALL = window.SERIES || {};
  var ORDER = (window.SERIES_ORDER || Object.keys(ALL)).slice().sort(function (a, b) {
    return (ALL[a].navOrder || 99) - (ALL[b].navOrder || 99);
  });
  var BASE = ALL[document.body.getAttribute("data-series")] || ALL[ORDER[0]];
  var page = document.body.getAttribute("data-page");
  var groupOf = function (x) { return x.group || x.id; };
  // Every season of this series (current + archived), newest first.
  var SEASONS = Object.keys(ALL).map(function (k) { return ALL[k]; })
    .filter(function (x) { return groupOf(x) === groupOf(BASE); })
    .sort(function (a, b) { return (b.season || 0) - (a.season || 0); });
  var wanted = new URLSearchParams(location.search).get("season");
  var S = SEASONS.filter(function (x) { return wanted && String(x.season) === wanted; })[0] || BASE;
  var seasonQuery = function (x) { return x === BASE || !x.season ? "" : "?season=" + x.season; };

  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var team = function (k) { return S.teams[k] || { name: k, colour: "#8C939D" }; };
  var car = function (k) { return S.cars[k] || ""; };
  var LOBBY = { Blue: "#4C8DFF", Red: "#F0524A" };
  var bar = function (c) { return '<span class="bar" style="background:' + c + '"></span>'; };
  var dot = function (c) { return '<span class="dot" style="background:' + c + '"></span>'; };
  // Lap times are compared as numbers (seconds), never as text.
  var secs = function (t) {
    var m = /^(\d+):(\d+(?:\.\d+)?)$/.exec(t || "");
    return m ? Number(m[1]) * 60 + Number(m[2]) : Infinity;
  };
  var $ = function (id) { return document.getElementById(id); };

  function pill(label, pressed, attrs, colour) {
    return '<button type="button" class="pill" aria-pressed="' + (pressed ? "true" : "false") + '" ' + attrs + ">" +
      (colour ? dot(colour) : "") + esc(label) + "</button>";
  }

  function readHash() {
    var out = {};
    location.hash.replace(/^#/, "").split("&").forEach(function (p) {
      var kv = p.split("=");
      if (kv[0]) out[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || "");
    });
    return out;
  }
  function writeHash(state) {
    var parts = [];
    Object.keys(state).forEach(function (k) {
      if (state[k] && state[k] !== "all") parts.push(k + "=" + encodeURIComponent(state[k]));
    });
    history.replaceState(null, "", parts.length ? "#" + parts.join("&") : location.pathname + location.search);
  }

  /* ---------------- Navigation ---------------- */
  function renderNav() {
    $("seriesNav").innerHTML = ORDER.map(function (id) {
      var x = ALL[id];
      return '<a href="' + x.pages.results + '"' + (id === groupOf(S) ? ' aria-current="page"' : "") + ">" + esc(x.navLabel) + "</a>";
    }).join("");
    // An archived season without race results links back to the current season's results.
    // Two rows: results and standings first, then the records pages.
    var tabs = [["results", "Race Results"], ["championship", "Championship Standings"], ["records", "Driver Records"], ["teamrecords", "Team Records"], ["champions", "Drivers' Champions"]].filter(function (t) { return S.pages[t[0]] || BASE.pages[t[0]]; });
    $("pageNav").innerHTML = tabs.length > 1 ? tabs.map(function (t) {
      var href = S.pages[t[0]] ? S.pages[t[0]] + seasonQuery(S) : BASE.pages[t[0]];
      return (t[0] === "records" ? '<span class="subnav-break" aria-hidden="true"></span>' : "") +
        '<a href="' + href + '"' + (t[0] === page ? ' aria-current="page"' : "") + ">" + t[1] + "</a>";
    }).join("") : "";
    if (tabs.length < 2) $("pageNav").hidden = true;

    // Season picker: only when this series has more than one season on this page type.
    var box = $("seasons");
    if (box) {
      var list = SEASONS.filter(function (x) { return x.pages[page]; });
      var champName = function (x) { return (x.title || "").replace(/\s*Season \d+\s*/, " ").trim(); };
      box.innerHTML = list.length > 1 ? '<label class="label" for="seasonSelect">Season</label>' +
        '<span class="selectwrap"><span class="selectshown" id="seasonShown" aria-hidden="true">Season ' + S.season + (S === BASE && !S.final ? " · current" : "") + '</span><select id="seasonSelect" class="select" aria-label="Season">' + list.map(function (x) {
          return '<option value="' + x.season + '"' + (x === S ? " selected" : "") + ">Season " + x.season +
            (x === BASE && !x.final ? " · current" : "") + (champName(x) ? " · " + esc(champName(x)) : "") + "</option>";
        }).join("") + "</select></span>" : "";
      box.hidden = list.length < 2;
      var sel = $("seasonSelect");
      if (sel) sel.addEventListener("change", function () {
        var next = SEASONS.filter(function (x) { return String(x.season) === sel.value; })[0];
        if (!next || next === S) return;
        S = next;
        try { history.replaceState(null, "", location.pathname + seasonQuery(S)); } catch (e) {}
        renderNav();
        if (page === "championship") championshipPage();
        var f = $("seasonSelect"); if (f) f.focus();
      });
    }
  }

  /* ---------------- Race results page ---------------- */
  function resultsPage() {
    var h = readHash();
    var last = S.rounds[S.rounds.length - 1].no;
    var state = { round: Number(h.round) || last, lobby: h.lobby || "all", team: h.team || "all" };
    var cols = S.hasLobbies ? 8 : 7;

    $("head").innerHTML = "<tr>" +
      '<th scope="col">Pos</th><th scope="col">Driver / Team</th>' +
      (S.hasLobbies ? '<th scope="col">Lobby</th>' : "") +
      '<th scope="col">Car</th><th scope="col" class="r">Race time</th><th scope="col" class="r">To leader</th>' +
      '<th scope="col" class="r">To car ahead</th><th scope="col" class="r">Best lap</th></tr>';

    $("notes").innerHTML =
      '<span class="key"><span class="fl" style="font-size:12px">0:00.000</span>Fastest lap of the race</span>' +
      "<span>Gaps in seconds, as listed in the results</span>" +
      (S.resultNotes || []).map(function (n) { return "<span>" + esc(n) + "</span>"; }).join("") +
      "<span>Positions are overall, even when filtered</span>";
    $("source").textContent = S.source || "";

    function render() {
      var R = S.rounds.filter(function (r) { return r.no === state.round; })[0] || S.rounds[S.rounds.length - 1];
      state.round = R.no;

      var all = R.rows.map(function (x, i) {
        return { pos: i + 1, driver: x[0], tk: x[1], lobby: x[2], car: car(x[3]), time: x[4], toLeader: x[5], toAhead: x[6], best: x[7], status: x[8] };
      });
      var lobbies = S.hasLobbies ? ["Blue", "Red"].filter(function (l) { return all.some(function (r) { return r.lobby === l; }); }) : [];
      var teams = Object.keys(S.teams).filter(function (k) { return all.some(function (r) { return r.tk === k; }); });
      if (state.lobby !== "all" && lobbies.indexOf(state.lobby) < 0) state.lobby = "all";
      if (state.team !== "all" && teams.indexOf(state.team) < 0) state.team = "all";
      writeHash(state);

      var fastest = Infinity;
      all.forEach(function (r) { var v = secs(r.best); if (v < fastest) fastest = v; });
      var winner = all[0];
      var flRow = all.filter(function (r) { return secs(r.best) === fastest; })[0];

      $("rounds").innerHTML = S.rounds.map(function (r) {
        return pill("Round " + r.no, r.no === R.no, 'data-round="' + r.no + '"');
      }).join("");

      $("eyebrow").textContent = S.eyebrow + " · Round " + R.no;
      $("title").textContent = R.track;
      $("meta").textContent = R.lobbies || "";
      $("meta").hidden = !R.lobbies;
      document.title = "Round " + R.no + " · " + R.short + " · " + S.navLabel + " · TB Race Results";

      var wt = team(winner.tk);
      var ft = flRow ? team(flRow.tk) : null;
      var finishers = all.filter(function (r) { return r.status !== "o"; }).length;
      var field = R.entries
        ? '<div class="tile-big">' + R.starters + " of " + R.entries + ' started</div><div class="sub">' + (R.leadLap != null ? R.leadLap + " on the lead lap" : finishers + " classified") + "</div>"
        : '<div class="tile-big">' + finishers + " of " + R.starters + ' finished</div><div class="sub">' + (R.leadLap != null ? R.leadLap + " on the lead lap" : R.starters + " starters") + "</div>";
      $("tiles").innerHTML =
        '<div class="tile"><div class="label">Winner</div><div class="tile-big">' + esc(winner.driver) + '</div>' +
        '<div class="sub">' + bar(wt.colour) + esc(wt.name) + ' · <span class="t" style="font-size:13px;color:var(--soft)">' + esc(winner.time) + "</span></div></div>" +
        (flRow ? '<div class="tile"><div class="label">Fastest lap</div><div class="tile-big">' + esc(flRow.driver) + '</div>' +
          '<div class="sub"><span class="fl" style="font-size:13px">' + esc(flRow.best) + "</span>" + esc(ft.name) + "</div></div>" : "") +
        '<div class="tile"><div class="label">Field</div>' + field + "</div>";

      $("lobbyFilter").innerHTML = lobbies.length ? '<span class="label">Lobby</span>' +
        pill("All", state.lobby === "all", 'data-lobby="all"') +
        lobbies.map(function (l) { return pill(l, state.lobby === l, 'data-lobby="' + l + '"', LOBBY[l]); }).join("") : "";
      $("lobbyFilter").hidden = !lobbies.length;
      $("teamFilter").innerHTML = '<span class="label">Team</span>' +
        pill("All teams", state.team === "all", 'data-team="all"') +
        teams.map(function (k) { return pill(team(k).name, state.team === k, 'data-team="' + k + '"', team(k).colour); }).join("");

      var shown = all.filter(function (r) {
        return (state.lobby === "all" || r.lobby === state.lobby) && (state.team === "all" || r.tk === state.team);
      });
      var anyClassified = shown.some(function (r) { return r.status !== "o"; });
      var dividerDone = false;
      var body = shown.map(function (r) {
        var out = r.status === "o";
        var html = "";
        if (out && !dividerDone && anyClassified) html += '<tr class="divider"><td colspan="' + cols + '">Not classified</td></tr>';
        if (out) dividerDone = true;
        var podium = !out && r.pos <= 3;
        var t = team(r.tk);
        var isFL = secs(r.best) === fastest;
        html += '<tr class="' + (podium ? "podium" : out ? "out" : "") + '">' +
          '<td><span class="chip' + (podium ? " p" + r.pos : out ? " nc" : "") + '">' + r.pos + "</span></td>" +
          '<td><div class="driver">' + esc(r.driver) + '</div><div class="sub nowrap">' + bar(t.colour) + esc(t.name) + "</div></td>" +
          (S.hasLobbies ? '<td><div class="sub nowrap">' + bar(LOBBY[r.lobby] || "#8C939D") + esc(r.lobby) + "</div></td>" : "") +
          '<td class="car">' + (esc(r.car) || "—") + "</td>" +
          '<td class="t r" style="color:' + (r.status === "c" ? "var(--soft)" : "var(--dim)") + '">' + esc(r.time) + "</td>" +
          (r.toLeader === "Winner" ? '<td class="r"><span class="winner">Winner</span></td>' : '<td class="t r">' + esc(r.toLeader) + "</td>") +
          '<td class="t r" style="color:var(--dim)">' + esc(r.toAhead) + "</td>" +
          '<td class="r">' + (r.best ? (isFL ? '<span class="fl">' + esc(r.best) + "</span>" : '<span class="t">' + esc(r.best) + "</span>") : '<span class="none">—</span>') + "</td>" +
          "</tr>";
        return html;
      }).join("");
      $("rows").innerHTML = body ||
        '<tr><td colspan="' + cols + '" class="empty">No drivers match these filters in this round.</td></tr>';
    }

    document.addEventListener("click", function (e) {
      var b = e.target.closest("button.pill");
      if (!b) return;
      if (b.dataset.round) { state.round = Number(b.dataset.round); }
      else if (b.dataset.lobby) { state.lobby = b.dataset.lobby; }
      else if (b.dataset.team) { state.team = b.dataset.team; }
      else return;
      render();
    });
    render();
  }

  /* ---------------- Championship page ---------------- */
  function keyHtml(items) {
    return (items || ["swatches", "dropped", "* = DC, scored on finishing position", "– = did not enter"]).map(function (k) {
      if (k === "swatches") return '<span class="key"><span class="swatch" style="background:var(--gold)"></span><span class="swatch" style="background:var(--silver)"></span><span class="swatch" style="background:var(--bronze)"></span>1st / 2nd / 3rd in that round</span>';
      if (k === "dropped") return '<span class="key"><span class="dropped">33</span>Dropped round</span>';
      return "<span>" + esc(k) + "</span>";
    }).join("");
  }

  function roundCell(v) {
    if (/^\d+d\*$/.test(v)) return '<span class="dropped" title="Dropped round">' + v.slice(0, -2) + '</span><span class="t" style="color:var(--dim)" title="DC">*</span>';
    var m = /^(\d+)(p[123])$/.exec(v);
    if (m) return '<span class="rp ' + m[2] + '">' + m[1] + "</span>";
    var md = /^(\d+)(p[123])d$/.exec(v);
    if (md) return '<span class="rp ' + md[2] + ' rp-dropped" title="Dropped round">' + md[1] + "</span>";
    if (/^\d+d$/.test(v)) return '<span class="dropped" title="Dropped round">' + v.slice(0, -1) + "</span>";
    if (v === "DNS" || v === "RGQ" || v === "DNF" || v === "CC" || v === "WTD" || v === "DQ") return '<span class="status">' + v + "</span>";
    if (v === "NP") return '<span class="np" title="Round not run">NP</span>';
    if (v === "NE") return '<span class="np" title="No event">N/E</span>';
    if (v === "–" || v === "") return '<span class="none" title="Did not enter">–</span>';
    return '<span class="t">' + esc(v) + "</span>";
  }

  // Club team for a driver in a given season:
  // 1) a season-specific team (SEASON_TEAMS), 2) the club list (DRIVER_TEAMS),
  // 3) their team in any current series (drivers race for one team in every series).
  function clubTeam(name, season) {
    var CT = window.CLUB_TEAMS || {}, DT = window.DRIVER_TEAMS || {}, ST = (window.SEASON_TEAMS || {})[season] || {};
    // Seasons before TEAMS_FROM_SEASON use only their own season list.
    if (season < (window.TEAMS_FROM_SEASON || 0)) return ST[name] ? { name: ST[name], colour: CT[ST[name]] || "#8C939D" } : null;
    var n = ST[name] || DT[name];
    if (n) return { name: n, colour: CT[n] || "#8C939D" };
    var found = null;
    ORDER.forEach(function (id) {
      var x = ALL[id];
      if (found || !x.standings || !x.teams) return;
      var r = x.standings.filter(function (row) { return row[1] === name; })[0];
      if (r && x.teams[r[2]]) found = x.teams[r[2]];
    });
    return found;
  }

  function archivePage() {
    var n = S.roundCount;
    var rounds = []; for (var i = 1; i <= n; i++) rounds.push(i);
    var champ = S.standings[0], second = S.standings[1], third = S.standings[2];
    $("eyebrow").textContent = S.eyebrow + " · Final standings";
    $("meta").textContent = S.standingsMeta || "";
    document.title = "Championship · " + S.navLabel + " Season " + S.season + " · TB Race Results";
    $("key").innerHTML = keyHtml(S.standingsKey);
    $("rules").textContent = S.standingsRules || "";
    $("source").textContent = S.standingsSource || "";
    $("teamFilter").parentNode.hidden = true;

    var winners = rounds.map(function (r) {
      var w = S.standings.filter(function (x) { return /^\d+p1d?$/.test(x[3][r - 1]); })[0];
      var ne = !w && S.standings.some(function (x) { return x[3][r - 1] === "NE"; });
      var np = !w && (ne || S.standings.some(function (x) { return x[3][r - 1] === "NP"; }));
      return '<div class="tile-row"><span>Round ' + r + "</span><span" + (np ? ' style="color:var(--dim);font-weight:400"' : "") + ">" + (np ? (ne ? "No event" : S.npLabel || "Not run") : w ? esc(w[1]) : "—") + "</span></div>";
    }).join("");
    $("tiles").innerHTML =
      '<div class="tile"><div class="label">Champion</div>' +
      '<div class="tile-row" style="align-items:baseline"><span class="tile-big champion">' + esc(champ[1]) + '</span><span class="tile-big">' + champ[6] + ' <span style="font-size:15px;color:var(--muted)">pts</span></span></div>' +
      '<div class="tile-row"><span>2nd</span><span>' + esc(second[1]) + " · " + second[6] + "</span></div>" +
      '<div class="tile-row"><span>3rd</span><span>' + esc(third[1]) + " · " + third[6] + "</span></div></div>" +
      '<div class="tile"><div class="label">Round winners</div>' + winners + "</div>";

    var hasPen = S.standings.some(function (x) { return x[7]; });
    var showTeams = (S.season || 99) >= (window.TEAMS_FROM_SEASON || 0) || !!(window.SEASON_TEAMS || {})[S.season];
    $("head").parentNode.classList.add("compact");
    $("head").innerHTML = "<tr>" +
      '<th scope="col">Pos</th><th scope="col">' + (showTeams ? "Driver / Team" : "Driver") + '</th><th scope="col" class="r">#</th>' +
      rounds.map(function (r) { return '<th class="c" scope="col">R' + r + "</th>"; }).join("") +
      '<th scope="col" class="r">Subtotal</th><th scope="col" class="r">Drop</th>' + (hasPen ? '<th scope="col" class="r">Penalty</th>' : "") + '<th scope="col" class="r">Points</th></tr>';
    $("rows").innerHTML = S.standings.map(function (x) {
      var p = Number(x[0]);
      return '<tr class="' + (p <= 3 ? "podium" : "") + '">' +
        '<td><span class="chip' + (p <= 3 ? " p" + p : "") + '">' + esc(x[0]) + "</span></td>" +
        '<td><div class="driver' + (p === 1 ? " champion" : "") + '">' + esc(x[1]) + (p === 1 ? ' <span class="crown">Champion</span>' : "") + "</div>" +
          (function (t) { return t ? '<div class="sub nowrap">' + bar(t.colour) + esc(t.name) + "</div>" : ""; })(showTeams ? clubTeam(x[1], S.season) : null) + "</td>" +
        '<td class="t r" style="color:var(--dim)">' + esc(x[2]) + "</td>" +
        x[3].map(function (v) { return '<td class="c">' + roundCell(v) + "</td>"; }).join("") +
        '<td class="t r" style="color:var(--muted)">' + x[4] + "</td>" +
        '<td class="t r" style="color:' + (x[5] ? "var(--red-text)" : "var(--dim)") + '">' + (x[5] ? "−" + Math.abs(x[5]) : "–") + "</td>" +
        (hasPen ? '<td class="t r" style="color:' + (x[7] ? "var(--red-text)" : "var(--dim)") + '">' + (x[7] ? "−" + Math.abs(x[7]) : "–") + "</td>" : "") +
        '<td class="r"><span class="points">' + x[6] + "</span></td></tr>";
    }).join("");
  }

  /* ---------------- Champions page ---------------- */
  // Only finished seasons count; the current season is added once it is complete.
  function championsPage() {
    var done = SEASONS.filter(function (x) { return x.final && x.standings && x.standings.length; });
    var pts = function (x, r) { return x.standingsFormat === "archive" ? r[6] : r[8]; };
    var map = {};
    done.forEach(function (x) {
      var c = x.standings[0];
      var o = map[c[1]] || (map[c[1]] = { name: c[1], seasons: [] });
      o.seasons.push(x.season);
    });
    var list = Object.keys(map).map(function (k) { return map[k]; });
    list.forEach(function (o) { o.seasons.sort(function (a, b) { return b - a; }); o.titles = o.seasons.length; o.team = clubTeam(o.name, 99); });
    // Most titles first; equal titles: the driver who won their first title earliest ranks higher.
    var first = function (o) { return o.seasons[o.seasons.length - 1]; };
    list.sort(function (a, b) { return b.titles - a.titles || first(a) - first(b) || a.name.localeCompare(b.name); });

    var nums = done.map(function (x) { return x.season; }).sort(function (a, b) { return a - b; });
    $("eyebrow").textContent = BASE.navLabel + " · Drivers' champions";
    $("meta").textContent = nums.length ? (nums.length > 1 ? "Seasons " + nums[0] + "–" + nums[nums.length - 1] : "Season " + nums[0]) + " · " + nums.length + " championships" : "No completed seasons yet";
    document.title = "Drivers' Champions · " + BASE.navLabel + " · TB Race Results";
    $("rules").textContent = "Only completed seasons are counted" + (BASE.final ? "." : "; Season " + (BASE.season || 18) + " will be added when it finishes.") + " Drivers are ranked by titles won; when titles are equal, the driver who won the earliest title ranks higher.";

    if (!list.length) { $("rows").innerHTML = '<tr><td colspan="4" class="empty">No completed seasons on the site yet.</td></tr>'; return; }
    var top = list[0], latest = done[0];
    $("tiles").innerHTML =
      (function () {
        var who = list.filter(function (o) { return o.titles === top.titles; }).map(function (o) { return o.name; });
        return '<div class="tile"><div class="label">Most titles</div><div class="tile-big' + (who.length === 1 ? " champion" : "") + '">' + (who.length === 1 ? esc(who[0]) : top.titles + (top.titles === 1 ? " title each" : " titles each")) + '</div><div class="sub" style="white-space:normal">' +
          (who.length === 1 ? top.titles + (top.titles === 1 ? " title" : " titles") : esc(who.slice(0, 3).join(", ")) + (who.length > 3 ? " and " + (who.length - 3) + " more" : "")) + "</div></div>";
      })() +
      '<div class="tile"><div class="label">Latest champion</div><div class="tile-big">' + esc(latest.standings[0][1]) + '</div><div class="sub">Season ' + latest.season + " · " + pts(latest, latest.standings[0]) + " pts</div></div>" +
      '<div class="tile"><div class="label">Different champions</div><div class="tile-big">' + list.length + '</div><div class="sub">from ' + done.length + " seasons</div></div>";

    $("head").innerHTML = '<tr><th scope="col">#</th><th scope="col">Driver</th><th scope="col" class="r">Titles</th><th scope="col">Seasons won</th></tr>';
    var prev = null, pos = 0;
    $("rows").innerHTML = list.map(function (o, i) {
      var key = o.titles + "|" + first(o);
      if (key !== prev) pos = i + 1; prev = key;
      return '<tr class="' + (pos === 1 ? "podium" : "") + '">' +
        '<td><span class="chip' + (pos <= 3 ? " p" + pos : "") + '">' + pos + "</span></td>" +
        '<td><div class="driver' + (pos === 1 ? " champion" : "") + '">' + esc(o.name) + "</div>" + (o.team ? '<div class="sub nowrap">' + bar(o.team.colour) + esc(o.team.name) + "</div>" : "") + "</td>" +
        '<td class="r"><span class="points">' + o.titles + "</span></td>" +
        '<td class="nowrap">' + o.seasons.map(function (n) { return '<a class="seasontag gold" href="' + BASE.pages.championship + (n === BASE.season ? "" : "?season=" + n) + '">S' + n + "</a>"; }).join("") + "</td></tr>";
    }).join("");

    $("head2").innerHTML = '<tr><th scope="col">Season</th><th scope="col">Championship</th><th scope="col">Champion</th><th scope="col" class="r">Points</th><th scope="col">Runner-up</th></tr>';
    $("rows2").innerHTML = done.map(function (x) {
      var c = x.standings[0], r2 = x.standings[1];
      return "<tr>" +
        '<td><a class="seasontag gold" href="' + BASE.pages.championship + "?season=" + x.season + '">S' + x.season + "</a></td>" +
        '<td class="car">' + esc(x.title.replace(/\s*Season \d+$/, "")) + "</td>" +
        '<td><div class="driver champion">' + esc(c[1]) + "</div></td>" +
        '<td class="t r">' + pts(x, c) + "</td>" +
        '<td class="nowrap" style="font-size:14px;color:var(--muted)">' + (r2 ? esc(r2[1]) + " · " + pts(x, r2) : "—") + "</td></tr>";
    }).join("");
  }

  /* ---------------- Driver records page ---------------- */
  // Starts = rounds actually raced (points scored, or DC / RGQ / DNF / DQ / CC = changed car).
  // Not counted: DNS, WTD (withdrawn), rounds not run (NP) and rounds not entered.
  function archiveStarts(cells) {
    return cells.filter(function (v) { return /^\d/.test(v) || v === "RGQ" || v === "DNF" || v === "CC" || v === "DQ"; }).length;
  }

  function recordsPage() {
    var seasons = SEASONS.filter(function (x) { return x.standings; });
    var map = {};
    seasons.slice().reverse().forEach(function (x) { // oldest first, so the newest team wins
      x.standings.forEach(function (r) {
        var name = r[1];
        var o = map[name] || (map[name] = { name: name, starts: 0, wins: 0, podiums: 0, seasons: [], team: null });
        var starts, wins, podiums;
        if (x.standingsFormat === "archive") {
          starts = archiveStarts(r[3]);
          wins = r[3].filter(function (v) { return /p1$/.test(v); }).length;
          podiums = r[3].filter(function (v) { return /p[123]$/.test(v); }).length;
        } else {
          starts = r[9]; wins = r[10]; podiums = r[11];
          var t = x.teams && x.teams[r[2]];
          if (t) o.team = t;
        }
        o.starts += starts; o.wins += wins; o.podiums += podiums;
        if (starts > 0 && o.seasons.indexOf(x.season || 18) < 0) o.seasons.push(x.season || 18);
      });
    });
    var all = Object.keys(map).map(function (k) { return map[k]; }).filter(function (o) { return o.starts > 0; });
    var TFS = window.TEAMS_FROM_SEASON || 0;
    var teamOK = function (o) { return o.seasons.some(function (n) { return n >= TFS; }); };
    // A driver races for the same team in every series: if this series has no team for them,
    // use their team from another current series.
    all.forEach(function (o) {
      if (o.team || !teamOK(o)) return;
      ORDER.forEach(function (id) {
        var x = ALL[id];
        if (o.team || !x.standings || !x.teams) return;
        var r = x.standings.filter(function (row) { return row[1] === o.name; })[0];
        if (r && x.teams[r[2]]) o.team = x.teams[r[2]];
      });
    });
    var DT = window.DRIVER_TEAMS || {}, CT = window.CLUB_TEAMS || {};
    all.forEach(function (o) { if (DT[o.name] && teamOK(o)) o.team = { name: DT[o.name], colour: CT[DT[o.name]] || "#8C939D" }; });
    all.forEach(function (o) { o.nseasons = o.seasons.length; o.pct = o.starts ? o.wins / o.starts : 0; o.ppct = o.starts ? o.podiums / o.starts : 0; o.seasons.sort(function (a, b) { return b - a; }); });

    var nums = seasons.map(function (x) { return x.season || 18; }).sort(function (a, b) { return a - b; });
    var span = nums.length > 1 ? "Seasons " + nums[0] + "–" + nums[nums.length - 1] : "Season " + nums[0];
    var after = BASE.standingsAfter ? "after Round " + BASE.standingsAfter : "";
    var cur = after ? (nums.length > 1 ? " (Season " + (BASE.season || 18) + " " + after + ")" : " " + after) : "";
    $("eyebrow").textContent = BASE.navLabel + " · All-time driver records";
    $("meta").textContent = span + cur + " · " + all.length + " drivers";
    document.title = "Driver Records · " + BASE.navLabel + " · TB Race Results";
    $("rules").textContent = "Records cover every season of this series on the site: " + nums.slice().reverse().map(function (n) { return "Season " + n; }).join(", ") + cur + ". Starts count rounds a driver actually raced, including DC, RGQ, DNF, DQ and CC (changed car); DNS, WTD (withdrawn) and rounds that weren't run don't count. Podiums include wins. Win % = wins ÷ starts. Podium % = podiums ÷ starts. Drivers are ranked by wins, then win %, then podiums, then podium %, then starts.";

    var top = function (key) {
      var best = all.slice().sort(function (a, b) { return b[key] - a[key] || b.wins - a.wins || a.name.localeCompare(b.name); });
      var v = best[0][key];
      var who = best.filter(function (o) { return o[key] === v; }).map(function (o) { return o.name; });
      return { v: v, who: who };
    };
    var tile = function (label, t) {
      return '<div class="tile"><div class="label">' + label + '</div><div class="tile-big">' + t.v + '</div><div class="sub" style="white-space:normal">' +
        esc(t.who.slice(0, 3).join(", ")) + (t.who.length > 3 ? " and " + (t.who.length - 3) + " more" : "") + "</div></div>";
    };
    $("tiles").innerHTML = tile("Most wins", top("wins")) + tile("Most podiums", top("podiums")) + tile("Most starts", top("starts"));

    var COLS = [["nseasons", "Seasons"], ["starts", "Starts"], ["wins", "Wins"], ["podiums", "Podiums"], ["pct", "Win %"], ["ppct", "Podium %"]];
    var h = readHash();
    var state = { sort: COLS.some(function (c) { return c[0] === h.sort; }) ? h.sort : "wins" };
    var pct = function (v) { return (Math.round(v * 1000) / 10).toFixed(1) + "%"; };

    function render() {
      writeHash(state.sort === "wins" ? {} : state);
      var k = state.sort;
      var rows = all.slice().sort(function (a, b) {
        // Ranking: wins, then win %, then podiums, then podium %, then starts.
        return b[k] - a[k] || b.wins - a.wins || b.pct - a.pct || b.podiums - a.podiums || b.ppct - a.ppct || b.starts - a.starts || a.name.localeCompare(b.name);
      });
      $("head").innerHTML = '<tr><th scope="col">#</th><th scope="col">Driver</th>' +
        COLS.map(function (c) {
          var on = c[0] === k;
          return '<th scope="col" class="r" aria-sort="' + (on ? "descending" : "none") + '"><button type="button" class="sortbtn' + (on ? " on" : "") + '" data-sort="' + c[0] + '">' + c[1] + (on ? " ▾" : "") + "</button></th>";
        }).join("") + "</tr>";
      var prev = null, pos = 0;
      $("rows").innerHTML = rows.map(function (o, i) {
        var key = [o[k], o.wins, o.pct, o.podiums, o.ppct, o.starts].join("|");
        if (key !== prev) pos = i + 1; prev = key;
        return '<tr class="' + (pos <= 3 ? "podium" : "") + '">' +
          '<td><span class="chip' + (pos <= 3 ? " p" + pos : "") + '">' + pos + "</span></td>" +
          '<td><div class="driver">' + esc(o.name) + "</div>" + (o.team ? '<div class="sub nowrap">' + bar(o.team.colour) + esc(o.team.name) + "</div>" : "") + "</td>" +
          '<td class="t r' + (k === "nseasons" ? " hot" : "") + '" title="Seasons ' + o.seasons.slice().sort(function (a, b) { return a - b; }).join(", ") + '">' + o.nseasons + "</td>" +
          '<td class="t r' + (k === "starts" ? " hot" : "") + '">' + o.starts + "</td>" +
          '<td class="t r' + (k === "wins" ? " hot" : "") + '">' + (o.wins || '<span class="none">0</span>') + "</td>" +
          '<td class="t r' + (k === "podiums" ? " hot" : "") + '">' + (o.podiums || '<span class="none">0</span>') + "</td>" +
          '<td class="t r' + (k === "pct" ? " hot" : "") + '">' + (o.wins ? pct(o.pct) : '<span class="none">0.0%</span>') + "</td>" +
          '<td class="t r' + (k === "ppct" ? " hot" : "") + '">' + (o.podiums ? pct(o.ppct) : '<span class="none">0.0%</span>') + "</td></tr>";
      }).join("");
    }
    document.addEventListener("click", function (e) {
      var b = e.target.closest("button.sortbtn");
      if (!b) return;
      state.sort = b.dataset.sort;
      render();
    });
    render();
  }

  /* ---------------- Team records page ---------------- */
  // One start per team per round (however many of its drivers raced); every win and
  // top-3 finish by its drivers; titles = this series' driver championships won by its drivers.
  // Each driver counts for the team they raced for in that season. Privateers are left out.
  function teamRecordsPage() {
    var seasons = SEASONS.filter(function (x) { return x.standings; });
    var CT = window.CLUB_TEAMS || {}, DT = window.DRIVER_TEAMS || {};
    var started = function (v) { v = String(v || ""); return /^\d/.test(v) || v === "RGQ" || v === "DNF" || v === "CC" || v === "DQ"; };
    var map = {}, rounds = 0;
    var get = function (n) { return map[n] || (map[n] = { name: n, colour: CT[n] || "#8C939D", starts: 0, wins: 0, podiums: 0, titles: 0, seasons: [], drivers: [] }); };
    seasons.forEach(function (x) {
      var archive = x.standingsFormat === "archive", ci = archive ? 3 : 4, season = x.season || 18;
      var n = archive ? x.roundCount : (x.standingsAfter || 0);
      var teamOf = function (row) {
        if (archive) { var t = clubTeam(row[1], season); return t && t.name; }
        var st = (window.SEASON_TEAMS || {})[season] || {};
        return DT[row[1]] || st[row[1]] || (x.teams && x.teams[row[2]] ? x.teams[row[2]].name : null);
      };
      for (var r = 0; r < n; r++) {
        var any = false, seen = {};
        x.standings.forEach(function (row) {
          var v = String(row[ci][r] || "");
          if (!started(v)) return;
          any = true;
          var name = teamOf(row);
          if (!name || name === "Privateer") return;
          var o = get(name);
          seen[name] = true;
          if (o.drivers.indexOf(row[1]) < 0) o.drivers.push(row[1]);
          if (o.seasons.indexOf(season) < 0) o.seasons.push(season);
          var m = /^\d+p([123])/.exec(v);
          if (m) { o.podiums++; if (m[1] === "1") o.wins++; }
        });
        if (any) rounds++;
        Object.keys(seen).forEach(function (k) { map[k].starts++; });
      }
      if (x.final) {
        var champ = teamOf(x.standings[0]);
        if (champ && map[champ]) map[champ].titles++;
      }
    });
    var all = Object.keys(map).map(function (k) { return map[k]; }).filter(function (o) { return o.starts > 0; });
    all.forEach(function (o) { o.nseasons = o.seasons.length; o.ndrivers = o.drivers.length; o.pct = o.starts ? o.wins / o.starts : 0; });

    var nums = seasons.map(function (x) { return x.season || 18; }).sort(function (a, b) { return a - b; });
    var span = nums.length > 1 ? "Seasons " + nums[0] + "–" + nums[nums.length - 1] : "Season " + nums[0];
    var after = BASE.standingsAfter ? " (Season " + (BASE.season || 18) + " after Round " + BASE.standingsAfter + ")" : "";
    $("eyebrow").textContent = BASE.navLabel + " · All-time team records";
    $("meta").textContent = span + after + " · " + rounds + " rounds · " + all.length + " teams";
    document.title = "Team Records · " + BASE.navLabel + " · TB Race Results";
    $("rules").textContent = "Records cover every season of this series on the site" + after + ". Starts: one per team for every round in which at least one of its drivers started (including DC, RGQ, DNF, DQ and CC), however many of its drivers raced; DNS, WTD (withdrawn) and rounds that weren't run don't count. Wins and podiums: every win and top-3 finish by the team's drivers, so two drivers on the podium in one round is two podiums. Win % = wins ÷ starts. Drivers titles = " + BASE.navLabel + " driver championships won by the team's drivers. Each driver counts for the team they raced for in that season. Privateers and drivers with no team on record are not included. Teams are ranked by wins, then podiums, then drivers titles, then starts.";

    var top = function (key) {
      var best = all.slice().sort(function (a, b) { return b[key] - a[key] || b.wins - a.wins || a.name.localeCompare(b.name); });
      var v = best[0][key];
      return { v: v, who: best.filter(function (o) { return o[key] === v; }).map(function (o) { return o.name; }) };
    };
    var tile = function (label, t) {
      return '<div class="tile"><div class="label">' + label + '</div><div class="tile-big">' + t.v + '</div><div class="sub" style="white-space:normal">' + esc(t.who.join(", ")) + "</div></div>";
    };
    $("tiles").innerHTML = all.length ? tile("Most wins", top("wins")) + tile("Most podiums", top("podiums")) + tile("Most drivers titles", top("titles")) : "";

    var COLS = [["nseasons", "Seasons"], ["ndrivers", "Drivers"], ["starts", "Starts"], ["wins", "Wins"], ["podiums", "Podiums"], ["pct", "Win %"], ["titles", "Drivers Titles"]];
    var h = readHash();
    var state = { sort: COLS.some(function (c) { return c[0] === h.sort; }) ? h.sort : "wins" };
    var pct = function (v) { return (Math.round(v * 1000) / 10).toFixed(1) + "%"; };
    var zero = function (v, s) { return v ? s : '<span class="none">' + s + "</span>"; };

    function render() {
      writeHash(state.sort === "wins" ? {} : state);
      var k = state.sort;
      var rows = all.slice().sort(function (a, b) {
        return b[k] - a[k] || b.wins - a.wins || b.podiums - a.podiums || b.titles - a.titles || b.starts - a.starts || a.name.localeCompare(b.name);
      });
      $("head").innerHTML = '<tr><th scope="col">#</th><th scope="col">Team</th>' +
        COLS.map(function (c) {
          var on = c[0] === k;
          return '<th scope="col" class="r" aria-sort="' + (on ? "descending" : "none") + '"><button type="button" class="sortbtn' + (on ? " on" : "") + '" data-sort="' + c[0] + '">' + c[1] + (on ? " ▾" : "") + "</button></th>";
        }).join("") + "</tr>";
      var prev = null, pos = 0;
      $("rows").innerHTML = rows.map(function (o, i) {
        var key = [o[k], o.wins, o.podiums, o.titles, o.starts].join("|");
        if (key !== prev) pos = i + 1; prev = key;
        var td = function (c, html) { return '<td class="t r' + (k === c ? " hot" : "") + '">' + html + "</td>"; };
        return '<tr class="' + (pos <= 3 ? "podium" : "") + '">' +
          '<td><span class="chip' + (pos <= 3 ? " p" + pos : "") + '">' + pos + "</span></td>" +
          '<td><div class="driver nowrap"><span class="bar" style="background:' + o.colour + ';margin-right:8px"></span>' + esc(o.name) + "</div></td>" +
          '<td class="t r' + (k === "nseasons" ? " hot" : "") + '" title="Seasons ' + o.seasons.slice().sort(function (a, b) { return a - b; }).join(", ") + '">' + o.nseasons + "</td>" +
          '<td class="t r' + (k === "ndrivers" ? " hot" : "") + '" title="' + esc(o.drivers.slice().sort(function (a, b) { return a.localeCompare(b); }).join(", ")) + '">' + o.ndrivers + "</td>" +
          td("starts", o.starts) + td("wins", zero(o.wins, o.wins)) + td("podiums", zero(o.podiums, o.podiums)) +
          td("pct", zero(o.wins, pct(o.pct))) + td("titles", zero(o.titles, o.titles)) + "</tr>";
      }).join("");
    }
    document.addEventListener("click", function (e) {
      var b = e.target.closest("button.sortbtn");
      if (!b) return;
      state.sort = b.dataset.sort;
      render();
    });
    render();
  }

  var teamClick = null;
  document.addEventListener("click", function (e) {
    var b = e.target.closest("button.pill");
    if (b && b.dataset.team && teamClick && page === "championship") teamClick(b.dataset.team);
  });

  function championshipPage() {
    teamClick = null;
    $("teamFilter").parentNode.hidden = false;
    if (S.standingsFormat === "archive") return archivePage();
    var h = readHash();
    var state = { team: h.team || "all" };
    var winners = S.rounds.map(function (r) { return { no: r.no, short: r.short, driver: r.rows[0][0] }; });
    var leader = S.standings[0];
    var tiedWith = S.standings.slice(1).filter(function (x) { return x[8] === leader[8]; }).map(function (x) { return x[1]; });
    var cols = 10 + S.rounds.length;

    $("eyebrow").textContent = S.eyebrow + " · After Round " + S.standingsAfter;
    $("rules").textContent = S.standingsRules || "";
    $("source").textContent = S.standingsSource || "";
    $("meta").textContent = S.standingsMeta || ((S.seriesLine ? S.seriesLine + " · " : "") + "Each driver's lowest round is dropped");
    document.title = "Championship · " + S.navLabel + (SEASONS.length > 1 ? " Season " + S.season : "") + " · TB Race Results";
    $("key").innerHTML = keyHtml(S.standingsKey);
    $("head").innerHTML = "<tr>" +
      '<th scope="col">Pos</th><th scope="col">Driver / Team</th><th scope="col">Car</th>' +
      S.rounds.map(function (r) {
        return '<th class="c" scope="col"><abbr title="Round ' + r.no + " · " + esc(r.short) + '" style="text-decoration:none">R' + r.no + "</abbr></th>";
      }).join("") +
      '<th scope="col" class="r">Total</th><th scope="col" class="r">Drop</th><th scope="col" class="r">Gap</th>' +
      '<th scope="col" class="r">Starts</th><th scope="col" class="r">Wins</th><th scope="col" class="r">Podiums</th>' +
      '<th scope="col" class="r">Points</th></tr>';

    $("tiles").innerHTML =
      '<div class="tile"><div class="label">Leader</div>' +
      '<div class="tile-row" style="align-items:baseline"><span class="tile-big champion">' + esc(leader[1]) + '</span><span class="tile-big">' + leader[8] + ' <span style="font-size:15px;color:var(--muted)">pts</span></span></div>' +
      (tiedWith.length ? '<div class="sub">Level on ' + leader[8] + " with " + tiedWith.map(esc).join(" and ") + ", ahead on countback</div>" : "") +
      "</div>" +
      '<div class="tile"><div class="label">Round winners</div>' +
      winners.map(function (w) { return '<div class="tile-row"><span>R' + w.no + " · " + esc(w.short) + "</span><span>" + esc(w.driver) + "</span></div>"; }).join("") +
      "</div>";

    var cell = roundCell;

    function render() {
      writeHash(state);
      $("teamFilter").innerHTML = '<span class="label">Team</span>' +
        pill("All teams", state.team === "all", 'data-team="all"') +
        Object.keys(S.teams).map(function (k) { return pill(team(k).name, state.team === k, 'data-team="' + k + '"', team(k).colour); }).join("");

      $("rows").innerHTML = S.standings.filter(function (x) {
        return state.team === "all" || x[2] === state.team;
      }).map(function (x) {
        var p = Number(x[0]);
        var t = team(x[2]);
        return '<tr class="' + (p <= 3 ? "podium" : "") + '">' +
          '<td><span class="chip' + (p <= 3 ? " p" + p : "") + '">' + esc(x[0]) + "</span></td>" +
          '<td><div class="driver' + (p === 1 ? " champion" : "") + '">' + esc(x[1]) + '</div><div class="sub nowrap">' + bar(t.colour) + esc(t.name) + "</div></td>" +
          '<td class="car">' + (esc(car(x[3])) || "—") + "</td>" +
          x[4].map(function (v) { return '<td class="c">' + cell(v) + "</td>"; }).join("") +
          '<td class="t r" style="color:var(--muted)">' + x[5] + "</td>" +
          '<td class="t r" style="color:var(--dim)">' + x[6] + "</td>" +
          (x[7] === "Leader" ? '<td class="r"><span class="winner" style="font-size:15px">Leader</span></td>' : '<td class="t r" style="color:var(--muted)">' + esc(x[7]) + "</td>") +
          '<td class="t r">' + x[9] + "</td>" +
          '<td class="t r">' + (x[10] || '<span class="none">0</span>') + "</td>" +
          '<td class="t r">' + (x[11] || '<span class="none">0</span>') + "</td>" +
          '<td class="r"><span class="points">' + x[8] + "</span></td>" +
          "</tr>";
      }).join("") || '<tr><td colspan="' + cols + '" class="empty">No drivers in this team.</td></tr>';
    }

    teamClick = function (t) { state.team = t; render(); };
    render();
  }

  renderNav();
  if (page === "results") resultsPage();
  if (page === "championship") championshipPage();
  if (page === "records") recordsPage();
  if (page === "teamrecords") teamRecordsPage();
  if (page === "champions") championsPage();
})();
