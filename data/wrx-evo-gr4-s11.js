// BRZ v GR86, Season 11 (Tuesday series) — final standings (archive).
// Transcribed from the club's Season 11 points sheet. Every subtotal, drop and total was checked.
// Tie on 352: Rollscanhardly is placed ahead of Pjmack75 on countback (4 wins to 0); the club's sheet listed them the other way round.
// Note: on the sheet no driver has 36 points in Round 1 (a gap in that round's points scale); left as published.
// On the sheet, 0 means the driver did not race that week (shown as "–"). Race numbers are not on the sheet;
// they are filled from drivers' other seasons where known.
// Teams are not shown for Season 11 until the club supplies the full team list.
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["wrx-evo-gr4-s11"] = {
  id: "wrx-evo-gr4-s11",
  group: "wrx-evo-gr4",
  season: 11,
  navLabel: "Tuesday Series",
  title: "BRZ v GR86 Season 11",
  eyebrow: "BRZ v GR86 · Season 11 · Tuesday series",
  pages: { results: null, championship: "wrx-evo-gr4-championship.html" },
  final: true,
  standingsMeta: "Final standings · 20 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 11, with the 352-point tie ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["43p2","45p1","43p2","43p2","40","43p2","37","38","43p2","41p3"],416,-37,379,0],
    ["2","MAD_MITCH_76","76",["38","39","39","45p1","43p2","41p3","43p2","43p2","40","38"],409,-38,371,0],
    ["3","iphonedoc","744",["41p3","41p3","41p3","40","41p3","40","41p3","30","41p3","40"],396,-30,366,0],
    ["4","Rollscanhardly","270",["32","32","35","37","35","45p1","45p1","33","45p1","45p1"],384,-32,352,0],
    ["5","Pjmack75","21",["39","40","–","38","39","39","38","41p3","39","39"],352,0,352,0],
    ["6","S7R_Ando787","787",["45p1","43p2","45p1","41p3","45p1","37","–","45p1","–","43p2"],344,0,344,0],
    ["7","Kezaudio","72",["33","38","36","36","36","31","39","36","37","34"],356,-31,325,0],
    ["8","brettubrettu26","82",["34","35","34","29","38","38","34","37","38","36"],353,-29,324,0],
    ["9","MasoMarvel87","333",["40","33","38","–","32","36","36","35","36","35"],321,0,321,0],
    ["10","Mcdivott","74",["31","31","33","35","34","34","–","34","35","33"],300,0,300,0],
    ["11","MalevolentOne666","666",["30","27","30","34","26","30","35","–","34","32"],278,0,278,0],
    ["12","capella13b","64",["28","29","29","30","27","28","32","32","32","29"],296,-27,269,0],
    ["13","MajorWatts","36",["35","37","40","39","37","–","40","40","–","–"],268,0,268,0],
    ["14","Hamitothebone","228",["27","36","31","32","28","35","–","–","33","31"],253,0,253,0],
    ["15","Disco_Stu_001","101",["–","30","28","28","29","29","31","29","–","30"],234,0,234,0],
    ["16","Xburns85","",["–","28","32","31","31","33","33","31","–","–"],219,0,219,0],
    ["17","Trickybrewer","92",["37","34","37","–","–","–","–","39","–","37"],184,0,184,0],
    ["18","OneTao","",["25","–","27","33","30","27","–","–","–","–"],142,0,142,0],
    ["19","Tonyaudio1","44",["29","–","–","27","33","32","–","–","–","–"],121,0,121,0],
    ["20","Viruz161","",["26","–","26","–","–","–","–","–","–","–"],52,0,52,0]
  ]
};
