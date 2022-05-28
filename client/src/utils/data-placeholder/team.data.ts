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
    played: 1,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 1,
    goalsFor: 2,
    goalsAgainst: 15,
    lastFive: "L",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 102,
    teamName: "Civil 1",
    teamCode: "CV1",
    previousRank: 0,
    played: 3,
    points: 9,
    wins: 3,
    draws: 0,
    losses: 0,
    goalsFor: 38,
    goalsAgainst: 5,
    lastFive: "WWW",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 103,
    teamName: "Electrical B",
    teamCode: "ELB",
    previousRank: 0,
    played: 3,
    points: 6,
    wins: 2,
    draws: 0,
    losses: 1,
    goalsFor: 14,
    goalsAgainst: 9,
    lastFive: "WLW",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 104,
    teamName: "Mechanical",
    teamCode: "MEC",
    previousRank: 0,
    played: 3,
    points: 3,
    wins: 1,
    draws: 0,
    losses: 2,
    goalsFor: 10,
    goalsAgainst: 27,
    lastFive: "LLW",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 105,
    teamName: "Software",
    teamCode: "SFT",
    previousRank: 0,
    played: 2,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 2,
    goalsFor: 4,
    goalsAgainst: 12,
    lastFive: "LL",
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
    played: 2,
    points: 4,
    wins: 1,
    draws: 1,
    losses: 0,
    goalsFor: 6,
    goalsAgainst: 3,
    lastFive: "DW",
    cleansheets: 0,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 202,
    teamName: "Civil 2",
    teamCode: "CV2",
    previousRank: 0,
    played: 2,
    points: 1,
    wins: 0,
    draws: 1,
    losses: 1,
    goalsFor: 5,
    goalsAgainst: 6,
    lastFive: "DL",
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
    played: 1,
    points: 1,
    wins: 0,
    draws: 1,
    losses: 0,
    goalsFor: 4,
    goalsAgainst: 4,
    lastFive: "D",
    cleansheets: 0,
  },
];
