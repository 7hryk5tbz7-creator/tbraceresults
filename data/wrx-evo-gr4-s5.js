// WRX Championship, Season 5 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 5 points sheet. Every subtotal, drop and total was checked; six of the ten rounds match the
// starters-based scale. Rounds 1, 3 and 7 (repeated values) and Round 8 (14-starter ladder with no 6) are kept as published. No ties.
// P-Toots and Tony2sips (marked as sitting out) did race, so they are included. Three drivers with no races share 28th.
// Names: Masomarvel87 = MasoMarvel87, r0b_B021 = R0B_B021, Fly- balding072 = Fly-balding072, Dirtymonkey699 = DirtyMonkey699,
// Cmecrash = CmeCrash, Tony2sips = Tonyaudio1. A 0 on the sheet = did not race.
// Teams: Season 5 entry list (SEASON_TEAMS[5]); Yoda_Raptor, hazza5432, DK666_Racing and IronValkyrie weren't on it and are Privateer
// until Season 4 data arrives (club's decision).

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s5"] = {
  id: "wrx-evo-gr4-s5",
  group: "wrx-evo-gr4",
  season: 5,
  navLabel: "Tuesday Series",
  title: "WRX Championship Season 5",
  eyebrow: "WRX Championship · Season 5 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 30 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 5 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 20 starters: 1st 26, 2nd 24, 3rd 22, 4th 21 … last 5). Rounds 1, 3, 7 and 8 are shown as the club scored them. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RNR was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 5.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["22","26p1","12","24p1","25p1","23p1","22p1","20p1","19p1","10"],203,-12,191,0],
    ["2","MajorWatts","36",["28p1","22p3","14","15","23p2","21p2","20p2","–","15p3","17p1"],175,0,175,0],
    ["3","Tim_turtle_79","79",["26p2","19","17","17","18","12","15","7","17p2","11"],159,-7,152,0],
    ["4","K3N-MUTT","500",["14","20","19p3","22p2","–","13","17","18p2","10","15p2"],148,0,148,0],
    ["5","MAD_MITCH_76","76",["23","18","23p1","13","17","15","11","10","13","13p3"],156,-10,146,0],
    ["6","MasoMarvel87","333",["10","12","11","12","19","18","18p3","16p3","12","9"],137,-10,127,0],
    ["7","Yoda_Raptor","775",["19","15","21p2","9","21p3","16","7","9","11","5"],133,-7,126,0],
    ["8","Kezaudio","72",["20","–","–","19","6","19p3","6","15","14","–"],99,0,99,0],
    ["9","Trickybrewer","92",["17","14","6","11","13","11","10","8","7","6"],103,-6,97,0],
    ["10","Steve_73_GOOF","73",["13","16","–","–","10","10","16","14","6","8"],93,0,93,0],
    ["11","Soulslayer_71","50",["16","8","7","7","15","6","9","13","–","–"],81,0,81,0],
    ["12","STAFTURBO","77",["5","9","15","6","16","9","14","5","–","–"],79,0,79,0],
    ["13","MalevolentOne666","666",["11","10","10","16","–","17","–","12","–","–"],76,0,76,0],
    ["14","hazza5432","25",["8","17","8","20p3","20","–","–","–","–","–"],73,0,73,0],
    ["15","R0B_B021","7",["5","11","13","18","5","–","13","–","–","7"],72,0,72,0],
    ["16","Dissposable_Hero","51",["24p3","24p2","19p3","–","–","–","–","–","–","–"],67,0,67,0],
    ["17","Fly-balding072","131",["7","7","18","10","12","5","5","–","–","–"],64,0,64,0],
    ["18","DanZambe","2",["15","21","5","5","9","7","–","–","–","–"],62,0,62,0],
    ["19","DirtyMonkey699","411",["6","6","9","14","11","14","–","–","–","–"],60,0,60,0],
    ["20","Hamitothebone","228",["18","–","16","–","–","–","6","–","–","12"],52,0,52,0],
    ["21","CmeCrash","33",["21","13","5","–","–","–","–","–","–","–"],39,0,39,0],
    ["22","Frosty5275","54",["–","–","–","–","14","–","12","–","9","–"],35,0,35,0],
    ["23","BikeGooRoo","803",["9","5","–","8","7","–","–","–","5","–"],34,0,34,0],
    ["24","Tonyaudio1","44",["–","–","–","–","8","8","11","–","–","–"],27,0,27,0],
    ["25","P-Toots","43",["–","–","–","–","–","–","8","–","8","–"],16,0,16,0],
    ["26","Spannshouse","19",["12","–","–","–","–","–","–","–","–","–"],12,0,12,0],
    ["27","Danhocko","17",["–","–","–","–","–","–","–","11","–","–"],11,0,11,0],
    ["28","SquatBenchDeadli","555",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["28","DK666_Racing","97",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["28","IronValkyrie","47",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
