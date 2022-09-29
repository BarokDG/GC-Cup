import { Player } from "../../utils/data/players.data";

import { statsCardProps } from "./index";

interface Props extends statsCardProps {
  statSource: Player[];
}

export default function PlayerStatsCard({
  statSource,
  stat,
  icon: Icon,
  sortBy,
}: Props) {
  const sortedStats = () => {
    return [...statSource]
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => b[sortBy] - a[sortBy]);
  };

  return (
    <>
      <div className="mt-6 bg-gray-400 px-2 py-2 max-w-md mx-auto">
        <div className="relative isolate mb-6 border-dashed border-4 bg-clip-padding border-gray-500 bg-slate-400 px-4 py-6">
          <h2 className="text-3xl font-black uppercase">
            Most
            <br /> {stat}
          </h2>
          <Icon className="absolute -right-4 -top-8 w-48 h-48 -z-10" />
        </div>

        <div className="flex flex-col">
          {sortedStats()
            .slice(0, 5)
            .map(
              (
                { name, nickname, teamCode, position },
                index: number,
                array
              ) => {
                return (
                  <div
                    key={index}
                    className="flex items-center bg-gray-200 pl-4 text-xl mb-0.5"
                  >
                    <p className="py-2">{nickname || name}</p>
                    <div className="ml-auto">
                      <p className="mr-2 text-base inline-block">{teamCode}</p>
                      <p className="mr-2 text-base font-mono inline-block">
                        {position}
                      </p>
                    </div>
                    <p className="w-12 self-stretch flex justify-center items-center bg-gray-900 text-gray-100">
                      {array[index][sortBy]}
                    </p>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </>
  );
}
