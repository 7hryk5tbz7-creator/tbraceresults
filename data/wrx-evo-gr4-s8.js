// Tuesday ETC Championship, Season 8 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 8 points sheet (no race numbers on the sheet). Every subtotal, drop, total and round
// points ladder was checked: all ten rounds match the starters-based scale (last place 5, +1 per place, +1 bonus for 2nd, +2 for the win).
// Ties ordered by countback (the club's sheet listed two the other way round): on 111 P-Toots (a 4th) ahead of MasoMarvel87 (as on the sheet);
// on 38 Hamitothebone (best 10th) ahead of BlackSugar73 (13th); on 17 Bentstik_7 (12th) ahead of Simmy_D (13th). Four drivers with no races share 26th.
// Names: Masomarvel = MasoMarvel87, Iphonedoc = iphonedoc, Ando787 = S7R_Ando787, tim_turtle_79 = Tim_turtle_79, Tony2sips = Tonyaudio1,
// Simmy__D = Simmy_D (confirmed by the club). A 0 on the sheet = did not race.
// Teams: data/club-teams.js, SEASON_TEAMS[8]. jmillsy85 was a Privateer in Season 8 (confirmed). Dunky_rl and PingTwoHigh69 have no team yet.

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s8"] = {
  id: "wrx-evo-gr4-s8",
  group: "wrx-evo-gr4",
  season: 8,
  navLabel: "Tuesday Series",
  title: "Tuesday ETC Championship Season 8",
  eyebrow: "Tuesday ETC Championship · Season 8 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 29 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 8 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 20 starters: 1st 26, 2nd 24, 3rd 22, 4th 21 … last 5). DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 8, with the ties on 38 and 17 ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Rollscanhardly","",["25p1","26p1","23p1","22p1","17p3","20p1","22p1","19p1","20p1","8"],202,-17,185,0],
    ["2","MAD_MITCH_76","",["23p2","24p2","18","16","21p1","15","20p2","17p2","18p2","12"],184,-15,169,0],
    ["3","Colin_t24","",["21p3","21","21p2","20p2","15","11","17","11","10","15p2"],162,-10,152,0],
    ["4","Kezaudio","",["18","17","19p3","17","19p2","18p2","16","15p3","16p3","–"],155,-15,140,0],
    ["5","Pjmack75","",["16","19","–","13","13","13","13","13","15","13p3"],128,0,128,0],
    ["6","BigBruceTheShark","",["20","20","17","15","5","14","10","12","9","10"],132,-5,127,0],
    ["7","P-Toots","",["14","13","10","14","12","16p3","15","14","13","–"],121,-10,111,0],
    ["8","MasoMarvel87","",["13","11","13","18p3","14","–","12","10","11","9"],111,0,111,0],
    ["9","Trickybrewer","",["17","14","14","9","10","–","7","8","7","7"],93,0,93,0],
    ["10","simple-crackers9","",["11","10","11","11","9","–","9","7","12","6"],86,0,86,0],
    ["11","iphonedoc","",["6","15","15","12","16","9","11","–","–","–"],84,0,84,0],
    ["12","S7R_Ando787","",["19","22p3","5","–","–","–","18p3","–","–","17p1"],81,0,81,0],
    ["13","Soulslayer_71","",["15","18","16","–","6","8","6","9","–","–"],78,0,78,0],
    ["14","Mcdivott","",["8","8","8","6","8","10","–","6","8","11"],73,0,73,0],
    ["15","Tim_turtle_79","",["–","–","–","5","11","12","14","–","14","–"],56,0,56,0],
    ["16","Hamitothebone","",["–","–","12","8","–","–","8","–","5","5"],38,0,38,0],
    ["17","BlackSugar73","",["10","7","7","7","7","–","–","–","–","–"],38,0,38,0],
    ["18","jmillsy85","",["–","16","–","10","–","–","–","–","–","–"],26,0,26,0],
    ["19","CmeCrash","",["7","6","9","–","–","–","–","–","–","–"],22,0,22,0],
    ["20","Tonyaudio1","",["12","9","–","–","–","–","–","–","–","–"],21,0,21,0],
    ["21","Bentstik_7","",["–","5","–","–","–","7","–","5","–","–"],17,0,17,0],
    ["22","Simmy_D","",["5","–","6","–","–","6","–","–","–","–"],17,0,17,0],
    ["23","Forza5_308","",["–","–","–","–","–","5","5","–","6","–"],16,0,16,0],
    ["24","NeonEmpyreal","",["–","12","–","–","–","–","–","–","–","–"],12,0,12,0],
    ["25","Dunky_rl","",["9","–","–","–","–","–","–","–","–","–"],9,0,9,0],
    ["26","PingTwoHigh69","",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["26","MalevolentOne666","",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["26","Andruid966","",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["26","Yoda_Raptor","",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
