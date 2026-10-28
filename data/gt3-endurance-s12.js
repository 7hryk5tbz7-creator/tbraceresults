// WJF73 Trophy GT3 Endurance, Season 12 — final standings (archive).
// Transcribed from the club's Season 12 points sheet. Every subtotal and round points ladder was checked.
// Drops are as recorded by the club (including NWR_NICO71 R2, Pjmack75 R2 and MrDonovan R1, confirmed by the club).
// MAD_MITCH_76 missed only Round 10 but has no drop on the sheet; left as published (club decision).
// Penalties (confirmed by the club): allaussie -5; crackpipetom, VETERANPP, NWR_NICO71 and Pjmack75 -10 each.
// Tie on 50: MalevolentOne666 is placed ahead of capella13b on countback (best finish 16th vs 18th);
// the club's sheet listed them the other way round. DirtyMonkey699 and Spannshouse are an exact tie on 29 and share 32nd.
// On the sheet, 0 means the driver did not race that round (shown as "–"). Race numbers are not on the sheet;
// they are filled from drivers' other seasons where known.
// Teams are not shown for Season 12 until the club supplies the full team list.
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["gt3-endurance-s12"] = {
  id: "gt3-endurance-s12",
  group: "gt3-endurance",
  season: 12,
  navLabel: "WJF Trophy",
  title: "WJF73 Trophy GT3 Endurance Season 12",
  eyebrow: "WJF73 Trophy GT3 Endurance · Season 12",
  pages: { results: null, championship: "championship.html" },
  final: true,
  standingsMeta: "Final standings · 35 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race"],
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = round removed from the subtotal, as recorded by the club. PENALTY = points deducted by the club. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 12, with penalties shown separately and ties ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","BarberXR6T","41",["38","40","41p3","43p2","35","33","41p3","41p3","38","38"],388,-33,355,0],
    ["2","N-spud-P666","32",["41p3","–","45p1","45p1","–","41p3","40","45p1","43p2","40"],340,0,340,0],
    ["3","Tim_turtle_79","79",["33","41p3","31","39","–","34","39","38","41p3","39"],335,0,335,0],
    ["4","Rollscanhardly","270",["43p2","45p1","39","41p3","45p1","32","43p2","–","–","45p1"],333,0,333,0],
    ["5","Trickybrewer","92",["32","39","36","33","33","40","36","36","34","37"],356,-32,324,0],
    ["6","MAD_MITCH_76","76",["30","37","34","36","41p3","36","33","37","39","–"],323,0,323,0],
    ["7","allaussie","87",["35","–","38","40","38","–","29","39","36","41p3"],296,0,291,-5],
    ["8","NWR_NICO71","17",["40","35","43p2","–","39","43p2","45p1","–","40","43p2"],328,-35,283,-10],
    ["9","Meggs1","59",["26","34","30","31","32","31","34","33","–","30"],281,0,281,0],
    ["10","crackpipetom","888",["–","–","33","37","30","35","30","34","35","36"],270,0,260,-10],
    ["11","Pjmack75","21",["39","38","40","–","40","39","37","–","37","34"],304,-38,256,-10],
    ["12","GLR_Scotty","37",["–","43p2","29","34","34","–","35","40","–","33"],248,0,248,0],
    ["13","Barberphil","11",["23","30","23","26","24","28","26","28","28","28"],264,-23,241,0],
    ["14","O-PUNCHY-_-P","427",["36","33","–","38","37","–","38","43p2","–","–"],225,0,225,0],
    ["15","VETERANPP","998",["31","31","32","32","31","37","32","–","–","–"],226,0,216,-10],
    ["16","S7R_Ando787","787",["45p1","–","–","–","43p2","45p1","–","–","45p1","32"],210,0,210,0],
    ["17","Khush_Vekaria","239",["21","–","35","35","29","38","–","30","–","–"],188,0,188,0],
    ["18","Legend-Macca47","447",["24","28","25","27","25","–","28","–","–","29"],186,0,186,0],
    ["19","brettubrettu26","82",["20","–","–","28","–","30","31","–","33","35"],177,0,177,0],
    ["20","Disco_Stu_001","101",["–","–","–","29","26","–","–","31","30","31"],147,0,147,0],
    ["21","OneTao","",["28","32","–","25","28","–","–","–","29","–"],142,0,142,0],
    ["22","Hamitothebone","228",["25","–","26","–","–","29","–","–","31","27"],138,0,138,0],
    ["23","BigBruceTheShark","99",["37","–","37","–","36","–","–","–","–","–"],110,0,110,0],
    ["24","Mcdivott","74",["29","27","–","–","27","–","27","–","–","–"],110,0,110,0],
    ["25","simple-crackers9","",["–","–","–","–","–","–","–","35","32","–"],67,0,67,0],
    ["26","Soulslayer_71","571",["27","–","–","30","–","–","–","–","–","–"],57,0,57,0],
    ["27","ricreene","69",["–","25","27","–","–","–","–","–","–","–"],52,0,52,0],
    ["28","MalevolentOne666","666",["22","–","28","–","–","–","–","–","–","–"],50,0,50,0],
    ["29","capella13b","64",["–","26","24","–","–","–","–","–","–","–"],50,0,50,0],
    ["30","MrDonovan","",["34","36","–","–","–","–","–","–","–","–"],70,-34,36,0],
    ["31","DK666_Racing","",["–","–","–","–","–","–","–","32","–","–"],32,0,32,0],
    ["32","DirtyMonkey699","",["–","29","–","–","–","–","–","–","–","–"],29,0,29,0],
    ["32","Spannshouse","19",["–","–","–","–","–","–","–","29","–","–"],29,0,29,0],
    ["34","jmillsy85","22",["–","–","22","–","–","–","–","–","–","–"],22,0,22,0],
    ["35","R0B_B021","7",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
