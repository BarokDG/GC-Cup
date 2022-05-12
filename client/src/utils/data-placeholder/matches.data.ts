type Match = {
  state: String;
  GWID: Number;
  matchID: String;
  teams: {
    team1: Number;
    team2: Number;
  };
  schedule: Date;
  score: {
    team1: Number;
    team2: Number;
  };
  events: {
    team1: MatchEvent;
    team2: MatchEvent;
  };
};

type MatchEvent = {
  name: String;
  event: {
    eventType: String;
  };
  assist: String;
  minute: Date;
};

export const matches: Match[] = [];
