// Narlydude71 Cup GR3 RC, Season 14 (Thursday series) — final standings (archive).
// Transcribed from the club's Season 14 points sheet. Every subtotal, drop and round points ladder was checked.
// On the sheet, 0 means the driver did not race that week (shown as "–").
// MajorWatts, MalevolentOne666 (listed as MalevolentOne, race #666), TheRushfire and Rogue scored 0 and share 18th.
// Teams are not shown for Season 14 until the club supplies the full team list.
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s14"] = {
  id: "narly-cup-s14",
  group: "narly-cup",
  season: 14,
  navLabel: "Narly Cup",
  title: "Narlydude71 Cup GR3 RC Season 14",
  eyebrow: "Narlydude71 Cup GR3 RC · Season 14 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 21 drivers · Round-by-round points",
  standingsKey: ["swatches", "RGQ = 0 points", "– = did not race that week"],
  standingsRules: "Same rules as Season 18. Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round, removed only when they raced every round (0 if a round was missed). RGQ scores 0 and is not a drop round. No penalties were applied. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 14.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Rollscanhardly","270",["45p1","–","45p1","45p1","43p2","33","45p1","43p2","40","45p1"],384,0,384,0],
    ["2","iphonedoc","744",["43p2","36","40","38","40","41p3","40","41p3","41p3","43p2"],403,-36,367,0],
    ["3","brettubrettu26","82",["39","–","43p2","40","41p3","38","36","37","37","40"],351,0,351,0],
    ["4","Colin_t24","85",["41p3","45p1","RGQ","43p2","39","43p2","41p3","45p1","45p1","41p3"],383,-39,344,0],
    ["5","MAD_MITCH_76","76",["34","41p3","37","37","38","40","38","40","34","37"],376,-34,342,0],
    ["6","GLR_Scotty","37",["37","40","38","39","36","37","33","38","38","39"],375,-33,342,0],
    ["7","Tim_turtle_79","79",["35","39","36","33","37","39","37","36","36","38"],366,-33,333,0],
    ["8","MasoMarvel87","333",["31","37","41p3","35","–","–","39","39","43p2","36"],301,0,301,0],
    ["9","capella13b","64",["32","34","35","31","32","35","–","33","33","34"],299,0,299,0],
    ["10","Trickybrewer","92",["40","33","39","34","33","–","35","31","39","–"],284,0,284,0],
    ["11","Disco_Stu_001","101",["33","35","34","–","34","36","–","32","30","–"],234,0,234,0],
    ["12","S7R_Ando787","787",["–","43p2","–","41p3","45p1","45p1","43p2","–","–","–"],217,0,217,0],
    ["13","Hamitothebone","228",["–","38","–","36","35","–","–","–","35","35"],179,0,179,0],
    ["14","Mcdivott","74",["30","–","–","32","–","34","–","34","32","–"],162,0,162,0],
    ["15","Tankneo-1","576",["–","–","–","–","–","–","34","35","31","33"],133,0,133,0],
    ["16","Pjmack75","21",["38","–","–","–","–","–","–","–","–","–"],38,0,38,0],
    ["17","WharfyRacing","97",["36","–","–","–","–","–","–","–","–","–"],36,0,36,0],
    ["18","MajorWatts","36",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["18","MalevolentOne666","666",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["18","TheRushfire","81",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["18","Rogue","89",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
