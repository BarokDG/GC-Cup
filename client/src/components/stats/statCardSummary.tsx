// import { useState } from "react";
// import StatsModal from "./statsModal";

import InteractionInfo from "../matches/InteractionInfo";

export default function StatCardSummary({ data, stat, icon: Icon, sortBy }) {
  // const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);

  const sortedData = () => {
    return [...data]
      .sort((a, b) => {
        if (sortBy === "goalsAgainst") {
          return a.teamName.localeCompare(b.teamName);
        }

        return a.name.localeCompare(b.name);
      })
      .sort((a, b) => {
        if (sortBy === "goalsAgainst") {
          return a[sortBy] - b[sortBy];
        }

        return b[sortBy] - a[sortBy];
      });
  };

  return (
    <>
      <div className="mt-6 bg-gray-400 px-2 py-2 max-w-md mx-auto">
        <div className="relative isolate mb-6 border-dashed border-4 bg-clip-padding border-gray-500 bg-slate-400 px-4 py-6">
          <h2 className="text-3xl font-black uppercase">
            {sortBy === "goalsAgainst" ? "Least" : "Most"} <br /> {stat}
          </h2>
          <Icon className="absolute -right-4 -top-8 w-48 h-48 -z-10" />
        </div>

        {sortBy === "goalsAgainst" ? (
          <div className="mb-3 bg-slate-800 py-2">
            <InteractionInfo message="Showing for group stage only" />
          </div>
        ) : (
          <></>
        )}
        <div className="flex flex-col">
          {sortedData()
            .slice(0, 5)
            .map(
              (
                { name, nickname, teamCode, position, teamName },
                index: number,
                array
              ) => {
                return (
                  <div
                    key={index}
                    className="flex items-center bg-gray-200 pl-4 text-xl mb-0.5"
                  >
                    {/* Display teamName instead for most cleansheets */}
                    <p className="py-2">{nickname || name || teamName}</p>
                    <div className="ml-auto">
                      {/* Don't display teamCode for most cleansheets */}
                      <p className="mr-2 text-base inline-block">
                        {!teamName && teamCode}
                      </p>
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
