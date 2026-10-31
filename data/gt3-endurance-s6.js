// GR3 Championship, Season 6 (WJF Trophy, Friday series) — final standings (archive). Season 6 ran 8 rounds in this series.
// Transcribed from the club's Season 6 points sheet. Every subtotal, drop and total was checked; six of the eight rounds match the
// starters-based scale. Round 3 (two drivers on 5) and Round 5 (20 scorers on the 16-starter ladder, two on 14 and four on 5) are kept
// as published. Tie on 14 ordered by countback (the club's sheet listed it the other way round): Bozza777 (7th) ahead of Creedins (13th).
// Three drivers with no races share 33rd.
// Names: authority3888 = Authority3888, Pjmack75, Soulslayer_71, Ando787 = S7R_Ando787, Fly- balding072 = Fly-balding072, Bentstik7 = Bentstik_7,
// r0b_B021 = R0B_B021, Dirtymonkey699 = DirtyMonkey699. A 0 on the sheet = did not race. Teams: Season 6 entry list (SEASON_TEAMS[6]).

window.SERIES = window.SERIES || {};
window.SERIES["gt3-endurance-s6"] = {
  id: "gt3-endurance-s6",
  group: "gt3-endurance",
  season: 6,
  navLabel: "WJF Trophy",
  title: "GR3 Championship Season 6",
  eyebrow: "GR3 Championship · Season 6 · Friday series",
  pages: { results: null, championship: "championship.html" },
  final: true,
  standingsMeta: "Final standings · 35 drivers · 8 rounds · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 6 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 24 starters: 1st 30, 2nd 28, 3rd 26, 4th 25 … last 5). Rounds 3 and 5 are shown as the club scored them. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RNR was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 6, with the tie on 14 ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD8], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 8,
  standings: [
    ["1","Rollscanhardly","270",["30p1","28p1","26p2","6","14","18","23p1","23p2"],168,-6,162,0],
    ["2","N-spud-P666","32",["28p2","24p3","28p1","23p2","22p1","21p2","21p2","–"],167,-21,146,0],
    ["3","NWR_NICO71","177",["26p3","26p2","9","10","13","13","12","25p1"],134,-9,125,0],
    ["4","GLR_Scotty","37",["18","19","22","17","17","7","10","16"],126,-7,119,0],
    ["5","Tim_turtle_79","79",["24","20","17","20","5","5","15","17"],123,-5,118,0],
    ["6","Dissposable_Hero","51",["25","23","24p3","–","–","12","9","21p3"],114,0,114,0],
    ["7","Pjmack75","21",["22","–","14","18","11","16","16","13"],110,0,110,0],
    ["8","MAD_MITCH_76","76",["5","16","21","19","5","11","19p3","15"],111,-5,106,0],
    ["9","Trickybrewer","92",["19","–","15","11","6","15","17","14"],97,0,97,0],
    ["10","Rusty-Nutz-75","269",["13","22","8","16","–","17","11","8"],95,0,95,0],
    ["11","Zorrow1234","338",["20","10","5","12","5","–","18","20"],90,0,90,0],
    ["12","Soulslayer_71","50",["16","17","16","9","10","8","–","12"],88,0,88,0],
    ["13","OneTao","3",["6","13","13","15","8","14","8","9"],86,-6,80,0],
    ["14","Authority3888","91",["–","15","23","21p3","–","19p3","–","–"],78,0,78,0],
    ["15","NeonEmpyreal","80",["–","11","20","14","–","–","14","18"],77,0,77,0],
    ["16","Yoda_Raptor","775",["11","–","19","13","9","10","13","–"],75,0,75,0],
    ["17","S7R_Ando787","787",["–","–","–","25p1","20p2","23p1","–","–"],68,0,68,0],
    ["18","Fly-balding072","131",["7","9","7","8","7","9","6","7"],60,-6,54,0],
    ["19","Bentstik_7","31",["9","6","6","7","12","6","7","6"],59,-6,53,0],
    ["20","Frosty5275","54",["14","5","–","–","5","–","5","19"],48,0,48,0],
    ["21","Hamitothebone","228",["10","–","12","–","15","–","–","10"],47,0,47,0],
    ["22","R0B_B021","7",["15","8","10","–","–","–","–","11"],44,0,44,0],
    ["23","K3N-MUTT","500",["21","21","–","–","–","–","–","–"],42,0,42,0],
    ["24","allaussie","87",["–","–","18","5","16","–","–","–"],39,0,39,0],
    ["25","Zippy_Nathman","23",["–","18","–","–","18p3","–","–","–"],36,0,36,0],
    ["26","ricreene","69",["12","7","11","–","–","–","–","5"],35,0,35,0],
    ["27","Kezaudio","72",["23","–","–","–","–","–","–","–"],23,0,23,0],
    ["28","hazza5432","25",["17","–","5","–","–","–","–","–"],22,0,22,0],
    ["29","Bozza777","777",["–","–","–","–","14","–","–","–"],14,0,14,0],
    ["30","Creedins","26",["–","14","–","–","–","–","–","–"],14,0,14,0],
    ["31","Bluebloss","4",["–","12","–","–","–","–","–","–"],12,0,12,0],
    ["32","DirtyMonkey699","411",["8","–","–","–","–","–","–","–"],8,0,8,0],
    ["33","M_Waseem-007","86",["–","–","–","–","–","–","–","–"],0,0,0,0],
    ["33","PingTwoHigh69","48",["–","–","–","–","–","–","–","–"],0,0,0,0],
    ["33","MalevolentOne666","666",["–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
