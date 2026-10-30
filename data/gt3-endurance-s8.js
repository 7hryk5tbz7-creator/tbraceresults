// WJF73 Trophy GT3 Endurance, Season 8 (WJF Trophy, Friday series) — final standings (archive).
// Transcribed from the club's Season 8 points sheet. Every subtotal, drop and total was checked; eight of the ten rounds match the
// starters-based scale. Round 3 (20 drivers on the 20-starter ladder plus three more on 5) and Round 10 (21-starter ladder with no 12)
// are kept as published (club confirmed).
// Ties ordered by countback (the club's sheet listed three the other way round): on 139 O-PUNCHY-_-P (8th) ahead of Meggs1 (10th);
// on 62 Dissposable_Hero (6th) ahead of Legend-Macca47 (15th); on 47 R0B_B021 (9th) ahead of Soulslayer_71 (15th).
// Seven drivers with no races share 38th.
// Names: Ando787 = S7R_Ando787, tim_turtle_79 = Tim_turtle_79, Legend-macca47 = Legend-Macca47, DISSPOSABLE_HERO = Dissposable_Hero,
// Fly- balding 072 = Fly-balding072, r0b_B021 = R0B_B021, McDivott = Mcdivott, Rustynutz 75 = Rusty-Nutz-75, Simmy__D = Simmy_D,
// Capella13b = capella13b, Dirtymonkey699 = DirtyMonkey699, Porschenut92 = PorscheNut92. A 0 on the sheet = did not race.
// Teams: data/club-teams.js, SEASON_TEAMS[8]. Team RNR (renamed MC Motorsport after Season 8): N-spud-P666, NWR_NICO71, allaussie,
// Rusty-Nutz-75, Curry41289 (confirmed by the club). Gr3-X-u5 and Frosty5275 have no team yet.

window.SERIES = window.SERIES || {};
window.SERIES["gt3-endurance-s8"] = {
  id: "gt3-endurance-s8",
  group: "gt3-endurance",
  season: 8,
  navLabel: "WJF Trophy",
  title: "WJF73 Trophy GT3 Endurance Season 8",
  eyebrow: "WJF73 Trophy GT3 Endurance · Season 8 · Friday series",
  pages: { results: null, championship: "championship.html" },
  final: true,
  standingsMeta: "Final standings · 44 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 8 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 26 starters: 1st 32, 2nd 30, 3rd 28, 4th 27 … last 5). Rounds 3 and 10 are shown as the club scored them. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RNR was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 8, with the ties on 139, 62 and 47 ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","N-spud-P666","32",["26","32p1","24p2","–","29p2","21","25p1","20p2","27p1","27p1"],231,0,231,0],
    ["2","Rollscanhardly","270",["29p2","28p3","26p1","24p3","27p3","22p3","23p2","22p1","25p2","25p2"],251,-22,229,0],
    ["3","NWR_NICO71","177",["27p3","27","22p3","28p1","31p1","24p2","21p3","18p3","23p3","22"],243,-18,225,0],
    ["4","coloradorojo87","871",["–","24","18","26p2","26","20","19","16","15","14"],178,0,178,0],
    ["5","MAD_MITCH_76","76",["25","22","17","17","22","16","18","14","20","19"],190,-14,176,0],
    ["6","Trickybrewer","92",["22","19","21","21","24","–","13","17","11","10"],158,0,158,0],
    ["7","allaussie","87",["–","25","13","13","18","18","–","11","22","23p3"],143,0,143,0],
    ["8","BigBruceTheShark","99",["20","16","19","23","23","13","–","–","18","9"],141,0,141,0],
    ["9","O-PUNCHY-_-P","427",["14","17","12","14","14","14","16","13","19","18"],151,-12,139,0],
    ["10","Meggs1","59",["19","14","11","20","20","15","14","9","13","13"],148,-9,139,0],
    ["11","Pjmack75","21",["18","21","16","18","21","11","11","12","21","–"],149,-11,138,0],
    ["12","Tim_turtle_79","79",["–","20","15","11","16","12","12","8","17","17"],128,0,128,0],
    ["13","BarberXR6T","41",["13","8","10","9","11","17","17","15","12","21"],133,-8,125,0],
    ["14","VETERANPP","998",["–","18","5","16","17","19","–","10","5","16"],106,0,106,0],
    ["15","Khush_Vekaria","239",["16","5","–","12","5","6","–","–","16","20"],80,0,80,0],
    ["16","Barberphil","11",["12","13","–","10","9","5","9","5","8","7"],78,0,78,0],
    ["17","S7R_Ando787","787",["31p1","–","–","–","–","26p1","20","–","–","–"],77,0,77,0],
    ["18","Curry41289","89",["–","30p2","14","–","25","–","–","–","–","–"],69,0,69,0],
    ["19","Dissposable_Hero","51",["24","23","–","–","–","–","–","–","–","15"],62,0,62,0],
    ["20","Legend-Macca47","447",["11","9","5","7","6","7","6","6","–","5"],62,0,62,0],
    ["21","OneTao","3",["–","–","5","19","15","9","–","–","10","–"],58,0,58,0],
    ["22","Kezaudio","72",["–","–","–","22","19","–","–","–","14","–"],55,0,55,0],
    ["23","Fly-balding072","72",["8","11","6","5","–","–","5","7","6","6"],54,0,54,0],
    ["24","ricreene","69",["5","6","9","6","8","–","7","–","–","8"],49,0,49,0],
    ["25","R0B_B021","7",["–","–","–","–","12","–","15","–","9","11"],47,0,47,0],
    ["26","Soulslayer_71","50",["7","12","8","–","10","10","–","–","–","–"],47,0,47,0],
    ["27","jmillsy85","22",["–","26","20","–","–","–","–","–","–","–"],46,0,46,0],
    ["28","NeonEmpyreal","12",["17","–","–","15","–","–","–","–","–","–"],32,0,32,0],
    ["29","Bentstik_7","31",["6","10","–","–","–","8","8","–","–","–"],32,0,32,0],
    ["30","Gr3-X-u5","469",["9","–","5","–","13","–","–","–","–","–"],27,0,27,0],
    ["31","simple-crackers9","16",["–","–","7","8","–","–","10","–","–","–"],25,0,25,0],
    ["32","Frosty5275","54",["23","–","–","–","–","–","–","–","–","–"],23,0,23,0],
    ["33","CmeCrash","33",["21","–","–","–","–","–","–","–","–","–"],21,0,21,0],
    ["34","Mcdivott","74",["–","7","–","–","7","–","–","–","7","–"],21,0,21,0],
    ["35","Dunky_rl","53",["15","–","–","–","–","–","–","–","–","–"],15,0,15,0],
    ["36","Rusty-Nutz-75","269",["–","15","–","–","–","–","–","–","–","–"],15,0,15,0],
    ["37","Simmy_D","256",["10","–","–","–","–","–","–","–","–","–"],10,0,10,0],
    ["38","Andruid966","966",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["38","capella13b","64",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["38","DirtyMonkey699","411",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["38","PorscheNut92","911",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["38","Yoda_Raptor","775",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["38","Zippy_Nathman","23",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["38","Zorrow1234","338",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
