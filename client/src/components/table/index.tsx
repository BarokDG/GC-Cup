import { conferenceState } from "../../store/centralStoreSlice";
import { useAppSelector } from "../../store/storeHooks";
import ConferenceSwitch from "../conferenceSwitch";
import LeagueTable from "./leagueTable";
import PlayOffs from "./playoffs";

export default function Table() {
  const conference = useAppSelector(conferenceState);

  return (
    <>
      <ConferenceSwitch />
      {conference !== 3 && <LeagueTable conference={conference} />}
      {conference === 3 && <PlayOffs />}
    </>
  );
}
