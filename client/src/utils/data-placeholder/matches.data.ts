export type Match = {
  state: string;
  playOffStage?: string;
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
          name: "Josi",
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
          assist: "Josi",
        },
        {
          name: "Yishak",
          event: "goal",
          assist: "Josi",
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
    state: "ft",
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 102,
      team2: 105,
    },
    schedule: new Date("May 30, 2022 14:00").toString(),
    score: {
      team1: 5,
      team2: 2,
    },
    events: {
      team1: [
        {
          name: "Yoni E.",
          event: "goal",
          assist: "Nati G.",
        },
        {
          name: "Nati G.",
          event: "goal",
          assist: "Biruk",
        },
        {
          name: "Biruk",
          event: "goal",
          assist: "Yoni E.",
        },
        {
          name: "Nati G.",
          event: "goal",
          assist: "Yoni E.",
        },
        {
          name: "Nati B.",
          event: "og",
        },
      ],
      team2: [
        {
          name: "Emnet",
          event: "goal",
          assist: "Yidiya",
        },
        {
          name: "Nati B.",
          event: "goal",
          assist: "Yidiya",
        },
      ],
    },
  },
  {
    state: "ft",
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 101,
      team2: 104,
    },
    schedule: new Date("May 30, 2022 16:00").toString(),
    score: {
      team1: 4,
      team2: 13,
    },
    events: {
      team1: [
        {
          name: "Ewnetu",
          event: "goal",
        },
        {
          name: "Olana",
          event: "goal",
          assist: "Temu",
        },
        {
          name: "Olana",
          event: "goal",
        },
        {
          name: "Temu",
          event: "goal",
        },
      ],
      team2: [
        {
          name: "Chacha",
          event: "goal",
          assist: "Josi",
        },
        {
          name: "Dereje",
          event: "goal",
        },
        {
          name: "Chacha",
          event: "goal",
          assist: "Josi",
        },
        {
          name: "Kira",
          event: "goal",
          assist: "Chacha",
        },
        {
          name: "Kira",
          event: "goal",
          assist: "Chacha",
        },
        {
          name: "Josi",
          event: "goal",
          assist: "Chacha",
        },
        {
          name: "Chacha",
          event: "goal",
        },
        {
          name: "Josi",
          event: "goal",
          assist: "Kira",
        },
        {
          name: "Kira",
          event: "goal",
          assist: "Chacha",
        },
        {
          name: "Josi",
          event: "goal",
        },
        {
          name: "Abdisa",
          event: "goal",
          assist: "Dereje",
        },
        {
          name: "Yishak",
          event: "goal",
          assist: "Chacha",
        },
        {
          name: "Chacha",
          event: "goal",
          assist: "Josi",
        },
      ],
    },
  },
  {
    state: "ps",
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 101,
      team2: 105,
    },
    schedule: new Date("June 9, 2022 16:00").toString(),
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
    state: "ft",
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 101,
      team2: 103,
    },
    schedule: new Date("June 03, 2022 16:00").toString(),
    score: {
      team1: 5,
      team2: 11,
    },
    events: {
      team1: [
        {
          name: "Yared",
          event: "goal",
        },
        {
          name: "Yared",
          event: "goal",
          assist: "Yisak",
        },
        {
          name: "Yared",
          event: "goal",
          assist: "Olana",
        },
        {
          name: "Yared",
          event: "goal",
          assist: "Amani",
        },
        {
          name: "Olana",
          event: "goal",
        },
      ],
      team2: [
        {
          name: "Jano",
          event: "goal",
          assist: "Girmachew",
        },
        {
          name: "Biniyam",
          event: "goal",
          assist: "Jano",
        },
        {
          name: "Dawit",
          event: "goal",
          assist: "Bultum",
        },
        {
          name: "Jano",
          event: "goal",
          assist: "Bultum",
        },
        {
          name: "Biniyam",
          event: "goal",
          assist: "Jano",
        },
        {
          name: "Girmachew",
          event: "goal",
          assist: "Dawit",
        },
        {
          name: "Girmachew",
          event: "goal",
          assist: "Dawit",
        },
        {
          name: "Kassa",
          event: "goal",
          assist: "Dawit",
        },
        {
          name: "Temu",
          event: "og",
        },
        {
          name: "Bultum",
          event: "goal",
          assist: "Girmachew",
        },
        {
          name: "Bultum",
          event: "goal",
          assist: "Kassa",
        },
      ],
    },
  },

  /**
   * Conference 2
   */
  {
    state: "ft",
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
    state: "ft",
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 201,
      team2: 204,
    },
    schedule: new Date("May 31, 2022 16:00").toString(),
    score: {
      team1: 2,
      team2: 4,
    },
    events: {
      team1: [
        {
          name: "Ermisha",
          event: "goal",
          assist: "Kena",
        },
        {
          name: "Ermisha",
          event: "ps",
        },
      ],
      team2: [
        {
          name: "Tekle",
          event: "ps",
        },
        {
          name: "Beken",
          event: "goal",
          assist: "Zekarias",
        },
        {
          name: "Beken",
          event: "goal",
        },
        {
          name: "Kevin",
          event: "goal",
          assist: "Tekle",
        },
      ],
    },
  },
  {
    state: "ft",
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 202,
      team2: 204,
    },
    schedule: new Date("June 3, 2022 14:00").toString(),
    score: {
      team1: 6,
      team2: 6,
    },
    events: {
      team1: [
        {
          name: "Yeabsira",
          event: "goal",
          assist: "Kalo",
        },
        {
          name: "Kalo",
          event: "goal",
          assist: "Josh",
        },
        {
          name: "Roba",
          event: "goal",
          assist: "Teda",
        },
        {
          name: "Roba",
          event: "goal",
          assist: "Yeabsira",
        },
        {
          name: "Roba",
          event: "goal",
          assist: "Kalo",
        },
        {
          name: "Josh",
          event: "goal",
        },
      ],
      team2: [
        {
          name: "Beken",
          event: "goal",
          assist: "Zekarias",
        },
        {
          name: "Beken",
          event: "goal",
          assist: "Tekle",
        },
        {
          name: "Tekle",
          event: "goal",
          assist: "Beken",
        },
        {
          name: "Beken",
          event: "goal",
        },
        {
          name: "Kevin",
          event: "goal",
          assist: "Zekarias",
        },
        {
          name: "Yonathan",
          event: "goal",
          assist: "Zekarias",
        },
      ],
    },
  },

  /**
   * Play-offs
   */
  {
    state: "ps",
    playOffStage: "QF",
    conference: 3,
    matchID: Math.random().toString(36).slice(2),
    schedule: new Date("June 7, 2022 14:00").toString(),
    teams: {
      team1: 202,
      team2: 103,
    },
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
    state: "ps",
    playOffStage: "QF",
    conference: 3,
    matchID: Math.random().toString(36).slice(2),
    schedule: new Date("June 7, 2022 16:00").toString(),
    teams: {
      team1: 102,
      team2: 203,
    },
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
    playOffStage: "QF",
    conference: 3,
    matchID: Math.random().toString(36).slice(2),
    schedule: new Date("June 11, 2022 16:00").toString(),
    teams: {
      team1: 201,
      team2: 104,
    },
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
    state: "tba",
    playOffStage: "QF",
    conference: 3,
    matchID: Math.random().toString(36).slice(2),
    schedule: new Date("June 9, 2023 14:00").toString(),
    teams: {
      team1: 204,
      team2: 0,
    },
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
    state: "tba",
    playOffStage: "SF",
    conference: 3,
    matchID: Math.random().toString(36).slice(2),
    schedule: new Date("June 15, 2023 14:00").toString(),
    teams: {
      team1: 0,
      team2: 0,
    },
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
    state: "tba",
    playOffStage: "SF",
    conference: 3,
    matchID: Math.random().toString(36).slice(2),
    schedule: new Date("June 15, 2023 14:00").toString(),
    teams: {
      team1: 0,
      team2: 0,
    },
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
    state: "tba",
    playOffStage: "F",
    conference: 3,
    matchID: Math.random().toString(36).slice(2),
    schedule: new Date("June 22, 2023 14:00").toString(),
    teams: {
      team1: 0,
      team2: 0,
    },
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
