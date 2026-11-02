// Radical Cup, GT7 Season 2 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 2 Radical Championship table (2 Nov 2026). Every total checked (sum of all 10 rounds – no drop rounds).
// Points: field-size scale (last finisher 5, +1 per place, +1 bonus for 2nd, +2 for the win). Rounds 4, 5, 6, 9 and 10 have scale oddities
// on the sheet (fixed 4s, no win bonus in R5, no 9 in R9) – kept as published (confirmed by the club). Podium places worked out from the points.
// Tie on 121: MAD_MITCH_76 (four 3rds) placed ahead of Kezaudio (one 3rd) on countback; the club's sheet listed them the other way round.
// Names: Ando787 = S7R_Ando787, kezaudio = Kezaudio, r0b_B021 = R0B_B021, Tony2sips = Tonyaudio1, Ricreene = ricreene, DISSPOSABLE_HERO = Dissposable_Hero.
// Vipersfang (#74) is a different driver from Mcdivott (confirmed). jmillsy85 scored 0 in every round (did not race Tuesdays) – listed with no starts because he raced the GR4 series. All cars: Radical.
window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s2"] = {
  id: "wrx-evo-gr4-s2",
  group: "wrx-evo-gr4",
  season: 2,
  navLabel: "Tuesday Series",
  title: "Radical Cup Season 2",
  eyebrow: "Radical Cup · Season 2 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  seasonCar: "Radical",
  roundNames: ["Tokyo South Counter-clockwise", "Autodromo Nazionale Monza", "Sardegna A Reverse", "Autodromo de Interlagos", "Watkins Glen International (Long Course)", "Mount Panorama Circuit (Endurance Week)", "Trial Mountain Circuit", "Circuit de Spa-Francorchamps", "Suzuka Circuit", "Kyoto Driving Park Yamagiwa + Miyabi Reverse"],
  standingsMeta: "Final standings · 24 drivers · No drop rounds · Round-by-round points · All cars: Radical",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "No drop rounds in Season 2: each driver's total is all 10 rounds added together. Points depend on the number of finishers in each race: last finisher scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win. Some rounds on the club's sheet don't follow the scale exactly and are shown as published. Ties are split on countback (most wins, then 2nds, 3rds and so on).",
  standingsSource: "Standings as published by the club at the end of Season 2.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","S7R_Ando787","787",["21p3","24p1","24p1","16p1","17p1","14p1","18p1","–","19p1","19p1"],172,0,172,0],
    ["2","Tim_turtle_79","79",["19","19","16","12p3","16p2","7","16p2","16p1","15p3","17p2"],153,0,153,0],
    ["3","Colin_t24","85",["23p2","22p2","19","11","15p3","9","–","–","17p2","14"],130,0,130,0],
    ["4","MAD_MITCH_76","76",["6","20p3","15","4","13","8","14p3","12p3","14","15p3"],121,0,121,0],
    ["5","Kezaudio","72",["20","15","17","10","8","10p3","9","11","10","11"],121,0,121,0],
    ["6","Pjmack75","21",["18","10","20p3","8","14","12p2","12","10","12","–"],116,0,116,0],
    ["7","Trickybrewer","92",["16","6","10","14p2","9","5","10","8","13","10"],101,0,101,0],
    ["8","MrDonovan","27",["25p1","17","22p2","–","11","–","11","14p2","–","–"],100,0,100,0],
    ["9","BigBruceTheShark","99",["–","16","18","7","10","6","13","7","11","12"],100,0,100,0],
    ["10","Hamitothebone","228",["15","18","6","9","–","–","–","5","7","5"],65,0,65,0],
    ["11","Rusty-Nutz-75","269",["12","–","14","6","–","4","8","9","–","8"],61,0,61,0],
    ["12","P-Toots","43",["13","14","8","4","4","4","6","–","–","6"],59,0,59,0],
    ["13","MalevolentOne666","666",["14","5","–","4","7","–","7","–","5","7"],49,0,49,0],
    ["14","allaussie","87",["9","9","13","–","12","–","–","–","–","–"],43,0,43,0],
    ["15","NarlyDude71","71",["10","13","7","–","5","–","–","–","8","–"],43,0,43,0],
    ["16","R0B_B021","7",["7","12","9","–","6","4","–","–","4","–"],42,0,42,0],
    ["17","ricreene","69",["11","7","12","–","–","–","5","6","–","–"],41,0,41,0],
    ["18","NeonEmpyreal","80",["5","8","11","4","5","–","–","–","–","–"],33,0,33,0],
    ["19","PingTwoHigh69","48",["17","11","–","–","–","–","–","–","–","–"],28,0,28,0],
    ["20","Tonyaudio1","44",["8","–","5","4","–","–","–","–","–","5"],22,0,22,0],
    ["21","stavros_magpie","6",["–","–","–","–","–","–","–","–","6","13"],19,0,19,0],
    ["22","Dissposable_Hero","51",["–","–","–","–","–","–","–","–","4","9"],13,0,13,0],
    ["23","Vipersfang","74",["–","–","–","–","4","–","–","–","–","–"],4,0,4,0],
    ["24","jmillsy85","360",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
