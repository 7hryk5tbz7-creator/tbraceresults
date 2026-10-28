// Narlydude71 Cup GR3 RC, Season 13 (Thursday series) — final standings (archive).
// Transcribed from the club's Season 13 points sheet. Round 2 was not run (no column on the sheet; confirmed by the club).
// Every subtotal, drop, penalty and round points ladder was checked.
// On the sheet, 0 or a blank cell means the driver did not race that week (shown as "–"). Race numbers are not on the sheet;
// they are filled from drivers' other seasons where known.
// Teams are not shown for Season 13 until the club supplies the full team list.
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s13"] = {
  id: "narly-cup-s13",
  group: "narly-cup",
  season: 13,
  navLabel: "Narly Cup",
  title: "Narlydude71 Cup GR3 RC Season 13",
  eyebrow: "Narlydude71 Cup GR3 RC · Season 13 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 22 drivers · Round-by-round points",
  standingsKey: ["swatches", "NP = round not run", "– = did not race that week"],
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. Round 2 was not run and is not a drop round. DROP = the driver's lowest round. A driver gets a drop if they raced every round, or every round except the final one (missing the final round still allows a drop; it scores 0 and is not the dropped round). Anyone who missed an earlier round gets no drop. PENALTY = points deducted by the club. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 13.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["45p1","NP","45p1","40","45p1","43p2","43p2","45p1","43p2","43p2"],392,-40,352,0],
    ["2","iphonedoc","744",["43p2","NP","43p2","45p1","–","41p3","41p3","43p2","41p3","45p1"],342,0,342,0],
    ["3","MAD_MITCH_76","76",["41p3","NP","41p3","41p3","40","38","36","40","40","40"],357,-36,321,0],
    ["4","Tim_turtle_79","79",["40","NP","40","36","41p3","35","39","36","37","36"],340,-35,305,0],
    ["5","Hamitothebone","228",["39","NP","31","33","37","33","33","33","34","41p3"],314,-31,283,0],
    ["6","capella13b","64",["28","NP","30","31","36","29","32","31","33","35"],285,-28,257,0],
    ["7","Kezaudio","72",["29","NP","37","39","–","34","38","39","39","–"],255,0,255,0],
    ["8","CmeCrash","",["–","NP","33","34","–","31","34","35","35","37"],239,0,239,0],
    ["9","Mcdivott","74",["34","NP","34","30","–","32","35","34","36","–"],235,0,235,0],
    ["10","S7R_Ando787","787",["–","NP","–","43p2","43p2","45p1","45p1","–","45p1","–"],221,0,221,0],
    ["11","MasoMarvel87","333",["36","NP","32","–","38","37","37","–","–","38"],218,0,218,0],
    ["12","Trickybrewer","92",["35","NP","35","38","–","36","–","38","–","39"],221,0,211,-10],
    ["13","Pjmack75","21",["–","NP","38","–","–","40","40","41p3","38","–"],197,0,197,0],
    ["14","MajorWatts","36",["38","NP","39","37","–","39","–","37","–","–"],190,0,190,0],
    ["15","DK666_Racing","",["37","NP","–","35","39","–","–","–","–","–"],111,0,111,0],
    ["16","brettubrettu26","82",["33","NP","36","–","–","–","–","–","–","–"],69,0,69,0],
    ["17","Disco_Stu_001","101",["32","NP","–","–","–","30","–","–","–","–"],62,0,62,0],
    ["18","MalevolentOne666","666",["27","NP","–","32","–","–","–","–","–","–"],59,0,59,0],
    ["19","homer7201","",["–","NP","–","–","–","–","–","32","–","–"],32,0,32,0],
    ["20","Soulslayer_71","571",["31","NP","–","–","–","–","–","–","–","–"],31,0,31,0],
    ["21","Tonyaudio1","44",["30","NP","–","–","–","–","–","–","–","–"],30,0,30,0],
    ["22","simple-crackers9","",["–","NP","29","–","–","–","–","–","–","–"],29,0,29,0]
  ]
};
