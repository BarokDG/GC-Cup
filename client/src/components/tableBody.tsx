import { teams } from "../utils/data-placeholder/team.data";

export default function TableBody({ Conference }) {
  return (
    <tbody>
      {teams
        .filter((team) => team.conference === Conference)
        .map(
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
                  <div className="team-name">
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
  );
}
