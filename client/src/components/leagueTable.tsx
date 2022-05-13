import { teams } from "../utils/data-placeholder/team.data";

import "../css/table.css";

export default function LeagueTable() {
  return (
    <div className="table-container">
      <table>
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
            <th>Last 5</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(
            (
              {
                teamID,
                teamName,
                points,
                played,
                wins,
                draws,
                losses,
                goalsFor,
                goalsAgainst,
                goalDifference,
                lastFive,
              },
              index
            ) => {
              return (
                <tr key={teamID}>
                  <td>
                    <div className="team__info">
                      <span>{index + 1}</span>
                      <span>{teamName}</span>
                    </div>
                  </td>
                  <td>{played}</td>
                  <td>{points}</td>
                  <td>{wins}</td>
                  <td>{draws}</td>
                  <td>{losses}</td>
                  <td>
                    {goalsFor} : {goalsAgainst}
                  </td>
                  <td>{goalDifference}</td>
                  <td>{lastFive}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
