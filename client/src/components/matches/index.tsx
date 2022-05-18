import ConferenceSwitch from "../conferenceSwitch";

import { useAppSelector } from "../../store/storeHooks";
import {
  conferenceState,
  teamsDataState,
  matchesDataState,
  playersDataState,
} from "../../store/centralStoreSlice";
import { useEffect } from "react";

export default function Matches() {
  const conference = useAppSelector(conferenceState);
  const teamsData = useAppSelector(teamsDataState);
  const matchesData = useAppSelector(matchesDataState);

  // To ensure no duplicate dates are displayed
  const matchDates: Object = {};

  const getTeamNameFromTeamId = (queryTeamId: number): string => {
    return (
      teamsData.find((team) => team.teamID === queryTeamId)?.teamName || ""
    );
  };

  return (
    <>
      <ConferenceSwitch />
      {matchesData
        .filter((match) => match.conference === conference)
        .map((match) => {
          const dateString = match.schedule.toDateString();
          let shouldDisplayDate = false;

          if (!Object.keys(matchDates).includes(dateString)) {
            shouldDisplayDate = true;
            matchDates[dateString] = 0;
          }

          return (
            <MatchDetails
              key={match.matchID}
              match={match}
              shouldDisplayDate={shouldDisplayDate}
              getTeamNameFromTeamId={getTeamNameFromTeamId}
            />
          );
        })}
    </>
  );
}

type Props = {
  match: any;
  shouldDisplayDate: boolean;
  getTeamNameFromTeamId: Function;
};

function MatchDetails({
  match,
  shouldDisplayDate,
  getTeamNameFromTeamId,
}: Props) {
  const { state, teams, score, schedule, events } = match;
  const time = new Date(Date.parse(schedule)).toLocaleTimeString([], {
    hour12: false,
    hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
  });

  const numberOfGoals: { team1: Object; team2: Object } = {
    team1: {},
    team2: {},
  };

  events.team1.forEach(({ name }) => {
    if (numberOfGoals.team1[name]) {
      numberOfGoals.team1[name] += 1;
    } else {
      numberOfGoals.team1[name] = 1;
    }
  });

  events.team2.forEach(({ name }) => {
    if (numberOfGoals.team2[name]) {
      numberOfGoals.team2[name] += 1;
    } else {
      numberOfGoals.team2[name] = 1;
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
    <>
      {shouldDisplayDate && (
        <h3 className="text-gray-300 text-sm mt-6 mb-1">
          {schedule.toDateString()}
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
                    <p className="text-gray-300">{`${name} x${numberOfGoals.team1[name]}`}</p>
                  );
                })}
              </div>
              <div className="team2 flex-grow basis-0 p-2 pl-4">
                {Object.keys(numberOfGoals.team2).map((name) => {
                  return (
                    <p className="text-gray-300">{`${name} x${numberOfGoals.team2[name]}`}</p>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </details>
    </>
  );
}
