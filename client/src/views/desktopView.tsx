import Header from "../components/header";
import Matches from "../components/matches";
import Stats from "../components/stats";
import LeagueTable from "../components/table/leagueTable";
import PlayOffs from "../components/table/playoffs";

export default function DesktopView() {
  return (
    <>
      <div className="bg-slate-900 grid-container">
        <Header isMobile={false} />
        <LeagueTable conference={1} />
        <LeagueTable conference={2} />
        <PlayOffs conference={3} />
        <Matches />
        <Stats />
      </div>
    </>
  );
}
