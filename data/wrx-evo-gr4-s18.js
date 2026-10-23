// WRX V Evo GR4 Trailblazers, Season 18 (Tuesday series).
// Transcribed from the club's Round 1-3 result images.
// Driver names are copied exactly as they appear in the results.

window.SERIES = window.SERIES || {};
window.SERIES_ORDER = window.SERIES_ORDER || [];
window.SERIES_ORDER.push("wrx-evo-gr4");
window.SERIES["wrx-evo-gr4"] = {
  id: "wrx-evo-gr4",
  navLabel: "WRX V Evo GR4",
  title: "WRX V Evo GR4 Trailblazers Season 18",
  eyebrow: "WRX V Evo GR4 Trailblazers · Season 18 · Tuesday series",
  seriesLine: "Tuesday Night Series",
  pages: { results: "wrx-evo-gr4.html", championship: "wrx-evo-gr4-championship.html" },
  hasLobbies: false,
  resultNotes: ["DNS = did not start", "DC = disconnected"],
  source: "Results transcribed from the club's Round 1–3 result sheets.",
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. TOTAL = all rounds before the drop. DROP = points removed by the one drop round per season (0 if a round was missed). DNS scores 0. DC = points for classified position. RGQ scores 0 and is not a drop round (next-lowest score is dropped instead). Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club after Round 3. Starts, wins and podiums counted from the round results.",

  teams: {
    RR: { name: "Roadsick Racing", colour: "#A274FF" },
    MT: { name: "Mad Turtle Racing", colour: "#34C46E" },
    R3: { name: "Triple R Motorsport", colour: "#F0524A" },
    PV: { name: "Privateer", colour: "#8C939D" }
  },

  cars: {
    EVO: "Lancer Evolution Final Gr.4",
    WRX: "WRX Gr.4",
    NA: ""
  },

  // Result rows: [driver, team, lobby, car, raceTime, toLeader, toCarAhead, bestLap, status]
  // status: c = classified, l = lapped (classified), o = not classified (DC / DNS)
  rounds: [
    {
      no: 1, track: "Mount Panorama Motor Racing Circuit", short: "Mount Panorama",
      starters: 11, finishers: 10,
      rows: [
        ["Trickybrewer","R3","","EVO","51:44.969","Winner","","2:18.309","c"],
        ["Kezaudio","RR","","EVO","51:52.186","+7.217","+7.217","2:19.008","c"],
        ["b-man228","R3","","EVO","51:58.035","+13.066","+5.849","2:18.871","c"],
        ["MAD_MITCH_76","MT","","WRX","52:01.678","+16.709","+3.643","2:18.550","c"],
        ["Bluebloss","PV","","WRX","52:04.552","+19.583","+2.874","2:18.799","c"],
        ["pjmack75","RR","","WRX","52:06.917","+21.948","+2.365","2:18.261","c"],
        ["MalevolentOne666","MT","","WRX","52:15.366","+30.397","+8.449","2:19.136","c"],
        ["Tankneo-","R3","","WRX","52:23.041","+38.072","+7.675","2:18.673","c"],
        ["tim_turtle_79","MT","","WRX","52:25.739","+40.770","+2.698","2:19.994","c"],
        ["iphonedoc","RR","","EVO","52:30.378","+45.409","+4.639","2:19.594","c"],
        ["MasoMarvel87","RR","","WRX","DC","DC","DC","2:18.325","o"]
      ]
    },
    {
      no: 2, track: "Kyoto Driving Park – Yamagiwa", short: "Kyoto",
      entries: 13, starters: 12,
      rows: [
        ["S7R_Ando","RR","","WRX","50:22.570","Winner","","1:45.884","c"],
        ["MasoMarvel87","RR","","WRX","50:39.648","+17.078","+17.078","1:46.558","c"],
        ["iphonedoc","RR","","EVO","50:47.388","+24.818","+7.740","1:46.415","c"],
        ["Kezaudio","RR","","EVO","50:47.708","+25.138","+0.320","1:46.836","c"],
        ["b-man228","R3","","EVO","50:52.979","+30.409","+5.271","1:46.742","c"],
        ["Tankneo-","R3","","WRX","50:54.129","+31.559","+1.150","1:47.010","c"],
        ["pjmack75","RR","","WRX","51:00.309","+37.739","+6.180","1:47.197","c"],
        ["Trickybrewer","R3","","EVO","51:03.191","+40.621","+2.882","1:47.171","c"],
        ["MAD_MITCH_76","MT","","WRX","51:17.513","+54.943","+14.322","1:46.900","c"],
        ["tim_turtle_79","MT","","WRX","51:24.725","+1:02.155","+7.212","1:47.562","c"],
        ["MalevolentOne666","MT","","WRX","51:38.147","+1:15.577","+13.422","1:47.495","c"],
        ["Colin_t24","RR","","WRX","51:38.548","+1:15.978","+0.401","1:46.457","c"],
        ["BigBruceTheShark","MT","","NA","DNS","DNS","DNS","","o"]
      ]
    },
    {
      no: 3, track: "Sardegna – Road Track – A", short: "Sardegna",
      entries: 14, starters: 13,
      rows: [
        ["S7R_Ando","RR","","WRX","50:01.550","Winner","","1:53.270","c"],
        ["Tankneo-","R3","","WRX","50:18.622","+17.072","+17.072","1:53.913","c"],
        ["BigBruceTheShark","MT","","WRX","50:30.931","+29.381","+12.309","1:54.148","c"],
        ["b-man228","R3","","EVO","50:32.296","+30.746","+1.365","1:53.454","c"],
        ["tim_turtle_79","MT","","WRX","50:38.830","+37.280","+6.534","1:54.307","c"],
        ["pjmack75","RR","","WRX","50:42.271","+40.721","+3.441","1:54.041","c"],
        ["MasoMarvel87","RR","","WRX","50:42.597","+41.047","+0.326","1:53.627","c"],
        ["MAD_MITCH_76","MT","","WRX","50:46.504","+44.954","+3.907","1:54.318","c"],
        ["MalevolentOne666","MT","","WRX","50:47.556","+46.006","+1.052","1:54.206","c"],
        ["Kezaudio","RR","","EVO","50:51.829","+50.279","+4.273","1:54.886","c"],
        ["Trickybrewer","R3","","EVO","51:09.572","+1:08.022","+17.743","1:54.075","c"],
        ["iphonedoc","RR","","EVO","51:15.569","+1:14.019","+5.997","1:53.972","c"],
        ["ricreene","R3","","EVO","51:41.280","+1:39.730","+25.711","1:55.094","c"],
        ["Colin_t24","RR","","NA","DNS","DNS","DNS","","o"]
      ]
    }
  ],

  // Standings after Round 3, as published by the club.
  // [pos, driver, team, car, [R1, R2, R3], total, drop, gap, points, starts, wins, podiums]
  // Round cell codes: "43p2" = 43 pts, 2nd in that round; "33d" = dropped; "*" suffix = DC; "DNS"; "–" = did not enter
  standingsAfter: 3,
  standings: [
    ["1","S7R_Ando","RR","WRX",["–","45p1","45p1"],90,0,"Leader",90,2,2,2],
    ["2","Kezaudio","RR","EVO",["43p2","40","34d"],117,-34,"-7",83,3,0,1],
    ["3","Trickybrewer","R3","EVO",["45p1","36","33d"],114,-33,"-9",81,3,1,1],
    ["4","Tankneo-","R3","WRX",["36d","38","43p2"],117,-36,"-9",81,3,0,1],
    ["5","b-man228","R3","EVO",["41p3","39d","40"],120,-39,"-9",81,3,0,1],
    ["6","MasoMarvel87","RR","WRX",["33d*","43p2","37"],113,-33,"-10",80,3,0,1],
    ["7","MAD_MITCH_76","MT","WRX",["40","35d","36"],111,-35,"-14",76,3,0,0],
    ["8","pjmack75","RR","WRX",["38","37d","38"],113,-37,"-14",76,3,0,0],
    ["9","iphonedoc","RR","EVO",["34","41p3","32d"],107,-32,"-15",75,3,0,1],
    ["10","tim_turtle_79","MT","WRX",["35","34d","39"],108,-34,"-16",74,3,0,0],
    ["11","MalevolentOne666","MT","WRX",["37","33d","35"],105,-33,"-18",72,3,0,0],
    ["12","BigBruceTheShark","MT","WRX",["–","DNS","41p3"],41,0,"-49",41,1,0,1],
    ["13","Bluebloss","PV","WRX",["39","–","–"],39,0,"-51",39,1,0,0],
    ["14","Colin_t24","RR","WRX",["–","32","DNS"],32,0,"-58",32,1,0,0],
    ["15","ricreene","R3","EVO",["–","–","31"],31,0,"-59",31,1,0,0]
  ]
};
