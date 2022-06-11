import ConferenceSwitch from "../conferenceSwitch";
import MatchDetails from "./matchDetails";
import InteractionInfo from "./InteractionInfo";

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
  const stateTitles: Object = {};

  // TODO: Refactor, also declared in matches/showMatchesFromToday.tsx
  const getTeamNameFromTeamId = (queryTeamId: number): string =>
    teamsData.find((team) => team.teamID === queryTeamId)?.teamName || "TBD";

  return (
    <>
      <ConferenceSwitch />
      <InteractionInfo message="Click on a match for more details" />
      {matchesData
        .filter((match) => match.conference === conference)
        .sort(
          (a, b) =>
            new Date(a.schedule).getTime() - new Date(b.schedule).getTime()
        )
        .map((match) => {
          // To ensure dates aren't displayed twice
          const dateString = new Date(match.schedule).toDateString();
          let shouldDisplayDate = false;

          let shouldDisplayStage = false;

          if (!Object.keys(matchDates).includes(dateString)) {
            shouldDisplayDate = true;
            matchDates[dateString] = 0;
          }

          if (
            match.playOffStage &&
            !Object.keys(stateTitles).includes(match.playOffStage)
          ) {
            shouldDisplayStage = true;
            stateTitles[match.playOffStage] = 0;
          }

          return (
            <MatchDetails
              key={match.matchID}
              match={match}
              shouldDisplayStage={shouldDisplayStage}
              shouldDisplayDate={shouldDisplayDate}
              getTeamNameFromTeamId={getTeamNameFromTeamId}
            />
          );
        })}
    </>
  );
}
