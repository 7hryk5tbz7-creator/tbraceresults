// Trailblazers Narly Cup GT500, Season 18 (Thursday series).
// Transcribed from the club's Round 1-3 result images and the standings image (after Round 3).
// Driver names use the WJF Trophy standings spelling where the driver also races there.

window.SERIES = window.SERIES || {};
window.SERIES_ORDER = window.SERIES_ORDER || [];
window.SERIES_ORDER.push("narly-cup");
window.SERIES["narly-cup"] = {
  id: "narly-cup",
  season: 18,
  navOrder: 2, // switcher position, by race day (Thursday)
  navLabel: "Narly Cup",
  title: "Season 18 Narly Cup",
  eyebrow: "Trailblazers Narly Cup GT500 · Season 18 · Thursday series",
  seriesLine: "Trailblazers S18 Narlycup GT500",
  pages: { results: "narly-cup.html", championship: "narly-cup-championship.html", records: "narly-cup-records.html", champions: "narly-cup-champions.html" },
  hasLobbies: false,
  resultNotes: ["DNS = did not start", "DQ = disqualified", "DC and RGQ shown as listed in the results"],
  source: "Results transcribed from the club's Round 1–3 result sheets.",
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. TOTAL = all rounds before the drop. DROP = points removed by the one drop round per season (0 if a round was missed). DC scores its finishing position. DNS scores 0 and counts as the drop. RGQ and DQ (disqualification) score 0 and are not a drop round (next-lowest score is dropped instead). Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsKey: ["swatches", "dropped", "* = DC, scored on finishing position", "DQ = disqualified", "– = did not enter"],
  standingsSource: "Standings as published by the club after Round 3 (updated for the Round 2 disqualification). Starts, wins and podiums counted from the round results.",

  teams: {
    RR: { name: "Roadsick Racing", colour: "#A274FF" },
    MT: { name: "Mad Turtle Racing", colour: "#34C46E" },
    R3: { name: "Triple R Motorsport", colour: "#F0524A" },
    GB: { name: "Gerbil Racing Team", colour: "#F08A2C" }
  },

  cars: {
    SUP: "Supra GT500 '97",
    GTR: "GT-R GT500 '99",
    NA: ""
  },

  // Result rows: [driver, team, lobby, car, raceTime, toLeader, toCarAhead, bestLap, status]
  // status: c = classified, l = lapped (classified), o = not classified (DC / RGQ / DNS)
  rounds: [
    {
      no: 1, track: "Mount Panorama Motor Racing Circuit", short: "Mount Panorama",
      starters: 14, leadLap: 12,
      rows: [
        ["Colin_t24","RR","","SUP","52:18.398","Winner","","2:02.407","c"],
        ["WallFinder","MT","","GTR","52:39.389","+20.991","+20.991","2:03.490","c"],
        ["Kezaudio","RR","","SUP","52:49.902","+31.504","+10.513","2:03.881","c"],
        ["Trickybrewer","R3","","SUP","52:49.963","+31.565","+0.061","2:03.335","c"],
        ["Pjmack75","RR","","SUP","53:07.909","+49.511","+17.946","2:03.847","c"],
        ["iphonedoc","RR","","GTR","53:10.758","+52.360","+2.849","2:03.891","c"],
        ["Tim_turtle_79","MT","","GTR","53:22.138","+1:03.740","+11.380","2:04.510","c"],
        ["GLR_Scotty","MT","","SUP","53:24.088","+1:05.690","+1.950","2:04.456","c"],
        ["Fatalreaper666","MT","","GTR","53:37.016","+1:18.618","+12.928","2:03.981","c"],
        ["MAD_MITCH_76","MT","","SUP","53:40.380","+1:21.982","+3.364","2:04.060","c"],
        ["Hamitothebone","MT","","SUP","53:46.358","+1:27.960","+5.978","2:05.658","c"],
        ["capella13b","GB","","SUP","54:00.063","+1:41.665","+13.705","2:05.435","c"],
        ["RiotheSpeedster","R3","","GTR","1 Lap","+1 Lap","","2:03.355","l"],
        ["Tankneo-1","R3","","GTR","DC","DC","","","o"]
      ]
    },
    {
      no: 2, track: "Kyoto Driving Park – Yamagiwa", short: "Kyoto",
      entries: 17, starters: 16, leadLap: 13,
      rows: [
        ["S7R_Ando787","RR","","SUP","51:52.659","Winner","","1:33.654","c"],
        ["MasoMarvel87","RR","","GTR","52:02.525","+9.866","+9.866","1:34.396","c"],
        ["Kezaudio","RR","","SUP","52:13.915","+21.256","+11.390","1:34.060","c"],
        ["GLR_Scotty","MT","","SUP","52:18.635","+25.976","+4.720","1:35.048","c"],
        ["Tim_turtle_79","MT","","GTR","52:22.714","+30.055","+4.079","1:34.700","c"],
        ["Trickybrewer","R3","","SUP","52:26.634","+33.975","+3.920","1:35.336","c"],
        ["MAD_MITCH_76","MT","","SUP","52:31.246","+38.587","+4.612","1:34.637","c"],
        ["Fatalreaper666","MT","","GTR","52:31.663","+39.004","+0.417","1:34.386","c"],
        ["Hamitothebone","MT","","SUP","52:59.752","+1:07.093","+28.089","1:36.030","c"],
        ["capella13b","GB","","SUP","53:05.830","+1:13.171","+6.078","1:36.304","c"],
        ["WallFinder","MT","","GTR","53:16.689","+1:24.030","+10.859","1:34.933","c"],
        ["GGCAS_39","R3","","SUP","53:17.243","+1:24.584","+0.554","1:35.327","c"],
        ["RiotheSpeedster","R3","","GTR","53:30.781","+1:38.122","+13.538","1:34.969","c"],
        ["iphonedoc","RR","","GTR","1 Lap","+1 Lap","","1:35.092","l"],
        ["Tankneo-1","R3","","GTR","10 Laps","+10 Laps","","1:34.646","l"],
        ["Colin_t24","RR","","SUP","DQ","DQ","","1:33.958","o"],
        ["Pjmack75","RR","","NA","DNS","DNS","","","o"]
      ]
    },
    {
      no: 3, track: "Sardegna – Road Track – A", short: "Sardegna",
      entries: 14, starters: 13, leadLap: 12,
      rows: [
        ["Colin_t24","RR","","SUP","51:58.273","Winner","","1:41.029","c"],
        ["iphonedoc","RR","","GTR","52:09.425","+11.152","+11.152","1:41.686","c"],
        ["WallFinder","MT","","GTR","52:16.096","+17.823","+6.671","1:41.752","c"],
        ["brettubrettu26","MT","","SUP","52:16.831","+18.558","+0.735","1:41.982","c"],
        ["Tankneo-1","R3","","GTR","52:19.481","+21.208","+2.650","1:41.943","c"],
        ["MAD_MITCH_76","MT","","SUP","52:21.030","+22.757","+1.549","1:42.031","c"],
        ["Trickybrewer","R3","","SUP","52:24.939","+26.666","+3.909","1:41.721","c"],
        ["Fatalreaper666","MT","","GTR","52:42.491","+44.218","+17.552","1:42.131","c"],
        ["ricreene","R3","","SUP","52:44.210","+45.937","+1.719","1:42.370","c"],
        ["GLR_Scotty","MT","","SUP","53:01.025","+1:02.752","+16.815","1:41.993","c"],
        ["GGCAS_39","R3","","SUP","53:16.858","+1:18.585","+15.833","1:43.133","c"],
        ["capella13b","GB","","SUP","53:25.819","+1:27.546","+8.961","1:43.016","c"],
        ["Tim_turtle_79","MT","","GTR","RGQ","RGQ","","1:41.611","o"],
        ["MalevolentOne666","MT","","NA","DNS","DNS","","","o"]
      ]
    }
  ],

  // Standings after Round 3, as published by the club.
  // [pos, driver, team, car, [R1, R2, R3], total, drop, gap, points, starts, wins, podiums]
  // Round cell codes: "43p2" = 43 pts, 2nd in that round; "33d" = dropped; "45p1d" = dropped round win; "*" suffix = DC; "DNS"; "RGQ"; "DQ"; "–" = did not enter
  standingsAfter: 3,
  standings: [
    ["1","WallFinder","MT","GTR",["43p2","33d","41p3"],117,-33,"Leader",84,3,0,2],
    ["2","Kezaudio","RR","SUP",["41p3","41p3","–"],82,0,"-2",82,2,0,2],
    ["3","iphonedoc","RR","GTR",["38","30d","43p2"],111,-30,"-3",81,3,0,1],
    ["4","Trickybrewer","R3","SUP",["40","38","37d"],115,-37,"-6",78,3,0,0],
    ["5","GLR_Scotty","MT","SUP",["36","40","34d"],110,-34,"-8",76,3,0,0],
    ["6","MAD_MITCH_76","MT","SUP",["34d","37","38"],109,-34,"-9",75,3,0,0],
    ["7","Fatalreaper666","MT","GTR",["35d","36","36"],107,-35,"-12",72,3,0,0],
    ["8","Tankneo-1","R3","GTR",["30*","29d","39"],98,-29,"-15",69,3,0,0],
    ["9","Hamitothebone","MT","SUP",["33","35","–"],68,0,"-16",68,2,0,0],
    ["10","capella13b","GB","SUP",["32","34","32d"],98,-32,"-18",66,3,0,0],
    ["11","GGCAS_39","R3","SUP",["–","32","33"],65,0,"-19",65,2,0,0],
    ["12","RiotheSpeedster","R3","GTR",["31","31","–"],62,0,"-22",62,2,0,0],
    ["13","Colin_t24","RR","SUP",["45p1","DQ","45p1d"],90,-45,"-39",45,3,2,2],
    ["14","S7R_Ando787","RR","SUP",["–","45p1","–"],45,0,"-39",45,1,1,1],
    ["15","MasoMarvel87","RR","GTR",["–","43p2","–"],43,0,"-41",43,1,0,1],
    ["16","brettubrettu26","MT","SUP",["–","–","40"],40,0,"-44",40,1,0,0],
    ["17","Tim_turtle_79","MT","GTR",["37d","39","RGQ"],76,-37,"-45",39,3,0,0],
    ["18","Pjmack75","RR","SUP",["39","DNS","–"],39,0,"-45",39,1,0,0],
    ["19","ricreene","R3","SUP",["–","–","35"],35,0,"-49",35,1,0,0],
    ["20","MalevolentOne666","MT","NA",["–","–","DNS"],0,0,"-84",0,0,0,0]
  ]
};
