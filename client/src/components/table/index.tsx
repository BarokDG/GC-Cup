import { useAppSelector } from "../../store/storeHooks";
import { conferenceState } from "../../store/tableSlice";

import LeagueTable from "./leagueTable";
import ConferenceSwitch from "../conferenceSwitch";
import PlayOffs from "./playoffs";

import "../../css/table.css";

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
