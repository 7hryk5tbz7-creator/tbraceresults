// GR4 Championship, Season 7 (Narly Cup, Thursday series) — final standings (archive).
// Transcribed from the club's Season 7 points sheet. Every subtotal, drop and total was checked; seven of the ten rounds match the
// starters-based scale. Rounds 6 and 8 each have two drivers on 5, and Round 9 (15 scorers) uses the 13-starter ladder with two drivers
// on 8 and two on 5 — all kept as published.
// Ties ordered by countback (the club's sheet listed both the other way round): on 61 Madrick1972 (best 8th) ahead of Mcdivott (11th);
// on 7 MajorWatts (11th) ahead of RSR_Robbo-Sport (15th).
// Names: Masomarvel87 = MasoMarvel87, tim_turtle_79 = Tim_turtle_79, Tony2sips = Tonyaudio1, mcdivott = Mcdivott, Ando787 = S7R_Ando787.
// A 0 on the sheet = did not race. Teams: from this sheet (data/club-teams.js, SEASON_TEAMS[7]).

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s7"] = {
  id: "narly-cup-s7",
  group: "narly-cup",
  season: 7,
  navLabel: "Narly Cup",
  title: "GR4 Championship Season 7",
  eyebrow: "GR4 Championship · Season 7 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 25 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 7 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 17 starters: 1st 23, 2nd 21, 3rd 19, 4th 18 … last 5). Rounds 6, 8 and 9 are shown as the club scored them. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RNR was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 7, with the ties on 61 and 7 ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["–","22p1","21p1","22p1","20p2","14","18p2","19p1","17p2","17p2"],170,0,170,0],
    ["2","GLR_Scotty","37",["17","–","19p2","20p2","15","22p1","20p1","15p3","15p3","19p1"],162,0,162,0],
    ["3","MAD_MITCH_76","76",["18","12","17p3","18p3","22p1","20p2","9","8","13","14"],151,-8,143,0],
    ["4","Tim_turtle_79","79",["10","16","15","15","14","18p3","15","13","12","10"],138,-10,128,0],
    ["5","MasoMarvel87","333",["16","17","13","10","10","11","13","17p2","14","15p3"],136,-10,126,0],
    ["6","Kezaudio","72",["11","11","7","14","18p3","16","–","14","11","11"],113,0,113,0],
    ["7","Trickybrewer","92",["5","8","16","–","12","15","10","12","8","13"],99,0,99,0],
    ["8","Yoda_Raptor","775",["–","7","10","17","11","9","12","9","9","9"],93,0,93,0],
    ["9","Hamitothebone","228",["–","18p3","14","–","17","17","16p3","–","–","5"],87,0,87,0],
    ["10","P-Toots","43",["15","–","12","6","–","13","11","6","10","12"],85,0,85,0],
    ["11","Tonyaudio1","44",["9","6","8","13","8","12","–","11","7","8"],82,0,82,0],
    ["12","Madrick1972","15",["8","10","9","9","–","–","7","10","8","–"],61,0,61,0],
    ["13","Mcdivott","74",["6","9","6","8","9","10","6","7","6","–"],67,-6,61,0],
    ["14","MalevolentOne666","666",["14","13","–","12","16","5","–","–","–","–"],60,0,60,0],
    ["15","Pjmack75","21",["21p2","20p2","–","16","–","–","–","–","–","–"],57,0,57,0],
    ["16","Soulslayer_71","50",["–","14","11","11","5","–","14","–","–","–"],55,0,55,0],
    ["17","CmeCrash","33",["13","5","–","–","13","8","–","5","–","–"],44,0,44,0],
    ["18","S7R_Ando787","787",["23p1","–","–","–","–","–","–","–","19p1","–"],42,0,42,0],
    ["19","Timhillsygaming","5",["–","–","–","7","7","6","8","–","5","6"],39,0,39,0],
    ["20","simple-crackers9","16",["–","–","5","5","6","7","–","–","5","–"],28,0,28,0],
    ["21","Frosty5275","54",["12","15","–","–","–","–","–","–","–","–"],27,0,27,0],
    ["22","Hoads2285","285",["19p3","–","–","–","–","–","–","–","–","–"],19,0,19,0],
    ["23","Andruid966","966",["–","–","–","–","–","5","5","5","–","–"],15,0,15,0],
    ["24","MajorWatts","36",["–","–","–","–","–","–","–","–","–","7"],7,0,7,0],
    ["25","RSR_Robbo-Sport","20",["7","–","–","–","–","–","–","–","–","–"],7,0,7,0]
  ]
};
