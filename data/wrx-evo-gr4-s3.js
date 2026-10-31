// Swift Championship, Season 3 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 3 points sheet: totals are the sum of all 10 rounds – no drop rounds in Season 3 (published as the
// sheet, confirmed by the club). Points: finishers on the usual starters-based scale; extra drivers below it scored 1–5 in several rounds –
// kept as published. Ties on 114 and 64 were already in countback order on the club's sheet.
// Names: Tony2sips = Tonyaudio1, Ricreene = ricreene, r0b_B021 = R0B_B021, mcdivott = Mcdivott. Steve_73_GOOF #173 as on the Season 3 entry list (club request).
// A 0 on the sheet = did not race. Teams: Season 3 entry list (SEASON_TEAMS[3]).

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s3"] = {
  id: "wrx-evo-gr4-s3",
  group: "wrx-evo-gr4",
  season: 3,
  navLabel: "Tuesday Series",
  title: "Swift Championship Season 3",
  eyebrow: "Swift Championship · Season 3 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 25 drivers · No drop rounds · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "No drop rounds in Season 3: each driver's total is all 10 rounds added together. Season 3 points depend on the number of finishers in each race: last finisher scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 18 finishers: 1st 24, 2nd 22, 3rd 20, 4th 19 … last 5). In some rounds extra drivers below the finishers scored 1–5 points; all rounds are shown as the club scored them. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 3.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Spannshouse","19",["19p2","24p1","23p2","18","18","14","8","16p1","16p1","12p2"],168,0,168,0],
    ["2","Pjmack75","21",["11","17","20","15","20p3","12","16p3","14p2","12p3","7"],144,0,144,0],
    ["3","Tim_turtle_79","79",["5","22p2","18","19","16","15","13","7","10","4"],129,0,129,0],
    ["4","MrDonovan","27",["–","20p3","25p1","23p2","24p1","21p1","14","–","–","–"],127,0,127,0],
    ["5","Colin_t24","85",["21p1","15","5","13","–","13","20p1","9","14p2","14p1"],124,0,124,0],
    ["6","Trickybrewer","92",["17p3","18","17","20","8","11","12","4","–","9"],116,0,116,0],
    ["7","MAD_MITCH_76","76",["5","16","10","6","17","17p3","18p2","12p3","8","5"],114,0,114,0],
    ["8","Dissposable_Hero","51",["16","10","16","8","10","7","15","10","12p3","10p3"],114,0,114,0],
    ["9","Steve_73_GOOF","173",["5","12","14","11","22p2","16","11","4","11","6"],112,0,112,0],
    ["10","PingTwoHigh69","48",["13","19","21p3","25p1","6","19p2","7","–","–","–"],110,0,110,0],
    ["11","NeonEmpyreal","80",["10","5","6","12","7","9","10","11","9","4"],83,0,83,0],
    ["12","Kezaudio","72",["9","14","19","14","14","–","–","–","–","–"],70,0,70,0],
    ["13","Soulslayer_71","50",["6","9","9","9","5","8","5","5","5","8"],69,0,69,0],
    ["14","P-Toots","43",["14","8","13","21p3","11","–","–","–","–","–"],67,0,67,0],
    ["15","BigBruceTheShark","99",["15","11","5","10","19","4","–","–","–","–"],64,0,64,0],
    ["16","MalevolentOne666","666",["8","1","7","7","9","10","9","6","7","–"],64,0,64,0],
    ["17","Tonyaudio1","44",["12","7","12","16","13","–","–","–","–","–"],60,0,60,0],
    ["18","Bluebloss","4",["–","13","11","–","–","–","6","8","6","–"],44,0,44,0],
    ["19","C1_Parrit","42",["–","–","–","17","15","–","–","–","–","–"],32,0,32,0],
    ["20","ricreene","69",["7","4","15","4","–","–","–","–","–","–"],30,0,30,0],
    ["21","R0B_B021","7",["–","6","–","5","–","6","4","4","–","–"],25,0,25,0],
    ["22","Hamitothebone","228",["–","–","–","–","12","5","4","–","–","–"],21,0,21,0],
    ["23","Mcdivott","74",["5","4","8","1","–","–","–","–","–","–"],18,0,18,0],
    ["24","Prego4gun","15",["5","–","–","–","–","–","–","–","–","–"],5,0,5,0],
    ["25","BikeGooRoo","803",["–","4","–","–","–","–","–","–","–","–"],4,0,4,0]
  ]
};
