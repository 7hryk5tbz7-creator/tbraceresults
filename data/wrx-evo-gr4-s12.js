// Roadster Challenge, Season 12 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 12 points sheet. Every subtotal, drop and round points ladder was checked.
// The sheet showed brettubrettu26's total as 329 against a subtotal of 334 with no drop or penalty;
// the club confirmed 334 is correct.
// On the sheet, 0 means the driver did not race that week (shown as "–"). Race numbers are not on the sheet;
// they are filled from drivers' other seasons where known.
// Teams are not shown for Season 12 until the club supplies the full team list.
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s12"] = {
  id: "wrx-evo-gr4-s12",
  group: "wrx-evo-gr4",
  season: 12,
  navLabel: "Tuesday Series",
  title: "Roadster Challenge Season 12",
  eyebrow: "Roadster Challenge · Season 12 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 22 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round. A driver gets a drop if they raced every round, or every round except the final one (missing the final round still allows a drop; it scores 0 and is not the dropped round). Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 12 (brettubrettu26's total corrected to 334, confirmed by the club).",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Rollscanhardly","270",["45p1","45p1","43p2","45p1","45p1","45p1","45p1","28","43p2","45p1"],429,-28,401,0],
    ["2","MAD_MITCH_76","76",["41p3","41p3","41p3","43p2","41p3","41p3","39","41p3","41p3","41p3"],410,-39,371,0],
    ["3","iphonedoc","744",["38","39","39","40","43p2","43p2","41p3","37","39","43p2"],402,-37,365,0],
    ["4","Colin_t24","85",["33","–","45p1","39","38","40","43p2","45p1","37","39"],359,0,359,0],
    ["5","Trickybrewer","92",["30","43p2","38","37","37","37","36","35","36","36"],365,-30,335,0],
    ["6","brettubrettu26","82",["40","38","–","38","40","38","38","33","34","35"],334,0,334,0],
    ["7","Pjmack75","21",["32","37","40","36","36","33","33","38","33","37"],355,-32,323,0],
    ["8","Tim_turtle_79","79",["39","40","34","–","–","39","37","36","40","40"],305,0,305,0],
    ["9","Hamitothebone","228",["–","32","35","32","33","35","30","29","31","32"],289,0,289,0],
    ["10","Mcdivott","74",["34","30","31","33","30","34","28","32","32","31"],315,-28,287,0],
    ["11","capella13b","64",["31","29","30","29","31","30","29","–","30","30"],269,0,269,0],
    ["12","Tonyaudio1","44",["–","34","37","31","34","32","31","31","–","34"],264,0,264,0],
    ["13","Kezaudio","72",["–","–","33","35","39","31","32","39","–","38"],247,0,247,0],
    ["14","S7R_Ando787","787",["43p2","–","–","41p3","35","–","40","40","45p1","–"],244,0,244,0],
    ["15","simple-crackers9","",["37","36","–","34","32","36","–","34","–","33"],242,0,242,0],
    ["16","MasoMarvel87","333",["35","33","36","–","–","–","35","30","–","–"],169,0,169,0],
    ["17","Spannshouse","19",["–","–","–","–","–","–","34","43p2","38","–"],115,0,115,0],
    ["18","MalevolentOne666","666",["–","35","32","30","–","–","–","–","–","–"],97,0,97,0],
    ["19","MrDonovan","",["36","31","–","–","–","–","–","–","–","–"],67,0,67,0],
    ["20","DK666_Racing","",["–","–","–","–","–","–","–","–","35","–"],35,0,35,0],
    ["21","JimmyJamBoi","",["–","28","–","–","–","–","–","–","–","–"],28,0,28,0],
    ["22","ricreene","69",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
