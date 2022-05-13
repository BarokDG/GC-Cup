import { useState, useEffect } from "react";

import TableBody from "./tableBody";
import "../css/table.css";

export default function LeagueTable() {
  const [conference, setConference] = useState(1);

  useEffect(() => {
    const conferenceSwitch: HTMLDivElement | null =
      document.querySelector(".conference-switch");

    conference === 2
      ? conferenceSwitch?.style.setProperty("--start", "50%")
      : conferenceSwitch?.style.setProperty("--start", "0");
  }, [conference]);

  return (
    <>
      <div className="conference-switch flex py-2 relative w-max">
        <button onClick={() => setConference(1)}>Conference 1</button>
        <button onClick={() => setConference(2)}>Conference 2</button>
      </div>
      <div className="table-container max-w-full overflow-auto">
        <table className="border-collapse">
          <thead>
            <tr>
              <th></th>
              <th title="Matches Played">MP</th>
              <th title="Points">Pts</th>
              <th title="Wins">W</th>
              <th title="Draws">D</th>
              <th title="Losses">L</th>
              <th>GF : GA</th>
              <th title="Goal Difference">GD</th>
              <th>Form</th>
            </tr>
          </thead>
          <TableBody Conference={conference} />
        </table>
      </div>
    </>
  );
}
