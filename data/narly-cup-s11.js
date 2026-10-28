// Narlydude71 Cup, Season 11 (Thursday series) — final standings (archive).
// Transcribed from the club's Season 11 points sheet. The Round 1 column was cut off in the image;
// each driver's Round 1 points = subtotal minus Rounds 2-10 (they form an exact 45/43/41/40... ladder).
// Every drop, penalty and total was checked. capella13b: -10 penalty (on the sheet).
// Note: on the sheet no driver has 32 points in Round 5 (a gap in that round's points scale); left as published.
// On the sheet, 0 means the driver did not race that week (shown as "–").
// Teams are not shown for Season 11 until the club supplies the full team list.
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s11"] = {
  id: "narly-cup-s11",
  group: "narly-cup",
  season: 11,
  navLabel: "Narly Cup",
  title: "Narlydude71 Cup Season 11",
  eyebrow: "Narlydude71 Cup · Season 11 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 18 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round. A driver gets a drop if they raced every round, or every round except the final one (missing the final round still allows a drop; it scores 0 and is not the dropped round). Anyone who missed an earlier round gets no drop. PENALTY = points deducted by the club. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 11. Round 1 points worked out from each driver's subtotal.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["45p1","45p1","45p1","45p1","45p1","45p1","45p1","45p1","45p1","43p2"],448,-43,405,0],
    ["2","iphonedoc","744",["41p3","34","43p2","41p3","37","43p2","37","43p2","43p2","37"],399,-34,365,0],
    ["3","MAD_MITCH_76","76",["35","43p2","41p3","40","38","37","39","41p3","39","45p1"],398,-35,363,0],
    ["4","brettubrettu26","82",["36","40","38","33","41p3","39","41p3","40","38","36"],382,-33,349,0],
    ["5","Tim_turtle_79","79",["40","39","33","–","40","38","38","39","40","41p3"],348,0,348,0],
    ["6","MasoMarvel87","333",["39","37","40","–","29","35","34","31","41p3","40"],326,0,326,0],
    ["7","Mcdivott","74",["33","36","35","38","36","32","–","36","35","39"],320,0,320,0],
    ["8","GLR_Scotty","37",["34","38","36","37","35","40","35","38","–","–"],293,0,293,0],
    ["9","Hamitothebone","228",["30","35","–","34","34","36","–","35","37","35"],276,0,276,0],
    ["10","MalevolentOne666","666",["32","30","34","35","31","33","36","–","36","–"],267,0,267,0],
    ["11","Trickybrewer","92",["37","32","37","39","–","–","–","37","34","38"],254,0,254,0],
    ["12","Kezaudio","72",["–","–","39","36","33","34","40","33","–","–"],215,0,215,0],
    ["13","capella13b","64",["28","31","–","–","28","31","–","32","33","34"],217,0,207,-10],
    ["14","Pjmack75","21",["38","41p3","–","43p2","39","41p3","–","–","–","–"],202,0,202,0],
    ["15","S7R_Ando787","787",["43p2","–","–","–","43p2","–","43p2","–","–","–"],129,0,129,0],
    ["16","Disco_Stu_001","101",["29","–","–","–","30","–","–","34","–","–"],93,0,93,0],
    ["17","ricreene","69",["–","33","32","–","–","–","–","–","–","–"],65,0,65,0],
    ["18","Tonyaudio1","44",["31","–","–","32","–","–","–","–","–","–"],63,0,63,0]
  ]
};
