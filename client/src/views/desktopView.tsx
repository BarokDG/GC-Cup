import Header from "../components/header";
import Matches from "../components/matches";
import Stats from "../components/stats";
import LeagueTable from "../components/table/leagueTable";
import PlayOffs from "../components/table/playoffs";

export default function DesktopView() {
  return (
    <main className="flex flex-col h-screen">
      <Header isMobile={false} />
      <div className="grid-container bg-slate-800 flex-grow border-t-[1px] border-t-slate-600 overflow-hidden">
        <div className="px-8">
          <Matches />
        </div>
        <div className="bg-slate-900 flex flex-col border-x-[1px] border-x-slate-600 overflow-auto scroll-smooth">
          <div
            id="playoffs"
            className="basis-full shrink-0 flex items-center border-b-[1px] border-b-slate-600"
          >
            <PlayOffs />
          </div>
          <div
            id="tables-and-stats"
            className="shrink-0 flex bg-slate-800 gap-4"
          >
            <div className="flex flex-col justify-around items-center flex-grow bg-gray-900 border-r-[1px] border-r-slate-600">
              <LeagueTable conference={1} showLegend={false} />
              <LeagueTable conference={2} />
            </div>
            <div className="flex flex-col items-center basis-[400px] shrink-0 overflow-auto py-4 px-4 ">
              <div className="min-w-[350px]">
                <Stats />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
