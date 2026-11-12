(function () {
  "use strict";

  var ALL = window.SERIES || {};
  var ORDER = (window.SERIES_ORDER || Object.keys(ALL)).slice().sort(function (a, b) {
    return (ALL[a].navOrder || 99) - (ALL[b].navOrder || 99);
  });
  var page = document.body.getAttribute("data-page");
  // Records pages are club-wide (records-*.html): ?series=<id> shows one series, otherwise All Time.
  var RECORD_PAGES = /^(records|teamrecords|champions|teamtitles|milestones|seasoncal|driver|compare)$/;
  var REC = { records: "records-drivers.html", teamrecords: "records-teams.html", champions: "records-titles.html", teamtitles: "records-teamtitles.html", milestones: "records-milestones.html", seasoncal: "season-calendar.html" };
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
  // Driver name linking to their profile page.
  var plink = function (n) { return '<a class="plink" href="driver.html?name=' + encodeURIComponent(n) + '">' + esc(n) + "</a>"; };

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
      $("pageNav").innerHTML = [["records", "Driver Records"], ["teamrecords", "Team Records"], ["champions", "Drivers' Titles"], ["teamtitles", "Teams' Titles"], ["milestones", "Milestones"], ["seasoncal", "Calendar"]].map(function (t) {
        return '<a href="' + REC[t[0]] + (t[0] === "seasoncal" ? "" : recQuery) + '"' + (t[0] === page ? ' aria-current="page"' : "") + ">" + t[1] + "</a>";
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
    if (RECORD_PAGES.test(page) && page !== "seasoncal" && page !== "driver" && page !== "compare") {
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
  // Provisional note (pending stewards' reviews): series data `provisional: { rounds: [5], text }` – shown on those rounds' results and on the current standings.
  function provNote(show) {
    var box = $("provNote"), eb = $("eyebrow");
    if (!show) { if (box) box.hidden = true; return; }
    if (!box && eb) { box = document.createElement("div"); box.id = "provNote"; box.className = "provnote"; eb.parentNode.insertBefore(box, eb); }
    if (!box) return;
    box.hidden = false;
    box.innerHTML = "<b>Provisional</b><span>" + esc(S.provisional.text || "All results are pending any stewards\u2019 reviews") + "</span>";
  }
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
      provNote(!!(S.provisional && (S.provisional.rounds || []).indexOf(R.no) >= 0));
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
          '<td><div class="driver">' + plink(r.driver) + '</div><div class="sub nowrap">' + bar(t.colour) + esc(t.name) + "</div></td>" +
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
    $("eyebrow").textContent = S.eyebrow + " · Final results"; provNote(false);
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
        '<td><div class="driver">' + plink(x[1]) + "</div>" +
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
    $("eyebrow").textContent = S.eyebrow + " · Final standings"; provNote(false);
    $("meta").textContent = S.standingsMeta || "";
    document.title = "Championship · " + S.navLabel + " Season " + S.season + " · TB Race Results";
    $("key").innerHTML = keyHtml(S.standingsKey);
    $("rules").textContent = S.standingsRules || "";
    $("source").textContent = S.standingsSource || "";
    $("teamFilter").parentNode.hidden = true;

    // Podium boxes (same style as team standings): champion, 2nd, 3rd – team, points and round wins.
    var showTeamsT = (S.season || 99) >= (window.TEAMS_FROM_SEASON || 0) || !!(window.SEASON_TEAMS || {})[S.season];
    var MEDAL = ["var(--gold)", "var(--silver)", "var(--bronze)"], LBL = ["Champion", "2nd", "3rd"];
    $("tiles").innerHTML = [champ, second, third].filter(Boolean).map(function (x, i) {
      var t = showTeamsT ? clubTeam(x[1], S.season) : null;
      var w = x[3].filter(function (v) { return /^\d+p1d?$/.test(v); }).length;
      return '<div class="tile" style="border-top:3px solid ' + MEDAL[i] + '"><div class="label">' + LBL[i] + '</div><div class="tile-big' + (i ? "" : " champion") + '" style="display:flex;align-items:center;gap:8px">' + (t ? '<span class="bar" style="background:' + t.colour + ';height:22px"></span>' : "") + esc(x[1]) + '</div><div class="sub">' + (t ? esc(t.name) + " · " : "") + x[6] + " pts · " + w + (w === 1 ? " win" : " wins") + "</div></div>";
    }).join("");
    $("tiles").classList.add("tiles3");

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
        '<td><div class="driver' + (p === 1 ? " champion" : "") + '">' + plink(x[1]) + (p === 1 ? ' <span class="crown">Champion</span>' : "") + "</div>" +
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
        '<td><div class="driver' + (pos === 1 ? " champion" : "") + '">' + plink(o.name) + "</div>" + (o.team ? '<div class="sub nowrap">' + bar(o.team.colour) + esc(o.team.name) + "</div>" : "") + "</td>" +
        '<td class="r"><span class="points">' + o.titles + "</span></td>" +
        '<td class="' + (SCOPE_ALL ? "tagwrap" : "nowrap") + '">' + o.won.slice().sort(function (a, b) { return b.season - a.season || (baseOf(a).navOrder || 99) - (baseOf(b).navOrder || 99); }).map(tag).join("") + "</td></tr>";
    }).join("");

    $("head2").innerHTML = '<tr><th scope="col">Season</th><th scope="col">Championship</th><th scope="col">Champion</th><th scope="col" class="r">Points</th><th scope="col">Runner-up</th></tr>';
    $("rows2").innerHTML = done.map(function (x) {
      var c = x.standings[0], r2 = x.standings[1];
      return "<tr>" +
        "<td>" + tag(x) + "</td>" +
        '<td class="car">' + (SCOPE_ALL ? esc(baseOf(x).navLabel) + " · " : "") + esc(x.title.replace(/\s*Season \d+$/, "")) + "</td>" +
        '<td><div class="driver champion">' + plink(c[1]) + "</div></td>" +
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

  // Career totals per driver (starts, wins, podiums, championship points, team) for the seasons in scope – used by Driver Records and Milestones.
  // allSeasons: every season of all three series, whatever series is picked (driver search and profiles).
  function driverRecordsData(allSeasons) {
    var src = allSeasons ? Object.keys(ALL).map(function (k) { return ALL[k]; }).sort(function (a, b) {
      return (b.season || 0) - (a.season || 0) || (baseOf(a).navOrder || 99) - (baseOf(b).navOrder || 99);
    }) : RSEASONS;
    var seasons = src.filter(function (x) { return x.standings; });
    var map = {};
    seasons.slice().reverse().forEach(function (x) { // oldest first, so the newest team wins
      x.standings.forEach(function (r) {
        var name = r[1];
        var o = map[name] || (map[name] = { name: name, starts: 0, wins: 0, podiums: 0, points: 0, seasons: [], team: null });
        var starts, wins, podiums, pts;
        if (x.standingsFormat === "archive") {
          starts = archiveStarts(r[3]);
          wins = r[3].filter(function (v) { return /p1$/.test(v); }).length;
          podiums = r[3].filter(function (v) { return /p[123]$/.test(v); }).length;
          pts = x.noPoints ? 0 : (+r[6] || 0);
        } else {
          starts = r[9]; wins = r[10]; podiums = r[11]; pts = +r[8] || 0;
          var t = x.teams && x.teams[r[2]];
          if (t) o.team = t;
        }
        o.starts += starts; o.wins += wins; o.podiums += podiums; o.points += pts;
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
    // Drivers no longer racing (no Season 18 start): show the team they raced the most races for, across every season and series.
    // Team RSR / Team RNR count with MC Motorsport (shown under the name they last raced under). Privateer only if they never raced for a team.
    (function () {
      var active = {};
      ORDER.forEach(function (id) { (ALL[id].standings || []).forEach(function (r) { if (r[9] > 0) active[r[1]] = true; }); });
      var started = function (v) { v = String(v || ""); return /^\d/.test(v) || v === "RGQ" || v === "DNF" || v === "CC" || v === "DQ"; };
      var ALI2 = window.TEAM_ALIASES || {}, cnt = {}, lastName = {};
      Object.keys(ALL).forEach(function (k) {
        var x = ALL[k]; if (x.standingsFormat !== "archive" || !x.standings) return;
        x.standings.forEach(function (r) {
          if (active[r[1]]) return;
          var n = r[3].filter(started).length; if (!n) return;
          var t = clubTeam(r[1], x.season); if (!t) return;
          var fam = ALI2[t.name] || t.name, c = cnt[r[1]] || (cnt[r[1]] = {}), L = lastName[r[1]] || (lastName[r[1]] = {});
          c[fam] = (c[fam] || 0) + n;
          if (!L[fam] || L[fam].s <= x.season) L[fam] = { s: x.season, name: t.name };
        });
      });
      all.forEach(function (o) {
        var c = cnt[o.name]; if (!c) return;
        var teams = Object.keys(c).filter(function (t) { return t !== "Privateer"; });
        if (!teams.length) { o.team = { name: "Privateer", colour: CT.Privateer || "#8C939D" }; return; }
        teams.sort(function (a, b) { return c[b] - c[a] || lastName[o.name][b].s - lastName[o.name][a].s; });
        var nm = lastName[o.name][teams[0]].name;
        o.team = { name: nm, colour: CT[nm] || CT[ALI2[nm]] || "#8C939D" };
      });
    })();
    all.forEach(function (o) { o.nseasons = o.seasons.length; o.pct = o.starts ? o.wins / o.starts : 0; o.ppct = o.starts ? o.podiums / o.starts : 0; o.seasons.sort(function (a, b) { return b - a; }); });
    return { all: all, seasons: seasons };
  }

  function recordsPage() {
    var DRD = driverRecordsData(), seasons = DRD.seasons, all = DRD.all;

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
          '<td><div class="driver">' + plink(o.name) + (o.no ? ' <span class="rno" title="Last race number used">#' + esc(o.no) + "</span>" : "") + "</div>" + (o.team ? '<div class="sub nowrap">' + bar(o.team.colour) + esc(o.team.name) + "</div>" : "") + "</td>" +
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
    // Team records count every season on the site (GT7 Seasons 1–18); team titles count from Season 4 (Teams' Titles page).
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
    $("rules").textContent = "Team records cover every season on the site, GT7 Seasons 1\u201318 (team championship titles count from Season 4 \u2013 see Teams\u2019 Titles). " + (SCOPE_ALL ? "All Time adds together all three series: Tuesday Series, Narly Cup and WJF Trophy" : "Records cover every season of this series on the site") + after + ". Starts: one per team for every round in which at least one of its drivers started (including DC, RGQ, DNF, DQ and CC), however many of its drivers raced; DNS, WTD (withdrawn) and rounds that weren't run don't count. Wins and podiums: every win and top-3 finish by the team's drivers, so two drivers on the podium in one round is two podiums. Win % = wins ÷ starts. Drivers' titles = " + (SCOPE_ALL ? "driver championships in all three series" : BASE.navLabel + " driver championships") + " won by the team's drivers. Each driver counts for the team they raced for in that season. Privateers and drivers with no team on record are not included. Teams are ranked by wins, then podiums, then drivers' titles, then starts.";

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
  var teamColour = function (n) { return CTC[n] || CTC[(window.TEAM_ALIASES || {})[n]] || (window.MANUFACTURER_COLOURS || {})[n] || "#8C939D"; };
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
    var keys = Object.keys(TC).filter(function (k) { return ALL[k] && ALL[k].final && !TC[k].manufacturers && (SCOPE_ALL || groupOf(ALL[k]) === BASE.id); })
      .sort(function (a, b) { return (ALL[b].season || 18) - (ALL[a].season || 18) || (baseOf(ALL[b]).navOrder || 0) - (baseOf(ALL[a]).navOrder || 0); });
    var map = {}, champs = [];
    var get = function (n) { n = (window.TEAM_ALIASES || {})[n] || n; return map[n] || (map[n] = { name: n, entered: 0, list: [], starts: 0, titles: 0, points: 0, won: [], rwins: 0, rpods: 0 }); };
    keys.forEach(function (k) {
      var x = ALL[k], tab = tcTable(x, k).filter(function (t) { return t.name !== "Privateer"; }), st = tcStarts(x);
      champs.push({ key: k, x: x, tab: tab });
      tab[0] && get(tab[0].name).won.push(x);
      if (tab[0]) get(tab[0].name).titles++;
      tab.forEach(function (t) { get(t.name).points += t.total; });
      // Round wins / round podiums: the team's place in each round of the team championship (ties share the place; rounds not run skipped).
      var nr = TC[k].notRun || [];
      for (var r = 0; r < (tab[0] ? tab[0].pts.length : 0); r++) {
        if (nr.indexOf(r + 1) >= 0) continue;
        var vals = tab.map(function (t) { return t.pts[r]; });
        if (!Math.max.apply(null, vals)) continue;
        tab.forEach(function (t) { var v = t.pts[r]; if (v <= 0) return; var place = 1 + vals.filter(function (w) { return w > v; }).length; if (place === 1) get(t.name).rwins++; if (place <= 3) get(t.name).rpods++; });
      }
      // Race wins by the team's drivers in this championship (driver results; Team RSR / RNR count as MC Motorsport).
      if (x.standingsFormat === "archive") x.standings.forEach(function (row) {
        var w = row[3].filter(function (v) { return /^\d+p1d?$/.test(v); }).length; if (!w) return;
        var t = clubTeam(row[1], x.season); var nm = t && ((window.TEAM_ALIASES || {})[t.name] || t.name);
        if (nm && nm !== "Privateer") get(nm).racewins = (get(nm).racewins || 0) + w;
      });
      Object.keys(st).forEach(function (t) {
        if (!st[t]) return;
        var o = get(t); o.entered++; o.starts += st[t]; o.list.push(x);
      });
    });
    var all = Object.keys(map).map(function (k) { return map[k]; }).filter(function (o) { return o.entered || o.points; });
    var nums = keys.map(function (k) { return ALL[k].season || 18; }).filter(function (v, i, l) { return l.indexOf(v) === i; }).sort(function (a, b) { return a - b; });
    var span = nums.length ? (nums.length > 1 ? "Seasons " + nums[0] + "–" + nums[nums.length - 1] : "Season " + nums[0]) : "";
    $("eyebrow").textContent = LABEL + " · Team championship records";
    $("meta").textContent = keys.length ? span + " · " + keys.length + (keys.length === 1 ? " team championship" : " team championships") + " · " + all.length + " teams" : "No team championships on the site yet";
    document.title = "Teams' Titles · " + LABEL + " · TB Race Results";
    var enteredLabel = SCOPE_ALL ? "Series entered" : "Seasons entered";
    $("rules").textContent = "Team titles cover GT7 Seasons 4\u201317, the finished seasons with a team championship \u2013 the club didn\u2019t run one in Seasons 1\u20133, and Season 18 counts once it finishes. Titles = team championships won. Rounds won = rounds in which the team scored the most team points (a tie counts for each team). Races won = races won by the team's drivers in those championships. " + (SCOPE_ALL ? "Series entered = team championships (one series in one season) in which at least one of the team's drivers started a race. " : "Seasons entered = seasons of the " + BASE.navLabel + " in which at least one of the team's drivers started a race. ") +
      "Points = team championship points: each round a team's best three drivers score, on a points scale set for each series and season (see each season's team standings). Privateers don't count as a team. Team RSR and Team RNR count as MC Motorsport. Starts, wins and podiums are on Team Records. Figures as published by the club.";
    if (!all.length) { $("tiles").innerHTML = ""; $("head").innerHTML = ""; $("rows").innerHTML = '<tr><td class="empty">No team championships on the site yet.</td></tr>'; $("head2").innerHTML = ""; $("rows2").innerHTML = ""; return; }
    var top = function (k) { var v = Math.max.apply(null, all.map(function (o) { return o[k]; })); return { v: v, who: all.filter(function (o) { return o[k] === v; }).map(function (o) { return o.name; }) }; };
    var tile = function (label, t) { return '<div class="tile"><div class="label">' + label + '</div><div class="tile-big">' + t.v + '</div><div class="sub" style="white-space:normal">' + esc(t.who.join(", ")) + "</div></div>"; };
    $("tiles").innerHTML = tile("Most team titles", top("titles")) + tile("Most team points", top("points")) +
      '<div class="tile"><div class="label">Different champions</div><div class="tile-big">' + all.filter(function (o) { return o.titles; }).length + '</div><div class="sub">from ' + champs.length + (champs.length === 1 ? " championship" : " championships") + "</div></div>";
    var tag = function (x) { return '<a class="seasontag gold" href="' + baseOf(x).pages.championship + (x === baseOf(x) ? "" : "?season=" + x.season) + '#view=teams">S' + x.season + (SCOPE_ALL ? " " + esc(SHORT(baseOf(x))) : "") + "</a>"; };
    var subList = function (o) {
      if (!SCOPE_ALL) return o.list.map(function (x) { return "S" + x.season; }).sort(function (a, b) { return parseInt(a.slice(1)) - parseInt(b.slice(1)); }).join(" · ");
      var c = {}; o.list.forEach(function (x) { var s2 = SHORT(baseOf(x)); c[s2] = (c[s2] || 0) + 1; });
      var multi = o.list.length > Object.keys(c).length;
      return ORDER.map(function (id) { return SHORT(ALL[id]); }).filter(function (s2) { return c[s2]; }).map(function (s2) { return multi ? s2 + " " + c[s2] : s2; }).join(" · ");
    };
    // Ranked by titles, then points (like Drivers' Titles): big Titles number, a tag for every title won, then series/seasons entered and points.
    var rows = all.slice().sort(function (a, b) { return b.titles - a.titles || b.points - a.points || a.name.localeCompare(b.name); });
    $("head").innerHTML = '<tr><th scope="col">#</th><th scope="col">Team</th><th scope="col" class="r">Titles</th><th scope="col">Titles won</th><th scope="col" class="r">Rounds<br>won</th><th scope="col" class="r">Races<br>won</th><th scope="col" class="r">' + enteredLabel.replace(" ", "<br>") + '</th><th scope="col" class="r">Points</th></tr>';
    var prev = null, pos = 0;
    $("rows").innerHTML = rows.map(function (o, i) {
      if (o.titles !== prev) pos = i + 1; prev = o.titles;
      var won = o.won.slice().sort(function (a, b) { return b.season - a.season || (baseOf(a).navOrder || 99) - (baseOf(b).navOrder || 99); });
      return '<tr class="' + (pos <= 3 ? "podium" : "") + '"><td><span class="chip' + (pos <= 3 ? " p" + pos : "") + '">' + pos + "</span></td>" +
        '<td><div class="driver nowrap' + (pos === 1 && o.titles ? " champion" : "") + '">' + tbar(o.name) + esc(o.name) + '</div><div class="sub nowrap" style="color:var(--dim)">' + esc(subList(o)) + "</div></td>" +
        '<td class="r"><span class="points">' + (o.titles || '<span class="none">0</span>') + "</span></td>" +
        '<td class="tagwrap">' + (won.length ? won.map(tag).join("") : '<span class="none">—</span>') + "</td>" +
        '<td class="t r">' + (o.rwins || '<span class="none">0</span>') + '</td><td class="t r">' + (o.racewins || '<span class="none">0</span>') + "</td>" +
        '<td class="t r">' + o.entered + '</td><td class="t r" style="color:var(--muted)">' + o.points + "</td></tr>";
    }).join("");
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
    box.innerHTML = has ? ['drivers', 'teams'].map(function (v) { return '<button type="button" class="pill" data-view="' + v + '" aria-pressed="' + (v === view) + '">' + (v === "drivers" ? "Drivers" : (TC[S.id].manufacturers ? "Manufacturers" : "Teams")) + "</button>"; }).join("") : "";
    return view;
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-view]"); if (!b || page !== "championship") return;
    try { history.replaceState(null, "", location.pathname + location.search + (b.dataset.view === "teams" ? "#view=teams" : "")); } catch (err) {}
    championshipPage();
  });

  function teamStandingsPage() {
    var c = TC[S.id], all = tcTable(S, S.id), n = all[0].pts.length, rounds = []; for (var i = 1; i <= n; i++) rounds.push(i);
    // Privateers aren't a team: listed below the teams, without a position, and left out of the round places.
    var priv = all.filter(function (t) { return t.name === "Privateer"; }), tab = all.filter(function (t) { return t.name !== "Privateer"; });
    var notRun = c.notRun || [];
    var manu = !!c.manufacturers;
    if ($("h1title")) $("h1title").textContent = manu ? "Manufacturer Standings" : "Team Standings";
    var live = !S.final;
    $("eyebrow").textContent = S.eyebrow + (live ? " · After Round " + n : " · Final standings");
    provNote(!!(live && S.provisional));
    $("meta").textContent = manu ? tab.length + " manufacturers · " + c.scale + "-" + (c.scale - 1) + "-" + (c.scale - 2) + "…0 · as published by the club" : tab.length + " teams · best three drivers score each round · " + c.scale + "-" + (c.scale - 1) + "-" + (c.scale - 2) + "…0";
    document.title = "Team Standings · " + S.navLabel + " Season " + S.season + " · TB Race Results";
    $("teamFilter").parentNode.hidden = true;
    $("key").innerHTML = '<span><span class="rp p1" style="min-width:20px">&nbsp;</span> <span class="rp p2" style="min-width:20px">&nbsp;</span> <span class="rp p3" style="min-width:20px">&nbsp;</span> = top three ' + (manu ? "manufacturers" : "teams") + ' in the round</span>';
    if (manu) { $("rules").textContent = (c.note || "") + " Points as published by the club. Gold, silver and bronze = the top three manufacturers in each round."; }
    else $("rules").textContent = "Each round a team's best three drivers score: " + c.scale + " points for the highest-placed scoring driver, then " + (c.scale - 1) + ", " + (c.scale - 2) + " … down to 0. " + "A DC (disconnected) finish doesn't score team points. " + (c.privateersScore ? "This season Privateers took points places and scored together as \u201cPrivateer\u201d \u2013 shown below the teams without a position; they can\u2019t win the team title or a round, and aren\u2019t a team on the Teams\u2019 Titles page." : "Privateers don't score and don't take a points place.") + " Gold, silver and bronze = the top three teams in each round." + (c.note ? " " + c.note : "");
    $("source").textContent = live ? "Team standings as published by the club after Round " + n + "." : "Team standings as published by the club.";
    var rank = rounds.map(function (r) {
      var vals = tab.map(function (t) { return t.pts[r - 1]; });
      return tab.map(function (t) { var v = t.pts[r - 1]; return v > 0 ? 1 + vals.filter(function (w) { return w > v; }).length : 0; });
    });
    var champ = tab[0];
    // Podium boxes: champions, 2nd, 3rd – points and round wins (round wins = rounds where the team had the best score).
    var MEDAL = ["var(--gold)", "var(--silver)", "var(--bronze)"], LBL = [live ? "Leaders" : (manu ? "Manufacturers' champion" : "Team champions"), "2nd", "3rd"];
    $("tiles").innerHTML = tab.slice(0, 3).map(function (t, i) {
      var w = t.pts.filter(function (v, r) { return notRun.indexOf(r + 1) < 0 && rank[r][tab.indexOf(t)] === 1; }).length;
      return '<div class="tile" style="border-top:3px solid ' + MEDAL[i] + '"><div class="label">' + LBL[i] + '</div><div class="tile-big' + (i ? "" : " champion") + '" style="display:flex;align-items:center;gap:8px"><span class="bar" style="background:' + teamColour(t.name) + ';height:22px"></span>' + esc(t.name) + '</div><div class="sub">' + t.total + " pts · " + w + " round win" + (w === 1 ? "" : "s") + "</div></div>";
    }).join("");
    $("tiles").classList.add("tiles3");
    $("head").parentNode.classList.add("compact");
    $("head").innerHTML = '<tr><th scope="col">Pos</th><th scope="col">' + (manu ? "Manufacturer" : "Team") + '</th>' + rounds.map(function (r) { return '<th class="c" scope="col">R' + r + "</th>"; }).join("") + '<th scope="col" class="r">Gap</th><th scope="col" class="r">Points</th></tr>';
    $("rows").innerHTML = tab.map(function (t, i) {
      var p = i + 1;
      return '<tr class="' + (p <= 3 ? "podium" : "") + '"><td><span class="chip' + (p <= 3 ? " p" + p : "") + '">' + p + "</span></td>" +
        '<td><div class="driver nowrap' + (p === 1 ? " champion" : "") + '">' + tbar(t.name) + esc(t.name) + (p === 1 && !live ? ' <span class="crown">Champions</span>' : "") + "</div></td>" +
        t.pts.map(function (v, r) { var k = rank[r][i]; return '<td class="c">' + (notRun.indexOf(r + 1) >= 0 ? '<span class="np" title="Round not run">NP</span>' : k && k <= 3 ? '<span class="rp p' + k + '">' + v + "</span>" : '<span class="t">' + v + "</span>") + "</td>"; }).join("") +
        '<td class="t r" style="color:var(--muted)">' + (p === 1 ? "–" : "−" + (champ.total - t.total)) + '</td><td class="r"><span class="points">' + t.total + "</span></td></tr>";
    }).join("") + priv.map(function (t) {
      return '<tr class="priv"><td><span class="chip">–</span></td><td><div class="driver nowrap">' + tbar(t.name) + esc(t.name) + ' <span class="sub" style="color:var(--dim)">not a team</span></div></td>' +
        t.pts.map(function (v, r) { return '<td class="c">' + (notRun.indexOf(r + 1) >= 0 ? '<span class="np" title="Round not run">NP</span>' : '<span class="t">' + v + "</span>") + "</td>"; }).join("") +
        '<td class="t r" style="color:var(--muted)">–</td><td class="r"><span class="points">' + t.total + "</span></td></tr>";
    }).join("");
  }

  function championshipPage() {
    teamClick = null;
    if ($("tiles")) $("tiles").classList.remove("tiles3");
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
    provNote(!!S.provisional);
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
          '<td><div class="driver' + (p === 1 ? " champion" : "") + '">' + plink(x[1]) + '</div><div class="sub nowrap">' + bar(t.colour) + esc(t.name) + "</div></td>" +
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
      $("next").innerHTML = '<div><div class="k">Next up · Round ' + nr.no + '</div><div class="t">' + esc(nr.track) + '</div></div><div class="d">' + nr.dates.map(function (d, i) {
        var x = cur[i];
        // Once a series has run this round: green box, tick and the winner (top lobby), linking to that round's results.
        var res = x && (x.rounds || []).filter(function (r) { return r.no === nr.no; })[0];
        var win = res && (res.rows.filter(function (y) { return y[5] === "Winner"; })[0] || res.rows[0]);
        if (res) return '<a class="nd done" href="' + x.pages.results + "#round=" + nr.no + '"><small>' + esc(x.navLabel) + '</small><span><span class="ok" aria-label="Done">\u2713</span>' + esc(d) + "</span>" + (win ? '<span class="w">Won by ' + esc(win[0]) + "</span>" : "") + "</a>";
        return '<a class="nd" href="' + (x ? x.pages.results : "#") + '"><small>' + esc(x ? x.navLabel : "") + "</small>" + esc(d) + "</a>";
      }).join("") + "</div>";
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
        (function () {
          var drv = '<div class="lb">' + top.map(function (r, i) {
          return '<div><span class="p p' + (i + 1) + '">' + esc(r[0]) + '</span><span class="nm"><i style="background:' + tm(r[2]).colour + '"></i>' + esc(r[1]) + '</span><span class="pts">' + r[8] + "</span></div>";
        }).join("") + "</div>";
          var c = (window.TEAM_CHAMPS || {})[x.id];
          if (!c) return drv;
          // Drivers and Teams side by side (current season team standings).
          var TS = { "Roadsick Racing": "Roadsick", "Mad Turtle Racing": "Mad Turtle", "MC Motorsport": "MC", "Triple R Motorsport": "Triple R", "Gerbil Racing Team": "Gerbil" };
          var tt = Object.keys(c.teams).filter(function (t) { return t !== "Privateer"; }).map(function (t) { return [t, c.teams[t].reduce(function (a, b) { return a + b; }, 0)]; })
            .sort(function (a, b) { return b[1] - a[1]; }).slice(0, 3);
          var teams = '<div class="lb">' + tt.map(function (t, i) { return '<div><span class="p p' + (i + 1) + '">' + (i + 1) + '</span><span class="nm"><i style="background:' + ((window.CLUB_TEAMS || {})[t[0]] || "#8C939D") + '"></i>' + esc(TS[t[0]] || t[0]) + '</span><span class="pts">' + t[1] + "</span></div>"; }).join("") + "</div>";
          return '<div class="two"><div><div class="colh">Drivers</div>' + drv + '</div><div><div class="colh">Teams</div>' + teams + "</div></div>";
        })() +
        '<div class="facts">' + (lr ? "Last winner: <b>" + esc(lr.rows[0][0]) + "</b> · " + esc(lr.short) + "<br>" : "") +
        (past ? "Season " + past.season + " champion: <b>" + esc(past.standings[0][1]) + "</b>" : "") + "</div>" +
        '<div class="btns"><a class="pri" href="' + x.pages.results + '">Results</a><a href="' + x.pages.championship + '">Standings</a></div></article>';
    }).join("");
  }

  /* ---------------- Calendar page (one series) ---------------- */
  // Season calendar from data/calendar.js; finished rounds show the winner and link to the results.
  /* ---------------- Driver search (home page and profiles) ---------------- */
  var dsCount = 0;
  // hrefFn(name) → link for a picked driver (default: their profile); label / value optional.
  function driverSearch(where, list, autofocus, hrefFn, label, value) {
    hrefFn = hrefFn || function (n) { return "driver.html?name=" + encodeURIComponent(n); };
    var uid = "ds" + (++dsCount);
    if (!where) return;
    var box = document.createElement("div"); box.className = "dsearch";
    box.innerHTML = '<label class="dslabel" for="' + uid + '">' + esc(label || "Find a driver") + '</label><div class="dsbox"><svg class="dsicon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>' +
      '<input id="' + uid + '" type="search" autocomplete="off" spellcheck="false" placeholder="Type a driver’s name" aria-controls="' + uid + 'L" aria-autocomplete="list"><div class="dsres" id="' + uid + 'L" role="listbox" hidden></div></div>';
    where.parentNode.insertBefore(box, where.nextSibling);
    var inp = box.querySelector("input"), res = box.querySelector(".dsres"), sel = 0, hits = [];
    var short = function (n) { return n.replace(" Racing Team", "").replace(" Racing", "").replace(" Motorsport", ""); };
    var hl = function (n, q) { var i = n.toLowerCase().indexOf(q); return i < 0 ? esc(n) : esc(n.slice(0, i)) + "<mark>" + esc(n.slice(i, i + q.length)) + "</mark>" + esc(n.slice(i + q.length)); };
    var draw = function () {
      var q = inp.value.trim().toLowerCase();
      if (!q) { res.hidden = true; res.innerHTML = ""; hits = []; return; }
      hits = list.filter(function (o) { return o.name.toLowerCase().indexOf(q) >= 0; })
        .sort(function (a, b) { return (b.name.toLowerCase().indexOf(q) === 0) - (a.name.toLowerCase().indexOf(q) === 0) || b.active - a.active || b.starts - a.starts; }).slice(0, 8);
      sel = 0;
      res.innerHTML = hits.length ? hits.map(function (o, i) {
        return '<a role="option" href="' + hrefFn(o.name) + '"' + (i === sel ? ' class="on" aria-selected="true"' : "") + '><i style="background:' + ((o.team && o.team.colour) || "#8C939D") + '"></i><span class="dsn">' + hl(o.name, q) + "</span><small>" +
          esc(o.team ? short(o.team.name) : "") + " · " + (o.active ? "Season 18" : o.starts + " starts") + "</small></a>";
      }).join("") : '<div class="dsnone">No driver found</div>';
      res.hidden = false;
    };
    var mark = function () { [].forEach.call(res.querySelectorAll("a"), function (a, i) { a.className = i === sel ? "on" : ""; a.setAttribute("aria-selected", i === sel ? "true" : "false"); }); };
    inp.addEventListener("input", draw);
    inp.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" && hits.length) { sel = (sel + 1) % hits.length; mark(); e.preventDefault(); }
      else if (e.key === "ArrowUp" && hits.length) { sel = (sel - 1 + hits.length) % hits.length; mark(); e.preventDefault(); }
      else if (e.key === "Enter" && hits[sel]) { location.href = hrefFn(hits[sel].name); }
      else if (e.key === "Escape") { inp.value = ""; draw(); }
    });
    document.addEventListener("click", function (e) { if (!box.contains(e.target)) res.hidden = true; });
    inp.addEventListener("focus", function () { if (inp.value.trim()) draw(); });
    if (value) inp.value = value;
    if (autofocus) inp.focus();
  }
  function searchList(DRD) {
    var active = {};
    ORDER.forEach(function (id) { (ALL[id].standings || []).forEach(function (r) { if (r[9] > 0) active[r[1]] = true; }); });
    return DRD.all.map(function (o) { return { name: o.name, team: o.team, starts: o.starts, active: active[o.name] ? 1 : 0 }; });
  }

  /* ---------------- Driver profile (driver.html?name=…) ---------------- */
  function driverPage() {
    var q = new URLSearchParams(location.search).get("name") || "";
    var DRD = driverRecordsData(true), all = DRD.all;
    var o = all.filter(function (d) { return d.name === q; })[0] || all.filter(function (d) { return d.name.toLowerCase() === q.toLowerCase(); })[0];
    driverSearch($("profileTop"), searchList(DRD), !o);
    if (!o) {
      $("profile").innerHTML = '<h1>Driver not found</h1><p class="meta">' + (q ? "There’s no driver called “" + esc(q) + "” on the site. " : "") + 'Search for a driver above, or browse <a href="records-drivers.html">Driver Records</a>.</p>';
      document.title = "Driver profile · TB Race Results"; return;
    }
    var N = o.name, fmt = function (n) { return Number(n).toLocaleString("en-AU"); };
    var active = false;
    ORDER.forEach(function (id) { (ALL[id].standings || []).forEach(function (r) { if (r[1] === N && r[9] > 0) active = true; }); });
    var rows = [];
    Object.keys(ALL).map(function (k) { return ALL[k]; }).filter(function (x) { return x.standings; }).forEach(function (x) {
      var r = x.standings.filter(function (y) { return y[1] === N; })[0]; if (!r) return;
      var arch = x.standingsFormat === "archive", st, w, pd, pts, tm;
      if (arch) { st = archiveStarts(r[3]); w = r[3].filter(function (v) { return /p1$/.test(v); }).length; pd = r[3].filter(function (v) { return /p[123]$/.test(v); }).length; pts = x.noPoints ? null : (+r[6] || 0); tm = clubTeam(N, x.season); }
      else { st = r[9]; w = r[10]; pd = r[11]; pts = +r[8] || 0; tm = x.teams && x.teams[r[2]]; }
      if (!st) return;
      var fin = !!x.final || arch;
      rows.push({ x: x, season: x.season || 18, pos: parseInt(r[0], 10), field: x.standings.length, st: st, w: w, pd: pd, pts: pts, team: tm, fin: fin, champ: fin && !x.noChampion && String(r[0]) === "1" });
    });
    rows.sort(function (a, b) { return b.season - a.season || (baseOf(a.x).navOrder || 99) - (baseOf(b.x).navOrder || 99); });
    var titles = rows.filter(function (r) { return r.champ; });
    var t = o.team || { name: "Privateer", colour: "#8C939D" };
    document.title = N + " · Driver profile · TB Race Results";
    var ms = function (key, step, unit) {
      var v = o[key], next = (Math.floor(v / step) + 1) * step, cur = Math.floor(v / step) * step;
      var first = !all.some(function (d) { return d[key] >= next; });
      var bits = [];
      if (cur >= step) bits.push("In the <b>" + fmt(cur) + " " + unit + " club</b>");
      if (active) bits.push("<b>" + fmt(next - v) + "</b> to the " + fmt(next) + " club" + (first ? " – no one there yet" : ""));
      return bits.length ? '<div class="pfms"><span class="pfmk">' + (unit === "starts" ? "Starts" : "Points") + "</span>" + bits.join(" · ") + "</div>" : "";
    };
    var ord = function (n) { return n + (n % 10 === 1 && n % 100 !== 11 ? "st" : n % 10 === 2 && n % 100 !== 12 ? "nd" : n % 10 === 3 && n % 100 !== 13 ? "rd" : "th"); };
    var series = ORDER.map(function (id) {
      var rs = rows.filter(function (r) { return groupOf(r.x) === id; });
      if (!rs.length) return "";
      var fins = rs.filter(function (r) { return r.fin && !r.x.noChampion; }).map(function (r) { return r.pos; });
      var nt = rs.filter(function (r) { return r.champ; }).length;
      var best = nt ? "Champion" + (nt > 1 ? " ×" + nt : "") : fins.length ? ord(Math.min.apply(null, fins)) : "–";
      var sum = function (k) { return rs.reduce(function (a, r) { return a + r[k]; }, 0); };
      return '<div class="pfser"><h3>' + esc(ALL[id].navLabel) + "</h3><p>Seasons<b>" + rs.length + "</b></p><p>Starts<b>" + sum("st") + "</b></p><p>Wins · Podiums<b>" + sum("w") + " · " + sum("pd") + "</b></p><p>Best finish<b" + (nt ? ' class="gold"' : "") + ">" + best + "</b></p></div>";
    }).join("");
    var trs = rows.map(function (r) {
      var b = baseOf(r.x), href = b.pages.championship + seasonQuery(r.x);
      var cls = r.pos === 1 && r.fin && !r.x.noChampion ? " g" : r.pos === 2 ? " s" : r.pos === 3 ? " b" : "";
      return "<tr" + (r.champ ? ' class="pfchamp"' : r.fin ? "" : ' class="pfnow"') + '><td class="nowrap"><a href="' + href + '">Season ' + r.season + "</a>" + (r.fin ? "" : '<span class="pfcur">in progress</span>') + "</td>" +
        '<td><div class="nowrap">' + esc(b.navLabel) + (r.champ ? ' <span class="crown">Champion</span>' : "") + '</div><div class="sub">' + esc((r.x.title || "").replace(/\s*Season \d+\s*/, " ").trim()) + "</div></td>" +
        '<td class="nowrap">' + (r.team ? bar(r.team.colour) + esc(r.team.name) : '<span class="none">–</span>') + "</td>" +
        '<td class="nowrap"><span class="pfpos' + cls + '">' + r.pos + '</span> <span class="pfof">of ' + r.field + "</span>" + (r.fin ? "" : '<div class="pfprog">Season in progress \u00b7 after Round ' + (r.x.standingsAfter || "?") + "</div>") + "</td>" +
        '<td class="r">' + r.st + '</td><td class="r">' + r.w + '</td><td class="r">' + r.pd + '</td><td class="r">' + (r.pts == null ? "–" : fmt(r.pts)) + "</td></tr>";
    }).join("");
    $("profile").innerHTML =
      '<div class="eyebrow">Driver profile</div>' +
      '<div class="pfhead"><div class="pfno" style="background:' + t.colour + '">' + esc(o.no || "–") + '</div><div><h1>' + esc(N) + '</h1><div class="pfteam">' + bar(t.colour) + esc(t.name) + (active ? '<span class="pflive">Racing in Season 18</span>' : '<span class="pfold">Last raced Season ' + o.seasons[0] + "</span>") + "</div>" +
        '<a class="cmpbtn" href="compare.html?a=' + encodeURIComponent(N) + '"><span aria-hidden="true">\u21c4</span> Compare with another driver</a></div></div>' +
      '<div class="pftiles"><div><b>' + o.starts + "</b><span>Starts</span></div><div><b>" + o.wins + "</b><span>Wins</span></div><div><b>" + o.podiums + "</b><span>Podiums</span></div><div><b>" + titles.length + "</b><span>Titles</span></div><div><b>" + fmt(o.points) + "</b><span>Points</span></div><div><b>" + o.seasons.length + "</b><span>Seasons</span></div></div>" +
      ms("starts", 100, "starts") + ms("points", 1000, "points") +
      '<div class="pfsers">' + series + "</div>" +
      '<h2 class="section-title">Season by season</h2><div class="scroll"><table class="pftable"><thead><tr><th scope="col">Season</th><th scope="col">Series</th><th scope="col">Team</th><th scope="col">Finish</th><th scope="col" class="r">Starts</th><th scope="col" class="r">Wins</th><th scope="col" class="r">Podiums</th><th scope="col" class="r">Points</th></tr></thead><tbody>' + trs + "</tbody></table></div>" +
      '<p class="pfnote">Starts, wins and podiums are counted as on Driver Records. Points are each season’s championship points (after drops and penalties; Season 1 had no points). Finish = championship position out of the drivers in that season’s standings; for the current season it\u2019s the position so far, after the latest round. Teams are from each season’s team list.</p>';
  }

  /* ---------------- Driver comparison (compare.html?a=…&b=…) ---------------- */
  function comparePage() {
    var P = new URLSearchParams(location.search), qa = P.get("a") || "", qb = P.get("b") || "";
    var DRD = driverRecordsData(true), all = DRD.all, list = searchList(DRD);
    var find = function (q) { return q ? (all.filter(function (d) { return d.name === q; })[0] || all.filter(function (d) { return d.name.toLowerCase() === q.toLowerCase(); })[0]) : null; };
    var A = find(qa), B = find(qb);
    var url = function (a, b) { var u = []; if (a) u.push("a=" + encodeURIComponent(a)); if (b) u.push("b=" + encodeURIComponent(b)); return "compare.html" + (u.length ? "?" + u.join("&") : ""); };
    var fmt = function (n) { return Number(n).toLocaleString("en-AU"); };
    document.title = (A && B ? A.name + " vs " + B.name + " · " : "") + "Head to head · TB Race Results";
    // Pickers: one search box per side (choosing a driver keeps the other one).
    var pick = function (side, cur, other) {
      var wrap = document.createElement("div"); wrap.className = "cmppick";
      $("cmpPick").appendChild(wrap);
      var anchor = document.createElement("div"); wrap.appendChild(anchor);
      driverSearch(anchor, list.filter(function (o) { return !other || o.name !== other.name; }), false, function (n) { return side === "a" ? url(n, other && other.name) : url(other && other.name, n); },
        side === "a" ? "Driver 1" : "Driver 2", cur ? cur.name : "");
    };
    pick("a", A, B); pick("b", B, A);
    if (!A || !B) {
      $("cmp").innerHTML = '<p class="meta">' + ((qa && !A) || (qb && !B) ? "One of those drivers isn’t on the site. " : "") + "Pick two drivers to compare their careers – starts, wins, podiums, points and titles – and how often each finished ahead when they raced together.</p>";
      return;
    }
    // Per-driver totals by series + titles.
    var stats = function (o) {
      var s = { ser: {}, titles: 0 };
      Object.keys(ALL).map(function (k) { return ALL[k]; }).filter(function (x) { return x.standings; }).forEach(function (x) {
        var r = x.standings.filter(function (y) { return y[1] === o.name; })[0]; if (!r) return;
        var arch = x.standingsFormat === "archive", st, w, pd;
        if (arch) { st = archiveStarts(r[3]); w = r[3].filter(function (v) { return /p1$/.test(v); }).length; pd = r[3].filter(function (v) { return /p[123]$/.test(v); }).length; }
        else { st = r[9]; w = r[10]; pd = r[11]; }
        if (!st) return;
        var id = groupOf(x), q = s.ser[id] || (s.ser[id] = { st: 0, w: 0, pd: 0, t: 0 });
        q.st += st; q.w += w; q.pd += pd;
        if ((x.final || arch) && !x.noChampion && String(r[0]) === "1") { q.t++; s.titles++; }
      });
      return s;
    };
    var SA = stats(A), SB = stats(B);
    // Head to head: every round both drivers started in the same race.
    var hh = { n: 0, a: 0, b: 0 };
    Object.keys(ALL).map(function (k) { return ALL[k]; }).forEach(function (x) {
      if (x.standingsFormat === "archive") {
        if (!x.standings) return;
        var ra = x.standings.filter(function (y) { return y[1] === A.name; })[0], rb = x.standings.filter(function (y) { return y[1] === B.name; })[0];
        if (!ra || !rb) return;
        ra[3].forEach(function (v, i) {
          var w = rb[3][i]; if (!/^\d/.test(v) || !/^\d/.test(w)) return;
          var pa = parseInt(v, 10), pb = parseInt(w, 10); if (pa === pb) return;
          hh.n++; if (x.noPoints ? pa < pb : pa > pb) hh.a++; else hh.b++;
        });
      } else {
        (x.rounds || []).forEach(function (rd) {
          var ia = -1, ib = -1;
          rd.rows.forEach(function (y, i) { if (y[0] === A.name && y[8] !== "o") ia = i; if (y[0] === B.name && y[8] !== "o") ib = i; });
          if (ia < 0 || ib < 0) return;
          hh.n++; if (ia < ib) hh.a++; else hh.b++;
        });
      }
    });
    var head = function (o, side) {
      var t = o.team || { name: "Privateer", colour: "#8C939D" };
      return '<a class="cmph ' + side + '" href="driver.html?name=' + encodeURIComponent(o.name) + '"><div class="pfno" style="background:' + t.colour + '">' + esc(o.no || "–") + '</div><div class="cmphn"><div class="cmpn">' + esc(o.name) + '</div><div class="cmpt">' + bar(t.colour) + esc(t.name) + " · " + o.seasons.length + " season" + (o.seasons.length > 1 ? "s" : "") + "</div></div></a>";
    };
    var pct = function (a, b) { return b ? Math.round(a / b * 1000) / 10 : 0; };
    var line = function (l, a, b, isPct) {
      var t = a + b, wa = t ? a / t * 100 : 50, f = function (v) { return isPct ? v.toFixed(1) + "%" : fmt(v); };
      return '<div class="cmpr"><div class="cmpv' + (a > b ? " w" : "") + '">' + f(a) + '</div><div class="cmpm"><div class="cmpl">' + l + '</div><div class="cmpb"><span style="width:' + wa + '%"></span></div></div><div class="cmpv r' + (b > a ? " w" : "") + '">' + f(b) + "</div></div>";
    };
    var c = function (x, y) { return '<span' + (x > y ? ' class="w"' : "") + ">" + x + "</span>"; };
    var ser = ORDER.map(function (id) {
      var a = SA.ser[id] || { st: 0, w: 0, pd: 0, t: 0 }, b = SB.ser[id] || { st: 0, w: 0, pd: 0, t: 0 };
      return '<div class="cmps"><div class="cmpsv">' + c(a.st, b.st) + " · " + c(a.w, b.w) + " · " + c(a.pd, b.pd) + " · " + c(a.t, b.t) + '</div><div class="cmpsn">' + esc(ALL[id].navLabel) + '</div><div class="cmpsv r">' + c(b.st, a.st) + " · " + c(b.w, a.w) + " · " + c(b.pd, a.pd) + " · " + c(b.t, a.t) + "</div></div>";
    }).join("");
    $("cmp").innerHTML =
      '<div class="cmpheads">' + head(A, "left") + '<div class="cmpvs">VS</div>' + head(B, "right") + "</div>" +
      '<div class="cmpbox"><h2 class="cmph2">Career</h2>' +
        line("Starts", A.starts, B.starts) + line("Wins", A.wins, B.wins) + line("Podiums", A.podiums, B.podiums) + line("Points", A.points, B.points) + line("Titles", SA.titles, SB.titles) +
        line("Win %", pct(A.wins, A.starts), pct(B.wins, B.starts), true) + line("Podium %", pct(A.podiums, A.starts), pct(B.podiums, B.starts), true) + "</div>" +
      '<div class="cmpbox"><h2 class="cmph2">When they’ve raced each other</h2>' +
        (hh.n ? '<div class="cmphh"><div><b>' + hh.a + "</b><small>" + esc(A.name) + ' finished ahead</small></div><div class="mid">' + hh.n + " race" + (hh.n > 1 ? "s" : "") + '<br>together</div><div class="r"><b>' + hh.b + "</b><small>" + esc(B.name) + ' finished ahead</small></div></div><div class="cmpb big"><span style="width:' + (hh.a / hh.n * 100) + '%"></span></div>'
          : '<p class="meta">They haven’t started the same race yet.</p>') + "</div>" +
      '<div class="cmpbox"><h2 class="cmph2">By series <small>starts · wins · podiums · titles</small></h2>' + ser + "</div>" +
      '<p class="pfnote">Counted as on Driver Records. “Finished ahead” compares every round both drivers started in the same race (for older seasons, by round points; same points don’t count). Gold = the better figure.</p>';
  }

  /* ---------------- Download image (race results + driver / team standings pages only) ----------------
     Draws a club-styled PNG of what the visitor is looking at, on their own device with the browser's
     built-in canvas – nothing is uploaded or stored and no outside code is loaded. */
  function dlButton() {
    if ((page !== "results" && page !== "championship") || !$("eyebrow") || $("dlWrap")) return;
    var w = document.createElement("div"); w.id = "dlWrap"; w.className = "dlwrap";
    w.innerHTML = '<button type="button" class="dlbtn" id="dlBtn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"/></svg><span>Download image</span></button><span class="dlmsg" id="dlMsg" role="status"></span>';
    $("eyebrow").parentNode.insertBefore(w, $("eyebrow"));
    $("dlBtn").addEventListener("click", function () {
      var btn = $("dlBtn"), msg = $("dlMsg"), lbl = btn.querySelector("span");
      btn.disabled = true; lbl.textContent = "Making image…"; msg.textContent = "";
      makeCard().then(function () { lbl.textContent = "Download image"; btn.disabled = false; })
        .catch(function () { lbl.textContent = "Download image"; btn.disabled = false; msg.textContent = "Couldn’t make the image – please try again."; });
    });
  }

  function makeCard() {
    var C = { bg: "#0B0C0E", panel: "#101215", head: "#15171B", line: "#1C1F24", border: "#1F2227", text: "#E8E9EB", soft: "#C9CDD3", muted: "#A9AEB5", dim: "#8E949D", red: "#D7261E", redT: "#F0605A", gold: "#D4AF37", silver: "#C3C8CF", bronze: "#C9884F", fl: "#E3CCFF", flBg: "rgba(150,90,255,.28)" };
    var COND = "'Barlow Condensed', 'Arial Narrow', sans-serif", BODY = "'Barlow', system-ui, sans-serif", MONO = "'JetBrains Mono', ui-monospace, monospace";
    var W = 1200, PAD = 46, SC = 2;
    var colourOf = function (t) { var c = t && t.colour || "#8C939D"; var m = /#[0-9A-Fa-f]{6}/.exec(c); return m ? m[0] : "#8C939D"; };
    var teamByName = function (n) { var c = (window.CLUB_TEAMS || {})[n] || (window.MANUFACTURER_COLOURS || {})[n]; return { name: n, colour: c || "#8C939D" }; };
    var secs = function (t) { var m = /^(?:(\d+):)?(\d+):(\d+\.\d+)$/.exec(t || ""); return m ? (+(m[1] || 0)) * 3600 + (+m[2]) * 60 + (+m[3]) : Infinity; };
    var spec;   // { file, eyebrow, title, meta, badge, cols, rows, foot }
    var view = page === "championship" && TC[S.id] && readHash().view === "teams" ? "teams" : page === "championship" ? "drivers" : "results";
    var finalSeason = !!S.final || S.standingsFormat === "archive";
    var stdBadge = finalSeason ? { t: "Final standings", k: "final" } : S.provisional ? { t: "Provisional", s: (S.provisional.text || "Pending stewards’ reviews"), k: "prov" } : { t: "Official", k: "off" };
    var safe = function (s) { return String(s).replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, ""); };
    var tag = S.navLabel.replace(/\s+/g, "") + "-S" + (S.season || 18);
    // Cell helpers: {t: text, st: "p1|p2|p3|drop|dim|fl|win|bold", font}
    var roundCell = function (v) {
      v = String(v); var m = /^(\d+)(p[123])?(d)?(\*)?$/.exec(v);
      if (!m) return { t: v, st: "dim", small: true };
      return { t: m[1] + (m[4] ? "*" : ""), st: m[3] ? "drop" : m[2] || "" };
    };
    if (view === "results") {
      var h = readHash(), R = S.rounds.filter(function (r) { return r.no === (Number(h.round) || S.rounds[S.rounds.length - 1].no); })[0] || S.rounds[S.rounds.length - 1];
      var best = Math.min.apply(null, R.rows.map(function (x) { return secs(x[7]); }));
      var prov = S.provisional && (S.provisional.rounds || []).indexOf(R.no) >= 0;
      var cols = [{ l: "Pos", w: 64, k: "pos" }, { l: "Driver / Team", w: 300, k: "drv" }];
      if (S.hasLobbies) cols.push({ l: "Lobby", w: 90 });
      cols = cols.concat([{ l: "Car", w: 0 }, { l: "Race time", w: 150, a: "r" }, { l: "To leader", w: 120, a: "r" }, { l: "To car ahead", w: 130, a: "r" }, { l: "Best lap", w: 116, a: "r" }]);
      spec = {
        file: tag + "-R" + R.no + "-" + safe(R.short || R.track) + (prov ? "-Provisional" : "-Official") + "-Result.png",
        eyebrow: S.eyebrow + " · Round " + R.no, title: R.track,
        meta: R.entries + " entries · " + R.starters + " starters" + (R.leadLap ? " · " + R.leadLap + " on the lead lap" : R.finishers ? " · " + R.finishers + " finishers" : ""),
        badge: prov ? { t: "Provisional", s: S.provisional.text || "Results pending stewards’ reviews", k: "prov" } : { t: "Official Result", k: "off" },
        cols: cols,
        rows: R.rows.map(function (x, i) {
          var out = x[8] === "o", t = S.teams[x[1]], c = [{ pos: i + 1, out: out }, { name: x[0], team: t }];
          if (S.hasLobbies) c.push({ t: x[2] || "", lobby: x[2] });
          c.push({ t: car(x[3]) || "–", st: "soft" });
          c.push({ t: x[4], font: "mono" });
          c.push(x[5] === "Winner" ? { t: "WINNER", st: "win" } : { t: x[5], font: "mono" });
          c.push({ t: x[6], font: "mono", st: "dim" });
          c.push({ t: x[7], font: "mono", st: secs(x[7]) === best ? "fl" : "" });
          return { cells: c, out: out, pod: !out && i < 3 };
        }),
        foot: "Gaps in seconds, as listed in the results. Purple = fastest lap of the race." + (S.resultNotes && S.resultNotes.length ? " " + S.resultNotes.join(" · ") + "." : "")
      };
    } else if (view === "drivers") {
      var arch = S.standingsFormat === "archive", st = S.standings, n = arch ? (S.roundCount || st[0][3].length) : S.rounds.length;
      var after = arch ? "Final standings" : "After Round " + S.standingsAfter;
      var dcols = [{ l: "Pos", w: 64, k: "pos" }, { l: "Driver / Team", w: 0, k: "drv" }];
      for (var i = 1; i <= n; i++) dcols.push({ l: "R" + i, w: n > 8 ? 54 : 62, a: "c" });
      dcols = dcols.concat(S.noPoints ? [{ l: "Starts", w: 76, a: "r" }, { l: "Wins", w: 66, a: "r" }, { l: "Podiums", w: 90, a: "r" }] : arch ? [{ l: "Total", w: 76, a: "r" }, { l: "Drop", w: 64, a: "r" }, { l: "Points", w: 86, a: "r" }] : [{ l: "Total", w: 72, a: "r" }, { l: "Drop", w: 62, a: "r" }, { l: "Gap", w: 64, a: "r" }, { l: "Points", w: 86, a: "r" }]);
      spec = {
        file: tag + "-Driver-Standings-" + (arch ? "Final" : "after-R" + S.standingsAfter) + ".png",
        eyebrow: S.eyebrow + " · " + after, title: "Championship Standings",
        meta: S.noPoints ? "No points system this season" : "Each driver's lowest round is dropped",
        badge: stdBadge, cols: dcols,
        rows: st.map(function (r) {
          var pos = parseInt(r[0], 10), t = arch ? clubTeam(r[1], S.season) : S.teams[r[2]];
          var c = [{ pos: isNaN(pos) ? r[0] : pos }, { name: r[1], team: t }].concat((arch ? r[3] : r[4]).map(roundCell));
          if (S.noPoints) c = c.concat([{ t: String(archiveStarts(r[3])), font: "mono", st: "dim" }, { t: String(r[3].filter(function (v) { return /p1$/.test(v); }).length), font: "mono" }, { t: String(r[3].filter(function (v) { return /p[123]$/.test(v); }).length), st: "pts" }]);
          else if (arch) c = c.concat([{ t: String(r[4]), font: "mono", st: "dim" }, { t: String(r[5] || 0), font: "mono", st: "dim" }, { t: String(r[6]), st: "pts" }]);
          else c = c.concat([{ t: String(r[5]), font: "mono", st: "dim" }, { t: String(r[6] || 0), font: "mono", st: "dim" }, { t: r[7] === "Leader" ? "–" : String(r[7]), font: "mono", st: "dim" }, { t: String(r[8]), st: "pts" }]);
          return { cells: c, pod: pos <= 3 };
        }),
        foot: S.noPoints ? "Finishing position in each round. No points system and no official champion this season \u2013 sorted by wins, then podiums. \u2013 = did not enter." : "Gold / silver / bronze = 1st / 2nd / 3rd in that round. Struck out = dropped round. * = DC, scored on finishing position. – = did not enter."
      };
    } else {
      var tc = TC[S.id], all = tcTable(S, S.id), m = all[0].pts.length, notRun = tc.notRun || [];
      var tab = all.filter(function (t) { return t.name !== "Privateer"; }), priv = all.filter(function (t) { return t.name === "Privateer"; });
      var rank = []; for (var r = 0; r < m; r++) { (function (r) { var vals = tab.map(function (t) { return t.pts[r]; }); rank.push(function (v) { return v > 0 ? 1 + vals.filter(function (w) { return w > v; }).length : 0; }); })(r); }
      var tcols = [{ l: "Pos", w: 64, k: "pos" }, { l: tc.manufacturers ? "Manufacturer" : "Team", w: 0, k: "drv" }];
      for (var j = 1; j <= m; j++) tcols.push({ l: "R" + j, w: m > 8 ? 56 : 64, a: "c" });
      tcols = tcols.concat([{ l: "Gap", w: 70, a: "r" }, { l: "Points", w: 90, a: "r" }]);
      var L = tab[0].total;
      var trow = function (t, i, isPriv) {
        return { pod: !isPriv && i < 3, cells: [{ pos: isPriv ? "–" : i + 1 }, { name: t.name, team: teamByName(t.name), sub: isPriv ? "not a team" : "" }].concat(t.pts.map(function (v, r) {
          if (notRun.indexOf(r + 1) >= 0) return { t: "NP", st: "dim", small: true };
          var k = isPriv ? 0 : rank[r](v); return { t: String(v), st: k && k <= 3 ? "p" + k : "" };
        })).concat([{ t: isPriv || !i ? "–" : "-" + (L - t.total), font: "mono", st: "dim" }, { t: String(t.total), st: "pts" }]) };
      };
      spec = {
        file: tag + "-Team-Standings-" + (finalSeason ? "Final" : "after-R" + m) + ".png",
        eyebrow: S.eyebrow + " · " + (finalSeason ? "Final standings" : "After Round " + m), title: tc.manufacturers ? "Manufacturer Standings" : "Team Standings",
        meta: tc.manufacturers ? "Manufacturers' championship" : "Each team's best three drivers score every round · " + tc.scale + "-" + (tc.scale - 1) + "-" + (tc.scale - 2) + "… down to 0",
        badge: stdBadge, cols: tcols,
        rows: tab.map(function (t, i) { return trow(t, i, false); }).concat(priv.map(function (t) { return trow(t, 0, true); })),
        foot: tc.manufacturers ? "Points as published by the club. Gold / silver / bronze = top three in that round." : "Team points by finishing order among each team's best three drivers (Privateers skipped). A DC doesn't score team points. Gold / silver / bronze = top three teams in that round."
      };
    }
    return Promise.all([
      document.fonts && document.fonts.load ? Promise.all(["700 50px 'Barlow Condensed'", "600 16px 'Barlow'", "500 16px 'Barlow'", "500 15px 'JetBrains Mono'"].map(function (f) { return document.fonts.load(f).catch(function () {}); })) : null,
      new Promise(function (res) { var im = new Image(); im.onload = function () { res(im); }; im.onerror = function () { res(null); }; im.src = "assets/logo.png"; })
    ]).then(function (got) { return drawCard(spec, got[1]); });

    function drawCard(sp, logo) {
      sp.eyebrow = sp.eyebrow.replace(/(^|[^\w])(?:GT7 )?Season (\d+)/, "$1GT7 Season $2");
      // Lay out columns: fixed widths, the flexible one (w: 0) takes what's left.
      var inner = W - PAD * 2, fixed = sp.cols.reduce(function (a, c) { return a + c.w; }, 0), flex = sp.cols.filter(function (c) { return !c.w; }).length;
      var x = PAD; sp.cols.forEach(function (c) { c.x = x; c.ww = c.w || Math.max(120, (inner - fixed) / (flex || 1)); x += c.ww; });
      var ROW = 50, HEAD = 42, top = 0;
      var cv = document.createElement("canvas"), g = cv.getContext("2d");
      var meas = function (font, t) { g.font = font; return g.measureText(t).width; };
      var wrap = function (font, t, maxW) { var words = String(t).split(" "), lines = [], cur = ""; words.forEach(function (w) { var tryL = cur ? cur + " " + w : w; if (meas(font, tryL) > maxW && cur) { lines.push(cur); cur = w; } else cur = tryL; }); if (cur) lines.push(cur); return lines; };
      var titleFont = "700 50px " + COND, footFont = "400 13px " + BODY;
      var titleLines = wrap(titleFont, sp.title.toUpperCase(), inner);
      var footLines = wrap(footFont, sp.foot, inner - 330);
      var tableTop = 6 + 38 + 70 + 26 + 10 + titleLines.length * 54 + 36;
      var H = tableTop + HEAD + sp.rows.length * ROW + 24 + Math.max(2, footLines.length) * 19 + 34;
      cv.width = W * SC; cv.height = H * SC; g.scale(SC, SC);
      var rr = function (x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
      var text = function (t, x, y, font, col, align, ls) { g.font = font; g.fillStyle = col; g.textAlign = align || "left"; g.textBaseline = "middle"; if (ls && "letterSpacing" in g) g.letterSpacing = ls; g.fillText(t, x, y); if ("letterSpacing" in g) g.letterSpacing = "0px"; };
      var fit = function (t, font, maxW) { if (meas(font, t) <= maxW) return t; while (t.length > 1 && meas(font, t + "…") > maxW) t = t.slice(0, -1); return t + "…"; };
      // Background + red stripe + glow
      g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
      var grd = g.createRadialGradient(W * 0.85, -60, 0, W * 0.85, -60, 700); grd.addColorStop(0, "rgba(215,38,30,.22)"); grd.addColorStop(1, "rgba(215,38,30,0)"); g.fillStyle = grd; g.fillRect(0, 0, W, 600);
      g.fillStyle = C.red; g.fillRect(0, 0, W, 6);
      // Header: logo + club name, badge on the right
      var hy = 6 + 38 + 31;
      if (logo) { g.save(); g.beginPath(); g.arc(PAD + 31, hy, 31, 0, Math.PI * 2); g.clip(); g.drawImage(logo, PAD, hy - 31, 62, 62); g.restore(); }
      text("TRAILBLAZERS eSPORTS RACING", PAD + 76, hy - 11, "700 22px " + COND, C.text, "left", "1.6px");
      text("RESULTS & STATISTICS", PAD + 76, hy + 14, "700 14px " + COND, C.redT, "left", "2.8px");
      var b = sp.badge, bx = W - PAD;
      if (b) {
        var bt = b.t.toUpperCase(), bw = Math.max(meas("700 14px " + COND, bt) + 2.2 * bt.length, b.s ? meas("400 13px " + BODY, b.s) : 0) + 30, bh = b.s ? 52 : 36, by = hy - bh / 2;
        var bc = b.k === "prov" ? "#E0A33A" : b.k === "off" ? C.red : "#4A4F58";
        rr(bx - bw, by, bw, bh, 8); g.fillStyle = b.k === "prov" ? "rgba(224,163,58,.10)" : b.k === "off" ? "rgba(215,38,30,.10)" : "rgba(255,255,255,.04)"; g.fill(); g.lineWidth = 1.5; g.strokeStyle = bc; g.stroke();
        text(bt, bx - 15, by + (b.s ? 17 : bh / 2), "700 14px " + COND, b.k === "prov" ? "#F2C46B" : "#fff", "right", "2.2px");
        if (b.s) text(b.s, bx - 15, by + 36, "400 13px " + BODY, "#D9C9A8", "right");
      }
      // Eyebrow, title, meta
      var ey = 6 + 38 + 70 + 13;
      text(fit(sp.eyebrow.toUpperCase(), "700 15px " + COND, inner * 0.92), PAD, ey, "700 15px " + COND, C.redT, "left", "2.1px");
      var ty = ey + 23 + 27; titleLines.forEach(function (l, i) { text(l, PAD, ty + i * 54, titleFont, C.text); });
      text(sp.meta, PAD, ty + (titleLines.length - 1) * 54 + 44, "400 16px " + BODY, C.muted);
      // Table panel
      top = tableTop; var th = HEAD + sp.rows.length * ROW;
      rr(PAD - 16, top, inner + 32, th, 12); g.fillStyle = C.panel; g.fill(); g.strokeStyle = C.border; g.lineWidth = 1; g.stroke();
      g.save(); rr(PAD - 16, top, inner + 32, th, 12); g.clip();
      g.fillStyle = C.head; g.fillRect(PAD - 16, top, inner + 32, HEAD);
      sp.cols.forEach(function (c) { var ax = c.a === "r" ? c.x + c.ww - 8 : c.a === "c" ? c.x + c.ww / 2 : c.x + (c.k === "pos" ? 4 : 8); text(c.l.toUpperCase(), ax, top + HEAD / 2, "700 12px " + COND, C.dim, c.a === "r" ? "right" : c.a === "c" ? "center" : "left", "1.2px"); });
      sp.rows.forEach(function (row, ri) {
        var y = top + HEAD + ri * ROW, cy = y + ROW / 2;
        if (row.pod) { g.fillStyle = "#13161B"; g.fillRect(PAD - 16, y, inner + 32, ROW); }
        if (row.out) { g.fillStyle = "#0D0E11"; g.fillRect(PAD - 16, y, inner + 32, ROW); }
        if (ri) { g.fillStyle = C.line; g.fillRect(PAD - 16, y, inner + 32, 1); }
        row.cells.forEach(function (v, ci) {
          var c = sp.cols[ci]; if (!c) return;
          if (c.k === "pos") {
            var p = v.pos, cc = p === 1 ? C.gold : p === 2 ? C.silver : p === 3 ? C.bronze : null;
            if (row.pod === false && (p === 1 || p === 2 || p === 3) && v.out) cc = null;
            rr(c.x + 4, cy - 16, 32, 32, 6);
            if (v.out) { g.setLineDash([3, 3]); g.strokeStyle = "#4A4F58"; g.stroke(); g.setLineDash([]); }
            else if (cc && row.pod) { g.fillStyle = cc; g.fill(); }
            else { g.fillStyle = "#1D2026"; g.fill(); g.strokeStyle = "#2C3038"; g.stroke(); }
            text(String(p), c.x + 20, cy + 1, "700 17px " + COND, cc && row.pod && !v.out ? "#141210" : v.out ? C.dim : C.text, "center");
            return;
          }
          if (c.k === "drv") {
            var tcol = colourOf(v.team), nameW = c.ww - 16;
            var tn = (v.team ? (v.team.name === v.name ? "" : v.team.name) : "Privateer") + (v.sub ? " · " + v.sub : "");
            if (!tn) { g.fillStyle = tcol; rr(c.x + 8, cy - 8, 4, 16, 2); g.fill(); text(fit(v.name, "600 16px " + BODY, nameW - 12), c.x + 18, cy, "600 16px " + BODY, "#F2F3F5"); return; }
            text(fit(v.name, "600 16px " + BODY, nameW), c.x + 8, cy - 9, "600 16px " + BODY, row.out ? C.dim : "#F2F3F5");
            g.fillStyle = tcol; rr(c.x + 8, cy + 4, 4, 12, 2); g.fill();
            text(fit(tn, "400 13px " + BODY, nameW - 12), c.x + 18, cy + 10, "400 13px " + BODY, C.muted);
            return;
          }
          var ax = c.a === "r" ? c.x + c.ww - 8 : c.a === "c" ? c.x + c.ww / 2 : c.x + 8, al = c.a === "r" ? "right" : c.a === "c" ? "center" : "left";
          if (v.lobby) { g.fillStyle = v.lobby === "Red" ? "#E5483F" : "#3C7BF0"; rr(c.x + 8, cy - 7, 4, 14, 2); g.fill(); text(v.lobby, c.x + 18, cy, "400 14px " + BODY, C.soft); return; }
          var f = v.font === "mono" ? "500 14px " + MONO : v.st === "pts" ? "700 19px " + COND : v.st === "win" ? "700 15px " + COND : v.small ? "600 12px " + COND : "500 15px " + BODY;
          var t = fit(String(v.t), f, c.ww - 12);
          if (/^p[123]$/.test(v.st)) {
            var w2 = Math.max(38, meas("600 14px " + MONO, t) + 14), pc = v.st === "p1" ? C.gold : v.st === "p2" ? C.silver : C.bronze;
            rr(ax - (al === "center" ? w2 / 2 : al === "right" ? w2 : 0), cy - 13, w2, 26, 6); g.fillStyle = pc; g.fill();
            text(t, al === "center" ? ax : al === "right" ? ax - w2 / 2 : ax + w2 / 2, cy + 1, "600 14px " + MONO, "#141210", "center"); return;
          }
          if (v.st === "fl") { var w3 = meas(f, t) + 14; rr(ax - w3, cy - 12, w3, 24, 4); g.fillStyle = C.flBg; g.fill(); text(t, ax - 7, cy + 1, f, C.fl, "right"); return; }
          var col = v.st === "dim" ? C.dim : v.st === "soft" ? C.soft : v.st === "drop" ? "#7D838C" : v.st === "pts" || v.st === "win" ? "#fff" : C.text;
          text(t, ax, cy + 1, v.st === "drop" ? "500 14px " + MONO : /^\d/.test(t) && c.a === "c" ? "500 14px " + MONO : f, col, al, v.st === "win" ? "1.2px" : null);
          if (v.st === "drop") { var dw = meas("500 14px " + MONO, t); var x0 = al === "center" ? ax - dw / 2 : al === "right" ? ax - dw : ax; g.fillStyle = "#7D838C"; g.fillRect(x0 - 1, cy, dw + 2, 1.5); }
        });
      });
      g.restore();
      // Footer
      var fy = top + th + 24;
      footLines.forEach(function (l, i) { text(l, PAD, fy + i * 19, footFont, C.dim); });
      text("7hryk5tbz7-creator.github.io/tbraceresults", W - PAD, fy, "400 13px " + BODY, C.soft, "right");
      return new Promise(function (res, rej) {
        cv.toBlob(function (blob) {
          if (!blob) return rej(new Error("no image"));
          var file = null; try { file = new File([blob], sp.file, { type: "image/png" }); } catch (e) {}
          var touch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
          if (touch && file && navigator.canShare && navigator.canShare({ files: [file] })) {
            navigator.share({ files: [file], title: sp.title }).then(res, function (e) { if (e && e.name === "AbortError") res(); else save(); });
          } else save();
          function save() {
            var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = sp.file; document.body.appendChild(a); a.click();
            setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500); res();
          }
        }, "image/png");
      });
    }
  }

  /* ---------------- Milestones (starts clubs every 100, points clubs every 1,000) ---------------- */
  function milestonesPage() {
    var DRD = driverRecordsData(), all = DRD.all, seasons = DRD.seasons;
    var active = {};
    ORDER.forEach(function (id) { (ALL[id].standings || []).forEach(function (r) { if (r[9] > 0) active[r[1]] = true; }); });
    var nums = uniq(seasons.map(function (x) { return x.season || 18; })).sort(function (a, b) { return a - b; });
    $("eyebrow").textContent = "Records · " + LABEL + " · Seasons " + nums[0] + "–" + nums[nums.length - 1];
    $("meta").textContent = "Career starts and points" + (SCOPE_ALL ? " across all three series" : " in the " + BASE.navLabel) + " · updated after every round";
    document.title = "Milestones · " + LABEL + " · TB Race Results";
    var fmt = function (n) { return Number(n).toLocaleString("en-AU"); };
    var bar = function (o) { return '<span class="bar" style="background:' + ((o.team && o.team.colour) || "#8C939D") + '"></span>'; };
    var KINDS = [["starts", 100, "starts"], ["points", 1000, "points"]];
    // Closing in: current drivers nearest their next club.
    var near = [];
    KINDS.forEach(function (k) {
      near = near.concat(all.filter(function (o) { return active[o.name] && o[k[0]] > 0; }).map(function (o) {
        var next = (Math.floor(o[k[0]] / k[1]) + 1) * k[1];
        return { o: o, k: k, next: next, go: next - o[k[0]], pct: Math.round((o[k[0]] - (next - k[1])) / k[1] * 100) };
      }).sort(function (a, b) { return a.go - b.go; }).slice(0, 4));
    });
    var leader = function (key) { return all.slice().sort(function (a, b) { return b[key] - a[key]; })[0]; };
    var LS = leader("starts"), LP = leader("points");
    var firstClub = function (L, step, unit) {
      var next = (Math.floor(L[unit] / step) + 1) * step;
      return { next: next, go: next - L[unit] };
    };
    var fs = firstClub(LS, 100, "starts"), fp = firstClub(LP, 1000, "points");
    $("tiles").innerHTML =
      '<div class="tile"><div class="label">Most starts</div><div class="tile-big">' + fmt(LS.starts) + '</div><div class="sub">' + esc(LS.name) + (active[LS.name] ? " · " + fs.go + " from the " + fmt(fs.next) + " club – no one there yet" : "") + "</div></div>" +
      '<div class="tile"><div class="label">Most points</div><div class="tile-big">' + fmt(LP.points) + '</div><div class="sub">' + esc(LP.name) + " · in the " + fmt(Math.floor(LP.points / 1000) * 1000) + " club</div></div>" +
      '<div class="tile"><div class="label">Club members</div><div class="tile-big">' + all.filter(function (o) { return o.starts >= 100; }).length + " · " + all.filter(function (o) { return o.points >= 1000; }).length + '</div><div class="sub">100+ starts · 1,000+ points</div></div>';
    $("near").innerHTML = near.length ? near.map(function (n) {
      return '<div class="ms"><div class="num">' + fmt(n.go) + '<small>to go</small></div><div class="msb"><div class="who">' + bar(n.o) + plink(n.o.name) + '</div><div class="what">' + fmt(n.next) + " " + n.k[2] + " club · on " + fmt(n.o[n.k[0]]) + '</div><div class="prog"><i style="width:' + n.pct + '%"></i></div></div></div>';
    }).join("") : '<div class="none">No current drivers yet.</div>';
    var clubs = function (key, step, unit) {
      var top = Math.floor(Math.max.apply(null, all.map(function (o) { return o[key]; })) / step) * step, h = "";
      for (var m = top; m >= step; m -= step) {
        var ds = all.filter(function (o) { return o[key] >= m && o[key] < m + step; }).sort(function (a, b) { return b[key] - a[key]; });
        if (!ds.length) continue;
        var total = all.filter(function (o) { return o[key] >= m; }).length;
        h += '<div class="club"><div class="ch"><span class="cn">' + fmt(m) + '</span><span class="cl">' + unit + ' club</span><span class="cc">' + total + " driver" + (total > 1 ? "s" : "") + '</span></div><div class="cd">' +
          ds.map(function (o) { return '<span class="dp' + (active[o.name] ? "" : " old") + '" title="' + (active[o.name] ? "Racing this season" : "Not racing this season") + '">' + bar(o) + plink(o.name) + " <b>" + fmt(o[key]) + "</b></span>"; }).join("") + "</div></div>";
      }
      return h || '<div class="none">No one yet.</div>';
    };
    $("clubsStarts").innerHTML = clubs("starts", 100, "starts");
    $("clubsPoints").innerHTML = clubs("points", 1000, "points");
    $("rules").textContent = "Starts are counted as on Driver Records (classified finishes, RGQ, DNF, CC and DQ; not DNS). Points are each season's championship points added together (after drops and penalties; GT7 Season 1 had no points). Seasons 2–10 used the field-size points system and Seasons 11–18 score 45 for a win, so recent seasons add more points. Each driver is shown in their highest club; faded = not racing this season." + (SCOPE_ALL ? " All Time adds the three series together." : "");
  }

  /* ---------------- Season calendar (all three series) ---------------- */
  function seasonCalPage() {
    var CAL = window.CALENDAR;
    document.title = "Season Calendar · TB Race Results";
    if (!CAL) { $("cal").innerHTML = '<div class="none">The calendar for this season isn’t on the site yet.</div>'; return; }
    var ids = ORDER.slice(0, 3), DAYS = ["Tuesday", "Thursday", "Friday"];
    var byNo = ids.map(function (id) { var m = {}; (ALL[id].rounds || []).forEach(function (r) { m[r.no] = r; }); return m; });
    var allDone = function (no) { return byNo.every(function (m) { return m[no]; }); };
    var next = CAL.rounds.filter(function (r) { return !allDone(r.no); })[0];
    var doneRounds = CAL.rounds.filter(function (r) { return allDone(r.no); }).length;
    var races = byNo.reduce(function (a, m) { return a + Object.keys(m).length; }, 0);
    var last = CAL.rounds[CAL.rounds.length - 1];
    $("eyebrow").textContent = "Season " + CAL.season + " · All three series";
    $("meta").textContent = "Same track for all three series each round · " + ids.map(function (id, i) { return ALL[id].navLabel + " (" + DAYS[i] + ")"; }).join(", ");
    $("tiles").innerHTML =
      (next ? '<div class="tile calnexttile"><div class="label">Next up · Round ' + next.no + '</div><div class="tile-big">' + esc(next.track) + '</div><div class="sub">' + next.dates.map(esc).join(" · ") + "</div></div>" :
        '<div class="tile"><div class="label">Season</div><div class="tile-big">Complete</div></div>') +
      '<div class="tile"><div class="label">Rounds completed</div><div class="tile-big">' + doneRounds + " of " + CAL.rounds.length + '</div><div class="sub">' + races + " races run across the three series</div></div>" +
      '<div class="tile"><div class="label">Final round · Round ' + last.no + '</div><div class="tile-big">' + esc(last.track) + (last.tbc ? ' <span class="tbc">TBC</span>' : "") + '</div><div class="sub">' + last.dates.map(esc).join(" · ") + "</div></div>";
    $("cal").innerHTML = '<div class="calhead"><span>Round</span><span>Track</span>' + DAYS.map(function (d) { return "<span>" + d + "</span>"; }).join("") + "</div>" +
      CAL.rounds.map(function (r) {
        var isNext = next && r.no === next.no;
        var cells = ids.map(function (id, i) {
          var x = ALL[id], res = byNo[i][r.no];
          if (res) {
            var w = res.rows.filter(function (y) { return y[5] === "Winner"; })[0] || res.rows[0], t = x.teams[w[1]] || { colour: "#8C939D" };
            return '<a class="cs done" href="' + x.pages.results + "#round=" + r.no + '"><span class="sn">' + esc(x.navLabel) + '</span><span class="dt"><span class="ok" aria-label="Done">✓</span>' + esc(r.dates[i]) + '</span><span class="wn"><span class="bar" style="background:' + t.colour + '"></span>' + esc(w[0]) + "</span></a>";
          }
          return '<div class="cs"><span class="sn">' + esc(x.navLabel) + '</span><span class="dt">' + esc(r.dates[i]) + "</span></div>";
        }).join("");
        return '<div class="cr' + (isNext ? " nx" : "") + '"><div class="rn">Rd<b>' + r.no + '</b></div><div class="tk">' + esc(r.track) + (r.tbc ? ' <span class="tbc" title="Track still to be decided by the club">TBC</span>' : "") + (isNext ? "<small>Next up</small>" : "") + "</div>" + cells + "</div>";
      }).join("");
    $("rules").textContent = "✓ = raced – the winner is shown (top lobby when there are two); tap for the results. TBC = the club is still choosing the track.";
  }

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
  if (page === "milestones") milestonesPage();
  if (page === "seasoncal") seasonCalPage();
  if (page === "driver") driverPage();
  if (page === "compare") comparePage();
  dlButton();
  if (page === "home") driverSearch(document.querySelector(".sub3"), searchList(driverRecordsData(true)));

  /* ---------------- Discord buttons (home page + bottom of every page) ---------------- */
  // Set DISCORD_URL to the server's invite link (never-expiring) to switch the buttons on; until then they show "Coming soon".
  var DISCORD_URL = "";
  (function discord() {
    var main = document.querySelector("main"); if (!main) return;
    var icon = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4.5 3.5V17H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm4 6.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zm4 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zm4 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z"/></svg>';
    var soon = DISCORD_URL ? "" : '<span class="dcsoon">Coming soon</span>';
    var btn = function (cls, inner) {
      return DISCORD_URL ? '<a class="' + cls + '" href="' + DISCORD_URL + '" target="_blank" rel="noopener">' + inner + "</a>"
        : '<span class="' + cls + ' off" aria-disabled="true" title="Discord link coming soon">' + inner + "</span>";
    };
    if (page === "home") {
      var sub = document.querySelector(".dsearch") || document.querySelector(".sub3");
      if (sub && !document.querySelector(".dcbtn")) sub.insertAdjacentHTML("afterend", '<div class="dcwrap">' + btn("dcbtn", icon + "Join us on Discord<small>Chat, race briefings and results</small>") + soon + "</div>");
    }
    if (!document.querySelector(".dcfoot")) {
      var f = document.createElement("section"); f.className = "dcfoot"; f.setAttribute("aria-label", "Discord");
      f.innerHTML = "<div><b>Race with us</b><span class=\"dctx\">Join the Trailblazers Discord for race nights, briefings and lobby details.</span></div><div class=\"dcact\">" + btn("dcgo", icon + "Join on Discord") + soon + "</div>";
      main.appendChild(f);
    }
  })();

  if (mainEl) gameLabels(mainEl);
})();

