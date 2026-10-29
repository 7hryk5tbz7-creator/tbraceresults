// Muscle Car Series, Season 13 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 13 points sheet. The Round 1 column was cut off in the image;
// each driver's Round 1 points = subtotal minus Rounds 2-10 (confirmed by the club; they form an exact 45/43/41/40... ladder).
// Every subtotal, drop, penalty and round points ladder was checked.
// On the sheet, 0 or a blank cell means the driver did not race that week (shown as "–"). Race numbers are not on the sheet.
// MalevolentOne666 and brettubrettu26 scored 0 and share 20th.
// Teams are not shown for Season 13 until the club supplies the full team list.
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s13"] = {
  id: "wrx-evo-gr4-s13",
  group: "wrx-evo-gr4",
  season: 13,
  navLabel: "Tuesday Series",
  title: "Muscle Car Series Season 13",
  eyebrow: "Muscle Car Series · Season 13 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 21 drivers · Round-by-round points",
  standingsKey: ["swatches", "DQ = disqualified (0 points)", "– = did not race that week"],
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. PENALTY = points deducted by the club. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 13. Round 1 points worked out from each driver's subtotal.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Rollscanhardly","270",["45p1","45p1","45p1","45p1","43p2","45p1","45p1","45p1","45p1","45p1"],448,-43,405,0],
    ["2","Colin_t24","85",["31","41p3","41p3","40","45p1","43p2","43p2","38","43p2","36"],401,-31,370,0],
    ["3","MAD_MITCH_76","76",["39","37","27","36","39","33","39","43p2","40","39"],372,-27,345,0],
    ["4","Tim_turtle_79","79",["35","36","28","38","34","39","41p3","41p3","36","40"],368,-28,330,-10],
    ["5","P-Toots","43",["34","32","38","43p2","40","37","40","39","39","–"],342,-32,310,0],
    ["6","iphonedoc","744",["40","38","34","–","41p3","–","37","40","37","41p3"],308,0,308,0],
    ["7","Hamitothebone","228",["32","29","29","33","30","34","32","34","34","37"],324,-29,295,0],
    ["8","Trickybrewer","92",["38","35","35","37","–","38","38","35","–","38"],294,0,294,0],
    ["9","S7R_Ando787","787",["43p2","39","43p2","–","35","41p3","–","–","41p3","43p2"],285,0,285,0],
    ["10","Tonyaudio1","44",["26","28","39","31","36","35","–","36","35","–"],266,0,266,0],
    ["11","CmeCrash","",["28","26","30","32","32","32","35","33","33","–"],281,-26,255,0],
    ["12","Pjmack75","21",["30","31","37","35","–","–","36","37","38","–"],244,0,244,0],
    ["13","MasoMarvel87","333",["29","33","33","34","33","36","34","–","–","–"],232,0,232,0],
    ["14","Kezaudio","72",["36","34","36","41p3","38","–","–","DQ","–","–"],185,0,175,-10],
    ["15","Mcdivott","74",["27","30","31","30","31","–","33","–","32","–"],214,0,214,0],
    ["16","moneymandavo","",["41p3","40","32","–","37","–","–","–","–","–"],150,0,130,-20],
    ["17","Sirily90","90",["37","43p2","40","–","–","–","–","–","–","–"],120,0,120,0],
    ["18","capella13b","64",["–","27","–","29","29","31","–","–","–","–"],116,0,116,0],
    ["19","DK666_Racing","",["33","–","–","39","–","40","–","–","–","–"],112,0,112,0],
    ["20","MalevolentOne666","666",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["20","brettubrettu26","82",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
