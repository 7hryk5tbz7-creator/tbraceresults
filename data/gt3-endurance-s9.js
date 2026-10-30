// WJF73 Trophy GT3 Endurance Championship, Season 9 (WJF Trophy, Friday series) — final standings (archive).
// Transcribed from the club's Season 9 points sheet. Every subtotal, drop and total was checked.
// Season 9 uses the same starters-based points as Season 10: last place 5, +1 per place, +1 bonus for 2nd and +2 for the win.
// Rounds 1, 8 and 10 each have two drivers on 5 with everyone above on the ladder for one starter fewer, and in Round 3 only six
// drivers scored on the ladder (Meggs1 won on 13) while the other 15 scored 5. All kept as published (club confirmed).
// Ties ordered by countback (the club's sheet listed them differently): on 149 Tim_turtle_79 (a 2nd), Pjmack75 (two 3rds),
// Hamitothebone (a 6th) then PorscheNut92; on 120 Khush_Vekaria (a 3rd) ahead of O-PUNCHY-_-P; on 35 VETERANPP (13th) ahead of Fly-balding072 (15th).
// Names: Ando787 = S7R_Ando787, Crackpipetom = crackpipetom, Rustynutz 75 = Rusty-Nutz-75 (confirmed by the club), Legend-macca47 = Legend-Macca47,
// McDivott = Mcdivott, Fly- balding 072 = Fly-balding072, tim_turtle_79 = Tim_turtle_79, r0b_B021 = R0B_B021. A 0 on the sheet = did not race.
// Teams: every driver raced for the same team as in the other seasons (data/club-teams.js, SEASON_TEAMS[9]); vertex_spec and Exciteddugong have no team yet.

window.SERIES = window.SERIES || {};
window.SERIES["gt3-endurance-s9"] = {
  id: "gt3-endurance-s9",
  group: "gt3-endurance",
  season: 9,
  navLabel: "WJF Trophy",
  title: "WJF73 Trophy GT3 Endurance Championship Season 9",
  eyebrow: "WJF73 Trophy GT3 Endurance Championship · Season 9 · Friday series",
  pages: { results: null, championship: "championship.html" },
  final: true,
  standingsMeta: "Final standings · 34 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Season 9 points depend on the number of starters in each race: last place scores 5 and each place higher scores 1 more, with a 1-point bonus for 2nd and a 2-point bonus for the win (e.g. 26 starters: 1st 32, 2nd 30, 3rd 28, 4th 27 … last 5). Rounds 1, 3, 8 and 10 are shown as the club scored them. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 9, with the ties on 149, 120 and 35 ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Rollscanhardly","270",["28","32p1","5","27p1","26p1","13","28p1","24p1","24p1","22p1"],229,-5,224,0],
    ["2","allaussie","87",["27","24","5","20","22p3","26p2","24p3","15","17","20p2"],200,-5,195,0],
    ["3","GLR_Scotty","37",["31p2","17","5","21","21","20","21","8","22p2","12"],178,-5,173,0],
    ["4","N-spud-P666","32",["33p1","5","5","25p2","24p2","21","26p2","5","16","5"],165,-5,160,0],
    ["5","Tim_turtle_79","79",["17","16","9p3","13","19","23","19","22p2","20p3","–"],158,-9,149,0],
    ["6","Pjmack75","21",["29p3","26","5","18","17","24p3","–","16","–","14"],149,0,149,0],
    ["7","Hamitothebone","228",["20","25","5","11","16","15","14","19","13","16"],154,-5,149,0],
    ["8","PorscheNut92","911",["16","22","5","14","11","18","22","14","19","13"],154,-5,149,0],
    ["9","MAD_MITCH_76","76",["18","19","5","12","20","19","18","20p3","18","–"],149,-5,144,0],
    ["10","crackpipetom","888",["25","27","5","10","15","28p1","16","12","–","–"],138,0,138,0],
    ["11","Meggs1","59",["19","–","13p1","7","14","22","17","18","10","15"],135,0,135,0],
    ["12","Rusty-Nutz-75","269",["24","20","5","19","10","17","23","13","8","–"],139,-5,134,0],
    ["13","BarberXR6T","41",["22","28p3","5","16","5","16","20","5","–","5"],122,0,122,0],
    ["14","Khush_Vekaria","239",["26","11","5","–","13","6","15","17","9","18p3"],120,0,120,0],
    ["15","O-PUNCHY-_-P","427",["23","12","–","15","18","11","–","10","14","17"],120,0,120,0],
    ["16","Trickybrewer","92",["13","21","5","17","–","–","12","11","15","11"],105,0,105,0],
    ["17","Disco_Stu_001","101",["11","18","8","9","12","9","6","9","–","7"],89,0,89,0],
    ["18","ricreene","69",["8","10","6","8","6","5","10","7","7","9"],76,-5,71,0],
    ["19","S7R_Ando787","787",["–","30p2","11p2","23p3","–","–","–","–","–","–"],64,0,64,0],
    ["20","Barberphil","11",["6","8","7","5","9","8","8","–","6","6"],63,0,63,0],
    ["21","Legend-Macca47","447",["9","9","–","6","8","10","5","6","5","–"],58,0,58,0],
    ["22","Mcdivott","74",["14","13","–","–","–","–","7","–","12","–"],46,0,46,0],
    ["23","vertex_spec","997",["21","–","–","22","–","–","–","–","–","–"],43,0,43,0],
    ["24","VETERANPP","998",["–","–","–","–","–","14","13","–","–","8"],35,0,35,0],
    ["25","Fly-balding072","72",["10","6","–","–","7","12","–","–","–","–"],35,0,35,0],
    ["26","Spannshouse","19",["5","23","5","–","–","–","–","–","–","–"],33,0,33,0],
    ["27","Steve_73_GOOF","73",["12","15","–","–","–","–","–","–","–","–"],27,0,27,0],
    ["28","simple-crackers9","16",["5","14","–","–","–","7","–","–","–","–"],26,0,26,0],
    ["29","R0B_B021","7",["15","–","–","–","–","–","9","–","–","–"],24,0,24,0],
    ["30","Kezaudio","72",["–","–","–","–","–","–","–","–","11","10"],21,0,21,0],
    ["31","OneTao","3",["7","7","5","–","–","–","–","–","–","–"],19,0,19,0],
    ["32","Soulslayer_71","571",["–","–","–","–","–","–","11","–","–","–"],11,0,11,0],
    ["33","Nadnarb85","404",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["33","Exciteddugong","174",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
