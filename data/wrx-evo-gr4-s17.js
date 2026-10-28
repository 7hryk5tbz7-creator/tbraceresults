// Camaro Muscle Series, Season 17 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 17 points sheet. Every subtotal, drop and round podium was checked.
// On the sheet, 0 or a blank cell means the driver did not race that week; both are shown as "–".
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s17"] = {
  id: "wrx-evo-gr4-s17",
  group: "wrx-evo-gr4",
  season: 17,
  navLabel: "Tuesday Series",
  title: "Camaro Muscle Series Season 17",
  eyebrow: "Camaro Muscle Series · Season 17 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 16 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Same rules as Season 18. Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round, removed only when they scored in every round (0 if a round was missed). No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 17.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["45p1","43p2","43p2","43p2","40","43p2","45p1","43p2","41p3","45p1"],431,-40,391],
    ["2","iphonedoc","744",["38","38","38","36","41p3","39","43p2","41p3","43p2","40"],397,-36,361],
    ["3","MAD_MITCH_76","76",["36","37","39","37","39","41p3","37","36","37","41p3"],380,-36,344],
    ["4","b-man228","26",["37","33","–","39","37","40","39","38","38","37"],338,0,338],
    ["5","Pjmack75","21",["35","40","41p3","45p1","45p1","45p1","41p3","45p1","–","–"],337,0,337],
    ["6","Trickybrewer","92",["31","36","37","41p3","38","36","38","35","34","38"],364,-31,333],
    ["7","MasoMarvel87","333",["–","34","40","40","43p2","38","–","37","39","35"],306,0,306],
    ["8","S7R_Ando787","787",["43p2","45p1","45p1","–","–","–","–","–","45p1","43p2"],221,0,221],
    ["9","Hamitothebone","228",["–","30","36","–","–","34","36","–","35","36"],207,0,207],
    ["10","Tankneo-1","576",["32","31","–","–","–","37","–","39","40","–"],179,0,179],
    ["11","JahJah_2015","6",["34","32","–","38","36","33","–","–","–","–"],173,0,173],
    ["12","Kezaudio","72",["40","–","–","–","–","–","40","34","–","34"],148,0,148],
    ["13","BigBruceTheShark","99",["–","–","–","–","–","35","–","40","36","–"],111,0,111],
    ["14","Tim_turtle_79","79",["33","39","–","–","–","–","–","–","–","39"],111,0,111],
    ["15","brettubrettu26","82",["39","41p3","–","–","–","–","–","–","–","–"],80,0,80],
    ["16","MoldyBox321","777",["41p3","35","–","–","–","–","–","–","–","–"],76,0,76]
  ]
};
