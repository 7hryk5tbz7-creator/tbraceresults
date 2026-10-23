// WRX V Evo GR4 Trailblazers, Season 18 (Tuesday series).
// Transcribed from the club's Round 1 result image.
// Driver names are copied exactly as they appear in the results.

window.SERIES = window.SERIES || {};
window.SERIES_ORDER = window.SERIES_ORDER || [];
window.SERIES_ORDER.push("wrx-evo-gr4");
window.SERIES["wrx-evo-gr4"] = {
  id: "wrx-evo-gr4",
  navLabel: "WRX V Evo GR4",
  title: "WRX V Evo GR4 Trailblazers Season 18",
  eyebrow: "WRX V Evo GR4 Trailblazers · Season 18 · Tuesday series",
  pages: { results: "wrx-evo-gr4.html", championship: null },
  hasLobbies: false,
  resultNotes: ["DC = disconnected"],
  source: "Results transcribed from the club's Round 1 result sheet. Teams from the Season 18 registration list.",

  teams: {
    RR: { name: "Roadsick Racing", colour: "#A274FF" },
    MT: { name: "Mad Turtle Racing", colour: "#34C46E" },
    R3: { name: "Triple R Motorsport", colour: "#F0524A" },
    PV: { name: "Privateer", colour: "#8C939D" }
  },

  cars: {
    EVO: "Lancer Evolution Final Gr.4",
    WRX: "WRX Gr.4"
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
    }
  ]
};
