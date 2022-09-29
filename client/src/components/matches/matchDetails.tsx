import { useEffect } from "react";
import MatchEvent from "./matchEvent";
import ScoreOrTime from "./scoreOrTime";

import { Match } from "../../utils/data/matches.data";
import { getTeamNameFromTeamId } from "../../utils/getTeamNameFromTeamId";

type Props = {
  match: Match;
  shouldDisplayDate: boolean;
  shouldDisplayMatchEvents?: boolean;
  shouldDisplayStage?: boolean;
};

export default function MatchDetails({
  match,
  shouldDisplayDate,
  shouldDisplayMatchEvents = true,
  shouldDisplayStage = false,
}: Props) {
  const { state, teams, score, schedule, events } = match;

  const time = new Date(schedule).toLocaleTimeString([], {
    hour12: false,
    hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
  });

  const numberOfGoals: { team1: Object; team2: Object } = {
    team1: {},
    team2: {},
  };

  const numberOfAssists: { team1: Object; team2: Object } = {
    team1: {},
    team2: {},
  };

  const numberOfOwnGoals: { team1: Object; team2: Object } = {
    team1: {},
    team2: {},
  };

  const numberOfPenaltiesScored: { team1: Object; team2: Object } = {
    team1: {},
    team2: {},
  };

  const numberOfPenaltiesMissed: { team1: Object; team2: Object } = {
    team1: {},
    team2: {},
  };

  function assignEventCountForPlayer(
    accumulator: Object,
    team: string,
    name: string
  ) {
    if (accumulator[team][name]) {
      accumulator[team][name] += 1;
    } else {
      accumulator[team][name] = 1;
    }
  }

  // Aggregate stats
  for (let team of ["team1", "team2"]) {
    events[team].forEach(({ name, event, assist }) => {
      if (event === "goal" || event === "ps") {
        assignEventCountForPlayer(numberOfGoals, team, name);

        if (event === "ps") {
          assignEventCountForPlayer(numberOfPenaltiesScored, team, name);
        }
      } else if (event === "og") {
        assignEventCountForPlayer(numberOfOwnGoals, team, name);
      } else if (event === "pm") {
        assignEventCountForPlayer(numberOfPenaltiesMissed, team, name);
      }

      if (assist) {
        assignEventCountForPlayer(numberOfAssists, team, assist);
      }
    });
  }

  useEffect(() => {
    let detailElems = document.querySelectorAll("details");

    detailElems.forEach((elem) => {
      elem.addEventListener("toggle", handleClick);
    });

    function handleClick(e) {
      if (e.target.open) {
        detailElems.forEach((elem) => {
          if (elem !== e.target) elem.open = false;
        });
      }
    }
  });

  return (
    <div className="max-w-md mx-auto">
      {shouldDisplayStage && (
        <p className="text-gray-300 text-center mt-6 mx-auto w-4/5 border-b-2 border-b-slate-300">
          {match.playOffStage === "QF"
            ? "Quarter Finals"
            : match.playOffStage === "SF"
            ? "Semi Finals"
            : "Final"}
        </p>
      )}
      {shouldDisplayDate && (
        <p
          className="text-gray-300 text-sm mt-6 mb-1"
          style={state === "ps" ? { textDecoration: "line-through" } : {}}
        >
          {state === "tba" ? "" : new Date(schedule).toDateString()}
        </p>
      )}
      <details className={`mb-2 ${state === "tba" ? "opacity-70" : ""}`}>
        <summary className="list-none bg-gray-100">
          <div className="flex">
            <p className="flex-grow text-center py-2 basis-0">
              {getTeamNameFromTeamId(teams.team1)}
            </p>
            <ScoreOrTime state={state} time={time} score={score} />
            <p className="flex-grow text-center py-2 basis-0">
              {getTeamNameFromTeamId(teams.team2)}
            </p>
          </div>
        </summary>
        {/* Dropdown */}

        {shouldDisplayMatchEvents && state === "ft" && (
          <div className="mb-6">
            <MatchEvent
              statistic={numberOfGoals}
              team1="team1"
              team2="team2"
              heading="Goals"
            />

            <MatchEvent
              statistic={numberOfOwnGoals}
              team1="team2"
              team2="team1"
              heading="Own goals"
            />

            <MatchEvent
              statistic={numberOfPenaltiesScored}
              team1="team1"
              team2="team2"
              heading="Penalties scored"
            />

            <MatchEvent
              statistic={numberOfPenaltiesMissed}
              team1="team1"
              team2="team2"
              heading="Penalties missed"
            />

            <MatchEvent
              statistic={numberOfAssists}
              team1="team1"
              team2="team2"
              heading="Assists"
            />
          </div>
        )}
      </details>
    </div>
  );
}
