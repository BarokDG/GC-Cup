import { useAppSelector } from "../../store/storeHooks";
import { teamsDataState } from "../../store/centralStoreSlice";

export default function LeagueTable({ conference }) {
  const teamData = useAppSelector(teamsDataState);

  return (
    <>
      <div className="table-container max-w-full overflow-auto">
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="bg-slate-900 sticky left-0"></th>
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
            {teamData
              .filter((team) => team.conference === conference)
              .sort((a, b) => b.points - a.points)
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
                    lastFive,
                  },
                  index
                ) => {
                  return (
                    <tr
                      key={teamID}
                      className="bg-slate-200 border-b border-b-slate-300"
                    >
                      <td className="sticky left-0 bg-slate-200 pr-16">
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
                      <td>{goalsFor - goalsAgainst}</td>
                      <td>{lastFive}</td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>
      </div>
      <div className="table-info flex my-6">
        <span className="w-6 h-6 bg-slate-800 border border-slate-400 mr-3"></span>
        <p className="text-gray-300">Qualifying to play-offs</p>
      </div>
    </>
  );
}
