// DTM Championship, Season 6 (Narly Cup, Thursday series) — final standings (archive). Season 6 ran 8 rounds in this series.
// Transcribed from the club's Season 6 points sheet. Every subtotal, drop and total was checked; seven of the eight rounds match the
// starters-based scale. Round 2 (two drivers on 5) is kept as published. The sheet's rows were not in points order; the table is ordered
// by total, with ties by countback (the club's sheet listed them differently): on 63 Tim_turtle_79 (two 4ths) ahead of MAD_MITCH_76 (one 4th);
// on 31 Yoda_Raptor (3rd), Kezaudio (4th), Hamitothebone (5th). Three drivers with no races share 17th.
// Names: Ando787 = S7R_Ando787, tim_turtle_79 = Tim_turtle_79, Dirtymonkey699 = DirtyMonkey699. A 0 on the sheet = did not race.
// Teams: Season 6 entry list (data/club-teams.js, SEASON_TEAMS[6]).

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s6"] = {
  id: "narly-cup-s6",
  group: "narly-cup",
  season: 6,
  navLabel: "Narly Cup",
  title: "DTM Championship Season 6",
  eyebrow: "DTM Championship · Season 6 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 19 drivers · 8 rounds · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 6 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 12 starters: 1st 18, 2nd 16, 3rd 14, 4th 13 … last 5). Round 2 is shown as the club scored it. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RNR was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 6, put in points order, with the ties on 63 and 31 ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD8], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 8,
  standings: [
    ["1","Colin_t24","85",["14p3","13","15p1","13p2","12p2","12p2","13p2","12p2"],104,-12,92,0],
    ["2","S7R_Ando787","787",["18p1","18p1","–","15p1","10p3","14p1","–","14p1"],89,0,89,0],
    ["3","N-spud-P666","32",["5","16p2","13p2","11p3","14p1","10p3","10","–"],79,-5,74,0],
    ["4","Tim_turtle_79","79",["10","10","10","8","9","5","6","10p3"],68,-5,63,0],
    ["5","MAD_MITCH_76","76",["12","7","11p3","9","8","9","8","6"],70,-7,63,0],
    ["6","Rusty-Nutz-75","269",["13","12","7","7","–","6","7","7"],59,0,59,0],
    ["7","SpeedySnoopyAU","13",["16p2","14p3","–","10","–","–","15p1","–"],55,0,55,0],
    ["8","Trickybrewer","92",["9","5","6","5","6","8","5","5"],49,-5,44,0],
    ["9","Yoda_Raptor","775",["–","6","8","6","–","–","11p3","–"],31,0,31,0],
    ["10","Kezaudio","72",["11","11","–","–","–","–","–","9"],31,0,31,0],
    ["11","Hamitothebone","228",["8","8","–","–","7","–","–","8"],31,0,31,0],
    ["12","SmashingApexx","11",["–","9","–","–","5","7","9","–"],30,0,30,0],
    ["13","Soulslayer_71","50",["7","5","–","–","–","–","–","–"],12,0,12,0],
    ["14","Bozza777","777",["–","–","9","–","–","–","–","–"],9,0,9,0],
    ["15","ricreene","69",["6","–","–","–","–","–","–","–"],6,0,6,0],
    ["16","DirtyMonkey699","411",["–","–","5","–","–","–","–","–"],5,0,5,0],
    ["17","Bluebloss","4",["–","–","–","–","–","–","–","–"],0,0,0,0],
    ["17","MalevolentOne666","666",["–","–","–","–","–","–","–","–"],0,0,0,0],
    ["17","Steve_73_GOOF","73",["–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
