// WJF Trophy GT3 Endurance Championship, Season 18.
// Transcribed from the club's Round 1-4 result images and the standings image (after Round 4).
// Later this file will be generated automatically from uploaded CSV exports.

window.SERIES = window.SERIES || {};
window.SERIES_ORDER = window.SERIES_ORDER || [];
window.SERIES_ORDER.push("gt3-endurance");
window.SERIES["gt3-endurance"] = {
  id: "gt3-endurance",
  season: 18,
  navOrder: 3, // switcher position, by race day (Friday)
  navLabel: "WJF Trophy",
  title: "WJF Trophy GT3 Endurance Championship Season 18",
  eyebrow: "WJF Trophy · GT3 Endurance Championship · Season 18 · Friday series",
  seriesLine: "Trailblazers S18 WJF Trophy",
  pages: { results: "index.html", championship: "championship.html", records: "records.html", teamrecords: "team-records.html", champions: "champions.html" },
  hasLobbies: true,
  resultNotes: ["DNS = did not start", "DC and RGQ shown as listed in the results"],
  source: "Results transcribed from the club's Round 1–4 result sheets.",
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. TOTAL = all rounds before the drop. DROP = points removed by the one drop round per season (0 if a round was missed). DNS scores 0 and counts as the drop. RGQ scores 0 and is not a drop round. Ties split on countback: most wins, then 2nds, 3rds and so on. STARTS include DC and RGQ; PODIUMS include wins.",
  standingsSource: "Standings as published by the club after Round 4.",

  teams: {
    RR: { name: "Roadsick Racing", colour: "#FACC15" },
    MC: { name: "MC Motorsport", colour: "#4C8DFF" },
    MT: { name: "Mad Turtle Racing", colour: "#34C46E" },
    R3: { name: "Triple R Motorsport", colour: "#F0524A" },
    GB: { name: "Gerbil Racing Team", colour: "#F08A2C" },
    PV: { name: "Privateer", colour: "#8C939D" }
  },

  cars: {
    RCF: "RC F GT3 '17",
    F296: "296 GT3 '23",
    V12: "V12 Vantage GT3 '12",
    M6: "M6 GT3 Sprint Model '16",
    FGT: "Ford GT Race Car '18",
    NA: ""
  },

  // Result rows: [driver, team, lobby, car, raceTime, toLeader, toCarAhead, bestLap, status]
  // status: c = classified, l = lapped (classified), o = not classified (DC / RGQ / DNS)
  rounds: [
    {
      no: 1, track: "Mount Panorama Motor Racing Circuit", short: "Mount Panorama",
      entries: 26, starters: 24, leadLap: 19, lobbies: "Blue & Red lobbies",
      rows: [
        ["S7R_Ando787","RR","Blue","RCF","1:22:07.069","Winner","","2:02.954","c"],
        ["Arty_Bicycle","MC","Blue","F296","1:22:11.163","+4.094","+4.094","2:03.092","c"],
        ["ExpatChamp","MT","Red","V12","1:22:14.089","+7.020","+2.926","2:03.447","c"],
        ["Fatalreaper666","MT","Blue","F296","1:22:29.063","+21.994","+14.974","2:03.928","c"],
        ["WallFinder","MT","Blue","RCF","1:22:30.013","+22.944","+0.950","2:03.824","c"],
        ["Trickybrewer","R3","Blue","RCF","1:22:43.674","+36.605","+13.661","2:03.751","c"],
        ["RiotheSpeedster","R3","Red","RCF","1:22:45.720","+38.651","+2.046","2:04.400","c"],
        ["RazzMazz","PV","Red","RCF","1:22:47.233","+40.164","+1.513","2:04.088","c"],
        ["BigBruceTheShark","MT","Blue","F296","1:22:48.658","+41.589","+1.425","2:04.850","c"],
        ["Tim_turtle_79","MT","Red","RCF","1:22:55.747","+48.678","+7.089","2:04.021","c"],
        ["Tankneo-1","R3","Red","RCF","1:23:05.685","+58.616","+9.938","2:03.585","c"],
        ["VETERANPP","GB","Blue","RCF","1:23:07.964","+1:00.895","+2.279","2:04.707","c"],
        ["MAD_MITCH_76","MT","Blue","F296","1:23:08.862","+1:01.793","+0.898","2:03.829","c"],
        ["GLR_Scotty","MT","Blue","RCF","1:23:09.739","+1:02.670","+0.877","2:05.064","c"],
        ["b-man228","R3","Red","F296","1:23:19.847","+1:12.778","+10.108","2:04.668","c"],
        ["Pjmack75","RR","Blue","F296","1:23:37.584","+1:30.515","+17.737","2:04.996","c"],
        ["Meggs1","GB","Red","RCF","1:23:51.109","+1:44.040","+13.525","2:05.110","c"],
        ["Legend-Macca47","GB","Red","V12","1:23:57.693","+1:50.624","+6.584","2:05.178","c"],
        ["Soulslayer_71","R3","Red","RCF","1:24:21.732","+2:14.663","+24.039","2:05.677","c"],
        ["Barberphil","GB","Red","RCF","1 Lap","+1 Lap","","2:06.792","l"],
        ["Hamitothebone","MT","Red","F296","1 Lap","+1 Lap","","2:05.349","l"],
        ["MalevolentOne666","MT","Red","F296","13 Laps","+13 Laps","","2:06.292","l"],
        ["jmillsy85","R3","Red","M6","DC","DC","","2:04.890","o"],
        ["allaussie","MC","Blue","RCF","RGQ","RGQ","","2:06.175","o"],
        ["N-spud-P666","MC","Blue","F296","DNS","DNS","","","o"],
        ["NWR_NICO71","MC","Blue","F296","DNS","DNS","","","o"]
      ]
    },
    {
      no: 2, track: "Kyoto Driving Park – Yamagiwa", short: "Kyoto",
      entries: 23, starters: 20, leadLap: 15, lobbies: "Blue & Red lobbies",
      rows: [
        ["GLR_Scotty","MT","Blue","RCF","1:21:07.901","Winner","","1:34.141","c"],
        ["Tankneo-1","R3","Blue","RCF","1:21:23.780","+15.879","+15.879","1:34.278","c"],
        ["Arty_Bicycle","MC","Blue","F296","1:21:25.520","+17.619","+1.740","1:34.003","c"],
        ["Trickybrewer","R3","Blue","RCF","1:21:27.914","+20.013","+2.394","1:34.073","c"],
        ["MAD_MITCH_76","MT","Red","F296","1:21:28.119","+20.218","+0.205","1:34.712","c"],
        ["N-spud-P666","MC","Red","F296","1:21:30.506","+22.605","+2.387","1:33.695","c"],
        ["Pjmack75","RR","Red","F296","1:21:39.074","+31.173","+8.568","1:34.882","c"],
        ["RazzMazz","PV","Blue","RCF","1:21:48.437","+40.536","+9.363","1:34.011","c"],
        ["VETERANPP","GB","Red","RCF","1:21:53.492","+45.591","+5.055","1:34.868","c"],
        ["WallFinder","MT","Blue","RCF","1:21:55.413","+47.512","+1.921","1:34.409","c"],
        ["BigBruceTheShark","MT","Blue","F296","1:21:56.322","+48.421","+0.909","1:34.722","c"],
        ["NWR_NICO71","MC","Red","F296","1:21:58.596","+50.695","+2.274","1:33.808","c"],
        ["Hamitothebone","MT","Red","F296","1:22:01.601","+53.700","+3.005","1:35.432","c"],
        ["ExpatChamp","MT","Blue","V12","1:22:01.771","+53.870","+0.170","1:34.498","c"],
        ["RiotheSpeedster","R3","Blue","RCF","1:22:39.963","+1:32.062","+38.192","1:35.149","c"],
        ["Fatalreaper666","MT","Blue","F296","1 Lap","+1 Lap","","1:34.876","l"],
        ["Barberphil","GB","Red","RCF","3 Laps","+3 Laps","","1:35.929","l"],
        ["b-man228","R3","Red","F296","DC","DC","","1:34.712","o"],
        ["Tim_turtle_79","MT","Blue","RCF","RGQ","RGQ","","1:34.823","o"],
        ["Soulslayer_71","R3","Red","RCF","RGQ","RGQ","","","o"],
        ["S7R_Ando787","RR","Blue","RCF","DNS","DNS","","","o"],
        ["GGCAS_39","R3","Red","RCF","DNS","DNS","","","o"],
        ["O-PUNCHY-_-P","GB","Red","NA","DNS","DNS","","","o"]
      ]
    },
    {
      no: 3, track: "Sardegna – Road Track – A", short: "Sardegna",
      entries: 16, starters: 15, leadLap: 14, lobbies: "Blue lobby",
      rows: [
        ["NWR_NICO71","MC","Blue","F296","1:20:05.237","Winner","","1:41.815","c"],
        ["ExpatChamp","MT","Blue","V12","1:20:07.622","+2.385","+2.385","1:42.078","c"],
        ["Tankneo-1","R3","Blue","RCF","1:20:24.921","+19.684","+17.299","1:42.309","c"],
        ["Trickybrewer","R3","Blue","RCF","1:20:26.461","+21.224","+1.540","1:42.161","c"],
        ["jmillsy85","R3","Blue","M6","1:20:28.762","+23.525","+2.301","1:42.125","c"],
        ["RazzMazz","PV","Blue","RCF","1:20:35.907","+30.670","+7.145","1:42.162","c"],
        ["Pjmack75","RR","Blue","F296","1:20:37.164","+31.927","+1.257","1:42.112","c"],
        ["WallFinder","MT","Blue","RCF","1:20:38.797","+33.560","+1.633","1:41.908","c"],
        ["GLR_Scotty","MT","Blue","RCF","1:20:42.728","+37.491","+3.931","1:42.365","c"],
        ["MAD_MITCH_76","MT","Blue","F296","1:20:45.124","+39.887","+2.396","1:42.528","c"],
        ["BigBruceTheShark","MT","Blue","F296","1:20:55.485","+50.248","+10.361","1:43.143","c"],
        ["b-man228","R3","Blue","F296","1:21:15.171","+1:09.934","+19.686","1:42.567","c"],
        ["Fatalreaper666","MT","Blue","F296","1:21:20.540","+1:15.303","+5.369","1:42.058","c"],
        ["Hamitothebone","MT","Blue","F296","1:21:42.245","+1:37.008","+21.705","1:42.995","c"],
        ["ricreene","R3","Blue","FGT","1 Lap","+1 Lap","","1:42.578","l"],
        ["MalevolentOne666","MT","Blue","F296","DNS","DNS","","","o"]
      ]
    },
    {
      no: 4, track: "Blue Moon Bay Speedway – Infield A", short: "Blue Moon Bay",
      entries: 17, starters: 16, leadLap: 9, lobbies: "Blue lobby",
      rows: [
        ["NWR_NICO71","MC","Blue","F296","1:23:21.628","Winner","","1:07.257","c"],
        ["Fatalreaper666","MT","Blue","F296","1:23:45.498","+23.870","+23.870","1:06.973","c"],
        ["RazzMazz","PV","Blue","RCF","1:23:46.739","+25.111","+1.241","1:07.595","c"],
        ["GLR_Scotty","MT","Blue","RCF","1:23:50.794","+29.166","+4.055","1:07.452","c"],
        ["WallFinder","MT","Blue","RCF","1:23:52.767","+31.139","+1.973","1:07.434","c"],
        ["Pjmack75","RR","Blue","F296","1:23:55.785","+34.157","+3.018","1:07.449","c"],
        ["ExpatChamp","MT","Blue","V12","1:24:04.459","+42.831","+8.674","1:07.787","c"],
        ["Tankneo-1","R3","Blue","RCF","1:24:04.518","+42.890","+0.059","1:07.467","c"],
        ["VETERANPP","GB","Blue","RCF","1:24:25.200","+1:03.572","+20.682","1:07.917","c"],
        ["MAD_MITCH_76","MT","Blue","F296","1 Lap","+1 Lap","","1:07.518","l"],
        ["BigBruceTheShark","MT","Blue","F296","1 Lap","+1 Lap","","1:07.899","l"],
        ["Meggs1","GB","Blue","RCF","1 Lap","+1 Lap","","1:08.291","l"],
        ["Hamitothebone","MT","Blue","F296","1 Lap","+1 Lap","","1:08.058","l"],
        ["Trickybrewer","R3","Blue","RCF","2 Laps","+2 Laps","","1:07.400","l"],
        ["Barberphil","GB","Blue","RCF","6 Laps","+6 Laps","","1:09.109","l"],
        ["b-man228","R3","Blue","F296","RGQ","RGQ","","1:07.350","o"],
        ["jmillsy85","R3","Blue","M6","DNS","DNS","","","o"]
      ]
    }
  ],

  // Standings after Round 4, as published by the club.
  // [pos, driver, team, car, [R1..R4], total, drop, gap, points, starts, wins, podiums]
  // Round cell codes: "43p2" = 43 pts, 2nd in that round; "33d" = dropped; "21*" = DC; "DNS"; "RGQ"; "–" = did not enter
  standingsAfter: 4,
  standings: [
    ["1","NWR_NICO71","MC","F296",["DNS","32","45p1","45p1"],122,0,"Leader",122,3,2,2],
    ["2","ExpatChamp","MT","V12",["41p3","30d","43p2","37"],151,-30,"-1",121,4,0,2],
    ["3","GLR_Scotty","MT","RCF",["30d","45p1","35","40"],150,-30,"-2",120,4,1,1],
    ["4","Tankneo-1","R3","RCF",["33d","43p2","41p3","36"],153,-33,"-2",120,4,0,2],
    ["5","Trickybrewer","R3","RCF",["38","40","40","30d"],148,-30,"-4",118,4,0,0],
    ["6","RazzMazz","PV","RCF",["36d","36","38","41p3"],151,-36,"-7",115,4,0,1],
    ["7","Fatalreaper666","MT","F296",["40","28d","31","43p2"],142,-28,"-8",114,4,0,1],
    ["8","WallFinder","MT","RCF",["39","34d","36","39"],148,-34,"-8",114,4,0,0],
    ["9","Pjmack75","RR","F296",["28d","37","37","38"],140,-28,"-10",112,4,0,0],
    ["10","MAD_MITCH_76","MT","F296",["31d","39","34","34"],138,-31,"-15",107,4,0,0],
    ["11","VETERANPP","GB","RCF",["32","35","–","35"],102,0,"-20",102,3,0,0],
    ["12","BigBruceTheShark","MT","F296",["35","33d","33","33"],134,-33,"-21",101,4,0,0],
    ["13","Hamitothebone","MT","F296",["23d","31","30","31"],115,-23,"-30",92,4,0,0],
    ["14","Arty_Bicycle","MC","F296",["43p2","41p3","–","–"],84,0,"-38",84,2,0,2],
    ["15","Barberphil","GB","RCF",["24","27","–","29"],80,0,"-42",80,3,0,0],
    ["16","RiotheSpeedster","R3","RCF",["37","29","–","–"],66,0,"-56",66,2,0,0],
    ["17","b-man228","R3","F296",["29","26d","32","RGQ"],87,-26,"-61",61,4,0,0],
    ["18","jmillsy85","R3","M6",["21*","–","39","DNS"],60,0,"-62",60,2,0,0],
    ["19","Meggs1","GB","RCF",["27","–","–","32"],59,0,"-63",59,2,0,0],
    ["20","S7R_Ando787","RR","RCF",["45p1","DNS","–","–"],45,0,"-77",45,1,1,1],
    ["21","N-spud-P666","MC","F296",["DNS","38","–","–"],38,0,"-84",38,1,0,0],
    ["22","Tim_turtle_79","MT","RCF",["34","RGQ","–","–"],34,0,"-88",34,2,0,0],
    ["23","ricreene","R3","FGT",["–","–","29","–"],29,0,"-93",29,1,0,0],
    ["24","Legend-Macca47","GB","V12",["26","–","–","–"],26,0,"-96",26,1,0,0],
    ["25","Soulslayer_71","R3","RCF",["25","RGQ","–","–"],25,0,"-97",25,2,0,0],
    ["26","MalevolentOne666","MT","F296",["22","–","DNS","–"],22,0,"-100",22,1,0,0],
    ["27","allaussie","MC","RCF",["RGQ","–","–","–"],0,0,"-122",0,1,0,0],
    ["28","GGCAS_39","R3","RCF",["–","DNS","–","–"],0,0,"-122",0,0,0,0],
    ["29","O-PUNCHY-_-P","GB","NA",["–","DNS","–","–"],0,0,"-122",0,0,0,0]
  ]
};
