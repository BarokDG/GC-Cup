import { createNull } from "typescript";

export type Match = {
  state: string;
  isPlayoffs: boolean;
  conference: number;
  matchID: string;
  teams: {
    team1: number;
    team2: number;
  };
  schedule: Date;
  score: {
    team1: number | null;
    team2: number | null;
  };
  events: {
    team1: MatchEvent[];
    team2: MatchEvent[];
  };
};

type MatchEvent = {
  name: string;
  event: String;
  assist?: string;
  minute?: Date;
};

export const matches: Match[] = [
  /**
   * Conference 1
   */
  {
    state: "ft",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 101,
      team2: 102,
    },
    schedule: new Date("May 18, 2022 14:00"),
    score: {
      team1: 2,
      team2: 15,
    },
    events: {
      team1: [
        {
          name: "Olana",
          event: "goal",
        },
        {
          name: "Haile",
          event: "goal",
        },
      ],
      team2: [
        {
          name: "Ermiyas",
          event: "goal",
        },
        {
          name: "Robel",
          event: "goal",
        },
        {
          name: "Robel",
          event: "goal",
        },
        {
          name: "Robel",
          event: "goal",
        },
        {
          name: "Nati G.",
          event: "goal",
        },
        {
          name: "Nati G.",
          event: "goal",
        },
        {
          name: "Nati G.",
          event: "goal",
        },
        {
          name: "Nati G.",
          event: "goal",
        },
        {
          name: "Nati G.",
          event: "goal",
        },
        {
          name: "Henock",
          event: "goal",
        },
        {
          name: "Sewnet",
          event: "goal",
        },
        {
          name: "Bruk",
          event: "goal",
        },
        {
          name: "Bruk",
          event: "goal",
        },
        {
          name: "Nati M.",
          event: "goal",
        },
        {
          name: "Nati M.",
          event: "goal",
        },
      ],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 103,
      team2: 104,
    },
    schedule: new Date("May 19, 2022 16:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 101,
      team2: 105,
    },
    schedule: new Date("May 24, 2022 8:30"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 102,
      team2: 103,
    },
    schedule: new Date("May 24, 2022 10:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 103,
      team2: 105,
    },
    schedule: new Date("May 26, 2022 14:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 102,
      team2: 104,
    },
    schedule: new Date("May 26, 2022 16:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 102,
      team2: 105,
    },
    schedule: new Date("May 28, 2022 14:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 101,
      team2: 104,
    },
    schedule: new Date("May 28, 2022 16:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 104,
      team2: 105,
    },
    schedule: new Date("May 31, 2022 14:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 101,
      team2: 104,
    },
    schedule: new Date("May 31, 2022 16:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },

  /**
   * Conference 2
   */
  {
    state: "ft",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 201,
      team2: 202,
    },
    schedule: new Date("May 18, 2022 16:00"),
    score: {
      team1: 2,
      team2: 2,
    },
    events: {
      team1: [
        {
          name: "Ermisha",
          event: "goal",
        },
        {
          name: "Ermisha",
          event: "goal",
        },
      ],
      team2: [
        {
          name: "Robel",
          event: "goal",
        },
        {
          name: "Ali",
          event: "goal",
        },
      ],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 203,
      team2: 204,
    },
    schedule: new Date("May 19, 2022 14:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 204,
      team2: 205,
    },
    schedule: new Date("May 23, 2022 14:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 201,
      team2: 203,
    },
    schedule: new Date("May 23, 2022 16:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 201,
      team2: 205,
    },
    schedule: new Date("May 25, 2022 14:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 202,
      team2: 203,
    },
    schedule: new Date("May 25, 2022 16:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 202,
      team2: 205,
    },
    schedule: new Date("May 27, 2022 14:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 201,
      team2: 203,
    },
    schedule: new Date("May 27, 2022 16:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 203,
      team2: 205,
    },
    schedule: new Date("May 29, 2022 14:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
  {
    state: "sc",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 202,
      team2: 204,
    },
    schedule: new Date("May 29, 2022 16:00"),
    score: {
      team1: null,
      team2: null,
    },
    events: {
      team1: [],
      team2: [],
    },
  },
];
