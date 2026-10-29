// Memorial Cup GT4 Championship, Season 10 (Narly Cup, Thursday series) — final standings (archive).
// Title cut off on the club's sheet; named "Memorial Cup GT4 Championship" for now (club's instruction).
// Season 10 points depend on the number of starters: last place 5, +1 per place, +1 bonus for 2nd, +2 for the win.
// Every round, subtotal, drop and total was checked. Podium markers are by finishing position.
// Tie on 23: Danzambe ahead of Disco_Stu_001 on countback (two 10th places vs one), as on the sheet.
// "Ando787" (#787) is S7R_Ando787. Three drivers with 0 points (did not race) share 24th.
// Teams come from the club's Season 10 team list.

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s10"] = {
  id: "narly-cup-s10",
  group: "narly-cup",
  season: 10,
  navLabel: "Narly Cup",
  title: "Memorial Cup GT4 Championship Season 10",
  eyebrow: "Memorial Cup GT4 Championship · Season 10 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 26 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 10 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 18 starters: 1st 24, 2nd 22, 3rd 20, 4th 19 … last 5). DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 10.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["24p1","17p3","–","15","17p3","14p1","12","16p2","10","18p1"],143,0,143,0],
    ["2","GLR_Scotty","37",["16","16","17p2","18p2","5","12p2","15p2","14p3","13p3","16p2"],142,-5,137,0],
    ["3","S7R_Ando787","787",["–","19p2","19p1","–","19p2","–","13p3","18p1","17p1","9"],114,0,114,0],
    ["4","MAD_MITCH_76","76",["18","15","15p3","10","10","6","11","11","12","10"],118,-6,112,0],
    ["5","brettubrettu26","82",["15","12","12","–","12","9","17p1","12","9","12"],110,0,110,0],
    ["6","Tim_turtle_79","79",["14","14","11","13","11","8","10","10","8","11"],110,-8,102,0],
    ["7","Trickybrewer","92",["20p3","9","14","11","14","5","6","9","6","6"],100,-5,95,0],
    ["8","Rollscanhardly","270",["–","21p1","–","20p1","21p1","–","–","–","15p2","14p3"],91,0,91,0],
    ["9","MasoMarvel87","333",["10","13","–","16p3","15","–","9","13","–","7"],83,0,83,0],
    ["10","iphonedoc","744",["22p2","11","9","14","16","10p3","–","–","–","–"],82,0,82,0],
    ["11","Hamitothebone","228",["12","6","–","12","13","7","7","7","7","8"],79,0,79,0],
    ["12","Mcdivott","74",["11","–","13","9","7","–","8","8","–","–"],56,0,56,0],
    ["13","capella13b","64",["5","7","6","8","6","–","5","5","5","5"],52,0,52,0],
    ["14","Pjmack75","21",["19","–","–","–","–","–","–","–","11","13"],43,0,43,0],
    ["15","DirtyMonkey699","411",["9","5","–","–","8","–","–","6","–","–"],28,0,28,0],
    ["16","Danzambe","2",["13","10","–","–","–","–","–","–","–","–"],23,0,23,0],
    ["17","Disco_Stu_001","101",["8","–","8","7","–","–","–","–","–","–"],23,0,23,0],
    ["18","BlackSugar73","35",["7","8","7","–","–","–","–","–","–","–"],22,0,22,0],
    ["19","MajorWatts","36",["17","–","–","–","–","–","–","–","–","–"],17,0,17,0],
    ["20","ricreene","69",["6","–","10","–","–","–","–","–","–","–"],16,0,16,0],
    ["21","CmeCrash","33",["–","–","5","6","–","–","–","–","–","–"],11,0,11,0],
    ["22","simple-crackers9","16",["–","–","–","–","9","–","–","–","–","–"],9,0,9,0],
    ["23","PINGTwoHigh69","48",["–","–","–","5","–","–","–","–","–","–"],5,0,5,0],
    ["24","jmillsy85","22",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["24","MalevolentOne666","666",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["24","R0B_B021","7",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
