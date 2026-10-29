// WJF73 Trophy Hypercar Endurance, Season 17 — final standings (archive).
// Transcribed from the club's Season 17 standings image. Every subtotal and drop was checked.
// Driver names use the Season 18 WJF Trophy spelling where the driver also races there.
// Archive seasons do not add a series switcher; they appear in the season picker of their group.

window.SERIES = window.SERIES || {};
window.SERIES["gt3-endurance-s17"] = {
  id: "gt3-endurance-s17",
  group: "gt3-endurance",
  season: 17,
  navLabel: "WJF Trophy",
  title: "WJF73 Trophy Hypercar Endurance Season 17",
  eyebrow: "WJF73 Trophy Hypercar Endurance · Season 17",
  pages: { results: null, championship: "championship.html" },
  final: true,
  standingsMeta: "Final standings · 28 drivers · Round-by-round points",
  standingsKey: [
    "swatches",
    "NP = round not run",
    "CC = changed car",
    "RGQ / DNF / CC = 0 points",
    "– = did not enter"
  ],
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. RGQ / DNF / CC = 0 points. RidwanF1 changed car after Round 8, so that result scores 0. Drop = worst round removed from subtotal. No penalties were applied in Season 17. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 17.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total]
  // Round cell codes: "45p1" = 45 pts, won that round; "43p2" = 2nd; "41p3" = 3rd; "NP" = round not run; "RGQ"; "DNF"; "–" = did not enter
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","N-spud-P666","32",["45p1","–","NP","45p1","40","45p1","45p1","43p2","43p2","43p2"],349,0,349],
    ["2","Arty_Bicycle","1",["–","45p1","NP","39","43p2","43p2","43p2","41p3","40","40"],334,0,334],
    ["3","Luke_GT13","13",["40","41p3","NP","40","39","–","32","45p1","39","41p3"],317,0,317],
    ["4","WallFinder","420",["33","37","NP","43p2","38","41p3","41p3","38","36","38"],345,-33,312],
    ["5","MAD_MITCH_76","76",["35","38","NP","37","35","40","38","35","38","37"],333,-35,298],
    ["6","BigBruceTheShark","99",["34","36","NP","36","–","37","–","34","41p3","39"],257,0,257],
    ["7","Hamitothebone","228",["30","–","NP","–","34","36","36","31","34","33"],234,0,234],
    ["8","Barberphil","11",["25","–","NP","30","–","33","33","30","35","32"],218,0,218],
    ["9","brettubrettu26","82",["39","–","NP","41p3","41p3","–","–","40","45p1","RGQ"],206,0,206],
    ["10","Pjmack75","21",["32","35","NP","31","37","38","–","32","–","–"],205,0,205],
    ["11","VETERANPP","998",["26","–","NP","–","–","34","35","33","37","34"],199,0,199],
    ["12","Fatalreaper666","4",["28","33","NP","35","RGQ","RGQ","39","36","RGQ","35"],206,-28,178],
    ["13","Trickybrewer","92",["–","39","NP","33","33","–","37","–","33","–"],175,0,175],
    ["14","Meggs1","59",["29","34","NP","34","36","39","–","–","–","–"],172,0,172],
    ["15","b-man228","26",["31","–","NP","32","–","–","34","39","–","36"],172,0,172],
    ["16","allaussie","87",["RGQ","40","NP","38","RGQ","35","40","–","RGQ","–"],153,0,153],
    ["17","S7R_Ando787","787",["38","43p2","NP","–","45p1","–","–","–","–","–"],126,0,126],
    ["18","Tim_turtle_79","79",["37","30","NP","–","–","–","–","–","–","–"],67,0,67],
    ["19","Tankneo-1","576",["–","32","NP","–","–","–","31","–","DNF","–"],63,0,63],
    ["20","RidwanF1","14",["–","–","NP","–","–","–","–","CC","–","45p1"],45,0,45],
    ["21","crackpipetom","888",["43p2","–","NP","–","–","–","–","–","–","–"],43,0,43],
    ["22","NWR_NICO71","17",["41p3","–","NP","–","–","–","–","–","–","–"],41,0,41],
    ["23","Siryc","145",["36","–","NP","–","–","–","–","–","–","–"],36,0,36],
    ["24","LodgedPotato","222",["RGQ","31","NP","–","–","–","–","–","–","–"],31,0,31],
    ["25","BarberXR6T","41",["27","–","NP","–","–","–","–","–","–","–"],27,0,27],
    ["26","Scorpion_Fury77","77",["24","–","NP","–","–","–","–","–","–","–"],24,0,24],
    ["27","O-PUNCHY-_-P","427",["23","–","NP","–","–","–","–","–","–","–"],23,0,23],
    ["28","GGCAS_39","39",["22","–","NP","–","–","–","–","–","–","–"],22,0,22]
  ]
};
