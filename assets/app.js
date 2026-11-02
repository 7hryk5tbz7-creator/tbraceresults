(function () {
  "use strict";

  var ALL = window.SERIES || {};
  var ORDER = (window.SERIES_ORDER || Object.keys(ALL)).slice().sort(function (a, b) {
    return (ALL[a].navOrder || 99) - (ALL[b].navOrder || 99);
  });
  var page = document.body.getAttribute("data-page");
  // Records pages are club-wide (records-*.html): ?series=<id> shows one series, otherwise All Time.
  var RECORD_PAGES = /^(records|teamrecords|champions|teamtitles)$/;
  var REC = { records: "records-drivers.html", teamrecords: "records-teams.html", champions: "records-titles.html", teamtitles: "records-teamtitles.html" };
  var wantSeries = RECORD_PAGES.test(page) ? new URLSearchParams(location.search).get("series") : null;
  var BASE = (wantSeries && ALL[wantSeries] && !ALL[wantSeries].group ? ALL[wantSeries] : null) || ALL[document.body.getAttribute("data-series")] || ALL[ORDER[0]];
  var groupOf = function (x) { return x.group || x.id; };
  // Every season of this series (current + archived), newest first.
  var SEASONS = Object.keys(ALL).map(function (k) { return ALL[k]; })
    .filter(function (x) { return groupOf(x) === groupOf(BASE); })
    .sort(function (a, b) { return (b.season || 0) - (a.season || 0); });
  var wanted = new URLSearchParams(location.search).get("season");
  var S = SEASONS.filter(function (x) { return wanted && String(x.season) === wanted; })[0] || BASE;
  var seasonQuery = function (x) { return x === BASE || !x.season ? "" : "?season=" + x.season; };
  var SCOPE_ALL = RECORD_PAGES.test(page) && BASE.id !== wantSeries;
  var recQuery = SCOPE_ALL ? "" : "?series=" + BASE.id;
  var baseOf = function (x) { return ALL[groupOf(x)] || x; };
  var SHORT = function (x) { return ({ "Tuesday Series": "Tuesday", "Narly Cup": "Narly", "WJF Trophy": "WJF" })[x.navLabel] || x.navLabel; };
  var LABEL = SCOPE_ALL ? "All Time" : BASE.navLabel;
  var RSEASONS = SCOPE_ALL ? Object.keys(ALL).map(function (k) { return ALL[k]; }).sort(function (a, b) {
    return (b.season || 0) - (a.season || 0) || (baseOf(a).navOrder || 99) - (baseOf(b).navOrder || 99);
  }) : SEASONS;
  var uniq = function (l) { return l.filter(function (v, i) { return l.indexOf(v) === i; }); };

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
    if (page === "home") {
      $("seriesNav").innerHTML = '<a href="index.html" aria-current="page">Home</a>' + ORDER.map(function (id) { return '<a href="' + ALL[id].pages.results + '">' + esc(ALL[id].navLabel) + "</a>"; }).join("");
      return;
    }
    $("seriesNav").innerHTML = '<a href="index.html">Home</a>' + ORDER.map(function (id) {
      var x = ALL[id];
      return '<a href="' + x.pages.results + '"' + (!RECORD_PAGES.test(page) && id === groupOf(S) ? ' aria-current="page"' : "") + ">" + esc(x.navLabel) + "</a>";
    }).join("");
    // An archived season without race results links back to the current season's results.
    // Two rows: results and standings first, then the records pages.
    if (RECORD_PAGES.test(page)) {
      // Records section: its own tabs; Teams' Titles is shown once team championship data exists.
      $("pageNav").innerHTML = [["records", "Driver Records"], ["teamrecords", "Team Records"], ["champions", "Drivers' Titles"], ["teamtitles", "Teams' Titles"]].map(function (t) {
        return '<a href="' + REC[t[0]] + recQuery + '"' + (t[0] === page ? ' aria-current="page"' : "") + ">" + t[1] + "</a>";
      }).join("");
    }
    // Series pages: current-season race results and championship standings only.
    var tabs = RECORD_PAGES.test(page) ? [] : [["results", "Race Results"], ["championship", '<span class="tab-long">Championship </span>Standings'], ["calendar", "Calendar"]].filter(function (t) { return S.pages[t[0]] || BASE.pages[t[0]]; });
    if (!RECORD_PAGES.test(page)) $("pageNav").innerHTML = tabs.length > 1 ? tabs.map(function (t) {
      var href = S.pages[t[0]] ? S.pages[t[0]] + (t[0] === "calendar" ? "" : seasonQuery(S)) : BASE.pages[t[0]];
      return '<a href="' + href + '"' + (t[0] === page ? ' aria-current="page"' : "") + ">" + t[1] + "</a>";
    }).join("") : "";
    if (!RECORD_PAGES.test(page) && tabs.length < 2) $("pageNav").hidden = true;

    // Records pages: All Time / Tuesday / Narly / WJF picker.
    if (RECORD_PAGES.test(page)) {
      var sp = $("scopePicker");
      if (!sp) {
        sp = document.createElement("div"); sp.id = "scopePicker"; sp.className = "pills scope";
        sp.setAttribute("role", "group"); sp.setAttribute("aria-label", "Records for");
        $("pageNav").parentNode.insertBefore(sp, $("pageNav").nextSibling);
      }
      sp.innerHTML = '<a class="pill" href="' + REC[page] + '"' + (SCOPE_ALL ? ' aria-current="page"' : "") + ">All Time</a>" +
        ORDER.map(function (id) {
          return '<a class="pill" href="' + REC[page] + "?series=" + id + '"' + (!SCOPE_ALL && id === groupOf(BASE) ? ' aria-current="page"' : "") + ">" + esc(SHORT(ALL[id])) + "</a>";
        }).join("");
    }

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

  /* Season 1 style: no points, no champion – finishing places, starts, wins, podiums, win % and podium %. */
  function noPointsPage() {
    var n = S.roundCount, rounds = []; for (var i = 1; i <= n; i++) rounds.push(i);
    $("eyebrow").textContent = S.eyebrow + " · Final results";
    if ($("h1title")) $("h1title").textContent = "Driver Results";
    $("meta").textContent = S.standingsMeta || "";
    document.title = "Results · " + S.navLabel + " Season " + S.season + " · TB Race Results";
    $("key").innerHTML = keyHtml(S.standingsKey);
    $("rules").textContent = S.standingsRules || "";
    $("source").textContent = S.standingsSource || "";
    $("teamFilter").parentNode.hidden = true;
    var started = function (v) { return /^\d/.test(v) || v === "DNF" || v === "RGQ" || v === "DQ" || v === "CC"; };
    var rows = S.standings.map(function (x) {
      var st = x[3].filter(started).length, w = x[3].filter(function (v) { return /p1$/.test(v); }).length, pd = x[3].filter(function (v) { return /p[123]$/.test(v); }).length;
      return { x: x, starts: st, wins: w, pods: pd, wp: st ? w / st : 0, pp: st ? pd / st : 0 };
    });
    var pct = function (v) { return (Math.round(v * 1000) / 10).toFixed(1) + "%"; };
    var winners = rounds.map(function (r) {
      var w = S.standings.filter(function (x) { return /^1p1$/.test(x[3][r - 1]); }).map(function (x) { return esc(x[1]); });
      return '<div class="tile-row"><span>Round ' + r + "</span><span>" + (w.join(" / ") || "—") + "</span></div>";
    }).join("");
    var most = function (k, label) {
      var best = Math.max.apply(null, rows.map(function (o) { return o[k]; }));
      var who = rows.filter(function (o) { return o[k] === best; }).map(function (o) { return o.x[1]; });
      return '<div class="tile-row"><span>' + label + "</span><span>" + esc(who.slice(0, 2).join(", ")) + (who.length > 2 ? " +" + (who.length - 2) : "") + " · " + best + "</span></div>";
    };
    $("tiles").innerHTML =
      '<div class="tile"><div class="label">No official champion</div><div class="tile-big" style="font-size:20px">No points system in Season 1</div>' +
      '<div class="sub" style="white-space:normal;margin-bottom:6px">Drivers are listed by race starts, sorted by wins, podiums, win %, podium % and then starts.</div>' +
      most("wins", "Most wins") + most("pods", "Most podiums") + most("starts", "Most starts") + "</div>" +
      '<div class="tile"><div class="label">Round winners</div>' + winners + "</div>";
    var showTeams = !!(window.SEASON_TEAMS || {})[S.season];
    var hasCar = !!(S.carOf || S.seasonCar);
    var carOf = function (nm) { return (S.carOf && S.carOf[nm]) || (S.carOf ? "" : S.seasonCar) || ""; };
    $("head").parentNode.classList.add("compact");
    $("head").innerHTML = "<tr>" +
      '<th scope="col">Pos</th><th scope="col">' + (showTeams ? "Driver / Team" : "Driver") + '</th><th scope="col" class="r">#</th>' + (hasCar ? '<th scope="col">Car</th>' : "") +
      rounds.map(function (r) { return '<th class="c" scope="col">R' + r + "</th>"; }).join("") +
      '<th scope="col" class="r">Starts</th><th scope="col" class="r">Wins</th><th scope="col" class="r">Podiums</th><th scope="col" class="r">Win %</th><th scope="col" class="r">Podium %</th></tr>';
    var cell = function (v) { var m = /^(\d+)(p[123])$/.exec(v); return m ? '<span class="rp ' + m[2] + '">P' + m[1] + "</span>" : /^\d+$/.test(v) ? '<span class="t">P' + v + "</span>" : roundCell(v); };
    $("rows").innerHTML = rows.map(function (o) {
      var x = o.x, p = Number(x[0]);
      return '<tr class="' + (p <= 3 ? "podium" : "") + '">' +
        '<td><span class="chip' + (p <= 3 ? " p" + p : "") + '">' + esc(x[0]) + "</span></td>" +
        '<td><div class="driver">' + esc(x[1]) + "</div>" +
          (function (t) { return t ? '<div class="sub nowrap">' + bar(t.colour) + esc(t.name) + "</div>" : ""; })(showTeams ? clubTeam(x[1], S.season) : null) + "</td>" +
        '<td class="t r" style="color:var(--dim)">' + esc(x[2]) + "</td>" +
        (hasCar ? '<td class="car">' + (esc(carOf(x[1])) || "—") + "</td>" : "") +
        x[3].map(function (v) { return '<td class="c">' + cell(v) + "</td>"; }).join("") +
        '<td class="t r">' + o.starts + "</td>" +
        '<td class="t r">' + (o.wins || '<span class="none">0</span>') + "</td>" +
        '<td class="t r">' + (o.pods || '<span class="none">0</span>') + "</td>" +
        '<td class="t r">' + (o.wins ? pct(o.wp) : '<span class="none">0.0%</span>') + "</td>" +
        '<td class="r"><span class="points" style="font-size:18px">' + (o.pods ? pct(o.pp) : '<span class="none">0.0%</span>') + "</span></td></tr>";
    }).join("");
  }

  function archivePage() {
    if (S.noPoints) return noPointsPage();
    if ($("h1title")) $("h1title").textContent = "Driver Standings";
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
      return '<div class="tile-row"><span>Round ' + r + (S.roundNames && S.roundNames[r - 1] ? ' · <span style="color:var(--dim)">' + esc(S.roundNames[r - 1]) + "</span>" : "") + "</span><span" + (np ? ' style="color:var(--dim);font-weight:400"' : "") + ">" + (np ? (ne ? "No event" : S.npLabel || "Not run") : w ? esc(w[1]) : "—") + "</span></div>";
    }).join("");
    $("tiles").innerHTML =
      '<div class="tile"><div class="label">Champion</div>' +
      '<div class="tile-row" style="align-items:baseline"><span class="tile-big champion">' + esc(champ[1]) + '</span><span class="tile-big">' + champ[6] + ' <span style="font-size:15px;color:var(--muted)">pts</span></span></div>' +
      '<div class="tile-row"><span>2nd</span><span>' + esc(second[1]) + " · " + second[6] + "</span></div>" +
      '<div class="tile-row"><span>3rd</span><span>' + esc(third[1]) + " · " + third[6] + "</span></div></div>" +
      '<div class="tile"><div class="label">Round winners</div>' + winners + "</div>";

    var hasPen = S.standings.some(function (x) { return x[7]; });
    var showTeams = (S.season || 99) >= (window.TEAMS_FROM_SEASON || 0) || !!(window.SEASON_TEAMS || {})[S.season];
    // Cars (Season 2 on): one car for everyone (seasonCar) or each driver's car (carOf).
    var hasCar = !!(S.carOf || S.seasonCar);
    var carOf = function (n) { return (S.carOf && S.carOf[n]) || (S.carOf ? "" : S.seasonCar) || ""; };
    $("head").parentNode.classList.add("compact");
    $("head").innerHTML = "<tr>" +
      '<th scope="col">Pos</th><th scope="col">' + (showTeams ? "Driver / Team" : "Driver") + '</th><th scope="col" class="r">#</th>' + (hasCar ? '<th scope="col">Car</th>' : "") +
      rounds.map(function (r) { var nm = S.roundNames && S.roundNames[r - 1]; return '<th class="c" scope="col">' + (nm ? '<abbr title="Round ' + r + " · " + esc(nm) + '" style="text-decoration:none">R' + r + "</abbr>" : "R" + r) + "</th>"; }).join("") +
      '<th scope="col" class="r">Subtotal</th><th scope="col" class="r">Drop</th>' + (hasPen ? '<th scope="col" class="r">Penalty</th>' : "") + '<th scope="col" class="r">Points</th></tr>';
    $("rows").innerHTML = S.standings.map(function (x) {
      var p = Number(x[0]);
      return '<tr class="' + (p <= 3 ? "podium" : "") + '">' +
        '<td><span class="chip' + (p <= 3 ? " p" + p : "") + '">' + esc(x[0]) + "</span></td>" +
        '<td><div class="driver' + (p === 1 ? " champion" : "") + '">' + esc(x[1]) + (p === 1 ? ' <span class="crown">Champion</span>' : "") + "</div>" +
          (function (t) { return t ? '<div class="sub nowrap">' + bar(t.colour) + esc(t.name) + "</div>" : ""; })(showTeams ? clubTeam(x[1], S.season) : null) + "</td>" +
        '<td class="t r" style="color:var(--dim)">' + esc(x[2]) + "</td>" +
        (hasCar ? '<td class="car">' + (esc(carOf(x[1])) || "—") + "</td>" : "") +
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
    var done = RSEASONS.filter(function (x) { return x.final && !x.noChampion && x.standings && x.standings.length; });
    var pts = function (x, r) { return x.standingsFormat === "archive" ? r[6] : r[8]; };
    var map = {};
    done.forEach(function (x) {
      var c = x.standings[0];
      var o = map[c[1]] || (map[c[1]] = { name: c[1], seasons: [] });
      o.seasons.push(x.season); o.won = (o.won || []).concat([x]);
    });
    var list = Object.keys(map).map(function (k) { return map[k]; });
    list.forEach(function (o) { o.seasons.sort(function (a, b) { return b - a; }); o.titles = o.seasons.length; o.team = clubTeam(o.name, 99);
      // No club/current team: use the team from the most recent season list that has them (as on Driver Records).
      if (!o.team) { var STL = window.SEASON_TEAMS || {}, CT2 = window.CLUB_TEAMS || {};
        Object.keys(STL).map(Number).sort(function (a, b) { return b - a; }).some(function (k) { var tn = STL[k][o.name]; if (tn) o.team = { name: tn, colour: CT2[tn] || "#8C939D" }; return !!tn; }); } });
    // Most titles first; equal titles: the driver who won their first title earliest ranks higher.
    var first = function (o) { return o.seasons[o.seasons.length - 1]; };
    list.sort(function (a, b) { return b.titles - a.titles || first(a) - first(b) || a.name.localeCompare(b.name); });

    var nums = uniq(done.map(function (x) { return x.season; })).sort(function (a, b) { return a - b; });
    var tag = function (x) { return '<a class="seasontag gold" href="' + baseOf(x).pages.championship + (x === baseOf(x) ? "" : "?season=" + x.season) + '">S' + x.season + (SCOPE_ALL ? " " + esc(SHORT(baseOf(x))) : "") + "</a>"; };
    $("eyebrow").textContent = LABEL + " · Drivers' champions";
    $("meta").textContent = nums.length ? (nums.length > 1 ? "Seasons " + nums[0] + "–" + nums[nums.length - 1] : "Season " + nums[0]) + " · " + done.length + " championships" : "No completed seasons yet";
    document.title = "Drivers' Titles · " + LABEL + " · TB Race Results";
    $("rules").textContent = (SCOPE_ALL ? "All Time counts the driver championships of all three series together. " : "") + "Only completed seasons are counted" + (BASE.final ? "." : "; Season " + (BASE.season || 18) + " will be added when it finishes.") + " Drivers are ranked by titles won; when titles are equal, the driver who won the earliest title ranks higher.";

    if (!list.length) { $("rows").innerHTML = '<tr><td colspan="4" class="empty">No completed seasons on the site yet.</td></tr>'; return; }
    var top = list[0], latest = done[0];
    $("tiles").innerHTML =
      (function () {
        var who = list.filter(function (o) { return o.titles === top.titles; }).map(function (o) { return o.name; });
        return '<div class="tile"><div class="label">Most titles</div><div class="tile-big' + (who.length === 1 ? " champion" : "") + '">' + (who.length === 1 ? esc(who[0]) : top.titles + (top.titles === 1 ? " title each" : " titles each")) + '</div><div class="sub" style="white-space:normal">' +
          (who.length === 1 ? top.titles + (top.titles === 1 ? " title" : " titles") : esc(who.slice(0, 3).join(", ")) + (who.length > 3 ? " and " + (who.length - 3) + " more" : "")) + "</div></div>";
      })() +
      '<div class="tile"><div class="label">Latest champion</div><div class="tile-big">' + esc(latest.standings[0][1]) + '</div><div class="sub">Season ' + latest.season + " · " + pts(latest, latest.standings[0]) + " pts</div></div>" +
      '<div class="tile"><div class="label">Different champions</div><div class="tile-big">' + list.length + '</div><div class="sub">from ' + done.length + (SCOPE_ALL ? " championships" : " seasons") + "</div></div>";

    $("head").innerHTML = '<tr><th scope="col">#</th><th scope="col">Driver</th><th scope="col" class="r">Titles</th><th scope="col">Seasons won</th></tr>';
    var prev = null, pos = 0;
    $("rows").innerHTML = list.map(function (o, i) {
      var key = o.titles + "|" + first(o);
      if (key !== prev) pos = i + 1; prev = key;
      return '<tr class="' + (pos === 1 ? "podium" : "") + '">' +
        '<td><span class="chip' + (pos <= 3 ? " p" + pos : "") + '">' + pos + "</span></td>" +
        '<td><div class="driver' + (pos === 1 ? " champion" : "") + '">' + esc(o.name) + "</div>" + (o.team ? '<div class="sub nowrap">' + bar(o.team.colour) + esc(o.team.name) + "</div>" : "") + "</td>" +
        '<td class="r"><span class="points">' + o.titles + "</span></td>" +
        '<td class="' + (SCOPE_ALL ? "tagwrap" : "nowrap") + '">' + o.won.slice().sort(function (a, b) { return b.season - a.season || (baseOf(a).navOrder || 99) - (baseOf(b).navOrder || 99); }).map(tag).join("") + "</td></tr>";
    }).join("");

    $("head2").innerHTML = '<tr><th scope="col">Season</th><th scope="col">Championship</th><th scope="col">Champion</th><th scope="col" class="r">Points</th><th scope="col">Runner-up</th></tr>';
    $("rows2").innerHTML = done.map(function (x) {
      var c = x.standings[0], r2 = x.standings[1];
      return "<tr>" +
        "<td>" + tag(x) + "</td>" +
        '<td class="car">' + (SCOPE_ALL ? esc(baseOf(x).navLabel) + " · " : "") + esc(x.title.replace(/\s*Season \d+$/, "")) + "</td>" +
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
    var seasons = RSEASONS.filter(function (x) { return x.standings; });
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
    // The club team list (DRIVER_TEAMS) applies to every season, including drivers who only raced before Season 15.
    all.forEach(function (o) { if (DT[o.name]) o.team = { name: DT[o.name], colour: CT[DT[o.name]] || "#8C939D" }; });
    // Drivers still without a team: use the team from the most recent season they raced that has a team list
    // (a driver who only raced under a team's old name shows that name, e.g. Team RNR). Display only; Team Records use each season's team and count Team RNR as MC Motorsport.
    var STL = window.SEASON_TEAMS || {}, ALI = window.TEAM_ALIASES || {};
    all.forEach(function (o) {
      if (o.team) return;
      var raced = o.seasons.slice().sort(function (a, b) { return b - a; });
      for (var i = 0; i < raced.length; i++) {
        var t = (STL[raced[i]] || {})[o.name];
        if (t) { o.team = { name: t, colour: CT[t] || "#8C939D" }; return; }
      }
    });
    // Race number: the last number each driver used in any series (newest season first; Season 18 from the entry lists in RACE_NUMBERS).
    // #1 is the reigning champion's number for the season after their title, so it is never shown here: the most recent number other than 1 is used.
    var RN = window.RACE_NUMBERS || {}, lastNo = {};
    Object.keys(ALL).map(function (k) { return ALL[k]; })
      .filter(function (x) { return x.standingsFormat === "archive" && x.standings; })
      .sort(function (a, b) { return a.season - b.season; })
      .forEach(function (x) { x.standings.forEach(function (r) { if (r[2] && r[2] !== "1" && archiveStarts(r[3]) > 0) lastNo[r[1]] = r[2]; }); });
    Object.keys(RN).forEach(function (n) { if (String(RN[n]) !== "1") lastNo[n] = String(RN[n]); });
    all.forEach(function (o) { o.no = lastNo[o.name] || ""; });
    all.forEach(function (o) { o.nseasons = o.seasons.length; o.pct = o.starts ? o.wins / o.starts : 0; o.ppct = o.starts ? o.podiums / o.starts : 0; o.seasons.sort(function (a, b) { return b - a; }); });

    var nums = uniq(seasons.map(function (x) { return x.season || 18; })).sort(function (a, b) { return a - b; });
    var span = nums.length > 1 ? "Seasons " + nums[0] + "–" + nums[nums.length - 1] : "Season " + nums[0];
    var after = BASE.standingsAfter ? "after Round " + BASE.standingsAfter : "";
    var cur = after ? (nums.length > 1 ? " (Season " + (BASE.season || 18) + " " + after + ")" : " " + after) : "";
    $("eyebrow").textContent = LABEL + " · " + (SCOPE_ALL ? "Driver records, all three series" : "All-time driver records");
    $("meta").textContent = span + cur + " · " + all.length + " drivers";
    document.title = "Driver Records · " + LABEL + " · TB Race Results";
    $("rules").textContent = (SCOPE_ALL ? "All Time adds together every season of all three series (Tuesday Series, Narly Cup and WJF Trophy): " : "Records cover every season of this series on the site: ") + nums.slice().reverse().map(function (n) { return "Season " + n; }).join(", ") + cur + ". Starts count rounds a driver actually raced, including DC, RGQ, DNF, DQ and CC (changed car); DNS, WTD (withdrawn) and rounds that weren't run don't count. Podiums include wins. Win % = wins ÷ starts. Podium % = podiums ÷ starts. Drivers are ranked by wins, then win %, then podiums, then podium %, then starts.";

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
          '<td><div class="driver">' + esc(o.name) + (o.no ? ' <span class="rno" title="Last race number used">#' + esc(o.no) + "</span>" : "") + "</div>" + (o.team ? '<div class="sub nowrap">' + bar(o.team.colour) + esc(o.team.name) + "</div>" : "") + "</td>" +
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
    var seasons = RSEASONS.filter(function (x) { return x.standings; });
    var CT = window.CLUB_TEAMS || {}, DT = window.DRIVER_TEAMS || {};
    var started = function (v) { v = String(v || ""); return /^\d/.test(v) || v === "RGQ" || v === "DNF" || v === "CC" || v === "DQ"; };
    var map = {}, rounds = 0, formerly = {};
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
          // A team's former name counts as the team (e.g. Team RNR became MC Motorsport after Season 8).
          var alias = (window.TEAM_ALIASES || {})[name];
          if (alias) { var fo = (formerly[alias] = formerly[alias] || { names: {}, seasons: [] }); fo.names[name] = Math.min(fo.names[name] || 99, season); if (fo.seasons.indexOf(season) < 0) fo.seasons.push(season); name = alias; }
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
      if (x.final && !x.noChampion) {
        var champ = teamOf(x.standings[0]);
        if (champ && (window.TEAM_ALIASES || {})[champ]) champ = window.TEAM_ALIASES[champ];
        if (champ && map[champ]) map[champ].titles++;
      }
    });
    var all = Object.keys(map).map(function (k) { return map[k]; }).filter(function (o) { return o.starts > 0; });
    all.forEach(function (o) { o.nseasons = o.seasons.length; o.ndrivers = o.drivers.length; o.pct = o.starts ? o.wins / o.starts : 0; });

    var seasonList = function (l) { l = l.slice().sort(function (a, b) { return a - b; }); return l.length > 1 ? "Seasons " + l.join(", ") : "Season " + l[0]; };
    var nums = uniq(seasons.map(function (x) { return x.season || 18; })).sort(function (a, b) { return a - b; });
    var span = nums.length > 1 ? "Seasons " + nums[0] + "–" + nums[nums.length - 1] : "Season " + nums[0];
    var after = BASE.standingsAfter ? " (Season " + (BASE.season || 18) + " after Round " + BASE.standingsAfter + ")" : "";
    $("eyebrow").textContent = LABEL + " · " + (SCOPE_ALL ? "Team records, all three series" : "All-time team records");
    $("meta").textContent = span + after + " · " + rounds + " rounds · " + all.length + " teams";
    document.title = "Team Records · " + LABEL + " · TB Race Results";
    // Former names, oldest first (e.g. Team RSR, then Team RNR).
    Object.keys(formerly).forEach(function (k) { var f = formerly[k]; var ord = window.TEAM_NAME_ORDER || []; f.list = Object.keys(f.names).sort(function (a, b) { var ia = ord.indexOf(a), ib = ord.indexOf(b); if (ia >= 0 && ib >= 0) return ia - ib; return f.names[a] - f.names[b]; }); });
    var joinNames = function (l, html) { var w = l.map(function (n) { return html ? "<strong style=\"color:#fff\">" + esc(n) + "</strong>" : esc(n); }); return w.length > 1 ? w.slice(0, -1).join(", ") + " and " + w[w.length - 1] : w[0]; };
    var notes = Object.keys(formerly).map(function (k) {
      var f = formerly[k], until = window.TEAM_ALIAS_UNTIL || {}, last = Math.max.apply(null, f.list.map(function (n) { return until[n] || 0; }).concat(f.seasons));
      var called = f.list.length > 1 ? f.list.slice(0, -1).map(function (n) { return "<strong style=\"color:#fff\">" + esc(n) + "</strong>"; }).join(", ") + ", then <strong style=\"color:#fff\">" + esc(f.list[f.list.length - 1]) + "</strong>," : "<strong style=\"color:#fff\">" + esc(f.list[0]) + "</strong>";
      return "<strong style=\"color:#fff\">" + esc(k) + "</strong> was called " + called + " until the end of Season " + last + ". " + (f.list.length > 1 ? "Their" : esc(f.list[0]) + "\u2019s") + " results are counted here as " + esc(k) + ".";
    });
    var noteBox = $("teamNote");
    if (!noteBox && notes.length) { noteBox = document.createElement("div"); noteBox.id = "teamNote"; $("rules").parentNode.insertBefore(noteBox, $("rules")); }
    if (noteBox) noteBox.innerHTML = notes.join("<br>");
    $("rules").textContent = (SCOPE_ALL ? "All Time adds together every season of all three series: Tuesday Series, Narly Cup and WJF Trophy" : "Records cover every season of this series on the site") + after + ". Starts: one per team for every round in which at least one of its drivers started (including DC, RGQ, DNF, DQ and CC), however many of its drivers raced; DNS, WTD (withdrawn) and rounds that weren't run don't count. Wins and podiums: every win and top-3 finish by the team's drivers, so two drivers on the podium in one round is two podiums. Win % = wins ÷ starts. Drivers' titles = " + (SCOPE_ALL ? "driver championships in all three series" : BASE.navLabel + " driver championships") + " won by the team's drivers. Each driver counts for the team they raced for in that season. Privateers and drivers with no team on record are not included. Teams are ranked by wins, then podiums, then drivers' titles, then starts.";

    var top = function (key) {
      var best = all.slice().sort(function (a, b) { return b[key] - a[key] || b.wins - a.wins || a.name.localeCompare(b.name); });
      var v = best[0][key];
      return { v: v, who: best.filter(function (o) { return o[key] === v; }).map(function (o) { return o.name; }) };
    };
    var tile = function (label, t) {
      return '<div class="tile"><div class="label">' + label + '</div><div class="tile-big">' + t.v + '</div><div class="sub" style="white-space:normal">' + esc(t.who.join(", ")) + "</div></div>";
    };
    $("tiles").innerHTML = all.length ? tile("Most wins", top("wins")) + tile("Most podiums", top("podiums")) + tile("Most drivers' titles", top("titles")) : "";

    var COLS = [["nseasons", "Seasons"], ["ndrivers", "Drivers"], ["starts", "Starts"], ["wins", "Wins"], ["podiums", "Podiums"], ["pct", "Win %"], ["titles", "Drivers' Titles"]];
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
          '<td><div class="driver nowrap"><span class="bar" style="background:' + o.colour + ';margin-right:8px"></span>' + esc(o.name) + "</div>" +
          (formerly[o.name] ? '<div class="sub nowrap">Previously ' + joinNames(formerly[o.name].list, false) + "</div>" : "") + "</td>" +
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

  /* ---------------- Team championships ---------------- */
  // Published team championship figures live in data/team-champs.js (TEAM_CHAMPS, keyed by season data id).
  var TC = window.TEAM_CHAMPS || {};
  var CTC = window.CLUB_TEAMS || {};
  var teamColour = function (n) { return CTC[n] || "#8C939D"; };
  var tbar = function (n) { return '<span class="bar" style="background:' + teamColour(n) + ';margin-right:8px"></span>'; };
  // Final order of a team championship: points, then most round wins, then name.
  function tcTable(x, key) {
    var c = TC[key], names = Object.keys(c.teams);
    var tot = function (n) { return c.teams[n].reduce(function (a, b) { return a + b; }, 0); };
    var n = c.teams[names[0]].length, best = [];
    for (var r = 0; r < n; r++) best.push(Math.max.apply(null, names.map(function (t) { return c.teams[t][r]; })));
    var wins = function (t) { return c.teams[t].filter(function (v, r) { return v > 0 && v === best[r]; }).length; };
    return names.map(function (t) { return { name: t, pts: c.teams[t], total: tot(t), wins: wins(t) }; })
      .sort(function (a, b) { return b.total - a.total || b.wins - a.wins || a.name.localeCompare(b.name); });
  }
  // Rounds in which at least one of a team's drivers started (Team Records rule; Team RSR / RNR = MC Motorsport).
  function tcStarts(x) {
    var archive = x.standingsFormat === "archive", ci = archive ? 3 : 4, season = x.season || 18, out = {};
    var n = archive ? x.roundCount : (x.standingsAfter || 0);
    var started = function (v) { v = String(v || ""); return /^\d/.test(v) || v === "RGQ" || v === "DNF" || v === "CC" || v === "DQ"; };
    for (var r = 0; r < n; r++) {
      var seen = {};
      x.standings.forEach(function (row) {
        if (!started(row[ci][r])) return;
        var t = archive ? clubTeam(row[1], season) : (x.teams && x.teams[row[2]]);
        var nm = t && t.name; nm = (window.TEAM_ALIASES || {})[nm] || nm;
        if (nm && nm !== "Privateer") seen[nm] = true;
      });
      Object.keys(seen).forEach(function (k) { out[k] = (out[k] || 0) + 1; });
    }
    return out;
  }

  function teamTitlesPage() {
    var keys = Object.keys(TC).filter(function (k) { return ALL[k] && (SCOPE_ALL || groupOf(ALL[k]) === BASE.id); })
      .sort(function (a, b) { return (ALL[b].season || 18) - (ALL[a].season || 18) || (baseOf(ALL[b]).navOrder || 0) - (baseOf(ALL[a]).navOrder || 0); });
    var map = {}, champs = [];
    var get = function (n) { return map[n] || (map[n] = { name: n, entered: 0, list: [], starts: 0, titles: 0, points: 0, won: [] }); };
    keys.forEach(function (k) {
      var x = ALL[k], tab = tcTable(x, k), st = tcStarts(x);
      champs.push({ key: k, x: x, tab: tab });
      tab[0] && get(tab[0].name).won.push(x);
      if (tab[0]) get(tab[0].name).titles++;
      tab.forEach(function (t) { get(t.name).points += t.total; });
      Object.keys(st).forEach(function (t) {
        if (!st[t]) return;
        var o = get(t); o.entered++; o.starts += st[t]; o.list.push(x);
      });
    });
    var all = Object.keys(map).map(function (k) { return map[k]; }).filter(function (o) { return o.entered || o.points; });
    var nums = keys.map(function (k) { return ALL[k].season || 18; }).filter(function (v, i, l) { return l.indexOf(v) === i; }).sort(function (a, b) { return a - b; });
    var span = nums.length ? (nums.length > 1 ? "Seasons " + nums[0] + "–" + nums[nums.length - 1] : "Season " + nums[0]) : "";
    $("eyebrow").textContent = LABEL + " · Team championship records";
    $("meta").textContent = keys.length ? span + " · " + keys.length + (keys.length === 1 ? " team championship" : " team championships") + " · " + all.length + " teams · more seasons to be added" : "No team championships on the site yet";
    document.title = "Teams' Titles · " + LABEL + " · TB Race Results";
    var enteredLabel = SCOPE_ALL ? "Series entered" : "Seasons entered";
    $("rules").textContent = (SCOPE_ALL ? "Series entered = team championships (one series in one season) in which at least one of the team's drivers started a race. " : "Seasons entered = seasons of the " + BASE.navLabel + " in which at least one of the team's drivers started a race. ") +
      "Starts = rounds in which at least one of the team's drivers started. Titles = team championships won. Points = team championship points: each round a team's best three drivers score (points for the highest-placed scoring driver set for each series and season – e.g. GT7 Season 17: Tuesday Series 9, Narly Cup 12, WJF Trophy 15, each down to 0; see each season\u2019s team standings). Privateers don't score. Team RSR and Team RNR count as MC Motorsport. Teams are ranked by titles, then points. Figures as published by the club.";
    if (!all.length) { $("tiles").innerHTML = ""; $("head").innerHTML = ""; $("rows").innerHTML = '<tr><td class="empty">No team championships on the site yet.</td></tr>'; $("head2").innerHTML = ""; $("rows2").innerHTML = ""; return; }
    var top = function (k) { var v = Math.max.apply(null, all.map(function (o) { return o[k]; })); return { v: v, who: all.filter(function (o) { return o[k] === v; }).map(function (o) { return o.name; }) }; };
    var tile = function (label, t) { return '<div class="tile"><div class="label">' + label + '</div><div class="tile-big">' + t.v + '</div><div class="sub" style="white-space:normal">' + esc(t.who.join(", ")) + "</div></div>"; };
    $("tiles").innerHTML = tile("Most team titles", top("titles")) + tile("Most team points", top("points")) + tile("Most starts", top("starts"));
    var tag = function (x) { return '<a class="seasontag gold" href="' + baseOf(x).pages.championship + (x === baseOf(x) ? "" : "?season=" + x.season) + '#view=teams">S' + x.season + (SCOPE_ALL ? " " + esc(SHORT(baseOf(x))) : "") + "</a>"; };
    var subList = function (o) {
      if (!SCOPE_ALL) return o.list.map(function (x) { return "S" + x.season; }).sort(function (a, b) { return parseInt(a.slice(1)) - parseInt(b.slice(1)); }).join(" · ");
      var c = {}; o.list.forEach(function (x) { var s2 = SHORT(baseOf(x)); c[s2] = (c[s2] || 0) + 1; });
      var multi = o.list.length > Object.keys(c).length;
      return ORDER.map(function (id) { return SHORT(ALL[id]); }).filter(function (s2) { return c[s2]; }).map(function (s2) { return multi ? s2 + " " + c[s2] : s2; }).join(" · ");
    };
    var COLS = [["entered", enteredLabel], ["starts", "Starts"], ["titles", "Titles"], ["points", "Points"]];
    var h = readHash();
    var state = { sort: COLS.some(function (c) { return c[0] === h.sort; }) ? h.sort : "titles" };
    function render() {
      writeHash(state.sort === "titles" ? {} : state);
      var k = state.sort;
      var rows = all.slice().sort(function (a, b) { return b[k] - a[k] || b.titles - a.titles || b.points - a.points || b.starts - a.starts || a.name.localeCompare(b.name); });
      $("head").innerHTML = '<tr><th scope="col">#</th><th scope="col">Team</th>' + COLS.map(function (c) {
        var on = c[0] === k;
        return '<th scope="col" class="r" aria-sort="' + (on ? "descending" : "none") + '"><button type="button" class="sortbtn' + (on ? " on" : "") + '" data-sort="' + c[0] + '">' + c[1] + (on ? " ▾" : "") + "</button></th>";
      }).join("") + "</tr>";
      var prev = null, pos = 0;
      $("rows").innerHTML = rows.map(function (o, i) {
        var key = [o[k], o.titles, o.points, o.starts].join("|");
        if (key !== prev) pos = i + 1; prev = key;
        var td = function (c, html) { return '<td class="t r' + (k === c ? " hot" : "") + '">' + html + "</td>"; };
        return '<tr class="' + (pos <= 3 ? "podium" : "") + '"><td><span class="chip' + (pos <= 3 ? " p" + pos : "") + '">' + pos + "</span></td>" +
          '<td><div class="driver nowrap">' + tbar(o.name) + esc(o.name) + '</div><div class="sub nowrap" style="color:var(--dim)">' + esc(subList(o)) + "</div></td>" +
          td("entered", o.entered) + td("starts", o.starts) + td("titles", o.titles || '<span class="none">0</span>') +
          '<td class="r"><span class="points">' + o.points + "</span></td></tr>";
      }).join("");
    }
    document.addEventListener("click", function (e) { var b = e.target.closest("button.sortbtn"); if (!b) return; state.sort = b.dataset.sort; render(); });
    render();
    $("head2").innerHTML = '<tr><th scope="col">Season</th><th scope="col">Championship</th><th scope="col">Team champions</th><th scope="col" class="r">Points</th><th scope="col">Runner-up</th></tr>';
    $("rows2").innerHTML = champs.map(function (c) {
      var w = c.tab[0], r2 = c.tab[1];
      return "<tr><td>" + tag(c.x) + '</td><td class="car">' + esc(c.x.title.replace(/\s*Season \d+$/, "")) + '</td><td><div class="driver nowrap">' + tbar(w.name) + esc(w.name) + '</div></td><td class="t r">' + w.total + '</td><td class="nowrap" style="font-size:14px;color:var(--muted)">' + (r2 ? esc(r2.name) + " · " + r2.total : "—") + "</td></tr>";
    }).join("");
  }

  // Drivers / Teams switch on a championship page (only for seasons with a team championship).
  function viewSwitch() {
    var box = $("viewSwitch");
    if (!box) { box = document.createElement("div"); box.id = "viewSwitch"; box.className = "pills"; box.setAttribute("role", "group"); box.setAttribute("aria-label", "Standings"); $("seasons").parentNode.insertBefore(box, $("seasons").nextSibling); }
    var has = !!TC[S.id], view = has && readHash().view === "teams" ? "teams" : "drivers";
    box.hidden = !has;
    box.innerHTML = has ? ['drivers', 'teams'].map(function (v) { return '<button type="button" class="pill" data-view="' + v + '" aria-pressed="' + (v === view) + '">' + (v === "drivers" ? "Drivers" : "Teams") + "</button>"; }).join("") : "";
    return view;
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-view]"); if (!b || page !== "championship") return;
    try { history.replaceState(null, "", location.pathname + location.search + (b.dataset.view === "teams" ? "#view=teams" : "")); } catch (err) {}
    championshipPage();
  });

  function teamStandingsPage() {
    var c = TC[S.id], tab = tcTable(S, S.id), n = tab[0].pts.length, rounds = []; for (var i = 1; i <= n; i++) rounds.push(i);
    var notRun = c.notRun || [];
    if ($("h1title")) $("h1title").textContent = "Team Standings";
    $("eyebrow").textContent = S.eyebrow + " · Final standings";
    $("meta").textContent = tab.length + " teams · best three drivers score each round · " + c.scale + "-" + (c.scale - 1) + "-" + (c.scale - 2) + "…0";
    document.title = "Team Standings · " + S.navLabel + " Season " + S.season + " · TB Race Results";
    $("teamFilter").parentNode.hidden = true;
    $("key").innerHTML = '<span><span class="rp p1" style="min-width:20px">&nbsp;</span> <span class="rp p2" style="min-width:20px">&nbsp;</span> <span class="rp p3" style="min-width:20px">&nbsp;</span> = top three teams in the round</span>';
    $("rules").textContent = "Each round a team's best three drivers score: " + c.scale + " points for the highest-placed scoring driver, then " + (c.scale - 1) + ", " + (c.scale - 2) + " … down to 0. Privateers don't score and don't take a points place. Gold, silver and bronze = the top three teams in each round." + (c.note ? " " + c.note : "");
    $("source").textContent = "Team standings as published by the club.";
    var rank = rounds.map(function (r) {
      var vals = tab.map(function (t) { return t.pts[r - 1]; });
      return tab.map(function (t) { var v = t.pts[r - 1]; return v > 0 ? 1 + vals.filter(function (w) { return w > v; }).length : 0; });
    });
    var champ = tab[0];
    var winners = rounds.map(function (r) {
      if (notRun.indexOf(r) >= 0) return '<div class="tile-row"><span>Round ' + r + '</span><span style="color:var(--dim);font-weight:400">Not run</span></div>';
      var best = Math.max.apply(null, tab.map(function (t) { return t.pts[r - 1]; }));
      return '<div class="tile-row"><span>Round ' + r + "</span><span>" + esc(tab.filter(function (t) { return t.pts[r - 1] === best; }).map(function (t) { return t.name; }).join(" / ")) + "</span></div>";
    }).join("");
    $("tiles").innerHTML = '<div class="tile"><div class="label">Team champions</div><div class="tile-row" style="align-items:baseline"><span class="tile-big champion">' + esc(champ.name) + '</span><span class="tile-big">' + champ.total + ' <span style="font-size:15px;color:var(--muted)">pts</span></span></div>' +
      tab.slice(1, 3).map(function (t, i) { return '<div class="tile-row"><span>' + (i ? "3rd" : "2nd") + "</span><span>" + esc(t.name) + " · " + t.total + "</span></div>"; }).join("") + "</div>" +
      '<div class="tile"><div class="label">Round winners (team)</div>' + winners + "</div>";
    $("head").parentNode.classList.add("compact");
    $("head").innerHTML = '<tr><th scope="col">Pos</th><th scope="col">Team</th>' + rounds.map(function (r) { return '<th class="c" scope="col">R' + r + "</th>"; }).join("") + '<th scope="col" class="r">Gap</th><th scope="col" class="r">Points</th></tr>';
    $("rows").innerHTML = tab.map(function (t, i) {
      var p = i + 1;
      return '<tr class="' + (p <= 3 ? "podium" : "") + '"><td><span class="chip' + (p <= 3 ? " p" + p : "") + '">' + p + "</span></td>" +
        '<td><div class="driver nowrap' + (p === 1 ? " champion" : "") + '">' + tbar(t.name) + esc(t.name) + (p === 1 ? ' <span class="crown">Champions</span>' : "") + "</div></td>" +
        t.pts.map(function (v, r) { var k = rank[r][i]; return '<td class="c">' + (notRun.indexOf(r + 1) >= 0 ? '<span class="np" title="Round not run">NP</span>' : k && k <= 3 ? '<span class="rp p' + k + '">' + v + "</span>" : '<span class="t">' + v + "</span>") + "</td>"; }).join("") +
        '<td class="t r" style="color:var(--muted)">' + (p === 1 ? "–" : "−" + (champ.total - t.total)) + '</td><td class="r"><span class="points">' + t.total + "</span></td></tr>";
    }).join("");
  }

  function championshipPage() {
    teamClick = null;
    if ($("h1title")) $("h1title").textContent = "Driver Standings";
    if (viewSwitch() === "teams") return teamStandingsPage();
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

  /* ---------------- Home (club landing page) ---------------- */
  function homePage() {
    // Old WJF Trophy links (index.html#round=…) open the WJF results page.
    if (/(^|[#&])(round|lobby|team)=/.test(location.hash)) { location.replace(ALL["gt3-endurance"].pages.results + location.hash); return; }
    var cur = ORDER.map(function (id) { return ALL[id]; });
    var after = Math.min.apply(null, cur.map(function (x) { return x.standingsAfter || 0; }));
    var season = cur[0].season;
    $("eyebrow").textContent = "Season " + season + (after ? " · after Round " + after : "");
    var CAL = window.CALENDAR, nr = CAL && CAL.season === season ? CAL.rounds.filter(function (r) { return r.no === after + 1; })[0] : null;
    if (nr) {
      $("next").innerHTML = '<div><div class="k">Next up · Round ' + nr.no + '</div><div class="t">' + esc(nr.track) + '</div></div><div class="d">' + nr.dates.map(function (d, i) { var x = cur[i]; return '<a class="nd" href="' + (x ? x.pages.results : "#") + '"><small>' + esc(x ? x.navLabel : "") + "</small>" + esc(d) + "</a>"; }).join("") + "</div>";
    } else $("next").hidden = true;
    var DAY = { "wrx-evo-gr4": "Tuesday", "narly-cup": "Thursday", "gt3-endurance": "Friday" };
    var MEM = { "narly-cup": "In memory of Cav Bennett (NarlyDude71)", "gt3-endurance": "In memory of Wayne Fraser (WJF73)" };
    var SUB = { "wrx-evo-gr4": "WRX V Evo GR4 Trailblazers", "narly-cup": "Trailblazers Narly Cup GT500", "gt3-endurance": "GT3 Endurance Championship" };
    $("cards").innerHTML = cur.map(function (x) {
      var tm = function (k) { return (x.teams && x.teams[k]) || { name: k, colour: "#8C939D" }; };
      var top = (x.standings || []).slice(0, 3);
      var lr = x.rounds && x.rounds.length ? x.rounds[x.rounds.length - 1] : null;
      var past = Object.keys(ALL).map(function (k) { return ALL[k]; }).filter(function (y) { return groupOf(y) === x.id && y.final && !y.noChampion && y.standings && y.standings.length; })
        .sort(function (a, b) { return b.season - a.season; })[0];
      return '<article class="card"><div class="day">' + (DAY[x.id] || "") + "</div><h3>" + esc(x.navLabel) + '</h3><div class="sub2">' + esc(SUB[x.id] || x.title) + "</div>" +
        (MEM[x.id] ? '<div class="mem">' + MEM[x.id] + "</div>" : "") +
        '<div class="lb">' + top.map(function (r, i) {
          return '<div><span class="p p' + (i + 1) + '">' + esc(r[0]) + '</span><span class="nm"><i style="background:' + tm(r[2]).colour + '"></i>' + esc(r[1]) + '</span><span class="pts">' + r[8] + "</span></div>";
        }).join("") + "</div>" +
        '<div class="facts">' + (lr ? "Last winner: <b>" + esc(lr.rows[0][0]) + "</b> · " + esc(lr.short) + "<br>" : "") +
        (past ? "Season " + past.season + " champion: <b>" + esc(past.standings[0][1]) + "</b>" : "") + "</div>" +
        '<div class="btns"><a class="pri" href="' + x.pages.results + '">Results</a><a href="' + x.pages.championship + '">Standings</a></div></article>';
    }).join("");
  }

  /* ---------------- Calendar page (one series) ---------------- */
  // Season calendar from data/calendar.js; finished rounds show the winner and link to the results.
  function calendarPage() {
    var CAL = window.CALENDAR, DI = { "wrx-evo-gr4": 0, "narly-cup": 1, "gt3-endurance": 2 }, di = DI[BASE.id] || 0;
    var DAYS = ["Tuesdays", "Thursdays", "Fridays"];
    $("eyebrow").textContent = BASE.eyebrow || BASE.title;
    document.title = "Calendar · " + BASE.navLabel + " · TB Race Results";
    if (!CAL || CAL.season !== BASE.season) { $("rows").innerHTML = '<tr><td class="empty">The calendar for this season isn\u2019t on the site yet.</td></tr>'; return; }
    var done = BASE.rounds || [];
    var byNo = {}; done.forEach(function (r) { byNo[r.no] = r; });
    var next = CAL.rounds.filter(function (r) { return !byNo[r.no]; })[0];
    $("title").textContent = "Season " + CAL.season + " Calendar";
    $("meta").textContent = CAL.rounds.length + " rounds · " + DAYS[di] + " · " + done.length + " of " + CAL.rounds.length + " completed";
    var winners = function (r) {
      var w = r.rows.filter(function (x) { return x[5] === "Winner"; });
      return (w.length ? w : [r.rows[0]]).map(function (x) {
        var t = BASE.teams[x[1]] || { colour: "#8C939D" };
        return '<div class="driver nowrap"><span class="bar" style="background:' + t.colour + ';margin-right:8px"></span>' + esc(x[0]) + (w.length > 1 && x[2] ? ' <span style="color:var(--dim);font-size:13px">(' + esc(x[2]) + ")</span>" : "") + "</div>";
      }).join("");
    };
    $("tiles").innerHTML =
      (next ? '<div class="tile calnexttile"><div class="label">Next up · Round ' + next.no + '</div><div class="tile-big">' + esc(next.track) + '</div><div class="sub">' + esc(next.dates[di]) + "</div></div>" :
        '<div class="tile"><div class="label">Season</div><div class="tile-big">Complete</div></div>') +
      '<div class="tile"><div class="label">Rounds completed</div><div class="tile-big">' + done.length + " / " + CAL.rounds.length + '</div><div class="sub">' + (CAL.rounds.length - done.length) + " to go</div></div>" +
      '<div class="tile"><div class="label">Final round</div><div class="tile-big">' + esc(CAL.rounds[CAL.rounds.length - 1].track) + (CAL.rounds[CAL.rounds.length - 1].tbc ? ' <span class="tbc">TBC</span>' : "") + '</div><div class="sub">' + esc(CAL.rounds[CAL.rounds.length - 1].dates[di]) + "</div></div>";
    $("head").innerHTML = '<tr><th scope="col">Rd</th><th scope="col">Date</th><th scope="col">Track</th><th scope="col" class="calc">Winner</th><th scope="col" class="r calc"></th></tr>';
    $("rows").innerHTML = CAL.rounds.map(function (r) {
      var res = byNo[r.no], isNext = next && r.no === next.no;
      return '<tr class="' + (isNext ? "calnext" : res ? "" : "calfuture") + '">' +
        '<td><span class="chip' + (isNext ? " calchip" : "") + '">' + r.no + "</span></td>" +
        '<td class="nowrap">' + esc(r.dates[di]) + "</td>" +
        '<td><div class="driver">' + esc(r.track) + (r.tbc ? ' <span class="tbc" title="Track still to be decided by the club">TBC</span>' : "") + "</div>" +
          (res ? '<div class="calm"><a href="' + BASE.pages.results + "#round=" + r.no + '">' + res.rows.filter(function (x) { return x[5] === "Winner"; }).concat(res.rows.slice(0, 1)).filter(function (x, i, l) { return l.indexOf(x) === i; }).slice(0, 2).map(function (x) { return esc(x[0]); }).join(" · ") + " \u2192</a></div>" : isNext ? '<div class="calm nx">Next up</div>' : "") + "</td>" +
        '<td class="calc">' + (res ? winners(res) : isNext ? '<span class="winner" style="color:var(--red-text)">Next up</span>' : '<span class="none">—</span>') + "</td>" +
        '<td class="r calc">' + (res ? '<a class="seasontag" href="' + BASE.pages.results + "#round=" + r.no + '">Results</a>' : "") + "</td></tr>";
    }).join("");
    $("rules").textContent = "Same track for all three series each round. TBC = the club is still choosing the track. Tuesday Series races on Tuesdays, the Narly Cup on Thursdays and the WJF Trophy on Fridays. Winners and results appear once each round is added to the site.";
  }

  /* ---------------- Game label (GT7) ---------------- */
  // Every season on the site so far is a Gran Turismo 7 season: show "GT7 Season N" / "GT7 S17" everywhere.
  // When seasons from another game are added, give those seasons their own label here.
  var GAME = "GT7";
  function gameLabels(root) {
    var walk = function (n) {
      if (n.nodeType === 3) {
        var t = n.nodeValue, out = t.replace(/\b(Seasons?) (?=\d)/g, function (m, w, off, str) { return str.slice(Math.max(0, off - GAME.length - 1), off) === GAME + " " ? m : GAME + " " + m; });
        if (out !== t) n.nodeValue = out;
      } else if (n.nodeType === 1 && !/^(SCRIPT|STYLE)$/.test(n.nodeName)) {
        if (n.classList && n.classList.contains("seasontag") && !n.querySelector(".gamelbl") && /^S\d/.test(n.textContent)) n.insertAdjacentHTML("afterbegin", '<span class="gamelbl">' + GAME + "</span>");
        n.childNodes.forEach(walk);
      }
    };
    walk(root);
  }
  var mainEl = document.querySelector("main");
  if (mainEl && window.MutationObserver) {
    var mo = new MutationObserver(function () { mo.disconnect(); gameLabels(mainEl); mo.observe(mainEl, { childList: true, subtree: true, characterData: true }); });
    mo.observe(mainEl, { childList: true, subtree: true, characterData: true });
  }

  renderNav();
  if (page === "calendar") calendarPage();
  if (page === "home") homePage();
  if (page === "results") resultsPage();
  if (page === "championship") championshipPage();
  if (page === "records") recordsPage();
  if (page === "teamrecords") teamRecordsPage();
  if (page === "champions") championsPage();
  if (page === "teamtitles") teamTitlesPage();
  if (mainEl) gameLabels(mainEl);
})();
