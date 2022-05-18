export default function StatCardSummary({ data, stat, icon: Icon, sortBy }) {
  return (
    <div className="mt-6 bg-gray-400 px-2 py-2">
      <div className="relative mb-6 border-dashed border-4 bg-clip-padding border-gray-500 bg-slate-400 px-4 py-6">
        <h2 className="text-3xl font-black uppercase">
          Most <br /> {stat}
        </h2>
        <Icon className="absolute right-8 top-2" />
      </div>
      <div className="flex flex-col">
        {data
          .sort((a, b) => b[sortBy] - a[sortBy])
          .slice(0, 5)
          .map(({ playerID, name, teamCode, position, teamName }, index) => {
            return (
              <div
                key={playerID}
                className="flex align-baseline bg-gray-200 pl-4 text-xl mb-0.5"
              >
                {/* Display teamName instead for most cleansheets */}
                <p className="py-4">{name || teamName}</p>
                <div className="flex items-center ml-auto">
                  {/* Don't display teamCode for most cleasheets */}
                  <p className="mr-2 text-base">{!teamName && teamCode}</p>

                  <p className="mr-2 text-base">{position}</p>
                  <p className="w-16 self-stretch flex justify-center items-center bg-gray-900 text-gray-100">
                    {data[index][sortBy]}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <button className="cursor-default w-full mt-2 py-4 bg-slate-900 text-gray-200 text-xl">
        More
      </button>
    </div>
  );
}
