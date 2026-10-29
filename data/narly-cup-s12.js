// Narlydude71 Cup GR2, Season 12 (Thursday series) — final standings (archive).
// Transcribed from the club's Season 12 points sheet. Every subtotal and drop was checked.
// Hamitothebone: subtotal 162, total 152 — a 10-point penalty (confirmed by the club).
// Tie on 301: GLR_Scotty is placed ahead of Mcdivott on countback (a 3rd place beats a best of 8th);
// the club's sheet listed them the other way round.
// Note: on the sheet no driver has 34 points in Round 2 (a gap in that round's points scale); left as published.
// ohDennn and RidwanF1 are an exact tie (one win each) and share 20th; four drivers with 0 points share 24th.
// On the sheet, 0 means the driver did not race that week (shown as "–"). Race numbers are not on the sheet;
// they are filled from drivers' other seasons where known.
// Teams are not shown for Season 12 until the club supplies the full team list.
// Driver names use the Season 18 spelling where the driver also races in Season 18.

window.SERIES = window.SERIES || {};
window.SERIES["narly-cup-s12"] = {
  id: "narly-cup-s12",
  group: "narly-cup",
  season: 12,
  navLabel: "Narly Cup",
  title: "Narlydude71 Cup GR2 Season 12",
  eyebrow: "Narlydude71 Cup GR2 · Season 12 · Thursday series",
  pages: { results: null, championship: "narly-cup-championship.html" },
  final: true,
  standingsMeta: "Final standings · 27 drivers · Round-by-round points",
  standingsKey: ["swatches", "– = did not race that week"],
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. DROP = the driver's lowest round, not counting the final round (the final round can never be dropped). A driver gets a drop if they raced every round, or every round except the final one. Anyone who missed an earlier round gets no drop. PENALTY = points deducted by the club. Ties split on countback: most wins, then 2nds, 3rds and so on.",
  standingsSource: "Standings as published by the club at the end of Season 12, with the 301-point tie ordered by countback.",

  // Archive format: [pos, driver, raceNo, [RD1..RD10], subtotal, drop, total, penalty]
  standingsFormat: "archive",
  roundCount: 10,
  standings: [
    ["1","Colin_t24","85",["43p2","43p2","45p1","45p1","45p1","39","40","43p2","43p2","43p2"],429,-39,390,0],
    ["2","Pjmack75","21",["35","41p3","40","36","41p3","43p2","38","36","38","39"],387,-35,352,0],
    ["3","MAD_MITCH_76","76",["37","39","39","39","37","37","43p2","40","33","37"],381,-33,348,0],
    ["4","iphonedoc","744",["40","35","38","41p3","34","33","35","38","40","41p3"],375,-33,342,0],
    ["5","Trickybrewer","92",["38","38","36","37","39","41p3","39","35","37","34"],374,-34,340,0],
    ["6","Tim_turtle_79","79",["39","36","37","30","–","38","41p3","39","41p3","35"],336,0,336,0],
    ["7","GLR_Scotty","37",["36","37","–","40","38","–","32","41p3","39","38"],301,0,301,0],
    ["8","Mcdivott","74",["28","33","–","35","35","36","34","34","34","32"],301,0,301,0],
    ["9","brettubrettu26","82",["34","31","–","34","40","34","36","–","36","40"],285,0,285,0],
    ["10","S7R_Ando787","787",["41p3","–","–","–","–","40","45p1","45p1","45p1","45p1"],261,0,261,0],
    ["11","capella13b","64",["27","–","–","31","33","32","33","32","32","30"],250,0,250,0],
    ["12","BarberXR6T","41",["23","40","41p3","38","36","35","–","–","–","–"],213,0,213,0],
    ["13","N-spud-P666","32",["24","45p1","43p2","43p2","43p2","–","–","–","–","–"],198,0,198,0],
    ["14","simple-crackers9","",["32","–","33","33","–","–","–","33","–","36"],167,0,167,0],
    ["15","Hamitothebone","228",["31","–","34","–","–","–","31","–","35","31"],162,0,152,-10],
    ["16","MasoMarvel87","333",["30","–","–","–","–","–","37","–","–","33"],100,0,100,0],
    ["17","Soulslayer_71","571",["26","–","35","32","–","–","–","–","–","–"],93,0,93,0],
    ["18","Tonyaudio1","44",["29","30","32","–","–","–","–","–","–","–"],91,0,91,0],
    ["19","RSR_Robbo-Sport","",["33","32","–","–","–","–","–","–","–","–"],65,0,65,0],
    ["20","ohDennn","",["45p1","–","–","–","–","–","–","–","–","–"],45,0,45,0],
    ["20","RidwanF1","14",["–","–","–","–","–","45p1","–","–","–","–"],45,0,45,0],
    ["22","DK666_Racing","",["–","–","–","–","–","–","–","37","–","–"],37,0,37,0],
    ["23","danimal_242","",["25","–","–","–","–","–","–","–","–","–"],25,0,25,0],
    ["24","MrDonovan","",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["24","Kezaudio","72",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["24","R0B_B021","7",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0],
    ["24","ricreene","69",["–","–","–","–","–","–","–","–","–","–"],0,0,0,0]
  ]
};
