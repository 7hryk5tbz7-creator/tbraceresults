// GR3 Championship, Season 4 (WJF Trophy, Friday series) — final standings (archive).
// Transcribed from the club's Season 4 points sheet. Drops checked against the Season 4 rule (lowest of all rounds, final round included,
// only for drivers who raced every round). For four drivers the club's SUB/TOTAL leave out their Round 10 points (DanZambe 21, Pjmack75 19,
// Trickybrewer 16, IronValkyrie 11); at the club's request totals are published as the sheet has them, with a note.
// Points: finishers on the usual starters-based scale; extra drivers below it scored 1–5 in several rounds – all kept as published.
// Budsy76 was disqualified in Round 5 (DQ = a start, 0 points). Ties on 159 and 31 match the sheet; the tie on 7 is ordered by countback
// (Gonzo15 22nd, blue-kit4 26th, Arch655 28th). Five drivers with no races share 41st.
// Names: Ando787 = S7R_Ando787, Fly- balding072 = Fly-balding072, Dirtymonkey699 = DirtyMonkey699, Ricreene = ricreene, r0b_B021 = R0B_B021,
// Bentstik7 = Bentstik_7, QueenKat_95 = QueenKAt_95. A 0 on the sheet = did not race.
// Teams: Season 4 entry list (SEASON_TEAMS[4]); Zorrow1234, Budsy76, DirtyMonkey699, AKs_TrueGhosted, Arch655, blue-kit4 Privateer (confirmed).

window.SERIES = window.SERIES || {};
window.SERIES["gt3-endurance-s4"] = {
  id: "gt3-endurance-s4",
  group: "gt3-endurance",
  season: 4,
  navLabel: "WJF Trophy",
  title: "GR3 Championship Season 4",
  eyebrow: "GR3 Championship · Season 4 · Friday series",
  pages: { results: null, championship: "championship.html" },
  final: true,
  standingsMeta: "Final standings · 45 drivers · Round-by-round points",
  standingsKey: ["swatches", "DQ = disqualified (counts as a start, 0 points)", "– = did not race that week"],
  standingsRules: "Totals are as published by the club. For four drivers the club's totals do not include their Round 10 points: DanZambe (21), Pjmack75 (19), Trickybrewer (16) and IronValkyrie (11); their Round 10 results still count for starts, wins and podiums. Season 4 points depend on the number of finishers in each race: last finisher scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win. In some rounds extra drivers below the finishers scored 1–5 points; all rounds are shown as the club scored them. DROP in Season 4 = the driver's lowest round, including the final round, and only for drivers who raced every round. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RSR became Team RNR, which was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 4, with the tie on 7 ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","DanZambe","2",["34p3","32","26","21","25p2","29p2","12","23p1","30p1","21p2"],232,-12,220,0],
    ["2","BigBruceTheShark","99",["25","31","28p3","20","18","27p3","18","19p3","26p3","–"],212,0,212,0],
    ["3","N-spud-P666","32",["36p2","35p2","30p2","24p2","27p1","5","5","21p2","28p2","–"],211,0,211,0],
    ["4","MAD_MITCH_76","76",["29","30","11","19","19","16","13","12","24","18"],191,-11,180,0],
    ["5","Zippy_Nathman","23",["22","29","24","22p3","–","24","19","18","10","–"],168,0,168,0],
    ["6","Pjmack75","21",["28","27","27","16","16","22","20p3","11","9","19p3"],176,-9,167,0],
    ["7","Tim_turtle_79","79",["27","28","23","12","21","5","11","5","16","17"],165,-5,160,0],
    ["8","S7R_Ando787","787",["38p1","37p1","32p1","26p1","–","26","–","–","–","–"],159,0,159,0],
    ["9","Zorrow1234","338",["17","1","19","13","23","23","16","2","23","23p1"],160,-1,159,0],
    ["10","NWR_NICO71","177",["–","19","18","–","24p3","31p1","24p1","14","22","5"],157,0,157,0],
    ["11","GLR_Scotty","37",["14","20","22","10","15","17","6","7","14","19p3"],144,-6,138,0],
    ["12","Rusty-Nutz-75","269",["26","25","10","7","14","13","15","15","12","–"],137,0,137,0],
    ["13","Trickybrewer","92",["21","23","20","4","12","20","9","10","21","16"],140,-4,136,0],
    ["14","SquatBenchDeadli","555",["32","21","21","1","11","–","16","16","13","–"],131,0,131,0],
    ["15","Dissposable_Hero","51",["13","11","15","–","22","22","–","13","25","–"],121,0,121,0],
    ["16","Wrestler0909","909",["19","24","25","–","17","12","22p2","–","–","–"],119,0,119,0],
    ["17","Hamitothebone","228",["15","22","17","8","10","14","–","–","18","13"],117,0,117,0],
    ["18","NeonEmpyreal","80",["24","16","7","17","13","–","–","4","15","14"],110,0,110,0],
    ["19","allaussie","87",["20","10","9","14","20","15","14","–","–","–"],102,0,102,0],
    ["20","OneTao","3",["12","12","–","–","–","11","10","9","20","15"],89,0,89,0],
    ["21","Yoda_Raptor","775",["16","–","13","15","–","25","–","–","17","–"],86,0,86,0],
    ["22","Fly-balding072","131",["10","14","4","2","8","19","8","6","7","8"],86,-2,84,0],
    ["23","Soulslayer_71","50",["11","18","5","5","9","–","7","8","11","7"],81,0,81,0],
    ["24","CerbHoppxr","246",["30","33p3","16","–","–","–","–","–","–","–"],79,0,79,0],
    ["25","Budsy76","157",["–","1","–","18","DQ","21","17","17","–","–"],74,0,74,0],
    ["26","STAFTURBO","77",["7","9","1","1","7","21","–","1","8","10"],65,0,65,0],
    ["27","DirtyMonkey699","411",["8","5","3","9","5","9","5","–","5","5"],54,0,54,0],
    ["28","ricreene","69",["18","–","6","6","–","–","3","–","19","1"],53,0,53,0],
    ["29","hazza5432","25",["–","15","14","11","–","10","–","–","–","–"],50,0,50,0],
    ["30","R0B_B021","7",["9","13","–","–","–","–","4","–","6","12"],44,0,44,0],
    ["31","jmillsy85","22",["33","–","–","–","–","8","–","–","–","–"],41,0,41,0],
    ["32","Bentstik_7","30",["5","6","2","–","5","6","1","1","–","6"],32,0,32,0],
    ["33","AKs_TrueGhosted","66",["31","–","–","–","–","–","–","–","–","–"],31,0,31,0],
    ["34","RSR_Robbo-Sport","20",["–","17","8","–","–","6","–","–","–","–"],31,0,31,0],
    ["35","The_Tony_Q","34",["6","8","–","–","6","8","–","–","–","–"],28,0,28,0],
    ["36","Kezaudio","72",["–","–","–","–","–","18","–","–","–","–"],18,0,18,0],
    ["37","Gonzo15","115",["–","–","–","3","–","–","–","–","4","–"],7,0,7,0],
    ["38","blue-kit4","123",["–","–","–","–","–","7","–","–","–","–"],7,0,7,0],
    ["39","Arch655","95",["–","7","–","–","–","–","–","–","–","–"],7,0,7,0],
    ["40","IronValkyrie","47",["–","–","–","–","–","–","–","3","–","11"],3,0,3,0],
    ["41","Bluebloss","4",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["41","Diabolis1","5",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["41","Spannshouse","19",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["41","MrDonovan","27",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["41","QueenKAt_95","127",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
