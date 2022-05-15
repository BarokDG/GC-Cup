type Match = {
  state: string;
  GWID: number;
  matchID: string;
  teams: {
    team1: number;
    team2: number;
  };
  schedule: Date;
  score: {
    team1: number;
    team2: number;
  };
  events: {
    team1: MatchEvent;
    team2: MatchEvent;
  };
};

type MatchEvent = {
  name: string;
  event: {
    eventType: string;
  };
  assist: string;
  minute?: Date;
};

export const matches: Match[] = [];
