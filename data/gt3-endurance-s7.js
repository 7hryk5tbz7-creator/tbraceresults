// WJF73 Trophy GT3 Endurance, Season 7 (WJF Trophy, Friday series) — final standings (archive).
// Transcribed from the club's Season 7 points sheet (two images). Every subtotal, drop and total was checked; six of the ten rounds
// match the starters-based scale. Round 2 (winner 22, 2nd 20 on the 17-starter ladder) and Rounds 5, 6 and 7 (two drivers on 5 each)
// are kept as published. Ties on 140, 54, 18 and 13 were already in countback order on the club's sheet.
// Names: GLR_SCOTTY = GLR_Scotty, Allaussie = allaussie, Simple-crackers9 = simple-crackers9, Bentstik7 = Bentstik_7, Ando787 = S7R_Ando787,
// McDivott = Mcdivott, Dirtymonkey699 = DirtyMonkey699, Ricreene = ricreene. A 0 on the sheet = did not race.
// Teams: the sheet has no team column; teams from SEASON_TEAMS[7] (Tuesday/Narly S7 sheets) and, for drivers not in those, the same
// team as Season 6 (confirmed by the club) – NWR_NICO71, allaussie, Rusty-Nutz-75 and Fly-balding072 = Team RNR; Zorrow1234 = Mad Turtle Racing.

window.SERIES = window.SERIES || {};
window.SERIES["gt3-endurance-s7"] = {
  id: "gt3-endurance-s7",
  group: "gt3-endurance",
  season: 7,
  navLabel: "WJF Trophy",
  title: "WJF73 Trophy GT3 Endurance Season 7",
  eyebrow: "WJF73 Trophy GT3 Endurance · Season 7 · Friday series",
  pages: { results: null, championship: "championship.html" },
  final: true,
  standingsMeta: "Final standings · 30 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 7 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 20 starters: 1st 26, 2nd 24, 3rd 22, 4th 21 … last 5). Rounds 2, 5, 6 and 7 are shown as the club scored them. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RNR was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 7.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","NWR_NICO71","177",["16","22p1","24p1","26p1","15","19p3","21p2","19","19p1","18p2"],199,-15,184,0],
    ["2","Zippy_Nathman","23",["19","19p3","22p2","20","23p2","21p2","–","24p1","17p2","15"],180,0,180,0],
    ["3","Rollscanhardly","270",["24p1","20p2","–","24p2","25p1","23p1","23p1","14","–","20p1"],173,0,173,0],
    ["4","MAD_MITCH_76","76",["17","17","14","22p3","19","13","19p3","12","14","10"],157,-12,145,0],
    ["5","Pjmack75","21",["22p2","16","–","21","–","18","16","18","15p3","14"],140,0,140,0],
    ["6","GLR_Scotty","37",["20p3","–","19","18","16","–","18","20p3","13","16p3"],140,0,140,0],
    ["7","allaussie","87",["18","14","17","19","8","10","11","22p2","11","12"],142,-8,134,0],
    ["8","Trickybrewer","92",["15","18","18","–","17","9","12","13","10","13"],125,0,125,0],
    ["9","Tim_turtle_79","79",["12","10","11","12","14","16","15","15","8","7"],120,-8,112,0],
    ["10","Yoda_Raptor","775",["–","8","12","14","21p3","5","5","5","9","11"],90,0,90,0],
    ["11","Zorrow1234","338",["6","12","15","15","20","–","9","–","–","–"],77,0,77,0],
    ["12","OneTao","3",["11","15","–","–","13","14","14","–","–","9"],76,0,76,0],
    ["13","Soulslayer_71","50",["–","11","–","16","11","11","17","–","–","–"],66,0,66,0],
    ["14","CmeCrash","33",["13","9","–","–","10","17","–","11","–","–"],60,0,60,0],
    ["15","Rusty-Nutz-75","269",["10","6","10","10","5","–","–","16","–","–"],57,0,57,0],
    ["16","simple-crackers9","16",["–","–","8","13","5","–","6","10","12","–"],54,0,54,0],
    ["17","Bentstik_7","31",["–","–","7","7","7","8","8","6","5","6"],54,0,54,0],
    ["18","Fly-balding072","131",["9","7","6","8","6","–","–","9","–","8"],53,0,53,0],
    ["19","Kezaudio","72",["–","–","16","–","12","15","–","–","7","–"],50,0,50,0],
    ["20","Hamitothebone","228",["–","–","–","17","–","12","10","7","–","–"],46,0,46,0],
    ["21","NeonEmpyreal","12",["–","–","13","–","18","–","13","–","–","–"],44,0,44,0],
    ["22","MalevolentOne666","666",["–","–","9","11","9","5","5","–","–","–"],39,0,39,0],
    ["23","S7R_Ando787","787",["–","–","20p3","–","–","–","–","17","–","–"],37,0,37,0],
    ["24","Khush_Vekaria","239",["–","–","5","9","–","7","–","8","6","–"],35,0,35,0],
    ["25","Frosty5275","54",["5","13","–","–","–","–","–","–","–","–"],18,0,18,0],
    ["26","Mcdivott","74",["–","–","–","–","–","6","7","–","–","5"],18,0,18,0],
    ["27","Bozza777","777",["14","–","–","–","–","–","–","–","–","–"],14,0,14,0],
    ["28","DirtyMonkey699","411",["8","5","–","–","–","–","–","–","–","–"],13,0,13,0],
    ["29","ricreene","69",["7","–","–","6","–","–","–","–","–","–"],13,0,13,0],
    ["30","Dojo426","426",["–","–","–","5","–","–","–","–","–","–"],5,0,5,0]
  ]
};
