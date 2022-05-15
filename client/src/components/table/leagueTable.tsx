import { teams } from "../../utils/data-placeholder/team.data";

export default function LeagueTable({ conference }) {
  return (
    <>
      <div className="table-container max-w-full overflow-auto">
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="w-48 block bg-slate-900 sticky left-0"></th>
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
          <tbody>
            {teams
              .filter((team) => team.conference === conference)
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
                    <tr
                      key={teamID}
                      className="bg-slate-200 border-b-2 border-b-slate-300"
                    >
                      <td className="sticky left-0 bg-slate-200">
                        <div className="flex tracking-wider">
                          <span className="mr-4">{index + 1}</span>
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
      <div className="table-info flex mt-6">
        <span className="w-6 h-6 bg-slate-600 mr-3"></span>
        <p>Qualify to play-offs</p>
      </div>
    </>
  );
}
