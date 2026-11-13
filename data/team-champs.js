// Team championships (published club figures). Key = season data id. scale = points for the top scoring driver each round (… down to 0).
// Each round a team's best three drivers score; Privateers don't score or take a place. Figures as published by the club.
window.TEAM_CHAMPS = {
  // GT7 Season 4 – club's Season 4 team standings (checked 3 Nov 2026; kept as the sheet – club decision).
  // All three series 15-14-13…0, Privateers scored as a team. Tuesday: Roadsick (Colin_t24, Kezaudio) not scored. Team RSR = MC Motorsport on Teams' Titles.
  "wrx-evo-gr4-s4": {
    scale: 15,
    privateersScore: true,
    note: "Roadsick Racing's drivers weren't scored in this championship, as on the club's sheet.",
    teams: {
      "Mad Turtle Racing": [27, 39, 28, 37, 35, 25, 34, 34, 38, 38],
      "Triple R Motorsport": [38, 24, 33, 28, 24, 38, 33, 34, 25, 31],
      "Privateer": [34, 36, 38, 34, 40, 36, 32, 31, 36, 30]
    }
  },
  "narly-cup-s4": {
    scale: 15,
    privateersScore: true,
    notRun: [6],
    note: "Round 6 was not run.",
    teams: {
      "Triple R Motorsport": [36, 34, 30, 20, 34, 0, 41, 34, 33, 29],
      "Roadsick Racing": [26, 32, 32, 34, 31, 0, 10, 35, 36, 15],
      "Mad Turtle Racing": [25, 23, 16, 21, 32, 0, 30, 27, 25, 37],
      "Team RSR": [11, 20, 4, 19, 6, 0, 9, 5, 5, 6],
      "Privateer": [22, 10, 32, 25, 16, 0, 15, 13, 15, 27]
    }
  },
  "gt3-endurance-s4": {
    scale: 15,
    privateersScore: true,
    teams: {
      "Mad Turtle Racing": [18, 29, 28, 25, 30, 25, 27, 28, 36, 38],
      "Team RSR": [21, 25, 28, 28, 41, 27, 39, 34, 28, 9],
      "Triple R Motorsport": [23, 34, 25, 26, 22, 30, 23, 32, 32, 29],
      "Roadsick Racing": [25, 25, 28, 30, 15, 24, 13, 10, 9, 22],
      "Privateer": [33, 7, 11, 11, 11, 14, 12, 15, 14, 21]
    }
  },
  // GT7 Season 5 – club's Season 5 team standings (checked 4 Nov 2026; kept as the sheet – club decision, except Narly R6 corrected).
  // All three series 15-14-13…0, Privateers scored as a team. Team RNR = MC Motorsport on Teams' Titles.
  "wrx-evo-gr4-s5": {
    scale: 15,
    privateersScore: true,
    note: "Team RNR's Rounds 1–4 are 0 as on the club's sheet.",
    teams: {
      "Roadsick Racing": [36, 28, 15, 35, 29, 42, 35, 27, 40, 25],
      "Mad Turtle Racing": [39, 33, 38, 30, 25, 26, 25, 22, 32, 36],
      "Triple R Motorsport": [24, 25, 23, 13, 25, 19, 20, 26, 20, 21],
      "Team RNR": [0, 0, 0, 0, 4, 3, 3, 0, 0, 0],
      "Privateer": [15, 24, 27, 34, 31, 27, 34, 35, 18, 23]
    }
  },
  "narly-cup-s5": {
    scale: 15,
    privateersScore: true,
    note: "Round 6: the club's sheet had 13 of Roadsick's points (Kezaudio, P-Toots) on Team RNR's row – corrected.",
    teams: {
      "Mad Turtle Racing": [36, 27, 19, 33, 35, 30, 26, 20, 33, 33],
      "Triple R Motorsport": [31, 37, 30, 30, 34, 27, 22, 21, 20, 24],
      "Roadsick Racing": [25, 15, 29, 21, 15, 28, 29, 41, 24, 13],
      "Team RNR": [5, 13, 13, 14, 0, 14, 13, 10, 15, 14],
      "Privateer": [13, 7, 8, 12, 0, 11, 9, 0, 0, 0]
    }
  },
  "gt3-endurance-s5": {
    scale: 15,
    privateersScore: true,
    teams: {
      "Mad Turtle Racing": [36, 35, 33, 42, 40, 37, 33, 32, 34, 38],
      "Team RNR": [24, 22, 23, 27, 26, 28, 29, 23, 33, 20],
      "Triple R Motorsport": [25, 28, 25, 19, 25, 33, 28, 22, 19, 17],
      "Roadsick Racing": [29, 25, 25, 11, 14, 7, 15, 37, 13, 24],
      "Privateer": [6, 10, 11, 15, 5, 12, 9, 5, 0, 6]
    }
  },
  // GT7 Season 6 – club's Season 6 team standings, 8 rounds (checked 3 Nov 2026; kept as the sheet – club decision).
  // All three series 15-14-13…0. Privateers scored as a team in the Tuesday Series and WJF (not the Narly Cup). Team RNR = MC Motorsport on Teams' Titles.
  "wrx-evo-gr4-s6": {
    scale: 15,
    privateersScore: true,
    teams: {
      "Roadsick Racing": [38, 37, 32, 42, 34, 36, 36, 38],
      "Triple R Motorsport": [32, 26, 36, 27, 26, 23, 39, 27],
      "Mad Turtle Racing": [21, 33, 24, 30, 33, 11, 15, 27],
      "Team RNR": [19, 14, 14, 6, 15, 35, 15, 18],
      "Privateer": [9, 4, 8, 0, 6, 0, 0, 0]
    }
  },
  "narly-cup-s6": {
    scale: 15,
    teams: {
      "Roadsick Racing": [42, 40, 15, 41, 27, 29, 29, 41],
      "Mad Turtle Racing": [30, 24, 25, 21, 33, 20, 18, 33],
      "Team RNR": [12, 24, 23, 22, 23, 32, 32, 10],
      "Triple R Motorsport": [25, 11, 29, 15, 9, 11, 20, 8]
    }
  },
  "gt3-endurance-s6": {
    scale: 15,
    privateersScore: true,
    teams: {
      "Mad Turtle Racing": [33, 32, 35, 32, 30, 25, 40, 37],
      "Team RNR": [33, 38, 25, 26, 33, 32, 27, 26],
      "Roadsick Racing": [31, 17, 26, 32, 19, 31, 24, 31],
      "Triple R Motorsport": [17, 23, 19, 14, 26, 16, 19, 19],
      "Privateer": [5, 9, 0, 15, 6, 15, 4, 4]
    }
  },
  // GT7 Season 7 – club's Season 7 team standings (checked 3 Nov 2026; kept as the sheet – club decision).
  // All three series 15-14-13…0, Privateers scored as a team. Team RNR = MC Motorsport on Teams' Titles.
  "wrx-evo-gr4-s7": {
    scale: 15,
    privateersScore: true,
    teams: {
      "Roadsick Racing": [42, 42, 42, 37, 42, 39, 41, 41, 42, 41],
      "Mad Turtle Racing": [29, 33, 30, 31, 27, 32, 21, 25, 27, 24],
      "Triple R Motorsport": [12, 17, 19, 13, 18, 15, 15, 20, 22, 21],
      "Privateer": [9, 7, 8, 11, 18, 19, 28, 24, 8, 13],
      "Team RNR": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  "narly-cup-s7": {
    scale: 15,
    privateersScore: true,
    teams: {
      "Roadsick Racing": [39, 41, 34, 35, 35, 31, 32, 41, 41, 37],
      "Mad Turtle Racing": [32, 34, 38, 37, 38, 42, 40, 31, 34, 36],
      "Triple R Motorsport": [7, 22, 27, 20, 25, 19, 27, 24, 17, 19],
      "Privateer": [21, 8, 6, 18, 15, 18, 15, 9, 13, 7],
      "Team RNR": [6, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  "gt3-endurance-s7": {
    scale: 15,
    privateersScore: true,
    teams: {
      "Mad Turtle Racing": [38, 34, 27, 36, 38, 36, 40, 28, 29, 35],
      "Triple R Motorsport": [27, 32, 30, 26, 36, 28, 22, 21, 29, 30],
      "Team RNR": [26, 29, 29, 30, 18, 20, 21, 35, 24, 29],
      "Roadsick Racing": [14, 10, 28, 12, 17, 24, 24, 21, 18, 15],
      "Privateer": [5, 5, 6, 13, 8, 9, 10, 12, 17, 5]
    }
  },
  // GT7 Season 8 – club's Season 8 team standings (checked 3 Nov 2026; kept as the sheet – club decision).
  // Tuesday (ETC) was a MANUFACTURERS' championship (drivers picked a car and scored for AMG, Ford or BMW): shown in the Season 8
  // standings only, NOT counted on Teams' Titles / Team Records (club). No car-per-driver data, so it can't be checked.
  "wrx-evo-gr4-s8": {
    scale: 9,
    manufacturers: true,
    note: "Season 8 Tuesday was a manufacturers' championship: drivers picked a car and scored for its manufacturer. It does not count towards team records or Teams' Titles.",
    teams: {
      "AMG": [23, 22, 22, 20, 18, 23, 22, 24, 24, 12],
      "Ford": [16, 17, 17, 13, 17, 9, 15, 11, 9, 24],
      "BMW": [6, 6, 6, 12, 10, 13, 8, 10, 12, 9]
    }
  },
  // Narly Cup 15-14-13…0 (Privateers scored as a team; sheet kept – Triple R / Privateer differ from the drivers' results in R1, R3, R6–R9).
  // WJF 18-17-16…0 (Privateers scored as a team; Team RNR = MC Motorsport; sheet kept – Privateer R3 26 vs 29, Roadsick R9 22 vs 26).
  "narly-cup-s8": {
    scale: 15,
    privateersScore: true,
    teams: {
      "Roadsick Racing": [42, 42, 40, 42, 38, 40, 42, 40, 39, 40],
      "Mad Turtle Racing": [28, 31, 33, 30, 37, 35, 30, 31, 35, 35],
      "Triple R Motorsport": [25, 26, 11, 22, 17, 9, 27, 21, 18, 0],
      "Privateer": [10, 6, 21, 11, 0, 8, 6, 7, 7, 0]
    }
  },
  "gt3-endurance-s8": {
    scale: 18,
    privateersScore: true,
    teams: {
      "Team RNR": [33, 50, 42, 27, 49, 44, 37, 42, 49, 49],
      "Mad Turtle Racing": [43, 36, 42, 42, 39, 34, 40, 37, 41, 39],
      "Gerbil Racing Team": [21, 18, 21, 28, 22, 33, 32, 32, 25, 34],
      "Roadsick Racing": [40, 24, 10, 32, 20, 25, 22, 10, 22, 8],
      "Triple R Motorsport": [20, 13, 24, 22, 20, 10, 18, 15, 15, 24],
      "Privateer": [14, 30, 26, 17, 20, 19, 19, 14, 9, 7]
    }
  },
  // GT7 Season 9 – club's Season 9 team championship standings (checked 3 Nov 2026; kept as the sheet – club decision).
  // Tuesday and Narly Cup 15-14-13…0, WJF 18-17-16…0. Privateers scored only in the WJF Trophy. All-zero rows with no starters left out
  // (Tuesday MC, Gerbil, Privateer; Narly MC, Privateer). WJF R3: only six classified finishers scored (the rest were on 5 points).
  "wrx-evo-gr4-s9": {
    scale: 15,
    teams: {
      "Roadsick Racing": [37, 42, 39, 37, 36, 41, 39, 35, 37, 37],
      "Mad Turtle Racing": [38, 33, 36, 38, 39, 34, 36, 40, 36, 38],
      "Triple R Motorsport": [9, 17, 17, 17, 17, 17, 17, 9, 15, 17]
    }
  },
  "narly-cup-s9": {
    scale: 15,
    teams: {
      "Roadsick Racing": [40, 42, 42, 42, 40, 42, 40, 42, 40, 42],
      "Mad Turtle Racing": [32, 31, 30, 29, 31, 32, 35, 33, 35, 30],
      "Gerbil Racing Team": [21, 14, 17, 18, 24, 23, 21, 17, 11, 16],
      "Triple R Motorsport": [21, 23, 25, 10, 15, 13, 9, 18, 24, 17]
    }
  },
  "gt3-endurance-s9": {
    scale: 18,
    privateersScore: true,
    note: "Round 3: only the six classified finishers scored team points.",
    teams: {
      "Mad Turtle Racing": [40, 38, 16, 38, 47, 38, 42, 51, 51, 44],
      "MC Motorsport": [44, 29, 0, 42, 44, 48, 48, 31, 33, 17],
      "Gerbil Racing Team": [28, 28, 32, 24, 28, 33, 36, 33, 34, 33],
      "Triple R Motorsport": [22, 17, 28, 19, 24, 21, 24, 28, 24, 34],
      "Roadsick Racing": [22, 43, 17, 27, 13, 16, 6, 13, 19, 22],
      "Privateer": [12, 0, 0, 15, 0, 0, 0, 0, 0, 0]
    }
  },
  // GT7 Season 10 – club's "Trailblazers Season 10 Team Championship Standings" sheet (checked 3 Nov 2026; kept as the sheet – club decision,
  // except Tuesday Round 6: the sheet's 27 sat on Gerbil's row – no Gerbil driver raced that round, so it is Triple R's (club, 3 Nov)).
  // Tuesday 18-17-16…0, Narly Cup 15-14-13…0, WJF 18-17-16…0. Privateers scored as a team in all three series. Narly MC row (all 0, no starters) left out.
  "wrx-evo-gr4-s10": {
    scale: 18,
    privateersScore: true,
    note: "Round 6: the club's sheet had Triple R's 27 points on Gerbil's row (no Gerbil driver raced that round) – corrected.",
    teams: {
      "Roadsick Racing": [39, 44, 43, 40, 42, 45, 48, 38, 38, 45],
      "Mad Turtle Racing": [44, 42, 42, 44, 45, 42, 24, 45, 43, 42],
      "MC Motorsport": [30, 28, 33, 35, 29, 18, 32, 18, 18, 18],
      "Triple R Motorsport": [28, 23, 28, 21, 27, 27, 19, 13, 27, 21],
      "Privateer": [15, 17, 8, 11, 0, 11, 12, 11, 0, 0],
      "Gerbil Racing Team": [0, 7, 11, 14, 0, 0, 8, 8, 9, 0]
    }
  },
  "narly-cup-s10": {
    scale: 15,
    privateersScore: true,
    teams: {
      "Roadsick Racing": [41, 37, 33, 36, 39, 28, 34, 41, 36, 36],
      "Mad Turtle Racing": [29, 38, 36, 39, 33, 35, 35, 32, 39, 37],
      "Triple R Motorsport": [25, 15, 26, 22, 18, 9, 8, 8, 8, 8],
      "Privateer": [19, 19, 15, 0, 15, 12, 15, 18, 9, 11],
      "Gerbil Racing Team": [3, 5, 4, 8, 5, 0, 7, 6, 7, 7]
    }
  },
  "gt3-endurance-s10": {
    scale: 18,
    privateersScore: true,
    teams: {
      "Mad Turtle Racing": [46, 42, 47, 46, 45, 44, 29, 45, 48, 41],
      "MC Motorsport": [25, 46, 29, 45, 43, 43, 31, 33, 30, 30],
      "Gerbil Racing Team": [27, 28, 24, 18, 31, 31, 36, 31, 33, 38],
      "Triple R Motorsport": [28, 18, 27, 30, 17, 22, 27, 9, 17, 19],
      "Roadsick Racing": [19, 25, 33, 22, 14, 16, 20, 25, 15, 15],
      "Privateer": [23, 9, 8, 7, 6, 0, 22, 7, 0, 7]
    }
  },
  // GT7 Season 18 (current) – club's "Trailblazers S18 Team Championship Standings" after Round 4 (checked 3 Nov 2026).
  // Keyed by the current-season ids; in progress, so not counted on the Teams' Titles page until the season is final.
  "wrx-evo-gr4": {
    scale: 9,
    teams: {
      "Roadsick Racing": [14, 24, 16, 24, 24, 24],
      "Triple R Motorsport": [19, 15, 15, 12, 11, 11],
      "Mad Turtle Racing": [12, 6, 14, 8, 9, 7]
    }
  },
  "narly-cup": {
    scale: 12,
    teams: {
      "Roadsick Racing": [30, 33, 23, 26, 33, 33],
      "Mad Turtle Racing": [24, 23, 26, 31, 23, 24],
      "Triple R Motorsport": [13, 14, 19, 5, 11, 5],
      "Gerbil Racing Team": [5, 5, 4, 6, 5, 6]
    }
  },
  "gt3-endurance": {
    scale: 15,
    teams: {
      "Mad Turtle Racing": [36, 33, 31, 39, 29, 35],
      "Triple R Motorsport": [27, 31, 36, 17, 26, 12],
      "MC Motorsport": [14, 29, 15, 15, 25, 37],
      "Gerbil Racing Team": [16, 12, 0, 23, 13, 21],
      "Roadsick Racing": [21, 9, 10, 11, 24, 0]
    }
  },
  // GT7 Season 11 – club's "Trailblazers Season 11 Team Championship Standings" sheet (checked 3 Nov 2026; kept as the sheet – club decision).
  // Tuesday and Narly Cup 15-14-13…0, WJF 18-17-16…0. Privateers scored as a team in the Tuesday Series (WJF Privateer row all 0 – left out).
  "wrx-evo-gr4-s11": {
    scale: 15,
    privateersScore: true,
    teams: {
      "Roadsick Racing": [42, 42, 42, 39, 40, 37, 36, 40, 38, 39],
      "Mad Turtle Racing": [31, 33, 31, 36, 35, 38, 39, 33, 37, 35],
      "Triple R Motorsport": [11, 17, 17, 7, 8, 8, 0, 17, 0, 18],
      "Gerbil Racing Team": [8, 7, 7, 8, 7, 0, 8, 8, 9, 7],
      "Privateer": [7, 0, 13, 9, 9, 9, 9, 7, 0, 0]
    }
  },
  "narly-cup-s11": {
    scale: 15,
    teams: {
      "Roadsick Racing": [42, 38, 41, 42, 40, 42, 41, 38, 42, 37],
      "Mad Turtle Racing": [31, 37, 33, 31, 35, 33, 34, 36, 33, 37],
      "Triple R Motorsport": [19, 17, 18, 11, 9, 0, 0, 18, 9, 10],
      "Gerbil Racing Team": [7, 7, 0, 0, 8, 9, 0, 7, 8, 8]
    }
  },
  "gt3-endurance-s11": {
    scale: 18,
    teams: {
      "MC Motorsport": [48, 35, 49, 38, 49, 48, 48, 18, 45, 43],
      "Mad Turtle Racing": [36, 41, 24, 47, 40, 45, 35, 48, 39, 39],
      "Gerbil Racing Team": [28, 44, 18, 33, 36, 32, 34, 38, 37, 34],
      "Triple R Motorsport": [23, 30, 39, 22, 24, 25, 18, 12, 8, 16],
      "Roadsick Racing": [30, 0, 26, 16, 7, 6, 30, 0, 21, 18]
    }
  },
  // GT7 Season 12 – club's "Trailblazers Season 12 Team Championship Standings" sheet (checked 3 Nov 2026; kept as the sheet – club decision).
  // Tuesday 15-14-13…0, Narly Cup and WJF 18-17-16…0. Privateers scored as a team in the Narly Cup only (RSR_Robbo-Sport a Privateer in S12).
  "wrx-evo-gr4-s12": {
    scale: 15,
    teams: {
      "Mad Turtle Racing": [40, 40, 36, 39, 40, 39, 36, 32, 39, 40],
      "Roadsick Racing": [33, 29, 38, 36, 35, 34, 39, 41, 36, 35],
      "Triple R Motorsport": [19, 30, 10, 17, 17, 19, 9, 19, 9, 17],
      "Gerbil Racing Team": [7, 6, 0, 7, 7, 7, 8, 0, 8, 7]
    }
  },
  "narly-cup-s12": {
    scale: 18,
    privateersScore: true,
    teams: {
      "Roadsick Racing": [48, 43, 46, 45, 44, 46, 46, 50, 50, 51],
      "Mad Turtle Racing": [44, 37, 35, 39, 40, 35, 45, 42, 42, 42],
      "Triple R Motorsport": [31, 13, 29, 29, 14, 16, 14, 24, 13, 23],
      "Gerbil Racing Team": [9, 15, 16, 20, 20, 20, 11, 10, 11, 10],
      "MC Motorsport": [6, 18, 17, 17, 17, 0, 0, 0, 0, 0],
      "Privateer": [18, 9, 0, 0, 0, 18, 0, 0, 0, 0]
    }
  },
  "gt3-endurance-s12": {
    scale: 18,
    teams: {
      "Mad Turtle Racing": [37, 51, 35, 41, 45, 27, 41, 40, 39, 44],
      "MC Motorsport": [41, 11, 48, 45, 34, 43, 41, 41, 43, 48],
      "Gerbil Racing Team": [30, 34, 31, 38, 30, 26, 38, 41, 19, 28],
      "Triple R Motorsport": [20, 34, 27, 26, 19, 28, 11, 28, 25, 21],
      "Roadsick Racing": [37, 20, 15, 0, 37, 32, 19, 6, 30, 21]
    }
  },
  // GT7 Season 13 – club's "Trailblazers Season 13 Team Championship Standings" sheet (checked 3 Nov 2026 – matches the drivers' results exactly
  // once Luke_GT13 is a Privateer). Tuesday and Narly Cup 15-14-13…0, WJF 18-17-16…0. Privateers scored as a team (Narly Cup, WJF). Narly R2 not run.
  "wrx-evo-gr4-s13": {
    scale: 15,
    teams: {
      "Roadsick Racing": [34, 34, 38, 39, 40, 36, 35, 33, 38, 36],
      "Mad Turtle Racing": [33, 32, 30, 36, 34, 38, 39, 42, 37, 38],
      "Triple R Motorsport": [32, 33, 31, 9, 10, 10, 10, 9, 0, 10],
      "Gerbil Racing Team": [0, 6, 0, 8, 8, 8, 0, 0, 0, 0]
    }
  },
  "narly-cup-s13": {
    scale: 15,
    privateersScore: true,
    note: "Round 2 was not run.",
    notRun: [2],
    teams: {
      "Roadsick Racing": [39, 0, 40, 41, 39, 42, 42, 42, 42, 39],
      "Mad Turtle Racing": [36, 0, 35, 32, 36, 31, 33, 31, 33, 34],
      "Triple R Motorsport": [24, 0, 16, 11, 0, 19, 0, 11, 0, 11],
      "Gerbil Racing Team": [6, 0, 8, 8, 9, 7, 9, 7, 9, 8],
      "Privateer": [0, 0, 0, 0, 0, 0, 0, 8, 0, 0]
    }
  },
  "gt3-endurance-s13": {
    scale: 18,
    privateersScore: true,
    teams: {
      "MC Motorsport": [45, 41, 46, 43, 47, 50, 39, 48, 45, 47],
      "Mad Turtle Racing": [45, 49, 39, 41, 46, 35, 41, 44, 42, 37],
      "Gerbil Racing Team": [28, 29, 36, 32, 32, 29, 23, 32, 20, 30],
      "Roadsick Racing": [25, 23, 20, 17, 0, 25, 32, 10, 18, 17],
      "Triple R Motorsport": [22, 13, 15, 10, 10, 11, 0, 9, 0, 8],
      "Privateer": [0, 6, 0, 7, 0, 0, 0, 7, 10, 11]
    }
  },
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

// Manufacturer colours (Season 8 Tuesday): two-colour bars where needed.
window.MANUFACTURER_COLOURS = {
  "AMG": "#C3C8CF",
  "Ford": "linear-gradient(180deg, #1F5FD0 50%, #FFFFFF 50%)",
  "BMW": "linear-gradient(180deg, #1C69D4 50%, #E22718 50%)"
};
