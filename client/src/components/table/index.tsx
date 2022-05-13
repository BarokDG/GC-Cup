import { useState } from "react";

import LeagueTable from "./leagueTable";
import TableSwitch from "./tableSwitch";
import PlayOffs from "./playoffs";

import "../../css/table.css";

export default function Table() {
  const [conference, setConference] = useState(1);

  return (
    <>
      <TableSwitch conference={conference} setConference={setConference} />
      <LeagueTable conference={conference} />
    </>
  );
}
