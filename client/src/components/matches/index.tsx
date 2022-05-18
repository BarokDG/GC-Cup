import ConferenceSwitch from "../conferenceSwitch";
import { matches } from "../../utils/data-placeholder/matches.data";

import { useAppSelector } from "../../store/storeHooks";
import { conferenceState, teamDataState } from "../../store/centralStoreSlice";

export default function Matches() {
  const conference = useAppSelector(conferenceState);
  const teamData = useAppSelector(teamDataState);

  // To ensure no duplicate dates are displayed
  const matchDates: Object = {};

  const getTeamNameFromTeamId = (queryTeamId: number): string => {
    return teamData.find((team) => team.teamID === queryTeamId)?.teamName || "";
  };

  return (
    <>
      <ConferenceSwitch />
      {matches
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
  const { teams, score, schedule, events } = match;
  const time = new Date(Date.parse(schedule)).toLocaleTimeString([], {
    hour12: false,
    hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {shouldDisplayDate && (
        <h3 className="text-gray-200 mt-6 mb-1">{schedule.toDateString()}</h3>
      )}
      <details className="bg-gray-100 mb-2">
        <summary className="list-none">
          <div className="flex">
            <p className="flex-grow text-center py-4 basis-0">
              {getTeamNameFromTeamId(teams.team1)}
            </p>
            {score.team1 && (
              <>
                <p className="w-16 py-4">{score.team1}</p>
                <p className="w-16 py-4">{score.team2}</p>
              </>
            )}
            {!score.team1 && (
              <p className="w-max px-2 py-4 bg-gray-800 text-slate-200 text-lg font-bold">
                {time}
              </p>
            )}
            <p className="flex-grow text-center py-4 basis-0">
              {getTeamNameFromTeamId(teams.team2)}
            </p>
          </div>
        </summary>
      </details>
    </>
  );
}
