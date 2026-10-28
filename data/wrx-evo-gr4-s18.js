// WRX V Evo GR4 Trailblazers, Season 18 (Tuesday series).
// Transcribed from the club's Round 1-4 result images and the standings image (after Round 4).
// Driver names use the WJF Trophy standings spelling where the driver also races there.

window.SERIES = window.SERIES || {};
window.SERIES_ORDER = window.SERIES_ORDER || [];
window.SERIES_ORDER.push("wrx-evo-gr4");
window.SERIES["wrx-evo-gr4"] = {
  id: "wrx-evo-gr4",
  navOrder: 1, // switcher position, by race day (Tuesday)
  navLabel: "Tuesday Series",
  title: "WRX V Evo GR4 Trailblazers Season 18",
  eyebrow: "WRX V Evo GR4 Trailblazers · Season 18 · Tuesday series",
  seriesLine: "Tuesday Night Series",
  pages: { results: "wrx-evo-gr4.html", championship: "wrx-evo-gr4-championship.html", records: "wrx-evo-gr4-records.html" },
  hasLobbies: false,
  resultNotes: ["DNS = did not start", "DC = disconnected"],
  source: "Results transcribed from the club's Round 1–4 result sheets.",
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. TOTAL = all rounds before the drop. DROP = points removed by the one drop round per season (0 if a round was missed). DNS scores 0. DC = points for classified position. RGQ scores 0 and is not a drop round (next-lowest score is dropped instead). Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club after Round 4. Starts, wins and podiums counted from the round results.",

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
        ["Pjmack75","RR","","WRX","52:06.917","+21.948","+2.365","2:18.261","c"],
        ["MalevolentOne666","MT","","WRX","52:15.366","+30.397","+8.449","2:19.136","c"],
        ["Tankneo-1","R3","","WRX","52:23.041","+38.072","+7.675","2:18.673","c"],
        ["Tim_turtle_79","MT","","WRX","52:25.739","+40.770","+2.698","2:19.994","c"],
        ["iphonedoc","RR","","EVO","52:30.378","+45.409","+4.639","2:19.594","c"],
        ["MasoMarvel87","RR","","WRX","DC","DC","DC","2:18.325","o"]
      ]
    },
    {
      no: 2, track: "Kyoto Driving Park – Yamagiwa", short: "Kyoto",
      entries: 13, starters: 12,
      rows: [
        ["S7R_Ando787","RR","","WRX","50:22.570","Winner","","1:45.884","c"],
        ["MasoMarvel87","RR","","WRX","50:39.648","+17.078","+17.078","1:46.558","c"],
        ["iphonedoc","RR","","EVO","50:47.388","+24.818","+7.740","1:46.415","c"],
        ["Kezaudio","RR","","EVO","50:47.708","+25.138","+0.320","1:46.836","c"],
        ["b-man228","R3","","EVO","50:52.979","+30.409","+5.271","1:46.742","c"],
        ["Tankneo-1","R3","","WRX","50:54.129","+31.559","+1.150","1:47.010","c"],
        ["Pjmack75","RR","","WRX","51:00.309","+37.739","+6.180","1:47.197","c"],
        ["Trickybrewer","R3","","EVO","51:03.191","+40.621","+2.882","1:47.171","c"],
        ["MAD_MITCH_76","MT","","WRX","51:17.513","+54.943","+14.322","1:46.900","c"],
        ["Tim_turtle_79","MT","","WRX","51:24.725","+1:02.155","+7.212","1:47.562","c"],
        ["MalevolentOne666","MT","","WRX","51:38.147","+1:15.577","+13.422","1:47.495","c"],
        ["Colin_t24","RR","","WRX","51:38.548","+1:15.978","+0.401","1:46.457","c"],
        ["BigBruceTheShark","MT","","NA","DNS","DNS","DNS","","o"]
      ]
    },
    {
      no: 3, track: "Sardegna – Road Track – A", short: "Sardegna",
      entries: 14, starters: 13,
      rows: [
        ["S7R_Ando787","RR","","WRX","50:01.550","Winner","","1:53.270","c"],
        ["Tankneo-1","R3","","WRX","50:18.622","+17.072","+17.072","1:53.913","c"],
        ["BigBruceTheShark","MT","","WRX","50:30.931","+29.381","+12.309","1:54.148","c"],
        ["b-man228","R3","","EVO","50:32.296","+30.746","+1.365","1:53.454","c"],
        ["Tim_turtle_79","MT","","WRX","50:38.830","+37.280","+6.534","1:54.307","c"],
        ["Pjmack75","RR","","WRX","50:42.271","+40.721","+3.441","1:54.041","c"],
        ["MasoMarvel87","RR","","WRX","50:42.597","+41.047","+0.326","1:53.627","c"],
        ["MAD_MITCH_76","MT","","WRX","50:46.504","+44.954","+3.907","1:54.318","c"],
        ["MalevolentOne666","MT","","WRX","50:47.556","+46.006","+1.052","1:54.206","c"],
        ["Kezaudio","RR","","EVO","50:51.829","+50.279","+4.273","1:54.886","c"],
        ["Trickybrewer","R3","","EVO","51:09.572","+1:08.022","+17.743","1:54.075","c"],
        ["iphonedoc","RR","","EVO","51:15.569","+1:14.019","+5.997","1:53.972","c"],
        ["ricreene","R3","","EVO","51:41.280","+1:39.730","+25.711","1:55.094","c"],
        ["Colin_t24","RR","","NA","DNS","DNS","DNS","","o"]
      ]
    },
    {
      no: 4, track: "Blue Moon Bay Speedway – Infield A", short: "Blue Moon Bay",
      entries: 11, starters: 10,
      rows: [
        ["Colin_t24","RR","","WRX","50:47.788","Winner","","1:14.575","c"],
        ["S7R_Ando787","RR","","WRX","50:51.346","+3.558","+3.558","1:14.769","c"],
        ["iphonedoc","RR","","EVO","51:07.459","+19.671","+16.113","1:14.791","c"],
        ["Tankneo-1","R3","","WRX","51:23.954","+36.166","+16.495","1:15.350","c"],
        ["MAD_MITCH_76","MT","","WRX","51:25.462","+37.674","+1.508","1:15.482","c"],
        ["MasoMarvel87","RR","","WRX","51:25.479","+37.691","+0.017","1:15.185","c"],
        ["Trickybrewer","R3","","EVO","51:27.892","+40.104","+2.413","1:15.133","c"],
        ["Pjmack75","RR","","WRX","51:39.940","+52.152","+12.048","1:15.550","c"],
        ["Tim_turtle_79","MT","","WRX","51:44.429","+56.641","+4.489","1:15.624","c"],
        ["b-man228","R3","","EVO","51:45.368","+57.580","+0.939","1:15.275","c"],
        ["MalevolentOne666","MT","","NA","DNS","DNS","DNS","","o"]
      ]
    }
  ],

  // Standings after Round 4, as published by the club.
  // [pos, driver, team, car, [R1..R4], total, drop, gap, points, starts, wins, podiums]
  // Round cell codes: "43p2" = 43 pts, 2nd in that round; "33d" = dropped; "*" suffix = DC; "DNS"; "–" = did not enter
  standingsAfter: 4,
  standings: [
    ["1","S7R_Ando787","RR","WRX",["–","45p1","45p1","43p2"],133,0,"Leader",133,3,2,3],
    ["2","Tankneo-1","R3","WRX",["36d","38","43p2","40"],157,-36,"-12",121,4,0,1],
    ["3","b-man228","R3","EVO",["41p3","39","40","34d"],154,-34,"-13",120,4,0,1],
    ["4","Trickybrewer","R3","EVO",["45p1","36","33d","37"],151,-33,"-15",118,4,1,1],
    ["5","MasoMarvel87","RR","WRX",["33d*","43p2","37","38"],151,-33,"-15",118,4,0,1],
    ["6","Kezaudio","RR","EVO",["43p2","40","34","–"],117,0,"-16",117,3,0,1],
    ["7","iphonedoc","RR","EVO",["34","41p3","32d","41p3"],148,-32,"-17",116,4,0,2],
    ["8","MAD_MITCH_76","MT","WRX",["40","35d","36","39"],150,-35,"-18",115,4,0,0],
    ["9","Pjmack75","RR","WRX",["38","37","38","36d"],149,-36,"-20",113,4,0,0],
    ["10","Tim_turtle_79","MT","WRX",["35","34d","39","35"],143,-34,"-24",109,4,0,0],
    ["11","MalevolentOne666","MT","WRX",["37","33","35","DNS"],105,0,"-28",105,3,0,0],
    ["12","Colin_t24","RR","WRX",["–","32","DNS","45p1"],77,0,"-56",77,2,1,1],
    ["13","BigBruceTheShark","MT","WRX",["–","DNS","41p3","–"],41,0,"-92",41,1,0,1],
    ["14","Bluebloss","PV","WRX",["39","–","–","–"],39,0,"-94",39,1,0,0],
    ["15","ricreene","R3","EVO",["–","–","31","–"],31,0,"-102",31,1,0,0]
  ]
};
