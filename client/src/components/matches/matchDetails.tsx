import { useEffect } from "react";
import MatchEvent from "./matchEvent";

type Props = {
  match: any;
  shouldDisplayDate: boolean;
  getTeamNameFromTeamId: Function;
};

export default function MatchDetails({
  match,
  shouldDisplayDate,
  getTeamNameFromTeamId,
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

  const numberOfPenaltiesMissed: { team1: Object; team2: Object } = {
    team1: {},
    team2: {},
  };

  // Aggregate stats
  for (let team of ["team1", "team2"]) {
    events[team].forEach(({ name, event, assist }) => {
      if (event === "goal") {
        if (numberOfGoals[team][name]) {
          numberOfGoals[team][name] += 1;
        } else {
          numberOfGoals[team][name] = 1;
        }
      } else if (event === "og") {
        if (numberOfOwnGoals[team][name]) {
          numberOfOwnGoals[team][name] += 1;
        } else {
          numberOfOwnGoals[team][name] = 1;
        }
      } else if (event === "pm") {
        if (numberOfPenaltiesMissed[team][name]) {
          numberOfPenaltiesMissed[team][name] += 1;
        } else {
          numberOfPenaltiesMissed[team][name] = 1;
        }
      }

      if (assist) {
        if (numberOfAssists[team][assist]) {
          numberOfAssists[team][assist] += 1;
        } else {
          numberOfAssists[team][assist] = 1;
        }
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
      {shouldDisplayDate && (
        <h3 className="text-gray-300 text-sm mt-6 mb-1">
          {new Date(schedule).toDateString()}
        </h3>
      )}
      <details className="mb-2">
        <summary className="list-none bg-gray-100">
          <div className="flex">
            <p className="flex-grow text-center py-2 basis-0">
              {getTeamNameFromTeamId(teams.team1)}
            </p>
            {state === "sc" ? (
              <p className="w-max px-2 py-2 bg-gray-800 text-slate-200 text-lg font-bold">
                {time}
              </p>
            ) : (
              <>
                <p className="w-8 py-2 bg-gray-800 text-center text-gray-200 font-bold border-r border-r-gray-400">
                  {score.team1}
                </p>
                <p className="w-8 py-2 bg-gray-800 text-center text-gray-200 font-bold">
                  {score.team2}
                </p>
              </>
            )}
            <p className="flex-grow text-center py-2 basis-0">
              {getTeamNameFromTeamId(teams.team2)}
            </p>
          </div>
        </summary>
        {/* Dropdown */}
        {state === "ft" && (
          <>
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
          </>
        )}
      </details>
    </div>
  );
}
