// Narlydude71 Memorial Cup GT4 Championship, Season 9 (Narly Cup, Thursday series) — final standings (archive).
// Transcribed from the club's Season 9 points sheet. Every subtotal, drop and total was checked.
// Season 9 uses the same starters-based points as Season 10: last place 5, +1 per place, +1 bonus for 2nd and +2 for the win.
// Rounds 4, 9 and 10 each have two drivers on 5 with everyone above on the ladder for one starter fewer
// (R4 MalevolentOne666 / simple-crackers9, R9 BarberXR6T / Barberphil, R10 GLR_Scotty / Barberphil); kept as published (club confirmed).
// Names: Ando787 = S7R_Ando787, Iphonedoc = iphonedoc, Masomarvel87 = MasoMarvel87, Capella13b = capella13b,
// tim_turtle_79 = Tim_turtle_79, r0b_B021 = R0B_B021. A 0 on the sheet = did not race.
// Teams: every driver raced for the same team as in the other seasons (data/club-teams.js, SEASON_TEAMS[9]).

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s9"] = {
  id: "narly-cup-s9",
  group: "narly-cup",
  season: 9,
  navLabel: "Narly Cup",
  title: "Narlydude71 Memorial Cup GT4 Championship Season 9",
  eyebrow: "Narlydude71 Memorial Cup GT4 Championship · Season 9 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 25 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 9 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 19 starters: 1st 25, 2nd 23, 3rd 21, 4th 20 … last 5). Rounds 4, 9 and 10 are shown as the club scored them. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 9.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["25p1","23p1","23p2","19p3","21p2","13","19p1","20p3","21p2","19p1"],203,-13,190,0],
    ["2","S7R_Ando787","787",["–","21p2","25p1","23p1","23p1","22p1","–","22p2","23p1","15p3"],174,0,174,0],
    ["3","iphonedoc","744",["20","19p3","20","21p2","17","20p2","15p3","24p1","13","17p2"],186,-13,173,0],
    ["4","GLR_Scotty","37",["23p2","18","19","18","18","17","17p2","15","19p3","5"],169,-15,154,0],
    ["5","Pjmack75","21",["19","17","21p3","17","–","18p3","–","19","–","14"],125,0,125,0],
    ["6","MAD_MITCH_76","76",["11","10","16","13","15","16","13","17","18","–"],129,-10,119,0],
    ["7","BarberXR6T","41",["18","13","13","16","19p3","15","10","11","5","–"],120,-5,115,0],
    ["8","Trickybrewer","92",["14","14","18","15","9","5","11","8","12","9"],115,-5,110,0],
    ["9","Hamitothebone","228",["15","15","9","9","12","11","–","14","15","6"],106,0,106,0],
    ["10","Tim_turtle_79","79",["10","8","11","12","14","14","12","18","14","–"],113,-8,105,0],
    ["11","Mcdivott","74",["17","11","10","6","10","12","8","12","16","8"],110,-6,104,0],
    ["12","MasoMarvel87","333",["16","12","–","14","11","–","14","16","17","–"],100,0,100,0],
    ["13","CmeCrash","33",["–","–","14","8","13","7","9","13","11","12"],87,0,87,0],
    ["14","Disco_Stu_001","101",["9","9","7","10","7","10","–","7","10","7"],76,0,76,0],
    ["15","MalevolentOne666","666",["8","6","12","5","–","9","5","5","7","11"],68,0,68,0],
    ["16","capella13b","64",["5","–","5","7","5","8","7","10","6","10"],63,0,63,0],
    ["17","MajorWatts","36",["13","16","17","11","–","–","–","–","–","–"],57,0,57,0],
    ["18","Barberphil","11",["7","5","8","–","6","6","6","–","5","5"],48,0,48,0],
    ["19","simple-crackers9","16",["6","7","6","5","–","–","–","6","8","–"],38,0,38,0],
    ["20","Kezaudio","72",["–","–","–","–","–","–","–","9","9","13"],31,0,31,0],
    ["21","Spannshouse","19",["21p3","–","–","–","–","–","–","–","–","–"],21,0,21,0],
    ["22","R0B_B021","7",["12","–","–","–","8","–","–","–","–","–"],20,0,20,0],
    ["23","Dissposable_Hero","51",["–","–","–","–","16","–","–","–","–","–"],16,0,16,0],
    ["24","Steve_73_GOOF","73",["–","–","15","–","–","–","–","–","–","–"],15,0,15,0],
    ["25","Nadnarb85","404",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
