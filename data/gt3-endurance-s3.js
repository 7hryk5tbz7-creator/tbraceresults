// GR3 Championship, Season 3 (WJF Trophy, Friday series) — final standings (archive).
// Transcribed from the club's Season 3 points sheet: no drop rounds in Season 3. For two drivers the club's TOTAL leaves out their
// Round 10 points (Kezaudio 20, STAFTURBO 7); at the club's request totals are published as the sheet has them, with a note.
// Points: finishers on the usual starters-based scale; extra drivers below it scored 3–5 in several rounds – all kept as published.
// Tie on 144 ordered by countback (Zippy_Nathman 8th, Rusty-Nutz-75 9th – the sheet had them the other way round). Tie on 4 matches the sheet.
// BikeGooRoo (all rounds 0, never raced) left off at the club's request.
// Names: Ando787 = S7R_Ando787, Bentstik7 = Bentstik_7, Fly- balding072 = Fly-balding072, Ricreene = ricreene, r0b_B021 = R0B_B021.
// Race numbers as on the Season 3 entry list: Steve_73_GOOF #173, STAFTURBO #36 (club request). A 0 on the sheet = did not race.
// Teams: Season 3 entry list (SEASON_TEAMS[3]); JorgeyBuckets and p1_k1_a1 Privateer (confirmed).

window.SERIES = window.SERIES || {};
window.SERIES["gt3-endurance-s3"] = {
  id: "gt3-endurance-s3",
  group: "gt3-endurance",
  season: 3,
  navLabel: "WJF Trophy",
  title: "GR3 Championship Season 3",
  eyebrow: "GR3 Championship · Season 3 · Friday series",
  pages: { results: null, championship: "championship.html" },
  final: true,
  standingsMeta: "Final standings · 38 drivers · No drop rounds · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Totals are as published by the club. For two drivers the club's totals do not include their Round 10 points: Kezaudio (20) and STAFTURBO (7); their Round 10 results still count for starts, wins and podiums. No drop rounds in Season 3: each total is the rounds added together. Season 3 points depend on the number of finishers in each race: last finisher scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win. In some rounds extra drivers below the finishers scored 3–5 points; all rounds are shown as the club scored them. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RSR became Team RNR, which was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 3, with the tie on 144 ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","GLR_Scotty","37",["21p3","22p2","17","24","22","22","14","10","19","23p2"],194,0,194,0],
    ["2","N-spud-P666","32",["23p2","20p3","29p3","28p2","24","27p1","25p1","9","5","–"],190,0,190,0],
    ["3","S7R_Ando787","787",["–","24p1","33p1","30p1","–","25p2","–","16p3","24p1","25p1"],177,0,177,0],
    ["4","MAD_MITCH_76","76",["14","18","26","17","19","23p3","17","12","22p2","5"],173,0,173,0],
    ["5","BigBruceTheShark","99",["20","14","23","15","27p2","19","20","14","7","9"],168,0,168,0],
    ["6","Spannshouse","19",["25p1","11","28","20","29p1","20","5","5","17","5"],165,0,165,0],
    ["7","Tim_turtle_79","79",["7","15","24","4","21","21","19","18p2","16","5"],150,0,150,0],
    ["8","Zippy_Nathman","23",["15","19","31p2","–","25p3","4","–","15","20p3","15"],144,0,144,0],
    ["9","Rusty-Nutz-75","269",["18","12","27","22","14","18","–","4","15","14"],144,0,144,0],
    ["10","NWR_NICO71","177",["16","5","11","25","20","–","23p2","5","8","19"],132,0,132,0],
    ["11","NeonEmpyreal","80",["4","4","25","19","16","6","18","8","11","16"],127,0,127,0],
    ["12","Trickybrewer","92",["8","9","20","16","23","15","5","–","4","21p3"],121,0,121,0],
    ["13","Pjmack75","21",["19","10","10","–","10","16","21p3","20p1","–","13"],119,0,119,0],
    ["14","Dissposable_Hero","51",["3","7","18","4","12","8","15","13","18","11"],109,0,109,0],
    ["15","Steve_73_GOOF","173",["6","4","21","10","17","5","8","–","14","–"],85,0,85,0],
    ["16","Fly-balding072","131",["5","4","9","14","7","12","4","5","12","6"],78,0,78,0],
    ["17","MalevolentOne666","666",["10","–","13","18","–","10","10","–","13","–"],74,0,74,0],
    ["18","RSR_Robbo-Sport","20",["5","–","15","21","15","4","6","7","–","–"],73,0,73,0],
    ["19","Diabolis1","5",["–","–","–","26p3","18","17","11","–","–","–"],72,0,72,0],
    ["20","CerbHoppxr","246",["4","16","–","–","11","7","16","–","–","17"],71,0,71,0],
    ["21","Soulslayer_71","50",["4","4","14","11","–","13","4","4","6","10"],70,0,70,0],
    ["22","Wrestler0909","909",["13","6","12","23","–","14","–","–","–","–"],68,0,68,0],
    ["23","Kaizen_Ty98","888",["17","17","19","13","–","–","–","–","–","–"],66,0,66,0],
    ["24","Bentstik_7","30",["4","4","16","5","6","5","4","6","5","8"],63,0,63,0],
    ["25","ricreene","69",["9","8","22","12","9","–","–","–","–","–"],60,0,60,0],
    ["26","Hamitothebone","228",["–","–","–","–","–","–","13","11","9","18"],51,0,51,0],
    ["27","SquatBenchDeadli","555",["4","3","–","–","–","11","12","5","10","–"],45,0,45,0],
    ["28","JorgeyBuckets","993",["–","–","–","–","5","9","9","–","–","12"],35,0,35,0],
    ["29","R0B_B021","7",["–","–","8","8","–","4","4","–","4","5"],33,0,33,0],
    ["30","Danhocko","17",["12","–","6","7","–","–","7","–","–","–"],32,0,32,0],
    ["31","Kezaudio","72",["11","13","–","–","–","–","–","–","–","20"],24,0,24,0],
    ["32","ICER_MarchyBoy96","96",["3","3","7","–","–","5","–","–","–","–"],18,0,18,0],
    ["33","p1_k1_a1","115",["–","–","–","9","8","–","–","–","–","–"],17,0,17,0],
    ["34","Aus_RedRaptor","9",["–","–","5","6","4","–","–","–","–","–"],15,0,15,0],
    ["35","PingTwoHigh69","48",["–","–","–","–","13","–","–","–","–","–"],13,0,13,0],
    ["36","MrDonovan","27",["–","4","–","–","–","–","–","–","–","–"],4,0,4,0],
    ["37","Jrh666-demon","914",["–","–","4","–","–","–","–","–","–","–"],4,0,4,0],
    ["38","STAFTURBO","36",["–","–","–","–","–","–","–","–","4","7"],4,0,4,0]
  ]
};
