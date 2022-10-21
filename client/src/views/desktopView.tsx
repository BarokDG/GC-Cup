import Header from "../components/header";
import Matches from "../components/matches";
import Stats from "../components/stats";
import LeagueTable from "../components/table/leagueTable";
import PlayOffs from "../components/table/playoffs";

export default function DesktopView() {
  return (
    <main className="flex flex-col h-screen">
      <Header isMobile={false} />
      <div className="bg-slate-800 grid-container px-4 flex-grow border-t-[1px] border-t-slate-600">
        <div className="tables">
          <LeagueTable conference={1} />
          <LeagueTable conference={2} />
        </div>
        <div className="playoffs-and-stats bg-slate-900 flex flex-col border-x-[1px] border-x-slate-600 px-2">
          <PlayOffs conference={3} />
          <div className="flex-grow bg-slate-800 flex items-center gap-4 stat-cards overflow-auto px-2">
            <Stats />
          </div>
        </div>
        <div className="matches-and-stats">
          <Matches />
        </div>
      </div>
    </main>
  );
}
