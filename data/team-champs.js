// Team championships (published club figures). Key = season data id. scale = points for the top scoring driver each round (… down to 0).
// Each round a team's best three drivers score; Privateers don't score or take a place. Figures as published by the club.
window.TEAM_CHAMPS = {
  // GT7 Season 17 – club's "Trailblazers S17 Team Championship Standings" sheet (checked 2–3 Nov 2026; kept as the sheet – club decision).
  "wrx-evo-gr4-s17": {
    scale: 9,
    note: "Round 1 Triple R points include MoldyBox321 (a Privateer) as on the club's sheet.",
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
