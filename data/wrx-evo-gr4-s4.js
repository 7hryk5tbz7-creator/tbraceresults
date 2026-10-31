// Porsche Championship, Season 4 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 4 points sheet. Every subtotal and total was checked.
// Points: finishers score on the usual starters-based scale (last 5, +1 per place, +1 bonus for 2nd, +2 for the win); in Rounds 1, 2, 3, 6, 8
// and 10 some extra drivers below the ladder score 1–5 (probably non-finishers). All kept as published.
// Drop rule used by the club in Season 4 (confirmed): each driver's lowest of all 10 rounds, final round included, and only for drivers who
// raced every round (so Colin_t24 and Tim_turtle_79 drop their Round 10 score; SquatBenchDeadli, who missed Round 10, has no drop).
// Tie on 66 ordered by countback (the club's sheet listed it the other way round): Dissposable_Hero (two 3rds) ahead of hazza5432 (6th).
// Names: Masomarvel87 = MasoMarvel87, Cmecrash = CmeCrash, r0b_B021 = R0B_B021, Ricreene = ricreene, Lufthar = lufthar.
// CerbHoppxr is #11 on the sheet; #246 used, as on the entry list (club request). A 0 on the sheet = did not race.
// Teams: Season 4 entry list (SEASON_TEAMS[4]); hazza5432, IronValkyrie and Subzero-heart Privateer (confirmed).

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s4"] = {
  id: "wrx-evo-gr4-s4",
  group: "wrx-evo-gr4",
  season: 4,
  navLabel: "Tuesday Series",
  title: "Porsche Championship Season 4",
  eyebrow: "Porsche Championship · Season 4 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 30 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 4 points depend on the number of finishers in each race: last finisher scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 19 finishers: 1st 25, 2nd 23, 3rd 21, 4th 20 … last 5). In some rounds extra drivers below the finishers scored 1–5 points; all rounds are shown as the club scored them. DROP in Season 4 = the driver's lowest of all 10 rounds, including the final round, and only for drivers who raced every round. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 4, with the tie on 66 ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["22p2","24","21p1","25p1","23p2","21p1","21p1","18p1","21p1","13p3"],209,-13,196,0],
    ["2","Tim_turtle_79","79",["14","27p2","16","21p3","20","13","19p2","16p2","15","10"],171,-10,161,0],
    ["3","MAD_MITCH_76","76",["12","23","11","20","16","8","13","11","13","15p2"],142,-8,134,0],
    ["4","MajorWatts","36",["13","10","12","19","18","15","14","10","14","17p1"],142,-10,132,0],
    ["5","DanZambe","2",["11","15","15","18","9","17p3","16","14p3","12","11"],138,-9,129,0],
    ["6","SquatBenchDeadli","555",["15","20","9","17","12","4","17p3","12","19p2","–"],125,0,125,0],
    ["7","taste_the_pain42","13",["24p1","29p1","–","23p2","25p1","19p2","–","–","–","–"],120,0,120,0],
    ["8","Trickybrewer","92",["19","12","6","10","15","16","15","7","6","9"],115,-6,109,0],
    ["9","MasoMarvel87","333",["4","17","4","13","17","10","10","5","10","7"],97,-4,93,0],
    ["10","Soulslayer_71","50",["10","9","4","11","11","9","8","13","8","8"],91,-4,87,0],
    ["11","Danhocko","17",["9","–","19p2","15","21p3","12","–","3","–","–"],79,0,79,0],
    ["12","Yoda_Raptor","775",["5","18","7","16","13","7","7","–","–","5"],78,0,78,0],
    ["13","Steve_73_GOOF","73",["5","16","13","8","8","6","11","–","9","–"],76,0,76,0],
    ["14","MrDonovan","27",["17","13","14","–","14","14","–","–","–","–"],72,0,72,0],
    ["15","Dissposable_Hero","51",["–","25p3","5","–","19","–","–","–","17p3","–"],66,0,66,0],
    ["16","hazza5432","25",["16","22","8","–","–","11","9","–","–","–"],66,0,66,0],
    ["17","CmeCrash","33",["18","11","4","14","–","–","5","8","5","–"],65,0,65,0],
    ["18","MalevolentOne666","666",["–","19","4","12","6","–","–","–","11","–"],52,0,52,0],
    ["19","STAFTURBO","77",["4","7","–","6","7","5","–","9","7","6"],51,0,51,0],
    ["20","R0B_B021","7",["–","6","–","9","10","4","–","6","–","12"],47,0,47,0],
    ["21","ricreene","69",["8","14","4","7","–","–","6","–","–","–"],39,0,39,0],
    ["22","lufthar","16",["3","8","–","5","5","–","–","4","–","–"],25,0,25,0],
    ["23","Hamitothebone","228",["–","–","10","–","–","–","12","–","–","–"],22,0,22,0],
    ["24","PingTwoHigh69","48",["20p3","–","–","–","–","–","–","–","–","–"],20,0,20,0],
    ["25","IronValkyrie","47",["4","5","4","–","–","–","–","–","–","5"],18,0,18,0],
    ["26","jmillsy85","22",["–","–","17p3","–","–","–","–","–","–","–"],17,0,17,0],
    ["27","Kezaudio","72",["–","–","–","–","–","–","–","–","16","–"],16,0,16,0],
    ["28","BikeGooRoo","803",["6","–","4","–","–","–","–","–","–","–"],10,0,10,0],
    ["29","CerbHoppxr","246",["7","–","–","–","–","–","–","–","–","–"],7,0,7,0],
    ["30","Subzero-heart","237",["1","–","–","–","–","–","–","–","–","–"],1,0,1,0]
  ]
};
