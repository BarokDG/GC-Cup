// import { useState } from "react";
// import StatsModal from "./statsModal";

export default function StatCardSummary({ data, stat, icon: Icon, sortBy }) {
  // const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);

  const sortedData = () => {
    return [...data]
      .sort((a, b) => {
        if (sortBy === "cleansheets") {
          return a.teamName.localeCompare(b.teamName);
        }

        return a.name.localeCompare(b.name);
      })
      .sort((a, b) => b[sortBy] - a[sortBy]);
  };

  return (
    <>
      <div className="mt-6 bg-gray-400 px-2 py-2 max-w-md mx-auto">
        <div className="relative isolate mb-6 border-dashed border-4 bg-clip-padding border-gray-500 bg-slate-400 px-4 py-6">
          <h2 className="text-3xl font-black uppercase">
            Most <br /> {stat}
          </h2>
          <Icon className="absolute -right-4 -top-8 w-48 h-48 -z-10" />
        </div>
        <div className="flex flex-col">
          {sortedData()
            .slice(0, 5)
            .map(({ name, teamCode, position, teamName }, index: number) => {
              return (
                <div
                  key={index}
                  className="flex align-baseline bg-gray-200 pl-4 text-xl mb-0.5"
                >
                  {/* Display teamName instead for most cleansheets */}
                  <p className="py-2">{name || teamName}</p>
                  <div className="flex items-center ml-auto">
                    {/* Don't display teamCode for most cleasheets */}
                    <p className="mr-2 text-base">{!teamName && teamCode}</p>

                    <p className="mr-2 text-lg font-mono">{position}</p>
                    <p className="w-12 self-stretch flex justify-center items-center bg-gray-900 text-gray-100">
                      {sortedData()[index][sortBy]}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        {/* <button
          className="cursor-default mt-4 w-full py-2 bg-slate-900 text-gray-200"
          onClick={() => setIsStatsModalOpen(true)}
        >
          More
        </button> */}
      </div>

      {/* {isStatsModalOpen && (
        <StatsModal setIsStatsModalOpen={setIsStatsModalOpen} />
      )} */}
    </>
  );
}
