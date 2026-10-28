// Tuesday One Make KTM, Season 15 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 15 points sheet. Every subtotal, drop and round points ladder was checked.
// On the sheet, 0 or a blank cell means the driver did not race that week; both are shown as "–".
// Round 3 was N/E (no event): nobody scored and it is not anyone's drop round.
// Tie on 67: Bortosz7 is placed ahead of Tonyaudio1 on countback (an 8th place beats a best of 10th),
// applying the club's tie-break used in every season; the club's sheet listed them the other way round.
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s15"] = {
  id: "wrx-evo-gr4-s15",
  group: "wrx-evo-gr4",
  season: 15,
  navLabel: "Tuesday Series",
  title: "Tuesday One Make KTM Season 15",
  eyebrow: "Tuesday One Make KTM · Season 15 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 20 drivers · Round-by-round points",
  standingsKey: ["swatches", "N/E = no event", "RGQ = 0 points", "– = did not race that week"],
  standingsRules: "Same rules as Season 18. Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. Round 3 was N/E (no event): nobody scored and it is not a drop round. DROP = the driver's lowest round. A driver gets a drop if they raced every round, or every round except the final one (missing the final round still allows a drop; it scores 0 and is not the dropped round). Anyone who missed an earlier round gets no drop. RGQ scores 0 and is not a drop round. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 15, with the 67-point tie ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  // Round cell codes: "45p1" win, "43p2" 2nd, "41p3" 3rd; "NE" = no event; "RGQ"; "–" = did not race
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["41p3","45p1","NE","43p2","45p1","–","45p1","43p2","43p2","45p1"],350,0,350,0],
    ["2","iphonedoc","744",["40","39","NE","45p1","41p3","41p3","43p2","39","41p3","43p2"],372,-39,333,0],
    ["3","Tim_turtle_79","79",["37","40","NE","40","38","43p2","41p3","40","38","39"],356,-37,319,0],
    ["4","MAD_MITCH_76","76",["35","38","NE","39","37","40","39","38","37","41p3"],344,-35,309,0],
    ["5","MasoMarvel87","333",["30","35","NE","36","39","39","36","37","40","37"],329,-30,299,0],
    ["6","Trickybrewer","92",["38","32","NE","41p3","36","38","38","–","35","36"],294,0,294,0],
    ["7","Pjmack75","21",["39","36","NE","38","40","37","37","–","–","40"],267,0,267,0],
    ["8","S7R_Ando787","787",["45p1","41p3","NE","–","43p2","45p1","RGQ","45p1","45p1","–"],264,0,264,0],
    ["9","BigBruceTheShark","99",["32","37","NE","34","–","–","35","41p3","39","–"],218,0,218,0],
    ["10","Kezaudio","72",["34","33","NE","37","35","–","40","–","36","RGQ"],215,0,215,0],
    ["11","Hamitothebone","228",["36","31","NE","35","34","36","–","–","–","34"],206,0,206,0],
    ["12","b-man228","26",["–","–","NE","–","–","–","34","35","33","38"],140,0,140,0],
    ["13","CoachCristian","25",["–","–","NE","–","–","–","–","33","32","35"],100,0,100,0],
    ["14","Rollscanhardly","270",["43p2","43p2","NE","–","–","–","–","–","–","–"],86,0,86,0],
    ["15","JorgeyBuckets","10",["–","–","NE","–","–","–","–","34","34","–"],68,0,68,0],
    ["16","Bortosz7","27",["–","–","NE","–","–","–","–","36","31","–"],67,0,67,0],
    ["17","Tonyaudio1","44",["33","34","NE","–","–","–","–","–","–","–"],67,0,67,0],
    ["18","Disco_Stu_001","101",["31","–","NE","–","–","–","–","–","–","–"],31,0,31,0],
    ["19","Mcdivott","74",["29","–","NE","–","–","–","–","–","–","–"],29,0,29,0],
    ["20","Scorpion_Fury77","77",["–","–","NE","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
