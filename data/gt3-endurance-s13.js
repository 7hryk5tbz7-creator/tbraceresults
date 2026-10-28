// WJF73 Trophy GT3 Endurance, Season 13 — final standings (archive).
// Transcribed from the club's Season 13 points sheet. The Round 1 column was cut off in the image;
// each driver's Round 1 points = subtotal minus Rounds 2-10 (they form an exact 45/43/41/40... ladder).
// Every subtotal, drop, penalty and round points ladder was checked.
// On the sheet, 0 or a blank cell means the driver did not race that round (shown as "–"). Race numbers are not on the sheet;
// they are filled from drivers' other seasons where known.
// Teams are not shown for Season 13 until the club supplies the full team list.
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["gt3-endurance-s13"] = {
  id: "gt3-endurance-s13",
  group: "gt3-endurance",
  season: 13,
  navLabel: "WJF Trophy",
  title: "WJF73 Trophy GT3 Endurance Season 13",
  eyebrow: "WJF73 Trophy GT3 Endurance · Season 13",
  pages: { results: null, championship: "championship.html" },
  final: true,
  standingsMeta: "Final standings · 30 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race"],
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round. A driver gets a drop if they raced every round, or every round except the final one (missing the final round still allows a drop; it scores 0 and is not the dropped round). Anyone who missed an earlier round gets no drop. PENALTY = points deducted by the club. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 13. Round 1 points worked out from each driver's subtotal.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","N-spud-P666","32",["43p2","39","43p2","41p3","45p1","43p2","45p1","45p1","41p3","45p1"],430,-39,391,0],
    ["2","Rollscanhardly","270",["45p1","45p1","45p1","45p1","43p2","–","41p3","43p2","43p2","40"],390,0,390,0],
    ["3","allaussie","87",["37","43p2","41p3","38","38","40","36","37","38","38"],386,-36,350,0],
    ["4","NWR_NICO71","17",["41p3","32","38","35","41p3","45p1","–","41p3","40","41p3"],354,0,344,-10],
    ["5","Tim_turtle_79","79",["38","40","35","36","40","37","37","40","37","37"],377,-35,342,0],
    ["6","MAD_MITCH_76","76",["39","41p3","36","31","36","34","38","28","36","33"],352,-28,314,-10],
    ["7","Meggs1","59",["31","31","26","33","37","31","39","31","35","34"],328,-26,302,0],
    ["8","Hamitothebone","228",["26","34","30","37","–","32","32","36","33","32"],292,0,292,0],
    ["9","crackpipetom","888",["33","29","34","39","32","39","35","39","39","–"],319,-29,280,-10],
    ["10","BarberXR6T","41",["40","38","39","40","–","30","–","38","–","39"],264,0,264,0],
    ["11","CmeCrash","",["32","26","23","30","35","36","33","34","–","–"],249,0,249,0],
    ["12","Barberphil","11",["23","24","28","23","31","–","30","29","31","29"],248,0,238,-10],
    ["13","Trickybrewer","92",["35","30","32","34","–","35","–","32","–","31"],229,0,229,0],
    ["14","S7R_Ando787","787",["–","–","–","43p2","–","41p3","43p2","–","45p1","43p2"],215,0,215,0],
    ["15","O-PUNCHY-_-P","427",["24","–","40","28","34","38","–","35","–","–"],199,0,199,0],
    ["16","Pjmack75","21",["36","35","37","–","–","–","40","33","–","–"],181,0,181,0],
    ["17","brettubrettu26","82",["34","36","33","–","39","–","34","–","–","–"],176,0,176,0],
    ["18","OneTao","",["–","–","25","27","–","29","31","–","32","30"],174,0,174,0],
    ["19","Kezaudio","72",["27","33","31","–","–","33","–","–","–","–"],124,0,124,0],
    ["20","capella13b","64",["–","–","24","25","30","28","–","–","–","–"],107,0,107,0],
    ["21","Legend-Macca47","447",["22","28","22","24","–","–","–","–","–","–"],96,0,96,0],
    ["22","MalevolentOne666","666",["30","–","29","32","–","–","–","–","–","–"],91,0,91,0],
    ["23","Disco_Stu_001","101",["28","25","–","–","33","–","–","–","–","–"],86,0,86,0],
    ["24","Luke_GT13","13",["–","–","–","–","–","–","–","–","34","36"],70,0,70,0],
    ["25","DK666_Racing","",["–","37","–","29","–","–","–","–","–","–"],66,0,66,0],
    ["26","Bentstik_7","31",["–","27","–","26","–","–","–","–","–","–"],53,0,53,0],
    ["27","simple-crackers9","",["25","–","27","–","–","–","–","–","–","–"],52,0,52,0],
    ["28","GLR_Scotty","37",["–","–","–","–","–","–","–","–","–","35"],35,0,35,0],
    ["29","homer7201","",["–","–","–","–","–","–","–","30","–","–"],30,0,30,0],
    ["30","Mcdivott","74",["29","–","–","–","–","–","–","–","–","–"],29,0,29,0]
  ]
};
