// Tuesday VAN Championship, Season 9 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 9 points sheet. Every subtotal, drop and total was checked.
// Season 9 uses the same starters-based points as Season 10: last place 5, +1 per place, +1 bonus for 2nd and +2 for the win.
// Round 4 (11 scorers on the 12-starter ladder, no 5 awarded) and Round 6 (winner on 16, two drivers on 5) don't match the
// ladder exactly; both are kept as the club published them. Tie on 61: Mcdivott ahead of CmeCrash on countback (best finish 6th vs 8th),
// as on the club's sheet. Names: Ando787 = S7R_Ando787, iPhonedoc = iphonedoc. A 0 on the sheet = did not race.
// Teams: every driver raced for the same team as in the other seasons (data/club-teams.js, SEASON_TEAMS[9]).

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s9"] = {
  id: "wrx-evo-gr4-s9",
  group: "wrx-evo-gr4",
  season: 9,
  navLabel: "Tuesday Series",
  title: "Tuesday VAN Championship Season 9",
  eyebrow: "Tuesday VAN Championship · Season 9 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 14 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 9 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 12 starters: 1st 18, 2nd 16, 3rd 14, 4th 13 … last 5). Rounds 4 and 6 are shown as the club scored them. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 9.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Rollscanhardly","270",["17p1","9","6","18p1","18p1","12p3","18p1","15p1","18p1","18p1"],149,-6,143,0],
    ["2","Colin_t24","85",["10","15p2","16p2","13","16p2","16p1","14p3","8","16p2","10"],134,-8,126,0],
    ["3","S7R_Ando787","787",["15p2","17p1","18p1","–","13","14p2","16p2","–","12","16p2"],121,0,121,0],
    ["4","MAD_MITCH_76","76",["13p3","11","14p3","14p3","14p3","5","12","13p2","13","11"],120,-5,115,0],
    ["5","Pjmack75","21",["12","–","8","12","11","11","13","10","14p3","12"],103,0,103,0],
    ["6","iphonedoc","744",["11","13p3","11","16p2","8","8","9","11p3","6","13"],106,-6,100,0],
    ["7","Hamitothebone","228",["8","12","12","11","12","10","11","9","10","9"],104,-8,96,0],
    ["8","Tim_turtle_79","79",["7","10","13","10","10","–","10","–","11","14p3"],85,0,85,0],
    ["9","Trickybrewer","92",["6","7","10","9","9","5","8","7","7","6"],74,-5,69,0],
    ["10","Mcdivott","74",["5","8","7","6","7","9","6","5","8","5"],66,-5,61,0],
    ["11","CmeCrash","33",["–","6","5","7","6","7","7","6","9","8"],61,0,61,0],
    ["12","Disco_Stu_001","101",["–","5","9","8","5","6","5","–","5","7"],50,0,50,0],
    ["13","Spannshouse","19",["9","–","–","–","–","–","–","–","–","–"],9,0,9,0],
    ["14","Nadnarb85","404",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
