import InteractionInfo from "../matches/InteractionInfo";

import { Team } from "../../utils/data/team.data";

import { statsCardProps } from ".";

interface Props extends statsCardProps {
  statSource: Team[];
}

export default function TeamStatsCard({
  statSource,
  stat,
  icon: Icon,
  sortBy,
}: Props) {
  const sortedStats = () => {
    return [...statSource]
      .sort((a, b) => a.teamName.localeCompare(b.teamName))
      .sort((a, b) => a[sortBy] - b[sortBy]);
  };

  return (
    <>
      <div className="mt-6 bg-gray-400 px-2 py-2 max-w-md mx-auto">
        <div className="relative isolate mb-6 border-dashed border-4 bg-clip-padding border-gray-500 bg-slate-400 px-4 py-6">
          <h2 className="text-3xl font-black uppercase">
            Least
            <br /> {stat}
          </h2>
          <Icon className="absolute -right-4 -top-8 w-48 h-48 -z-10" />
        </div>

        <div className="mb-3 bg-slate-800 py-2">
          <InteractionInfo message="Showing for group stage only" />
        </div>

        <div className="flex flex-col">
          {sortedStats()
            .slice(0, 5)
            .map(({ teamName }, index: number, array) => {
              return (
                <div
                  key={index}
                  className="flex items-center bg-gray-200 pl-4 text-xl mb-0.5"
                >
                  <p className="py-2">{teamName}</p>
                  <p className="ml-auto w-12 self-stretch flex justify-center items-center bg-gray-900 text-gray-100">
                    {array[index][sortBy]}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
