import { useAppSelector } from "../../store/storeHooks";
import { teamsDataState } from "../../store/centralStoreSlice";
import TableLegend from "./tableLegend";

type Props = {
  conference: number;
  showLegend?: boolean;
};

export default function LeagueTable({ conference, showLegend = true }: Props) {
  const teamData = useAppSelector(teamsDataState);

  if (conference !== 3) {
    // conference 3 is for play-offs
    return (
      <>
        <div className="table-container max-w-full overflow-auto">
          <h2 className="hidden">Conference {conference}</h2>
          <table className="border-collapse max-w-md mx-auto">
            <thead>
              <tr>
                <th className="bg-slate-900 lg:bg-gray-900 sticky left-0"></th>
                <th title="Matches Played">MP</th>
                <th
                  title="Points"
                  // eslint-disable-next-line no-octal-escape
                  className="after:content-['\25bc'] after:ml-1 after:text-[8px] after:text-purple-400"
                >
                  Pts
                </th>
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
                .sort((a, b) => {
                  let goalDifferenceA = a.goalsFor - a.goalsAgainst;
                  let goalDifferenceB = b.goalsFor - b.goalsAgainst;

                  return goalDifferenceB - goalDifferenceA;
                })
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
                        <td>
                          {lastFive.split("").map((result, index) => {
                            return (
                              <span
                                key={index}
                                className={`text-sm font-bold inline-block w-6 h-6 leading-6 rounded-full ${result.toLowerCase()}`}
                              >
                                {result}
                              </span>
                            );
                          })}
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>
        </div>
        {showLegend && <TableLegend />}
      </>
    );
  } else {
    return <></>;
  }
}
