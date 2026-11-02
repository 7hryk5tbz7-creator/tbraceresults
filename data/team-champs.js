// Team championships (published club figures). Key = season data id. scale = points for the top scoring driver each round (… down to 0).
// Each round a team's best three drivers score; Privateers don't score or take a place. Figures as published by the club.
window.TEAM_CHAMPS = {
  // GT7 Season 14 – club's "Trailblazers Season 14 Team Championship Standings" sheet (checked 3 Nov 2026; kept as the sheet – club decision).
  // Tuesday 12-11-10…0, Narly Cup and WJF 15-14-13…0 (WJF Round 9 matches 18-17-16…). In S14 Privateers took points places and
  // scored together as "Privateer" (Narly Cup, WJF) – shown in the season's standings, not counted on the Teams' Titles page.
  "wrx-evo-gr4-s14": {
    scale: 12,
    teams: {
      "Mad Turtle Racing": [28, 33, 29, 27, 32, 33, 28, 33, 32, 31],
      "Roadsick Racing": [27, 21, 24, 30, 25, 23, 29, 8, 25, 26],
      "Triple R Motorsport": [8, 9, 10, 6, 0, 7, 6, 9, 0, 0]
    }
  },
  "narly-cup-s14": {
    scale: 15,
    privateersScore: true,
    teams: {
      "Roadsick Racing": [37, 39, 25, 37, 38, 42, 39, 39, 42, 37],
      "Mad Turtle Racing": [35, 36, 39, 38, 37, 33, 36, 36, 31, 38],
      "Triple R Motorsport": [20, 9, 11, 9, 17, 9, 9, 13, 17, 0],
      "Gerbil Racing Team": [7, 8, 0, 8, 7, 8, 0, 8, 8, 9],
      "Privateer": [0, 0, 0, 0, 0, 0, 8, 9, 7, 8]
    }
  },
  "gt3-endurance-s14": {
    scale: 15,
    privateersScore: true,
    note: "Round 9 points on the club's sheet follow an 18-17-16… scale.",
    teams: {
      "MC Motorsport": [34, 42, 38, 39, 36, 38, 38, 38, 40, 27],
      "Mad Turtle Racing": [31, 27, 37, 34, 36, 29, 29, 31, 47, 35],
      "Gerbil Racing Team": [22, 26, 13, 17, 14, 18, 13, 20, 24, 22],
      "Roadsick Racing": [19, 8, 9, 18, 26, 25, 25, 3, 12, 7],
      "Privateer": [0, 0, 0, 0, 0, 0, 10, 22, 27, 14],
      "Triple R Motorsport": [13, 7, 8, 6, 5, 0, 5, 5, 11, 9]
    }
  },
  // GT7 Season 15 – club's "Trailblazers S15 Team Championship Standings" sheet (checked 3 Nov 2026; kept as the sheet – club decision).
  // Narly Cup scored 15-14-13…0 this season. The sheet's "Unofficial Overall Championship" table is not used.
  "wrx-evo-gr4-s15": {
    scale: 9,
    note: "Round 3 was not run.",
    notRun: [3],
    teams: {
      "Roadsick Racing": [22, 21, 0, 21, 24, 21, 23, 22, 24, 23],
      "Mad Turtle Racing": [15, 18, 0, 14, 14, 17, 15, 17, 15, 15],
      "Triple R Motorsport": [7, 3, 0, 7, 4, 4, 4, 0, 0, 4]
    }
  },
  "narly-cup-s15": {
    scale: 15,
    teams: {
      "Mad Turtle Racing": [35, 38, 36, 32, 35, 36, 39, 36, 37, 37],
      "Roadsick Racing": [38, 34, 39, 38, 40, 28, 24, 39, 37, 37],
      "Triple R Motorsport": [26, 8, 8, 22, 0, 11, 11, 0, 0, 10],
      "Gerbil Racing Team": [6, 7, 9, 7, 0, 9, 10, 9, 10, 8],
      "MC Motorsport": [0, 12, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  "gt3-endurance-s15": {
    scale: 15,
    note: "Round 6 was not run.",
    notRun: [6],
    teams: {
      "MC Motorsport": [34, 36, 37, 42, 39, 0, 42, 39, 42, 40],
      "Mad Turtle Racing": [29, 25, 34, 26, 35, 0, 33, 21, 31, 35],
      "Triple R Motorsport": [24, 23, 16, 26, 18, 0, 15, 8, 16, 13],
      "Gerbil Racing Team": [16, 22, 10, 14, 0, 0, 24, 21, 19, 13],
      "Roadsick Racing": [16, 13, 21, 9, 7, 0, 0, 28, 9, 9]
    }
  },
  // GT7 Season 16 – club's "Trailblazers S16 Team Championship Standings" sheet (checked 3 Nov 2026; kept as the sheet – club decision).
  // Tuesday was scored 12-11-10…0 this season. Gerbil had no Tuesday starters (0 on the sheet) – left out.
  "wrx-evo-gr4-s16": {
    scale: 12,
    teams: {
      "Roadsick Racing": [31, 33, 28, 30, 33, 31, 31, 33, 33, 29],
      "Mad Turtle Racing": [20, 22, 27, 20, 17, 24, 26, 23, 22, 18],
      "Triple R Motorsport": [17, 13, 13, 13, 13, 13, 6, 12, 8, 16]
    }
  },
  "narly-cup-s16": {
    scale: 12,
    note: "Round 8 Triple R points include MoldyBox321 (a Privateer) as on the club's sheet.",
    teams: {
      "Roadsick Racing": [32, 33, 30, 28, 33, 33, 29, 31, 33, 33],
      "Mad Turtle Racing": [24, 24, 26, 24, 22, 22, 28, 22, 16, 24],
      "Triple R Motorsport": [12, 11, 12, 15, 13, 11, 14, 19, 8, 9],
      "Gerbil Racing Team": [4, 4, 4, 5, 4, 6, 4, 0, 6, 6]
    }
  },
  "gt3-endurance-s16": {
    scale: 15,
    note: "Round 9 was not run.",
    notRun: [9],
    teams: {
      "MC Motorsport": [42, 39, 42, 36, 42, 42, 41, 41, 0, 42],
      "Mad Turtle Racing": [31, 25, 27, 29, 26, 23, 30, 26, 0, 15],
      "Triple R Motorsport": [26, 22, 16, 34, 29, 25, 22, 20, 0, 25],
      "Gerbil Racing Team": [12, 12, 21, 15, 17, 23, 17, 17, 0, 12],
      "Roadsick Racing": [6, 21, 11, 0, 0, 4, 7, 13, 0, 23]
    }
  },
  // GT7 Season 17 – club's "Trailblazers S17 Team Championship Standings" sheet (checked 2–3 Nov 2026; kept as the sheet – club decision).
  "wrx-evo-gr4-s17": {
    scale: 9,
    teams: {
      "Roadsick Racing": [23, 23, 24, 23, 24, 22, 24, 24, 24, 23],
      "Triple R Motorsport": [12, 6, 5, 12, 9, 13, 11, 11, 11, 7],
      "Mad Turtle Racing": [10, 16, 10, 4, 6, 10, 7, 9, 9, 14]
    }
  },
  "narly-cup-s17": {
    scale: 12,
    teams: {
      "Roadsick Racing": [33, 33, 33, 27, 32, 30, 32, 33, 32, 32],
      "Mad Turtle Racing": [24, 22, 24, 30, 25, 22, 25, 23, 25, 25],
      "Triple R Motorsport": [13, 13, 11, 0, 0, 19, 9, 0, 6, 5],
      "Gerbil Racing Team": [5, 0, 0, 0, 6, 4, 6, 7, 5, 6]
    }
  },
  "gt3-endurance-s17": {
    scale: 15,
    note: "Round 3 was not run.",
    notRun: [3],
    teams: {
      "MC Motorsport": [42, 40, 0, 38, 37, 37, 41, 42, 37, 42],
      "Mad Turtle Racing": [30, 27, 0, 37, 30, 34, 31, 30, 38, 33],
      "Triple R Motorsport": [19, 20, 0, 22, 6, 0, 26, 20, 7, 17],
      "Gerbil Racing Team": [10, 6, 0, 12, 8, 24, 12, 12, 17, 13],
      "Roadsick Racing": [18, 21, 0, 5, 24, 10, 0, 6, 0, 0]
    }
  }
};
