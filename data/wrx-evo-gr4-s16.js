// Tuesday Cayman GT4, Season 16 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 16 points sheet. Every subtotal, drop and round points ladder was checked.
// On the sheet, 0 or a blank cell means the driver did not race that week; both are shown as "–".
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s16"] = {
  id: "wrx-evo-gr4-s16",
  group: "wrx-evo-gr4",
  season: 16,
  navLabel: "Tuesday Series",
  title: "Tuesday Cayman GT4 Season 16",
  eyebrow: "Tuesday Cayman GT4 · Season 16 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 17 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Same rules as Season 18. Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round. A driver gets a drop if they raced every round, or every round except the final one (missing the final round still allows a drop; it scores 0 and is not the dropped round). Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 16.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["45p1","45p1","45p1","45p1","45p1","45p1","45p1","45p1","43p2","45p1"],448,-43,405,0],
    ["2","iphonedoc","744",["41p3","41p3","43p2","41p3","41p3","43p2","41p3","43p2","41p3","39"],414,-39,375,0],
    ["3","Tim_turtle_79","79",["38","40","41p3","43p2","37","41p3","43p2","38","38","43p2"],402,-37,365,0],
    ["4","Pjmack75","21",["40","43p2","35","39","40","38","37","40","39","35"],386,-35,351,0],
    ["5","MAD_MITCH_76","76",["39","39","40","40","35","40","39","35","33","38"],378,-33,345,0],
    ["6","P-Toots","43",["–","34","33","37","36","39","38","41p3","40","37"],335,0,335,0],
    ["7","b-man228","26",["36","37","37","36","33","36","–","36","37","41p3"],329,0,329,0],
    ["8","Trickybrewer","92",["43p2","38","38","38","34","34","32","33","–","36"],326,0,326,0],
    ["9","MasoMarvel87","333",["37","–","–","–","39","37","40","34","36","40"],263,0,263,0],
    ["10","CoachCristian","25",["33","–","32","–","32","33","33","31","32","34"],260,0,260,0],
    ["11","Kezaudio","72",["–","36","36","–","38","35","35","39","35","–"],254,0,254,0],
    ["12","Hamitothebone","228",["34","35","34","–","–","–","34","32","34","–"],203,0,203,0],
    ["13","BigBruceTheShark","99",["35","33","39","–","–","–","36","37","–","–"],180,0,180,0],
    ["14","Bentstik_7","31",["32","31","–","35","–","31","–","–","–","33"],162,0,162,0],
    ["15","MalevolentOne666","666",["–","32","–","34","–","32","31","–","–","–"],129,0,129,0],
    ["16","S7R_Ando787","787",["–","–","–","–","43p2","–","–","–","45p1","–"],88,0,88,0],
    ["17","Tonyaudio1","44",["–","30","–","–","–","–","–","–","–","–"],30,0,30,0]
  ]
};
