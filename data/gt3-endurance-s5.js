// GR3 Championship, Season 5 (WJF Trophy, Friday series) — final standings (archive).
// Transcribed from the club's Season 5 points sheet. Drops checked. For four drivers the club's SUB/TOTAL leave out their Round 10 points
// (Fly-balding072 7, M_Waseem-007 16, Yoda_Raptor 12, OneTao 8); at the club's request totals are published as the sheet has them, with a note.
// Only Rounds 2, 7 and 8 match the starters-based scale exactly; the others (repeated values / missing values) are kept as published.
// Ties on 174, 44 and 15 were already in countback order on the club's sheet. One driver with no races (IronValkyrie).
// Names: Ando787 = S7R_Ando787, GLR_Scotty, Fly- balding072 = Fly-balding072, Bentstik7 = Bentstik_7, Dirtymonkey699 = DirtyMonkey699,
// r0b_B021 = R0B_B021, Cmecrash = CmeCrash, Ricreene = ricreene, bogzlR = bogzIR (same driver), Lufthar = lufthar. A 0 on the sheet = did not race.
// Teams: Season 5 entry list (SEASON_TEAMS[5]); drivers not on it are Privateer until Season 4 data arrives (club's decision).

window.SERIES = window.SERIES || {};
window.SERIES["gt3-endurance-s5"] = {
  id: "gt3-endurance-s5",
  group: "gt3-endurance",
  season: 5,
  navLabel: "WJF Trophy",
  title: "GR3 Championship Season 5",
  eyebrow: "GR3 Championship · Season 5 · Friday series",
  pages: { results: null, championship: "championship.html" },
  final: true,
  standingsMeta: "Final standings · 42 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Totals are as published by the club. For four drivers the club's totals do not include their Round 10 points: Fly-balding072 (7), M_Waseem-007 (16), Yoda_Raptor (12) and OneTao (8); their Round 10 results still count for starts, wins and podiums. Season 5 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 32 starters: 1st 38, 2nd 36, 3rd 34, 4th 33 … last 5). Several rounds are shown as the club scored them. DROP = the driver's lowest round, not counting the final round. A driver gets a drop if they raced every round, or every round except the final one. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RNR was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 5.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Rollscanhardly","270",["42p1","32","28p1","20p2","26p1","29p1","–","23p1","17p2","22p1"],239,0,239,0],
    ["2","S7R_Ando787","787",["40p2","33","26p2","16","24p2","–","23p1","19p3","15p3","20p2"],216,0,216,0],
    ["3","Tim_turtle_79","79",["35","31","21","18p3","21","19","21p2","14","13","11"],204,-13,191,0],
    ["4","GLR_Scotty","37",["34","30","16","22p1","15","24","–","15","9","9"],174,0,174,0],
    ["5","MAD_MITCH_76","76",["36","22","18","15","14","22","18","13","11","16"],185,-11,174,0],
    ["6","NWR_NICO71","177",["38p3","38p1","8","12","17","23","17","17","7","–"],177,-7,170,0],
    ["7","Zippy_Nathman","23",["32","29","23","–","–","27p2","19p3","18","14","–"],162,0,162,0],
    ["8","DanZambe","2",["37","34p3","20","17","18","25p3","–","–","–","–"],151,0,151,0],
    ["9","Rusty-Nutz-75","269",["31","5","24p3","11","–","18","16","10","12","–"],127,0,127,0],
    ["10","Frosty5275","54",["16","17","7","14","22p3","15","9","–","10","15"],125,0,125,0],
    ["11","BigBruceTheShark","99",["21","26","10","9","20","21","10","–","–","–"],117,0,117,0],
    ["12","Trickybrewer","92",["24","25","9","10","9","12","8","8","5","10"],120,-5,115,0],
    ["13","Zorrow1234","338",["26","9","19","5","–","17","14","–","8","14"],112,0,112,0],
    ["14","Fly-balding072","131",["15","20","17","13","6","11","13","6","–","7"],101,0,101,0],
    ["15","Pjmack75","21",["33","28","22","–","–","–","–","–","–","13"],96,0,96,0],
    ["16","Dissposable_Hero","51",["30","36p2","12","–","–","–","–","–","–","17"],95,0,95,0],
    ["17","M_Waseem-007","86",["23","18","13","5","5","9","–","7","–","16"],80,0,80,0],
    ["18","allaussie","87",["19","21","–","–","5","20","–","12","–","–"],77,0,77,0],
    ["19","Yoda_Raptor","775",["27","–","5","–","16","–","15","11","–","12"],74,0,74,0],
    ["20","OneTao","3",["12","–","14","8","12","13","12","–","–","8"],71,0,71,0],
    ["21","MalevolentOne666","666",["17","19","–","–","13","5","–","–","5","–"],59,0,59,0],
    ["22","N-spud-P666","32",["–","–","–","–","19","–","–","–","19p1","18p3"],56,0,56,0],
    ["23","STAFTURBO","77",["18","–","15","–","–","10","11","–","–","–"],54,0,54,0],
    ["24","Spannshouse","19",["29","24","–","–","–","–","–","–","–","–"],53,0,53,0],
    ["25","Soulslayer_71","50",["9","–","5","–","8","8","6","9","6","–"],51,0,51,0],
    ["26","Budsy76","157",["25","23","–","–","–","–","–","–","–","–"],48,0,48,0],
    ["27","Bentstik_7","31",["6","7","–","6","7","6","5","5","–","5"],47,0,47,0],
    ["28","Kezaudio","72",["14","–","–","–","–","16","–","16","–","–"],46,0,46,0],
    ["29","DirtyMonkey699","411",["13","14","5","7","–","5","–","–","–","–"],44,0,44,0],
    ["30","R0B_B021","7",["10","12","6","–","10","–","–","–","–","6"],44,0,44,0],
    ["31","NeonEmpyreal","12",["28","13","–","–","–","–","–","–","–","–"],41,0,41,0],
    ["32","RSR_Robbo-Sport","20",["22","16","–","–","–","–","–","–","–","–"],38,0,38,0],
    ["33","Mickcliff","351",["5","10","–","–","11","7","–","–","–","–"],33,0,33,0],
    ["34","Hamitothebone","228",["–","–","11","–","–","14","7","–","–","–"],32,0,32,0],
    ["35","CmeCrash","33",["20","11","–","–","–","–","–","–","–","–"],31,0,31,0],
    ["36","TimDiragz","622",["–","27","–","–","–","–","–","–","–","–"],27,0,27,0],
    ["37","SpeedySnoopyAU","13",["–","–","5","–","–","–","–","21p2","–","–"],26,0,26,0],
    ["38","ricreene","69",["–","15","–","–","–","–","–","–","–","–"],15,0,15,0],
    ["39","bogzIR","90",["7","8","–","–","–","–","–","–","–","–"],15,0,15,0],
    ["40","BikeGooRoo","803",["11","–","–","–","–","–","–","–","–","–"],11,0,11,0],
    ["41","lufthar","16",["–","6","–","–","–","–","–","–","–","–"],6,0,6,0],
    ["42","IronValkyrie","47",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
