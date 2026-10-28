// Narlydude71 Cup Thursday, Season 15 (Thursday series) — final standings (archive).
// Transcribed from the club's Season 15 points sheet. Every subtotal, drop and round points ladder was checked.
// On the sheet, 0 or a blank cell means the driver did not race that week; both are shown as "–".
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s15"] = {
  id: "narly-cup-s15",
  group: "narly-cup",
  season: 15,
  navLabel: "Narly Cup",
  title: "Narlydude71 Cup Thursday Season 15",
  eyebrow: "Narlydude71 Cup Thursday · Season 15 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 19 drivers · Round-by-round points",
  standingsKey: ["swatches", "RGQ = 0 points", "– = did not race that week"],
  standingsRules: "Same rules as Season 18. Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round, removed only when they raced every round (0 if a round was missed). RGQ scores 0 and is not a drop round. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 15.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["41p3","45p1","32","45p1","39","41p3","36","43p2","45p1","45p1"],412,-32,380,0],
    ["2","MasoMarvel87","333",["–","36","38","40","45p1","45p1","45p1","45p1","41p3","36"],371,0,371,0],
    ["3","MAD_MITCH_76","76",["29","43p2","41p3","38","40","43p2","41p3","39","39","40"],393,-29,364,0],
    ["4","Tim_turtle_79","79",["28","41p3","39","37","38","40","40","38","36","38"],375,-28,347,0],
    ["5","iphonedoc","744",["38","38","37","39","43p2","–","37","36","34","41p3"],343,0,343,0],
    ["6","brettubrettu26","82",["37","39","40","41p3","41p3","–","–","37","38","43p2"],316,0,316,0],
    ["7","capella13b","64",["30","34","34","34","–","37","38","35","35","35"],312,0,312,0],
    ["8","WallFinder","420",["35","33","–","36","–","–","43p2","41p3","40","39"],267,0,267,0],
    ["9","Trickybrewer","92",["36","35","33","35","–","39","39","–","–","37"],254,0,254,0],
    ["10","Hamitothebone","228",["32","31","35","33","–","38","–","–","37","–"],206,0,206,0],
    ["11","BigBruceTheShark","99",["40","32","36","–","–","–","–","40","43p2","–"],191,0,191,0],
    ["12","Pjmack75","21",["34","37","43p2","–","–","–","–","–","–","–"],114,0,114,0],
    ["13","S7R_Ando787","787",["45p1","–","45p1","–","–","–","RGQ","RGQ","–","–"],90,0,90,0],
    ["14","Siryc","145",["39","–","–","43p2","–","–","–","RGQ","–","–"],82,0,82,0],
    ["15","Rollscanhardly","270",["43p2","–","–","–","–","–","–","–","–","–"],43,0,43,0],
    ["16","N-spud-P666","32",["–","40","–","–","–","–","–","–","–","–"],40,0,40,0],
    ["17","GGCAS_39","39",["–","–","–","–","–","–","–","–","–","34"],34,0,34,0],
    ["18","Disco_Stu_001","101",["33","–","–","–","–","–","–","–","–","–"],33,0,33,0],
    ["19","Mcdivott","74",["31","–","–","–","–","–","–","–","–","–"],31,0,31,0]
  ]
};
