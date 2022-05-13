import { useAppSelector } from "../../store/storeHooks";

import LeagueTable from "./leagueTable";
import TableSwitch from "./tableSwitch";
import PlayOffs from "./playoffs";

import "../../css/table.css";

export default function Table() {
  const conference = useAppSelector((state) => state.table.conference);

  return (
    <>
      <TableSwitch conference={conference} />
      {conference !== 3 && <LeagueTable conference={conference} />}
      {conference === 3 && <PlayOffs />}
    </>
  );
}
