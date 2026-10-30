// Narlydude71 Memorial Cup GT4 Championship, Season 8 (Narly Cup, Thursday series) — final standings (archive).
// Transcribed from the club's Season 8 points sheet (no race numbers on the sheet). Every subtotal, drop and total was checked;
// nine of the ten rounds match the starters-based scale. Round 7 (15 scorers) has the winner on 20 and 2nd on 18 instead of 21 and 19
// (Colin_t24, Dissposable_Hero) — kept as published (club confirmed).
// Ties ordered by countback (the club's sheet listed them the other way round): on 97 MajorWatts (two 3rds) ahead of Kezaudio (best 4th);
// on 6 Simmy_D (17th) ahead of Dunky_rl (18th). Four drivers with no races share 25th.
// Names: Masomarvel = MasoMarvel87, tim_turtle_79 = Tim_turtle_79, Ando787 = S7R_Ando787, Tony2Sips = Tonyaudio1, r0b_B021 = R0B_B021,
// Simmy__D = Simmy_D, Dirtymonkey699 = DirtyMonkey699. A 0 on the sheet = did not race.
// Teams: data/club-teams.js, SEASON_TEAMS[8]. No Team RNR drivers in this series. Dunky_rl and PingTwoHigh69 have no team yet.

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s8"] = {
  id: "narly-cup-s8",
  group: "narly-cup",
  season: 8,
  navLabel: "Narly Cup",
  title: "Narlydude71 Memorial Cup GT4 Championship Season 8",
  eyebrow: "Narlydude71 Memorial Cup GT4 Championship · Season 8 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 28 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 8 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 19 starters: 1st 25, 2nd 23, 3rd 21, 4th 20 … last 5). Round 7 is shown as the club scored it. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 8, with the ties on 97 and 6 ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","",["23p2","24p1","21p1","21p1","19p1","16p2","20p1","12","15p3","14p2"],185,-12,173,0],
    ["2","Pjmack75","",["19","22p2","15","–","11","–","17p3","18p1","19p1","8"],129,0,129,0],
    ["3","GLR_Scotty","",["15","11","19p2","16","17p2","14p3","11","13","10","12p3"],138,-10,128,0],
    ["4","MAD_MITCH_76","",["10","19","11","11","15p3","13","14","9","17p2","11"],130,-9,121,0],
    ["5","MasoMarvel87","",["16","15","16","19p2","8","12","12","16p2","12","–"],126,-8,118,0],
    ["6","P-Toots","",["21p3","18","14","12","13","11","10","11","7","–"],117,-7,110,0],
    ["7","MajorWatts","",["8","20p3","–","17p3","14","–","15","–","13","10"],97,0,97,0],
    ["8","Kezaudio","",["17","5","13","15","12","9","16","10","5","–"],102,-5,97,0],
    ["9","Tim_turtle_79","",["–","17","9","9","10","10","8","8","14","9"],94,0,94,0],
    ["10","Trickybrewer","",["9","14","12","10","9","–","13","14p3","9","–"],90,0,90,0],
    ["11","S7R_Ando787","",["25p1","–","–","14","5","18p1","–","–","–","16p1"],78,0,78,0],
    ["12","Dissposable_Hero","",["14","16","17p3","–","–","–","18p2","–","–","–"],65,0,65,0],
    ["13","Mcdivott","",["7","8","7","7","7","7","–","–","8","6"],57,0,57,0],
    ["14","Tonyaudio1","",["18","13","10","8","–","–","–","–","–","–"],49,0,49,0],
    ["15","simple-crackers9","",["–","7","6","–","6","–","6","7","11","–"],43,0,43,0],
    ["16","R0B_B021","",["12","–","–","–","–","6","7","5","–","7"],37,0,37,0],
    ["17","jmillsy85","",["13","–","8","13","–","–","–","–","–","–"],34,0,34,0],
    ["18","Steve_73_GOOF","",["–","10","–","6","–","8","9","–","–","–"],33,0,33,0],
    ["19","PingTwoHigh69","",["20","12","–","–","–","–","–","–","–","–"],32,0,32,0],
    ["20","Forza5_308","",["–","–","–","–","–","5","5","6","6","5"],27,0,27,0],
    ["21","Timhillsygaming","",["5","9","5","5","–","–","–","–","–","–"],24,0,24,0],
    ["22","CmeCrash","",["11","–","–","–","–","–","–","–","–","–"],11,0,11,0],
    ["23","Simmy_D","",["–","6","–","–","–","–","–","–","–","–"],6,0,6,0],
    ["24","Dunky_rl","",["6","–","–","–","–","–","–","–","–","–"],6,0,6,0],
    ["25","DirtyMonkey699","",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["25","Andruid966","",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["25","Yoda_Raptor","",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["25","O-PUNCHY-_-P","",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
