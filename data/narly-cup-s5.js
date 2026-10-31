// Viper Challenge Championship, Season 5 (Narly Cup, Thursday series) — final standings (archive).
// Transcribed from the club's Season 5 points sheet. The club's SUB/TOTAL columns leave out Round 1 for every driver; at the club's
// request the totals are published as the sheet has them, with a note. Round 1 still counts for starts, wins and podiums (driver and
// team records). Drops checked. Nine of the ten rounds match the starters-based scale; Round 5 (winner 15, no 9) is kept as published.
// P-Toots and Tony2sips (marked as sitting out) did race, so they are included. hazza5432 is listed with no races.
// Names: Ando787 = S7R_Ando787, Tony2sips = Tonyaudio1. A 0 on the sheet = did not race. Teams: Season 5 entry list (SEASON_TEAMS[5]).

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s5"] = {
  id: "narly-cup-s5",
  group: "narly-cup",
  season: 5,
  navLabel: "Narly Cup",
  title: "Viper Challenge Championship Season 5",
  eyebrow: "Viper Challenge Championship · Season 5 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 16 drivers · Round 1 not counted in points totals",
  standingsKey: ["swatches", "– = did not race that week", "Round 1 points are not included in Subtotal or Points"],
  standingsRules: "Round 1 did not count towards the points totals this season: the Subtotal and Points columns are the club's figures for Rounds 2–10. Round 1 results still count for race starts, wins and podiums in Driver Records and Team Records. Season 5 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 11 starters: 1st 17, 2nd 15, 3rd 13, 4th 12 … last 5). Round 5 is shown as the club scored it. DROP = the driver's lowest round, not counting the final round. A driver gets a drop if they raced every round, or every round except the final one. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on. Team RNR was renamed MC Motorsport after Season 8.",
  standingsSource: "Standings as published by the club at the end of Season 5 (Round 1 not counted in the points totals).",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["17p1","15p1","15p1","13p3","15p1","17p1","14p2","11","7","10p3"],117,-7,110,0],
    ["2","Rusty-Nutz-75","269",["5","11p3","11p3","15p2","–","15p2","12p3","9","14p1","12p2"],99,0,99,0],
    ["3","Trickybrewer","92",["11","10","10","6","11p3","12","9","12p3","6","14p1"],90,-6,84,0],
    ["4","Yoda_Raptor","775",["12","8","9","17p1","8","10","11","5","8","6"],82,-5,77,0],
    ["5","MAD_MITCH_76","76",["13p3","–","7","11","13p2","8","6","10","9","8"],72,0,72,0],
    ["6","Tim_turtle_79","79",["15p2","9","8","10","6","9","10","8","10p3","7"],77,-6,71,0],
    ["7","Hamitothebone","228",["–","6","–","12","10","13p3","7","–","5","9"],62,0,62,0],
    ["8","S7R_Ando787","787",["–","–","13p2","–","–","–","16p1","16p1","12p2","–"],57,0,57,0],
    ["9","DanZambe","2",["8","13p2","5","9","7","5","–","–","–","–"],39,0,39,0],
    ["10","STAFTURBO","77",["6","5","6","7","–","11","8","–","–","–"],37,0,37,0],
    ["11","Kezaudio","72",["10","–","–","8","–","7","–","14p2","–","–"],29,0,29,0],
    ["12","MalevolentOne666","666",["9","7","–","–","5","–","5","–","–","5"],22,0,22,0],
    ["13","P-Toots","43",["–","–","–","–","–","6","–","7","–","–"],13,0,13,0],
    ["14","Tonyaudio1","44",["–","–","–","–","–","–","–","6","–","–"],6,0,6,0],
    ["15","Gonzo15","115",["7","–","–","5","–","–","–","–","–","–"],5,0,5,0],
    ["16","hazza5432","25",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
