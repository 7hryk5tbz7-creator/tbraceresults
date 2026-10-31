// One Make Championship, Season 7 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 7 points sheet. Every subtotal, drop and total was checked; eight of the ten rounds match the
// starters-based scale. Rounds 5 and 6 each have two drivers on 5 (R5 Hamitothebone / MalevolentOne666, R6 MalevolentOne666 /
// Timhillsygaming) — kept as published. Ties on 60 (CmeCrash ahead of Mcdivott) and 5 (Dojo426 ahead of hazza5432) are in countback order.
// Names: Ando787 = S7R_Ando787, Iphonedoc = iphonedoc (Privateer, #420 in Season 7 – confirmed), Masomarvel87 = MasoMarvel87,
// tim_turtle_79 = Tim_turtle_79, Tony2sips = Tonyaudio1, mcdivott = Mcdivott. A 0 on the sheet = did not race.
// Teams: from this sheet (data/club-teams.js, SEASON_TEAMS[7]); Team RNR = MC Motorsport's name up to Season 8.

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s7"] = {
  id: "wrx-evo-gr4-s7",
  group: "wrx-evo-gr4",
  season: 7,
  navLabel: "Tuesday Series",
  title: "One Make Championship Season 7",
  eyebrow: "One Make Championship · Season 7 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 21 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 7 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 18 starters: 1st 24, 2nd 22, 3rd 20, 4th 19 … last 5). Rounds 5 and 6 are shown as the club scored them. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RNR was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 7.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["–","24p1","21p1","19p1","20p1","18p2","18p2","20p2","21p1","17p2"],178,0,178,0],
    ["2","S7R_Ando787","787",["19p1","16","–","17p2","18p2","20p1","20p1","22p1","–","19p1"],151,0,151,0],
    ["3","Pjmack75","21",["15p3","22p2","16","7","16p3","10","15","17","19p2","14"],151,-7,144,0],
    ["4","Kezaudio","72",["12","13","17p3","5","13","12","14","16","17p3","11"],130,-5,125,0],
    ["5","MAD_MITCH_76","76",["10","18","14","12","14","15","13","13","15","9"],133,-10,123,0],
    ["6","iphonedoc","420",["9","7","9","13","15","16p3","16p3","18p3","10","15p3"],128,-7,121,0],
    ["7","MasoMarvel87","333",["7","17","13","9","–","13","12","15","12","8"],106,0,106,0],
    ["8","Trickybrewer","92",["14","11","10","–","12","8","10","14","13","10"],102,0,102,0],
    ["9","Yoda_Raptor","775",["–","8","11","15p3","9","9","5","12","16","13"],98,0,98,0],
    ["10","P-Toots","43",["11","15","15","10","–","–","9","11","14","12"],97,0,97,0],
    ["11","Tim_turtle_79","79",["13","12","5","14","8","11","11","10","11","6"],101,-5,96,0],
    ["12","MajorWatts","36",["17p2","20p3","19p2","–","–","–","–","–","9","–"],65,0,65,0],
    ["13","Hamitothebone","228",["–","14","12","11","11","–","–","9","–","5"],62,0,62,0],
    ["14","Tonyaudio1","44",["6","6","7","6","7","6","–","8","8","7"],61,0,61,0],
    ["15","CmeCrash","33",["–","19","8","–","6","14","–","7","6","–"],60,0,60,0],
    ["16","Mcdivott","74",["5","9","6","8","10","7","8","–","7","–"],60,0,60,0],
    ["17","MalevolentOne666","666",["8","10","–","–","5","5","–","–","–","–"],28,0,28,0],
    ["18","Timhillsygaming","5",["–","–","–","–","–","5","6","5","5","–"],21,0,21,0],
    ["19","Andruid966","966",["–","–","–","–","–","–","7","6","–","–"],13,0,13,0],
    ["20","Dojo426","426",["–","–","–","–","5","–","–","–","–","–"],5,0,5,0],
    ["21","hazza5432","25",["–","5","–","–","–","–","–","–","–","–"],5,0,5,0]
  ]
};
