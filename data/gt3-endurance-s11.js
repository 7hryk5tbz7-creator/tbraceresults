// WJF73 Trophy GT3 Endurance, Season 11 — final standings (archive).
// Transcribed from the club's Season 11 points sheet. The Round 1 column was cut off in the image;
// each driver's Round 1 points = subtotal minus Rounds 2-10 (they form an exact 45/43/41/40... ladder).
// Every round, drop, penalty and total was checked. Penalties on the sheet: allaussie -10, S7R_Ando787 -10, Disco_Stu_001 -20.
// Race numbers are as on the sheet. On the sheet, 0 means the driver did not race that round (shown as "–").
// Teams are not shown for Season 11 until the club supplies the full team list.
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["gt3-endurance-s11"] = {
  id: "gt3-endurance-s11",
  group: "gt3-endurance",
  season: 11,
  navLabel: "WJF Trophy",
  title: "WJF73 Trophy GT3 Endurance Season 11",
  eyebrow: "WJF73 Trophy GT3 Endurance · Season 11",
  pages: { results: null, championship: "championship.html" },
  final: true,
  standingsMeta: "Final standings · 30 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race"],
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. PENALTY = points deducted by the club. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 11. Round 1 points worked out from each driver's subtotal.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","N-spud-P666","32",["45p1","45p1","43p2","39","45p1","43p2","43p2","45p1","41p3","43p2"],432,-39,393,0],
    ["2","BigBruceTheShark","99",["36","36","–","37","35","41p3","39","40","37","41p3"],342,0,342,0],
    ["3","MAD_MITCH_76","76",["35","41p3","–","45p1","37","32","32","41p3","43p2","28"],334,0,334,0],
    ["4","NWR_NICO71","177",["41p3","33","45p1","–","43p2","45p1","41p3","–","45p1","37"],330,0,330,0],
    ["5","Trickybrewer","92",["31","31","36","33","33","33","–","37","33","34"],301,0,301,0],
    ["6","Tim_turtle_79","79",["38","–","–","43p2","41p3","36","35","43p2","35","29"],300,0,300,0],
    ["7","O-PUNCHY-_-P","427",["30","43p2","–","40","36","35","38","38","38","–"],298,0,298,0],
    ["8","GLR_Scotty","37",["37","39","32","36","34","40","36","–","–","40"],294,0,294,0],
    ["9","VETERANPP","998",["28","32","37","32","40","–","37","39","–","36"],281,0,281,0],
    ["10","BarberXR6T","41",["40","37","–","23","24","34","–","36","40","35"],269,0,269,0],
    ["11","Meggs1","59",["–","29","–","34","32","31","34","35","34","38"],267,0,267,0],
    ["12","allaussie","87",["39","–","39","35","39","–","40","–","36","39"],267,0,257,-10],
    ["13","Legend-Macca47","447",["25","27","28","25","26","29","27","33","31","30"],281,-25,256,0],
    ["14","Pjmack75","21",["32","–","34","41p3","28","–","33","–","39","45p1"],252,0,252,0],
    ["15","Barberphil","11",["21","25","–","26","25","27","24","32","30","31"],241,0,241,0],
    ["16","MalevolentOne666","666",["22","22","33","29","30","37","29","–","–","27"],229,0,229,0],
    ["17","Hamitothebone","228",["34","23","31","27","–","39","–","34","–","33"],221,0,221,0],
    ["18","ricreene","69",["33","35","38","22","–","28","30","–","–","–"],186,0,186,0],
    ["19","crackpipetom","888",["–","34","30","38","38","38","–","–","–","–"],178,0,178,0],
    ["20","Soulslayer_71","571",["27","28","35","30","–","26","31","–","–","–"],177,0,177,0],
    ["21","OneTao","3",["24","24","27","24","31","30","–","–","–","–"],160,0,160,0],
    ["22","DirtyMonkey699","411",["23","–","29","–","27","–","26","–","–","32"],137,0,137,0],
    ["23","S7R_Ando787","787",["43p2","–","41p3","–","–","–","45p1","–","–","–"],129,0,119,-10],
    ["24","PorscheNut92","911",["29","40","–","28","–","–","–","–","–","–"],97,0,97,0],
    ["25","Disco_Stu_001","101",["–","30","–","31","29","24","–","–","–","–"],114,0,94,-20],
    ["26","Mcdivott","74",["26","–","–","–","–","–","25","–","32","–"],83,0,83,0],
    ["27","Khush_Vekaria","239",["–","38","40","–","–","–","–","–","–","–"],78,0,78,0],
    ["28","capella13b","64",["20","26","–","–","–","–","–","–","–","–"],46,0,46,0],
    ["29","simple-crackers9","16",["–","–","–","–","–","–","28","–","–","–"],28,0,28,0],
    ["30","Kezaudio","72",["–","–","–","–","–","25","–","–","–","–"],25,0,25,0]
  ]
};
