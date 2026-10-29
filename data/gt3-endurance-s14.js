// WJF73 Trophy GT3 Endurance, Season 14 — final standings (archive).
// Transcribed from the club's Season 14 points sheet. Every subtotal, drop, penalty and total was checked.
// Note: on the sheet no driver has 31 points in Round 2 or 27 points in Round 4 (a gap in that round's points scale).
// On the sheet, 0 means the driver did not race that round (shown as "–").
// capella13b, Mcdivott, R0B_B021 and WharfyRacing scored 0 and share 29th.
// Teams are not shown for Season 14 until the club supplies the full team list.
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["gt3-endurance-s14"] = {
  id: "gt3-endurance-s14",
  group: "gt3-endurance",
  season: 14,
  navLabel: "WJF Trophy",
  title: "WJF73 Trophy GT3 Endurance Season 14",
  eyebrow: "WJF73 Trophy GT3 Endurance · Season 14",
  pages: { results: null, championship: "championship.html" },
  final: true,
  standingsMeta: "Final standings · 32 drivers · Round-by-round points",
  standingsKey: ["swatches", "RGQ = 0 points", "– = did not race"],
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. RGQ scores 0 and is not a drop round. PENALTY = points deducted by the club (crackpipetom −10). Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 14.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Rollscanhardly","270",["45p1","–","45p1","45p1","45p1","40","40","41p3","45p1","45p1"],391,0,391,0],
    ["2","NWR_NICO71","17",["40","–","43p2","43p2","41p3","39","43p2","45p1","43p2","43p2"],380,0,380,0],
    ["3","Luke_GT13","13",["37","45p1","41p3","40","43p2","37","39","40","41p3","41p3"],404,-37,367,0],
    ["4","Tim_turtle_79","79",["33","39","40","37","31","35","35","33","37","40"],360,-31,329,0],
    ["5","brettubrettu26","82",["28","29","32","38","38","34","36","37","39","–"],311,0,311,0],
    ["6","Pjmack75","21",["32","–","37","32","34","36","38","29","36","35"],309,0,309,0],
    ["7","MAD_MITCH_76","76",["30","34","36","34","32","31","34","35","34","33"],333,-30,303,0],
    ["8","BigBruceTheShark","99",["38","38","38","35","39","–","37","–","40","36"],301,0,301,0],
    ["9","Trickybrewer","92",["36","35","35","31","29","–","31","31","35","37"],300,0,300,0],
    ["10","Meggs1","59",["29","32","31","30","27","29","30","30","31","34"],303,-27,276,0],
    ["11","VETERANPP","998",["25","28","–","28","25","30","33","36","29","39"],273,0,273,0],
    ["12","crackpipetom","888",["–","–","39","36","33","43p2","41p3","39","30","–"],261,0,251,-10],
    ["13","S7R_Ando787","787",["43p2","36","–","39","40","45p1","45p1","–","–","–"],248,0,248,0],
    ["14","Barberphil","11",["24","30","–","26","23","28","26","28","28","31"],244,0,244,0],
    ["15","BarberXR6T","41",["39","33","–","33","28","33","27","–","33","–"],226,0,226,0],
    ["16","allaussie","87",["35","41p3","34","–","37","38","–","38","–","–"],223,0,223,0],
    ["17","N-spud-P666","1",["41p3","43p2","–","41p3","30","41p3","–","–","RGQ","–"],196,0,196,0],
    ["18","ExpatGweilo","67",["–","–","–","–","–","27","32","43p2","38","38"],178,0,178,0],
    ["19","O-PUNCHY-_-P","427",["31","37","33","–","35","32","–","RGQ","–","–"],168,0,168,0],
    ["20","Hamitothebone","228",["–","–","–","29","26","–","–","–","27","32"],114,0,114,0],
    ["21","PorscheNut92","911",["34","40","–","–","–","–","–","34","RGQ","–"],108,0,108,0],
    ["22","Scorpion_Fury77","77",["–","–","–","–","–","–","25","27","26","30"],108,0,108,0],
    ["23","Tankneo-1","576",["–","–","–","–","–","–","29","32","25","–"],86,0,86,0],
    ["24","WallFinder","420",["–","–","–","–","–","–","–","26","32","–"],58,0,58,0],
    ["25","Legend-Macca47","447",["–","–","–","–","24","–","28","–","–","–"],52,0,52,0],
    ["26","Kezaudio","72",["–","–","–","–","36","–","–","–","–","–"],36,0,36,0],
    ["27","Disco_Stu_001","101",["27","–","–","–","–","–","–","–","–","–"],27,0,27,0],
    ["28","ricreene","69",["26","–","–","–","–","–","–","–","–","–"],26,0,26,0],
    ["29","capella13b","64",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["29","Mcdivott","74",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["29","R0B_B021","7",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["29","WharfyRacing","97",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
