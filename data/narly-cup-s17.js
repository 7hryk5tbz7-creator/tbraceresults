// Narly Cup Corvette C7 GR3 RC, Season 17 (Thursday series) — final standings (archive).
// Transcribed from the club's Season 17 points sheet. Every subtotal, drop, penalty and round podium was checked.
// On the sheet, 0 or a blank cell means the driver did not race that week; both are shown as "–".
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s17"] = {
  id: "narly-cup-s17",
  group: "narly-cup",
  season: 17,
  navLabel: "Narly Cup",
  title: "Narly Cup Corvette C7 GR3 RC Season 17",
  eyebrow: "Narly Cup Corvette C7 GR3 RC · Season 17 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 17 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Same rules as Season 18. Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round. A driver gets a drop if they raced every round, or every round except the final one (missing the final round still allows a drop; it scores 0 and is not the dropped round). Anyone who missed an earlier round gets no drop. PENALTY = points deducted by the club. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 17.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["43p2","41p3","40","40","43p2","45p1","37","43p2","43p2","45p1"],420,-37,383,0],
    ["2","iphonedoc","744",["41p3","43p2","43p2","43p2","40","41p3","43p2","41p3","39","43p2"],417,-39,378,0],
    ["3","MasoMarvel87","333",["38","39","39","38","38","39","40","40","40","40"],391,-38,353,0],
    ["4","WallFinder","420",["39","32","38","39","37","37","38","37","37","39"],373,-32,341,0],
    ["5","MAD_MITCH_76","76",["37","36","37","45p1","36","38","35","38","38","35"],375,-35,340,0],
    ["6","S7R_Ando787","787",["45p1","45p1","45p1","–","45p1","–","45p1","45p1","45p1","–"],315,0,315,0],
    ["7","capella13b","64",["34","–","33","35","35","33","32","35","35","37"],309,0,309,0],
    ["8","Pjmack75","21",["40","38","41p3","34","39","36","36","39","–","–"],303,0,303,0],
    ["9","brettubrettu26","82",["–","40","–","41p3","41p3","–","41p3","34","41p3","41p3"],279,0,279,0],
    ["10","Trickybrewer","92",["35","37","35","33","–","35","31","–","36","–"],242,0,242,0],
    ["11","GGCAS_39","39",["31","–","34","32","34","32","30","–","–","36"],229,0,229,0],
    ["12","Hamitothebone","228",["–","34","36","–","–","34","33","–","34","38"],209,0,209,0],
    ["13","RiotheSpeedster","171",["33","33","32","37","–","–","–","–","–","–"],135,0,135,0],
    ["14","Kezaudio","72",["32","–","–","–","–","–","39","36","–","–"],107,0,107,0],
    ["15","Tim_turtle_79","79",["36","35","–","–","–","–","34","–","–","–"],105,0,85,-20],
    ["16","GLR_Scotty","37",["–","–","–","36","–","40","–","–","–","–"],76,0,76,0],
    ["17","Siryc","145",["–","–","–","–","–","43p2","–","–","–","–"],43,0,43,0]
  ]
};
