import ConferenceSwitch from "../conferenceSwitch";
import MatchDetails from "./matchDetails";
import EmptyState from "../emptyState";

import { useAppSelector } from "../../store/storeHooks";
import {
  conferenceState,
  teamsDataState,
  matchesDataState,
  // playersDataState,
} from "../../store/centralStoreSlice";

export default function Matches() {
  const conference = useAppSelector(conferenceState);
  const teamsData = useAppSelector(teamsDataState);
  const matchesData = useAppSelector(matchesDataState);

  const matchDates: Object = {};

  // TODO: Refactor, also declared in matches/showMatchesFromToday.tsx
  const getTeamNameFromTeamId = (queryTeamId: number): string =>
    teamsData.find((team) => team.teamID === queryTeamId)?.teamName || "";

  return (
    <>
      <ConferenceSwitch />
      {matchesData
        .filter((match) => match.conference === conference)
        .map((match) => {
          // To ensure dates aren't displayed twice
          const dateString = new Date(match.schedule).toDateString();
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

      {/* TODO: Update once playoffs start */}
      {conference === 3 && <EmptyState />}
    </>
  );
}
