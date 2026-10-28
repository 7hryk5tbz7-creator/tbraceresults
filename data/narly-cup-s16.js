// Narly Cup Elantra Thursday, Season 16 (Thursday series) — final standings (archive).
// Transcribed from the club's Season 16 points sheet. Every subtotal, drop and round points ladder was checked.
// On the sheet, 0 or a blank cell means the driver did not race that week; both are shown as "–".
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s16"] = {
  id: "narly-cup-s16",
  group: "narly-cup",
  season: 16,
  navLabel: "Narly Cup",
  title: "Narly Cup Elantra Thursday Season 16",
  eyebrow: "Narly Cup Elantra Thursday · Season 16 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 19 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Same rules as Season 18. Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round. A driver gets a drop if they raced every round, or every round except the final one (missing the final round still allows a drop; it scores 0 and is not the dropped round). Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 16.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["45p1","45p1","45p1","40","43p2","45p1","45p1","45p1","45p1","45p1"],443,-40,403,0],
    ["2","iphonedoc","744",["40","41p3","41p3","45p1","37","41p3","40","40","41p3","40"],406,-37,369,0],
    ["3","Pjmack75","21",["43p2","43p2","39","38","–","43p2","39","31","38","39"],353,0,353,0],
    ["4","MAD_MITCH_76","76",["39","40","40","37","34","37","41p3","37","36","37"],378,-34,344,0],
    ["5","Trickybrewer","92",["38","35","37","43p2","36","33","32","35","–","33"],322,0,322,0],
    ["6","capella13b","64",["32","33","34","35","32","35","33","32","35","34"],335,-32,303,0],
    ["7","BigBruceTheShark","99",["41p3","–","–","41p3","39","40","43p2","43p2","–","38"],285,0,285,0],
    ["8","RiotheSpeedster","171",["–","34","35","33","35","36","37","36","37","–"],283,0,283,0],
    ["9","GLR_Scotty","37",["36","37","43p2","–","38","–","–","33","40","35"],262,0,262,0],
    ["10","Tim_turtle_79","79",["35","38","36","39","33","34","–","–","–","31"],246,0,246,0],
    ["11","Hamitothebone","228",["34","36","33","36","31","–","38","34","–","–"],242,0,242,0],
    ["12","Kezaudio","72",["–","–","38","34","40","38","35","39","–","–"],224,0,224,0],
    ["13","MasoMarvel87","333",["37","–","–","–","–","39","36","–","39","41p3"],192,0,192,0],
    ["14","S7R_Ando787","787",["–","39","–","–","45p1","–","–","41p3","–","43p2"],168,0,168,0],
    ["15","GGCAS_39","39",["–","–","–","–","–","–","34","30","33","32"],129,0,129,0],
    ["16","Spannshouse","19",["–","–","–","–","41p3","–","–","–","43p2","–"],84,0,84,0],
    ["17","JahJah_2015","6",["–","–","–","–","–","–","–","–","34","36"],70,0,70,0],
    ["18","MoldyBox321","777",["–","–","–","–","–","–","–","38","–","–"],38,0,38,0],
    ["19","jmillsy85","22",["33","–","–","–","–","–","–","–","–","–"],33,0,33,0]
  ]
};
