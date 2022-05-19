import { useEffect } from "react";

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

  events.team1.forEach(({ name, event, assist }) => {
    if (event === "goal") {
      if (numberOfGoals.team1[name]) {
        numberOfGoals.team1[name] += 1;
      } else {
        numberOfGoals.team1[name] = 1;
      }
    } else if (event === "og") {
      if (numberOfOwnGoals.team1[name]) {
        numberOfOwnGoals.team1[name] += 1;
      } else {
        numberOfOwnGoals.team1[name] = 1;
      }
    } else if (event === "pm") {
      if (numberOfPenaltiesMissed.team1[name]) {
        numberOfPenaltiesMissed.team1[name] += 1;
      } else {
        numberOfPenaltiesMissed.team1[name] = 1;
      }
    }

    if (assist) {
      if (numberOfAssists.team1[assist]) {
        numberOfAssists.team1[assist] += 1;
      } else {
        numberOfAssists.team1[assist] = 1;
      }
    }
  });

  events.team2.forEach(({ name, event, assist }) => {
    if (event === "goal") {
      if (numberOfGoals.team2[name]) {
        numberOfGoals.team2[name] += 1;
      } else {
        numberOfGoals.team2[name] = 1;
      }
    } else if (event === "og") {
      if (numberOfOwnGoals.team2[name]) {
        numberOfOwnGoals.team2[name] += 1;
      } else {
        numberOfOwnGoals.team2[name] = 1;
      }
    } else if (event === "pm") {
      if (numberOfPenaltiesMissed.team2[name]) {
        numberOfPenaltiesMissed.team2[name] += 1;
      } else {
        numberOfPenaltiesMissed.team2[name] = 1;
      }
    }

    if (assist) {
      if (numberOfAssists.team2[assist]) {
        numberOfAssists.team2[assist] += 1;
      } else {
        numberOfAssists.team2[assist] = 1;
      }
    }
  });

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
        {state !== "sc" && (
          <>
            <h3 className="text-sm text-gray-300 text-center border-b border-b-slate-500 py-2">
              Goals
            </h3>
            <div className="flex">
              <div className="team1 flex-grow basis-0 text-right p-2 pr-4">
                {Object.keys(numberOfGoals.team1).map((name) => {
                  return (
                    <p
                      className="text-gray-300"
                      key={name}
                    >{`${name} x${numberOfGoals.team1[name]}`}</p>
                  );
                })}
              </div>
              <div className="team2 flex-grow basis-0 p-2 pl-4">
                {Object.keys(numberOfGoals.team2).map((name) => {
                  return (
                    <p
                      className="text-gray-300"
                      key={name}
                    >{`${name} x${numberOfGoals.team2[name]}`}</p>
                  );
                })}
              </div>
            </div>

            {(Object.keys(numberOfOwnGoals.team1).length > 0 ||
              Object.keys(numberOfOwnGoals.team2).length > 0) && (
              <>
                <h3 className="text-sm text-gray-300 text-center border-b border-b-slate-500 py-2">
                  Own goals
                </h3>
                <div className="flex">
                  <div className="team1 flex-grow basis-0 text-right p-2 pr-4">
                    {Object.keys(numberOfOwnGoals.team1).map((name) => {
                      return (
                        <p
                          className="text-gray-300"
                          key={name}
                        >{`${name} x${numberOfOwnGoals.team1[name]}`}</p>
                      );
                    })}
                  </div>
                  <div className="team2 flex-grow basis-0 p-2 pl-4">
                    {Object.keys(numberOfOwnGoals.team2).map((name) => {
                      return (
                        <p
                          className="text-gray-300"
                          key={name}
                        >{`${name} x${numberOfOwnGoals.team2[name]}`}</p>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {(Object.keys(numberOfPenaltiesMissed.team1).length > 0 ||
              Object.keys(numberOfPenaltiesMissed.team2).length > 0) && (
              <>
                <h3 className="text-sm text-gray-300 text-center border-b border-b-slate-500 py-2">
                  Penalties missed
                </h3>
                <div className="flex">
                  <div className="team1 flex-grow basis-0 text-right p-2 pr-4">
                    {Object.keys(numberOfPenaltiesMissed.team1).map((name) => {
                      return (
                        <p
                          className="text-gray-300"
                          key={name}
                        >{`${name} x${numberOfPenaltiesMissed.team1[name]}`}</p>
                      );
                    })}
                  </div>
                  <div className="team2 flex-grow basis-0 p-2 pl-4">
                    {Object.keys(numberOfPenaltiesMissed.team2).map((name) => {
                      return (
                        <p
                          className="text-gray-300"
                          key={name}
                        >{`${name} x${numberOfPenaltiesMissed.team2[name]}`}</p>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {/* TODO: Refactor */}
            <>
              <h3 className="text-sm text-gray-300 text-center border-b border-b-slate-500 py-2">
                Assists
              </h3>
              <div className="flex">
                <div className="team1 flex-grow basis-0 text-right p-2 pr-4">
                  {Object.keys(numberOfAssists.team1).map((assist) => {
                    return (
                      <p
                        className="text-gray-300"
                        key={assist}
                      >{`${assist} x${numberOfAssists.team1[assist]}`}</p>
                    );
                  })}
                </div>
                <div className="team2 flex-grow basis-0 p-2 pl-4">
                  {Object.keys(numberOfAssists.team2).map((assist) => {
                    return (
                      <p
                        className="text-gray-300"
                        key={assist}
                      >{`${assist} x${numberOfAssists.team2[assist]}`}</p>
                    );
                  })}
                </div>
              </div>
            </>
          </>
        )}
      </details>
    </div>
  );
}
