import { conferenceState } from "../../store/centralStoreSlice";
import { useAppSelector } from "../../store/storeHooks";
import ConferenceSwitch from "../conferenceSwitch";
import LeagueTable from "./leagueTable";
import PlayOffs from "./playoffs";

import MatchesFromToday from "../matches/showMatchesFromToday";

export default function Table() {
  const conference = useAppSelector(conferenceState);

  return (
    <>
      <ConferenceSwitch />
      <MatchesFromToday conference={conference} />
      <LeagueTable conference={conference} />

      <PlayOffs conference={conference} />
    </>
  );
}
