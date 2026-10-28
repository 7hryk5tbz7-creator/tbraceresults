// BMW CSL 73 Series, Season 14 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 14 points sheet. Every subtotal, drop, penalty and round points ladder was checked.
// On the sheet, 0 means the driver did not race that week (shown as "–").
// capella13b, Hamitothebone and Mcdivott are listed with 0 points and share 11th.
// Teams are not shown for Season 14 until the club supplies the full team list.
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s14"] = {
  id: "wrx-evo-gr4-s14",
  group: "wrx-evo-gr4",
  season: 14,
  navLabel: "Tuesday Series",
  title: "BMW CSL 73 Series Season 14",
  eyebrow: "BMW CSL 73 Series · Season 14 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 13 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Same rules as Season 18. Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round. A driver gets a drop if they raced every round, or every round except the final one (missing the final round still allows a drop; it scores 0 and is not the dropped round). Anyone who missed an earlier round gets no drop. PENALTY = points deducted by the club. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 14.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Rollscanhardly","270",["45p1","45p1","45p1","45p1","45p1","43p2","45p1","45p1","45p1","45p1"],448,-43,405,0],
    ["2","MAD_MITCH_76","76",["40","43p2","39","39","43p2","45p1","40","43p2","43p2","40"],415,-39,376,0],
    ["3","Tim_turtle_79","79",["38","41p3","40","38","40","41p3","37","41p3","40","41p3"],397,-37,360,0],
    ["4","iphonedoc","744",["37","37","36","40","39","40","41p3","39","41p3","39"],389,-36,353,0],
    ["5","Colin_t24","85",["43p2","39","38","41p3","37","36","43p2","–","38","37"],352,0,352,0],
    ["6","Pjmack75","21",["36","–","37","36","38","39","38","37","39","38"],338,0,338,0],
    ["7","S7R_Ando787","787",["41p3","38","43p2","43p2","41p3","–","39","–","36","43p2"],324,0,324,0],
    ["8","Trickybrewer","92",["39","40","41p3","37","–","38","36","40","–","–"],271,0,266,-5],
    ["9","BigBruceTheShark","99",["35","–","35","35","–","37","–","38","37","36"],253,0,253,0],
    ["10","WharfyRacing","97",["34","–","–","–","–","–","–","–","–","–"],34,0,34,0],
    ["11","capella13b","64",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["11","Hamitothebone","228",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["11","Mcdivott","74",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
