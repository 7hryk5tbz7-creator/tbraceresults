(function () {
  "use strict";

  var ALL = window.SERIES || {};
  var ORDER = window.SERIES_ORDER || Object.keys(ALL);
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
    var tabs = [["results", "Race Results"], ["championship", "Championship"]].filter(function (t) { return S.pages[t[0]] || BASE.pages[t[0]]; });
    $("pageNav").innerHTML = tabs.length > 1 ? tabs.map(function (t) {
      var href = S.pages[t[0]] ? S.pages[t[0]] + seasonQuery(S) : BASE.pages[t[0]];
      return '<a href="' + href + '"' + (t[0] === page ? ' aria-current="page"' : "") + ">" + t[1] + "</a>";
    }).join("") : "";
    if (tabs.length < 2) $("pageNav").hidden = true;

    // Season picker: only when this series has more than one season on this page type.
    var box = $("seasons");
    if (box) {
      var list = SEASONS.filter(function (x) { return x.pages[page]; });
      box.innerHTML = list.length > 1 ? '<span class="label">Season</span>' + list.map(function (x) {
        return '<a class="pill" href="' + x.pages[page] + seasonQuery(x) + '"' + (x === S ? ' aria-current="page"' : "") + ">Season " + x.season + "</a>";
      }).join("") : "";
      box.hidden = list.length < 2;
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
    if (/^\d+d$/.test(v)) return '<span class="dropped" title="Dropped round">' + v.slice(0, -1) + "</span>";
    if (v === "DNS" || v === "RGQ" || v === "DNF") return '<span class="status">' + v + "</span>";
    if (v === "NP") return '<span class="np" title="Round not run">NP</span>';
    if (v === "–" || v === "") return '<span class="none" title="Did not enter">–</span>';
    return '<span class="t">' + esc(v) + "</span>";
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
      var w = S.standings.filter(function (x) { return x[3][r - 1] === "45p1"; })[0];
      var np = S.standings.every(function (x) { return x[3][r - 1] === "NP"; });
      return '<div class="tile-row"><span>Round ' + r + "</span><span" + (np ? ' style="color:var(--dim);font-weight:400"' : "") + ">" + (np ? "Not run" : w ? esc(w[1]) : "—") + "</span></div>";
    }).join("");
    $("tiles").innerHTML =
      '<div class="tile"><div class="label">Champion</div>' +
      '<div class="tile-row" style="align-items:baseline"><span class="tile-big champion">' + esc(champ[1]) + '</span><span class="tile-big">' + champ[6] + ' <span style="font-size:15px;color:var(--muted)">pts</span></span></div>' +
      '<div class="tile-row"><span>2nd</span><span>' + esc(second[1]) + " · " + second[6] + "</span></div>" +
      '<div class="tile-row"><span>3rd</span><span>' + esc(third[1]) + " · " + third[6] + "</span></div></div>" +
      '<div class="tile"><div class="label">Round winners</div>' + winners + "</div>";

    $("head").innerHTML = "<tr>" +
      '<th scope="col">Pos</th><th scope="col">Driver</th><th scope="col" class="r">#</th>' +
      rounds.map(function (r) { return '<th class="c" scope="col">R' + r + "</th>"; }).join("") +
      '<th scope="col" class="r">Subtotal</th><th scope="col" class="r">Drop</th><th scope="col" class="r">Points</th></tr>';
    $("rows").innerHTML = S.standings.map(function (x) {
      var p = Number(x[0]);
      return '<tr class="' + (p <= 3 ? "podium" : "") + '">' +
        '<td><span class="chip' + (p <= 3 ? " p" + p : "") + '">' + esc(x[0]) + "</span></td>" +
        '<td><div class="driver' + (p === 1 ? " champion" : "") + '">' + esc(x[1]) + (p === 1 ? ' <span class="crown">Champion</span>' : "") + "</div></td>" +
        '<td class="t r" style="color:var(--dim)">' + esc(x[2]) + "</td>" +
        x[3].map(function (v) { return '<td class="c">' + roundCell(v) + "</td>"; }).join("") +
        '<td class="t r" style="color:var(--muted)">' + x[4] + "</td>" +
        '<td class="t r" style="color:' + (x[5] ? "var(--red-text)" : "var(--dim)") + '">' + (x[5] ? "−" + Math.abs(x[5]) : "–") + "</td>" +
        '<td class="r"><span class="points">' + x[6] + "</span></td></tr>";
    }).join("");
  }

  function championshipPage() {
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
      '<div class="tile-row" style="align-items:baseline"><span class="tile-big" style="color:var(--text);font-weight:700">' + esc(leader[1]) + '</span><span class="tile-big">' + leader[8] + ' <span style="font-size:15px;color:var(--muted)">pts</span></span></div>' +
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
          '<td><div class="driver">' + esc(x[1]) + '</div><div class="sub nowrap">' + bar(t.colour) + esc(t.name) + "</div></td>" +
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

    document.addEventListener("click", function (e) {
      var b = e.target.closest("button.pill");
      if (!b || !b.dataset.team) return;
      state.team = b.dataset.team;
      render();
    });
    render();
  }

  renderNav();
  if (page === "results") resultsPage();
  if (page === "championship") championshipPage();
})();
