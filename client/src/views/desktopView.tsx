import Header from "../components/header";
import Matches from "../components/matches";
import Stats from "../components/stats";
import LeagueTable from "../components/table/leagueTable";
import PlayOffs from "../components/table/playoffs";

export default function DesktopView() {
  return (
    <main className="flex flex-col h-screen">
      <Header isMobile={false} />
      <div className="bg-slate-800 grid-container flex-grow border-t-[1px] border-t-slate-600 overflow-hidden">
        <div className="tables px-8">
          <LeagueTable conference={1} showLegend={false} />
          <LeagueTable conference={2} showLegend={true} />
        </div>
        <div
          id="playoffs-and-stats"
          className="bg-slate-900 flex flex-col justify-center border-x-[1px] border-x-slate-600"
        >
          <PlayOffs conference={3} />
          {/* <div className="flex-grow bg-slate-800 flex items-center gap-4 stat-cards overflow-auto px-2">
            <Stats />
          </div> */}
        </div>
        {/* <div className="matches-and-stats">
          <Matches />
        </div> */}
      </div>
    </main>
  );
}
