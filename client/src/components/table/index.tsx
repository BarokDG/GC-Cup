import LeagueTable from "./leagueTable";

export default function Table() {
  return (
    <>
      <LeagueTable conference={1} />
      <LeagueTable conference={2} />
      <div className="table-info flex my-6">
        <span className="w-6 h-6 bg-slate-600 mr-3"></span>
        <p className="text-gray-300">Qualifying to play-offs</p>
      </div>
    </>
  );
}
