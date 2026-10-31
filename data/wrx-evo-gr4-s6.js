// 86 Championship, Season 6 (Tuesday series) — final standings (archive). Season 6 ran 8 rounds in this series.
// Transcribed from the club's Season 6 points sheet. Every subtotal, drop and total was checked; six of the eight rounds match the
// starters-based scale. Round 1 (24 scorers on the 23-starter ladder, two drivers on 5) and Round 8 (13-starter ladder with two drivers on 8)
// are kept as published. The sheet's rows were not in points order; the table is ordered by total, and the tie on 5 by countback
// (BlackSugar73, best 16th, ahead of M_Waseem-007, 23rd).
// Names: Rusty-Nutz-75, Masomarvel87 = MasoMarvel87, tim_turtle_79 = Tim_turtle_79, Fly- balding072 = Fly-balding072, mcdivott = Mcdivott,
// r0b_B021 = R0B_B021. A 0 on the sheet = did not race. Teams: Season 6 entry list (data/club-teams.js, SEASON_TEAMS[6]); M_Waseem-007 Privateer (confirmed).

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s6"] = {
  id: "wrx-evo-gr4-s6",
  group: "wrx-evo-gr4",
  season: 6,
  navLabel: "Tuesday Series",
  title: "86 Championship Season 6",
  eyebrow: "86 Championship · Season 6 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 26 drivers · 8 rounds · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 6 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 16 starters: 1st 22, 2nd 20, 3rd 18, 4th 17 … last 5). Rounds 1 and 8 are shown as the club scored them. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RNR was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 6, put in points order, with the tie on 5 ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD8], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 8,
  standings: [
    ["1","Colin_t24","85",["29p1","22p1","22p1","19p1","20p1","16p2","16p1","14"],158,-16,142,0],
    ["2","MajorWatts","36",["27p2","17","16","17p2","15","14p3","10","19p1"],135,-10,125,0],
    ["3","MAD_MITCH_76","76",["17","20p2","17","12","18p2","12","7","17p2"],120,-7,113,0],
    ["4","Tim_turtle_79","79",["22","18p3","11","8","14","–","6","15p3"],94,0,94,0],
    ["5","MasoMarvel87","333",["20","13","9","13","10","10","9","13"],97,-9,88,0],
    ["6","Rusty-Nutz-75","269",["23","14","5","7","13","13","8","5"],88,-5,83,0],
    ["7","Yoda_Raptor","775",["18","6","13","9","16p3","5","11","9"],87,-5,82,0],
    ["8","Kezaudio","72",["21","15","10","15p3","7","–","–","12"],80,0,80,0],
    ["9","Soulslayer_71","50",["14","12","8","11","–","7","14p2","10"],76,0,76,0],
    ["10","Trickybrewer","92",["8","11","12","10","6","8","12p3","11"],78,-6,72,0],
    ["11","Frosty5275","54",["15","9","7","14","11","–","–","8"],64,0,64,0],
    ["12","hazza5432","25",["19","–","15","–","–","18p1","–","8"],60,0,60,0],
    ["13","Fly-balding072","131",["10","8","6","–","8","9","5","7"],53,0,53,0],
    ["14","Bozza777","777",["16","–","20p2","–","12","–","–","–"],48,0,48,0],
    ["15","K3N-MUTT","500",["25p3","16","–","–","–","–","–","–"],41,0,41,0],
    ["16","Steve_73_GOOF","73",["5","–","18p3","5","–","11","–","–"],39,0,39,0],
    ["17","Mcdivott","74",["7","7","–","6","5","6","–","6"],37,0,37,0],
    ["18","punkert-titan","117",["13","–","14","–","9","–","–","–"],36,0,36,0],
    ["19","PingTwoHigh69","48",["24","–","–","–","–","–","–","–"],24,0,24,0],
    ["20","R0B_B021","7",["6","10","–","–","–","–","–","–"],16,0,16,0],
    ["21","MalevolentOne666","666",["12","–","–","–","–","–","–","–"],12,0,12,0],
    ["22","Creedins","26",["11","–","–","–","–","–","–","–"],11,0,11,0],
    ["23","ricreene","69",["9","–","–","–","–","–","–","–"],9,0,9,0],
    ["24","BlackSugar73","35",["–","5","–","–","–","–","–","–"],5,0,5,0],
    ["25","M_Waseem-007","86",["5","–","–","–","–","–","–","–"],5,0,5,0],
    ["26","Danhocko","17",["–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
