export type Team = {
  conference: number;
  inPlayoffs: boolean;
  teamID: number;
  teamName: string;
  teamCode: string;
  previousRank: number; // *optional
  played: number;
  points: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  lastFive: string;
  cleansheets: number;
};

export const teams: Team[] = [
  /**
   * Conference 1
   */
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 101,
    teamName: "Chemical",
    teamCode: "CHE",
    previousRank: 0,
    played: 4,
    points: 1,
    wins: 0,
    draws: 1,
    losses: 3,
    goalsFor: 14,
    goalsAgainst: 42,
    lastFive: "LLLD",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 102,
    teamName: "Civil 1",
    teamCode: "CV1",
    previousRank: 0,
    played: 4,
    points: 12,
    wins: 4,
    draws: 0,
    losses: 0,
    goalsFor: 43,
    goalsAgainst: 7,
    lastFive: "WWWW",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 103,
    teamName: "Electrical B",
    teamCode: "ELB",
    previousRank: 0,
    played: 4,
    points: 9,
    wins: 3,
    draws: 0,
    losses: 1,
    goalsFor: 25,
    goalsAgainst: 14,
    lastFive: "WLWW",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 104,
    teamName: "Mechanical",
    teamCode: "MEC",
    previousRank: 0,
    played: 4,
    points: 6,
    wins: 2,
    draws: 0,
    losses: 2,
    goalsFor: 23,
    goalsAgainst: 31,
    lastFive: "LLWW",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 105,
    teamName: "Software",
    teamCode: "SFT",
    previousRank: 0,
    played: 4,
    points: 1,
    wins: 0,
    draws: 1,
    losses: 3,
    goalsFor: 9,
    goalsAgainst: 20,
    lastFive: "LLLD",
    cleansheets: 0,
  },

  /**
   * Conference 2
   */
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 201,
    teamName: "Biomed",
    teamCode: "BIO",
    previousRank: 0,
    played: 3,
    points: 4,
    wins: 1,
    draws: 1,
    losses: 1,
    goalsFor: 8,
    goalsAgainst: 7,
    lastFive: "DWL",
    cleansheets: 0,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 202,
    teamName: "Civil 2",
    teamCode: "CV2",
    previousRank: 0,
    played: 3,
    points: 2,
    wins: 0,
    draws: 2,
    losses: 1,
    goalsFor: 11,
    goalsAgainst: 12,
    lastFive: "DLD",
    cleansheets: 0,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 203,
    teamName: "Electrical A",
    teamCode: "ELA",
    previousRank: 0,
    played: 3,
    points: 4,
    wins: 1,
    draws: 1,
    losses: 1,
    goalsFor: 9,
    goalsAgainst: 11,
    lastFive: "DLW",
    cleansheets: 0,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 204,
    teamName: "IT",
    teamCode: "ITE",
    previousRank: 0,
    played: 3,
    points: 5,
    wins: 1,
    draws: 2,
    losses: 0,
    goalsFor: 14,
    goalsAgainst: 12,
    lastFive: "DWD",
    cleansheets: 0,
  },
];
