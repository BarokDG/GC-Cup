import ConferenceSwitch from "../conferenceSwitch";
import MatchDetails from "./matchDetails";
import InteractionInfo from "./InteractionInfo";

import { useAppSelector } from "../../store/storeHooks";
import {
  conferenceState,
  matchesDataState,
} from "../../store/centralStoreSlice";

export default function Matches() {
  const conference = useAppSelector(conferenceState);
  const matchesData = useAppSelector(matchesDataState);

  const matchDates: Object = {};
  const stateTitles: Object = {};

  return (
    <>
      <ConferenceSwitch />
      <div className="mt-3">
        <InteractionInfo message="Click on a match for more details" />
      </div>
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
            />
          );
        })}
    </>
  );
}
