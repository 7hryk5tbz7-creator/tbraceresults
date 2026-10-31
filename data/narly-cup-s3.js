// BMW VGT Championship, Season 3 (Narly Cup, Thursday series) — final standings (archive).
// Transcribed from the club's Season 3 points sheet: totals are the sum of all 10 rounds – no drop rounds in Season 3 (as the Tuesday Series).
// Points: finishers on the usual starters-based scale; extra drivers below it scored 1–5 in several rounds, and Round 7 has gaps – all kept
// as published. Tie on 35 (ricreene ahead of Soulslayer_71) was already in countback order.
// Names: Ando787 = S7R_Ando787, Tony2sips = Tonyaudio1, Fly- balding072 = Fly-balding072, Ricreene = ricreene, r0b_B021 = R0B_B021.
// Steve_73_GOOF #173 as on the Season 3 entry list (club request). A 0 on the sheet = did not race. Teams: Season 3 entry list (SEASON_TEAMS[3]).

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s3"] = {
  id: "narly-cup-s3",
  group: "narly-cup",
  season: 3,
  navLabel: "Narly Cup",
  title: "BMW VGT Championship Season 3",
  eyebrow: "BMW VGT Championship · Season 3 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 30 drivers · No drop rounds · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "No drop rounds in Season 3: each driver's total is all 10 rounds added together. Season 3 points depend on the number of finishers in each race: last finisher scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win. In some rounds extra drivers below the finishers scored 1–5 points; all rounds are shown as the club scored them. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RSR became Team RNR, which was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 3.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","S7R_Ando787","787",["22p1","23p1","–","22p1","5","–","20p1","15p1","18p1","18p1"],143,0,143,0],
    ["2","Tim_turtle_79","79",["8","18","20p2","12","20p2","14","13","11p3","12","13"],141,0,141,0],
    ["3","MAD_MITCH_76","76",["15","10","13","17","14","19p3","12","10","16p2","10"],136,0,136,0],
    ["4","GLR_Scotty","37",["7","17","18p3","14","8","18","11","5","13","14p3"],125,0,125,0],
    ["5","BigBruceTheShark","99",["13","16","22p1","15","15","17","7","8","9","–"],122,0,122,0],
    ["6","Colin_t24","85",["18p3","19p3","5","4","10","23p1","8","13p2","14p3","1"],115,0,115,0],
    ["7","Trickybrewer","92",["12","12","14","8","17","16","4","6","–","12"],101,0,101,0],
    ["8","MrDonovan","27",["–","–","16","20p2","16","13","14","9","–","11"],99,0,99,0],
    ["9","Spannshouse","19",["20p2","9","15","13","18p3","–","16p3","–","–","–"],91,0,91,0],
    ["10","taste_the_pain42","13",["–","–","9","–","22p1","21p2","18p2","–","–","–"],70,0,70,0],
    ["11","Rusty-Nutz-75","269",["11","8","7","10","6","6","–","–","11","7"],66,0,66,0],
    ["12","Dissposable_Hero","51",["17","4","12","3","7","–","9","5","–","–"],57,0,57,0],
    ["13","ICER_Renegade575","575",["4","13","6","9","–","10","4","–","5","4"],55,0,55,0],
    ["14","Kezaudio","72",["10","14","–","3","–","–","–","–","10","16p2"],53,0,53,0],
    ["15","Pjmack75","21",["14","21p2","17","–","–","–","–","–","–","–"],52,0,52,0],
    ["16","CerbHoppxr","246",["–","–","–","5","11","15","6","5","–","8"],50,0,50,0],
    ["17","MalevolentOne666","666",["6","7","8","–","–","11","5","–","8","1"],46,0,46,0],
    ["18","Tonyaudio1","44",["4","11","–","18p3","12","–","–","–","–","–"],45,0,45,0],
    ["19","Hamitothebone","228",["4","–","–","–","13","8","–","7","6","5"],43,0,43,0],
    ["20","Fly-balding072","131",["4","6","5","6","–","9","3","–","–","6"],39,0,39,0],
    ["21","ricreene","69",["4","5","10","16","–","–","–","–","–","–"],35,0,35,0],
    ["22","Soulslayer_71","50",["3","–","–","4","–","12","–","–","7","9"],35,0,35,0],
    ["23","P-Toots","43",["4","–","–","11","9","7","–","–","–","–"],31,0,31,0],
    ["24","PingTwoHigh69","48",["16","–","11","–","–","–","–","–","–","–"],27,0,27,0],
    ["25","R0B_B021","7",["–","–","–","7","5","5","4","–","–","4"],25,0,25,0],
    ["26","Steve_73_GOOF","173",["5","15","–","–","–","–","–","–","–","–"],20,0,20,0],
    ["27","ICER_MarchyBoy96","96",["3","4","5","–","–","5","–","–","–","–"],17,0,17,0],
    ["28","BDR-Binky","111",["9","–","–","–","–","–","–","–","–","–"],9,0,9,0],
    ["29","Jrh666-demon","914",["3","4","–","–","–","–","–","–","–","–"],7,0,7,0],
    ["30","SD_bigchich","55",["–","–","–","–","–","–","–","–","–","4"],4,0,4,0]
  ]
};
