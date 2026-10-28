// WJF73 Trophy GT3 Endurance, Season 15 — final standings (archive).
// Transcribed from the club's Season 15 points sheet. Every subtotal, drop and round points ladder was checked.
// On the sheet, 0 means the driver did not race that round (shown as "–"). Round 6 was NP: no points for anyone, not a drop round.
// Tie on 221: GLR_Scotty is placed ahead of PorscheNut92 on countback (a 4th place beats a best of 7th);
// the club's sheet listed them the other way round. Souls_571/Kezaudio (25) and Khush_Vekaria/Mcdivott (0) are exact ties.
// Driver names use the Season 18 spelling where the driver also races in Season 18 (Pjmack76, race #21, is Pjmack75).

window.SERIES = window.SERIES || {};
window.SERIES["gt3-endurance-s15"] = {
  id: "gt3-endurance-s15",
  group: "gt3-endurance",
  season: 15,
  navLabel: "WJF Trophy",
  title: "WJF73 Trophy GT3 Endurance Season 15",
  eyebrow: "WJF73 Trophy GT3 Endurance · Season 15",
  pages: { results: null, championship: "championship.html" },
  final: true,
  npLabel: "No points",
  standingsMeta: "Final standings · 39 drivers · Round-by-round points",
  standingsKey: ["swatches", "NP = no points awarded that round", "RGQ = 0 points", "– = did not race"],
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. Round 6 was NP: no points for anyone and not a drop round. DROP = the driver's lowest round, removed only when they raced every other round (0 if a round was missed). RGQ scores 0 and is not a drop round. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 15, with the 221-point tie ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","NWR_NICO71","17",["30","45p1","40","45p1","43p2","NP","43p2","43p2","43p2","45p1"],377,-30,347,0],
    ["2","Luke_GT13","13",["–","37","43p2","43p2","41p3","NP","41p3","40","45p1","40"],330,0,330,0],
    ["3","crackpipetom","888",["41p3","40","20","–","37","NP","29","41p3","41p3","37"],286,0,286,0],
    ["4","N-spud-P666","32",["37","–","39","41p3","40","NP","45p1","–","36","41p3"],279,0,279,0],
    ["5","WallFinder","420",["34","27","32","29","–","NP","40","38","29","38"],267,0,267,0],
    ["6","Pjmack75","21",["26","29","36","37","31","NP","–","37","34","35"],265,0,265,0],
    ["7","MAD_MITCH_76","76",["–","35","28","30","34","NP","33","31","33","36"],260,0,260,0],
    ["8","Trickybrewer","92",["28","23","35","38","35","NP","30","–","31","34"],254,0,254,0],
    ["9","brettubrettu26","82",["27","–","37","34","39","NP","34","33","–","43p2"],247,0,247,0],
    ["10","BarberXR6T","41",["32","39","21","33","–","NP","25","34","23","33"],240,0,240,0],
    ["11","Arty_Bicycle","217",["–","22","26","–","38","NP","35","39","39","39"],238,0,238,0],
    ["12","Tim_turtle_79","79",["–","32","34","32","32","NP","38","RGQ","30","32"],230,0,230,0],
    ["13","GLR_Scotty","37",["36","21","–","–","30","NP","36","28","40","30"],221,0,221,0],
    ["14","PorscheNut92","911",["35","31","27","–","–","NP","37","32","35","24"],221,0,221,0],
    ["15","Rollscanhardly","270",["45p1","43p2","45p1","39","45p1","NP","RGQ","–","–","–"],217,0,217,0],
    ["16","Tankneo-1","576",["31","26","30","27","33","NP","26","35","32","25"],265,-25,240,0],
    ["17","allaussie","87",["40","–","29","36","36","NP","–","–","37","31"],209,0,209,0],
    ["18","Meggs1","59",["24","24","25","–","–","NP","31","30","26","29"],189,0,189,0],
    ["19","O-PUNCHY-_-P","427",["33","33","33","31","–","NP","RGQ","29","28","–"],187,0,187,0],
    ["20","BigBruceTheShark","99",["–","30","38","35","–","NP","39","–","38","–"],180,0,180,0],
    ["21","S7R_Ando787","787",["43p2","41p3","41p3","–","–","NP","RGQ","45p1","–","–"],170,0,170,0],
    ["22","VETERANPP","998",["29","34","–","–","–","NP","32","36","25","–"],156,0,156,0],
    ["23","Scorpion_Fury77","77",["–","17","22","26","–","NP","27","RGQ","20","26"],138,0,138,0],
    ["24","Barberphil","11",["21","18","23","25","–","NP","RGQ","26","22","RGQ"],135,0,135,0],
    ["25","Sirily90","90",["38","36","–","40","–","NP","–","–","–","–"],114,0,114,0],
    ["26","b-man228","26",["–","–","–","–","–","NP","28","27","24","28"],107,0,107,0],
    ["27","Hamitothebone","228",["–","28","–","28","–","NP","–","–","27","–"],83,0,83,0],
    ["28","Siryc","145",["39","38","–","–","–","NP","–","–","–","–"],77,0,77,0],
    ["29","Legend-Macca47","447",["20","19","–","–","–","NP","–","–","21","–"],60,0,60,0],
    ["30","jmillsy85","22",["–","25","31","–","–","NP","–","–","–","–"],56,0,56,0],
    ["31","Disco_Stu_001","101",["–","20","24","–","–","NP","–","–","–","–"],44,0,44,0],
    ["32","MalevolentOne666","666",["23","16","–","–","–","NP","–","–","–","–"],39,0,39,0],
    ["33","Reaps","4",["–","–","–","–","–","NP","–","–","–","27"],27,0,27,0],
    ["34","Souls_571","571",["25","–","–","–","–","NP","–","–","–","–"],25,0,25,0],
    ["34","Kezaudio","72",["–","–","–","–","–","NP","–","25","–","–"],25,0,25,0],
    ["36","ricreene","69",["22","–","–","–","–","NP","–","–","–","–"],22,0,22,0],
    ["37","Steve_73_GOOF","73",["19","–","–","–","–","NP","–","–","–","–"],19,0,19,0],
    ["38","Khush_Vekaria","239",["–","–","–","–","–","NP","–","–","–","–"],0,0,0,0],
    ["38","Mcdivott","74",["–","–","–","–","–","NP","–","–","–","–"],0,0,0,0]
  ]
};
