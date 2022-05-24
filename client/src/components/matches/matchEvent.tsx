type Props = {
  statistic: {
    team1: Object;
    team2: Object;
  };
  team1: string;
  team2: string;
  heading: string;
};

export default function MatchEvent({
  statistic,
  team1,
  team2,
  heading,
}: Props) {
  return (
    <>
      {(Object.keys(statistic[team1]).length > 0 ||
        Object.keys(statistic[team2]).length > 0) && (
        <>
          <h3 className="text-sm text-gray-400 text-center border-b border-b-slate-500 py-2">
            {heading}
          </h3>

          <div className="flex">
            <div className="team1 flex-grow basis-0 text-right p-2 pr-4">
              {Object.keys(statistic[team1]).map((name) => {
                return (
                  <p className="text-gray-300" key={name}>{`${name} ${
                    statistic[team1][name] > 1
                      ? "x" + statistic[team1][name]
                      : ""
                  }`}</p>
                );
              })}
            </div>
            <div className="team2 flex-grow basis-0 p-2 pl-4">
              {Object.keys(statistic[team2]).map((name) => {
                return (
                  <p className="text-gray-300" key={name}>{`${name} ${
                    statistic[team2][name] > 1
                      ? "x" + statistic[team2][name]
                      : ""
                  }`}</p>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
