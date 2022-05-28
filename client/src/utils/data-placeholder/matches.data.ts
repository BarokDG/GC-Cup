export type Match = {
  state: string;
  isPlayoffs: boolean;
  conference: number;
  matchID: string;
  teams: {
    team1: number;
    team2: number;
  };
  schedule: string;
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
    schedule: new Date("May 18, 2022 14:00").toString(),
    score: {
      team1: 2,
      team2: 15,
    },
    events: {
      team1: [
        {
          name: "Olana",
          event: "goal",
          assist: "Yoni",
        },
        {
          name: "Haile",
          event: "goal",
          assist: "Olana",
        },
      ],
      team2: [
        {
          name: "Ermiyas",
          event: "goal",
          assist: "Robel",
        },
        {
          name: "Robel",
          event: "goal",
          assist: "Nati G",
        },
        {
          name: "Robel",
          event: "goal",
          assist: "Nati G",
        },
        {
          name: "Robel",
          event: "goal",
          assist: "Nati G",
        },
        {
          name: "Nati G.",
          event: "goal",
          assist: "Robel",
        },
        {
          name: "Nati G.",
          event: "goal",
          assist: "Robel",
        },
        {
          name: "Nati G.",
          event: "goal",
          assist: "Robel",
        },
        {
          name: "Nati G.",
          event: "goal",
          assist: "Biruk",
        },
        {
          name: "Nati G.",
          event: "goal",
          assist: "Biruk",
        },
        {
          name: "Henock",
          event: "goal",
          assist: "Nati G",
        },
        {
          name: "Sewnet",
          event: "goal",
          assist: "Nati M.",
        },
        {
          name: "Biruk",
          event: "goal",
          assist: "Nati M.",
        },
        {
          name: "Biruk",
          event: "goal",
          assist: "Nati M.",
        },
        {
          name: "Nati M.",
          event: "goal",
          assist: "Yoni M.",
        },
        {
          name: "Nati M.",
          event: "goal",
          assist: "Yoni E.",
        },
      ],
    },
  },
  {
    state: "ft",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 103,
      team2: 104,
    },
    schedule: new Date("May 19, 2022 16:00").toString(),
    score: {
      team1: 7,
      team2: 2,
    },
    events: {
      team1: [
        {
          name: "Biniyam",
          event: "goal",
          assist: "Jano",
        },
        {
          name: "Birhanu",
          event: "goal",
          assist: "Mame",
        },
        {
          name: "Biniyam",
          event: "goal",
          assist: "Kassa",
        },
        {
          name: "Gech",
          event: "goal",
          assist: "Bultum",
        },
        {
          name: "Chacha",
          event: "og",
        },
        {
          name: "Bultum",
          event: "goal",
          assist: "Jano",
        },
        {
          name: "Biniyam",
          event: "pm",
        },
        {
          name: "Biniyam",
          event: "goal",
          assist: "Mame",
        },
      ],
      team2: [
        {
          name: "Josi",
          event: "goal",
          assist: "Chacha",
        },
        {
          name: "Chacha",
          event: "goal",
        },
      ],
    },
  },
  {
    state: "ft",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 102,
      team2: 103,
    },
    schedule: new Date("May 23, 2022 16:00").toString(),
    score: {
      team1: 6,
      team2: 2,
    },
    events: {
      team1: [
        {
          name: "Robel",
          event: "goal",
          assist: "Biruk",
        },
        {
          name: "Nati G",
          event: "goal",
          assist: "Robel",
        },
        {
          name: "Nati M.",
          event: "goal",
        },
        {
          name: "Nati G",
          event: "goal",
          assist: "Robel",
        },
        {
          name: "Nati G",
          event: "goal",
          assist: "Robel",
        },
        {
          name: "Robel",
          event: "goal",
          assist: "Biruk",
        },
      ],
      team2: [
        {
          name: "Jano",
          event: "goal",
          assist: "Bultum",
        },
        {
          name: "Birhanu",
          event: "goal",
        },
      ],
    },
  },
  {
    state: "ft",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 102,
      team2: 104,
    },
    schedule: new Date("May 26, 2022 14:00").toString(),
    score: {
      team1: 17,
      team2: 1,
    },
    events: {
      team1: [
        {
          name: "Abdisa",
          event: "og",
        },
        {
          name: "Mesay",
          event: "og",
        },
        {
          name: "Nati G.",
          event: "goal",
          assist: "Nati M.",
        },
        {
          name: "Nati G.",
          event: "goal",
          assist: "Nati M.",
        },
        {
          name: "Nati G.",
          event: "goal",
          assist: "Nati M.",
        },
        {
          name: "Nati G.",
          event: "goal",
          assist: "Yoni E.",
        },
        {
          name: "Nati M.",
          event: "goal",
          assist: "Yoni E.",
        },
        {
          name: "Nati M.",
          event: "goal",
          assist: "Nati G.",
        },
        {
          name: "Nati M.",
          event: "goal",
          assist: "Nati G.",
        },
        {
          name: "Yoni M.",
          event: "goal",
          assist: "Nati G.",
        },
        {
          name: "Yoni M.",
          event: "goal",
          assist: "Nati G.",
        },
        {
          name: "Henok",
          event: "goal",
          assist: "Biruk",
        },
        {
          name: "Henok",
          event: "goal",
          assist: "Biruk",
        },
        {
          name: "Biruk",
          event: "goal",
          assist: "Henok",
        },
        {
          name: "Yoni E.",
          event: "goal",
          assist: "Nati G.",
        },
        {
          name: "Sewnet",
          event: "goal",
          assist: "Yoni M.",
        },
        {
          name: "Kibrom",
          event: "goal",
          assist: "Nati G.",
        },
      ],
      team2: [
        {
          name: "Chacha",
          event: "goal",
          assist: "Kira",
        },
      ],
    },
  },
  {
    state: "ft",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 103,
      team2: 105,
    },
    schedule: new Date("May 26, 2022 16:00").toString(),
    score: {
      team1: 5,
      team2: 1,
    },
    events: {
      team1: [
        {
          name: "Birhanu",
          event: "goal",
          assist: "Fitsum",
        },
        {
          name: "Birhanu",
          event: "goal",
          assist: "Fitsum",
        },
        {
          name: "Birhanu",
          event: "goal",
          assist: "Samuel",
        },
        {
          name: "Bultum",
          event: "goal",
          assist: "Biniyam",
        },
        {
          name: "Dawit",
          event: "goal",
          assist: "Girmachew",
        },
      ],
      team2: [
        {
          name: "Yididya",
          event: "goal",
          assist: "Ewnet",
        },
      ],
    },
  },
  {
    state: "ft",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 104,
      team2: 105,
    },
    schedule: new Date("May 28, 2022 9:00").toString(),
    score: {
      team1: 7,
      team2: 3,
    },
    events: {
      team1: [
        {
          name: "Raji",
          event: "goal",
          assist: "Chacha",
        },
        {
          name: "Jossi",
          event: "goal",
          assist: "Kira",
        },
        {
          name: "Chacha",
          event: "goal",
          assist: "Kira",
        },
        {
          name: "Chacha",
          event: "goal",
          assist: "Jossi",
        },
        {
          name: "Yisak",
          event: "goal",
          assist: "Jossi",
        },
        {
          name: "Kira",
          event: "goal",
          assist: "Chacha",
        },
        {
          name: "Chacha",
          event: "goal",
          assist: "Kira",
        },
      ],
      team2: [
        {
          name: "Nati Alem",
          event: "goal",
          assist: "Emnet",
        },
        {
          name: "Nati Awel",
          event: "goal",
          assist: "Sura",
        },
        {
          name: "Nati Alem",
          event: "goal",
          assist: "Hawltu",
        },
      ],
    },
  },
  {
    state: "ps",
    isPlayoffs: false,
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 101,
      team2: 103,
    },
    schedule: new Date("May 28, 2022 16:00").toString(),
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
    schedule: new Date("May 30, 2022 14:00").toString(),
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
    schedule: new Date("May 30, 2022 16:00").toString(),
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
    schedule: new Date("June 1, 2022 16:00").toString(),
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
    schedule: new Date("May 18, 2022 16:00").toString(),
    score: {
      team1: 2,
      team2: 2,
    },
    events: {
      team1: [
        {
          name: "Ermisha",
          event: "goal",
          assist: "Nati",
        },
        {
          name: "Ermisha",
          event: "goal",
          assist: "Seyfe",
        },
      ],
      team2: [
        {
          name: "Robel",
          event: "goal",
          assist: "Ali",
        },
        {
          name: "Ali",
          event: "goal",
          assist: "Yab T.",
        },
      ],
    },
  },
  {
    state: "ft",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 203,
      team2: 204,
    },
    schedule: new Date("May 19, 2022 14:00").toString(),
    score: {
      team1: 4,
      team2: 4,
    },
    events: {
      team1: [
        {
          name: "Abraham",
          event: "goal",
          assist: "Abebaw",
        },
        {
          name: "Bereket",
          event: "goal",
        },
        {
          name: "Abraham",
          event: "goal",
          assist: "Gemechu",
        },
        {
          name: "Bereket",
          event: "goal",
          assist: "Abraham",
        },
      ],
      team2: [
        { name: "Yonathan", event: "goal", assist: "Beken" },
        { name: "Beken", event: "goal", assist: "Tekle" },
        { name: "Haben", event: "goal", assist: "Zekarias" },
        { name: "Kevin", event: "goal", assist: "Tekle" },
      ],
    },
  },
  {
    state: "ft",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 201,
      team2: 203,
    },
    schedule: new Date("May 23, 2022 14:00").toString(),
    score: {
      team1: 4,
      team2: 1,
    },
    events: {
      team1: [
        {
          name: "Ermisha",
          event: "goal",
          assist: "Kena",
        },
        {
          name: "Nati",
          event: "goal",
          assist: "Ermisha",
        },
        {
          name: "Ermisha",
          event: "goal",
          assist: "Kena",
        },
        {
          name: "Ermisha",
          event: "goal",
          assist: "Kena",
        },
      ],
      team2: [
        {
          name: "Henock",
          event: "goal",
          assist: "Chala",
        },
      ],
    },
  },
  {
    state: "ft",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 202,
      team2: 203,
    },
    schedule: new Date("May 28, 2022 14:00").toString(),
    score: {
      team1: 3,
      team2: 4,
    },
    events: {
      team1: [
        {
          name: "Robel",
          event: "goal",
          assist: "Kalo",
        },
        {
          name: "Robel",
          event: "ps",
        },
        {
          name: "Josh",
          event: "goal",
          assist: "Dagi",
        },
      ],
      team2: [
        {
          name: "Abraham",
          event: "goal",
          assist: "Beka",
        },
        {
          name: "Abraham",
          event: "ps",
        },
        {
          name: "Abraham",
          event: "goal",
        },
        {
          name: "Abraham",
          event: "goal",
        },
      ],
    },
  },
  {
    state: "ps",
    isPlayoffs: false,
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 201,
      team2: 204,
    },
    schedule: new Date("May 27, 2022 16:00").toString(),
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
    schedule: new Date("May 29, 2022 16:00").toString(),
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
