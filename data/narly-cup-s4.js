// GR2 GT500 Championship, Season 4 (Narly Cup, Thursday series) — final standings (archive).
// Transcribed from the club's Season 4 points sheet. Round 6 was not run (blanked out on the sheet). Every subtotal, drop and total was checked
// against the Season 4 drop rule (lowest of all rounds run, final round included, only for drivers who raced every round). Points: finishers on
// the usual starters-based scale; extra drivers below it scored 1–5 in some rounds – all kept as published.
// Ties ordered by countback (the club's sheet listed them differently): 60 Soulslayer_71 (6th) ahead of Fly-balding072 (7th);
// 53 NeonEmpyreal (5th) ahead of Kezaudio (7th); 30 Dissposable_Hero (2nd) ahead of jmillsy85 (3rd). The tie on 42 (hazza5432 ahead of Yoda_Raptor)
// matched the sheet. The sheet skips row 22 (ignored, as instructed); PingTwoHigh69 is the last row. Two drivers with no races share 26th.
// Names: Ando787 = S7R_Ando787, Masomarvel87 = MasoMarvel87, Fly- balding072 = Fly-balding072, r0b_B021 = R0B_B021, Ricreene = ricreene.
// A 0 on the sheet = did not race. Teams: Season 4 entry list (SEASON_TEAMS[4]); DanZambe has no Season 4 team until Season 3 arrives.

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s4"] = {
  id: "narly-cup-s4",
  group: "narly-cup",
  season: 4,
  navLabel: "Narly Cup",
  title: "GR2 GT500 Championship Season 4",
  eyebrow: "GR2 GT500 Championship · Season 4 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  npLabel: "Not run",
  standingsMeta: "Final standings · 27 drivers · Round 6 not run · Round-by-round points",
  standingsKey: ["swatches", "NP = round not run", "– = did not race that week"],
  standingsRules: "Round 6 was not run. Season 4 points depend on the number of finishers in each race: last finisher scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 17 finishers: 1st 23, 2nd 21, 3rd 19, 4th 18 … last 5). In some rounds extra drivers below the finishers scored 1–5 points; all rounds are shown as the club scored them. DROP in Season 4 = the driver's lowest round, including the final round, and only for drivers who raced every round that was run. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RSR became Team RNR, which was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 4, with the ties on 60, 53 and 30 ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","CerbHoppxr","11",["19p2","17p3","15p2","–","19p3","NP","16p2","16p2","14p3","18p1"],134,0,134,0],
    ["2","S7R_Ando787","787",["21p1","21p1","17p1","23p1","23p1","NP","–","–","18p1","–"],123,0,123,0],
    ["3","DanZambe","2",["16","14","–","19p3","17","NP","18p1","10","16p2","–"],110,0,110,0],
    ["4","MAD_MITCH_76","76",["15","11","10","13","18","NP","12","14p3","8","16p2"],117,-8,109,0],
    ["5","Tim_turtle_79","79",["12","16","4","18","11","NP","14p3","11","11","14p3"],111,-4,107,0],
    ["6","Pjmack75","21",["4","13","8","14","15","NP","11","13","13","9"],100,-4,96,0],
    ["7","Trickybrewer","92",["14","15","11","9","–","NP","13","12","5","6"],85,0,85,0],
    ["8","MasoMarvel87","333",["4","5","6","15","8","NP","7","7","12","12"],76,-4,72,0],
    ["9","Soulslayer_71","50",["5","5","4","8","16","NP","5","4","7","10"],64,-4,60,0],
    ["10","Fly-balding072","131",["3","9","4","11","7","NP","10","6","6","7"],63,-3,60,0],
    ["11","N-spud-P666","32",["13","19p2","–","21p2","5","NP","–","–","–","–"],58,0,58,0],
    ["12","NeonEmpyreal","12",["–","–","–","17","13","NP","–","5","10","8"],53,0,53,0],
    ["13","Kezaudio","72",["11","12","9","–","12","NP","–","9","–","–"],53,0,53,0],
    ["14","R0B_B021","7",["3","6","–","5","10","NP","4","4","9","11"],52,0,52,0],
    ["15","hazza5432","25",["–","8","12","16","–","NP","6","–","–","–"],42,0,42,0],
    ["16","Yoda_Raptor","775",["7","–","7","12","3","NP","–","–","–","13"],42,0,42,0],
    ["17","STAFTURBO","77",["4","4","4","6","5","NP","–","8","4","5"],40,0,40,0],
    ["18","ricreene","69",["10","–","4","10","–","NP","8","–","–","–"],32,0,32,0],
    ["19","Dissposable_Hero","51",["8","1","–","–","21p2","NP","–","–","–","–"],30,0,30,0],
    ["20","jmillsy85","22",["17p3","–","13p3","–","–","NP","–","–","–","–"],30,0,30,0],
    ["21","Steve_73_GOOF","73",["–","7","–","–","9","NP","9","–","–","–"],25,0,25,0],
    ["22","BikeGooRoo","803",["9","–","–","7","6","NP","–","–","–","–"],22,0,22,0],
    ["23","Colin_t24","85",["–","–","–","–","–","NP","–","18p1","–","–"],18,0,18,0],
    ["24","MrDonovan","27",["–","10","5","–","–","NP","–","–","–","–"],15,0,15,0],
    ["25","IronValkyrie","47",["6","4","4","–","–","NP","–","–","–","–"],14,0,14,0],
    ["26","Spannshouse","19",["–","–","–","–","–","NP","–","–","–","–"],0,0,0,0],
    ["26","PingTwoHigh69","48",["–","–","–","–","–","NP","–","–","–","–"],0,0,0,0]
  ]
};
