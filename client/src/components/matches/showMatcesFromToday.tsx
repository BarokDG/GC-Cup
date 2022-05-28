import {
  matchesDataState,
  teamsDataState,
} from "../../store/centralStoreSlice";
import { useAppSelector } from "../../store/storeHooks";

import MatchDetails from "./matchDetails";

export default function MatchesFromToday({ conference }) {
  const matchesData = useAppSelector(matchesDataState);
  const teamsData = useAppSelector(teamsDataState);

  function filterMatchesData() {
    return matchesData.filter((match) => {
      let matchDateString = new Date(match.schedule).toDateString();

      return (
        new Date().toDateString() === matchDateString &&
        match.conference === conference
      );
    });
  }

  // TODO: Refactor, also declared in matches/index.tsx
  const getTeamNameFromTeamId = (queryTeamId: number): string =>
    teamsData.find((team) => team.teamID === queryTeamId)?.teamName || "";

  if (filterMatchesData().length) {
    return (
      <div className="mt-3 mb-6 py-2 px-4 border-dashed border-2 border-indigo-500">
        <h3 className="text-slate-400 mb-2 text-center">Today's Matches</h3>
        {filterMatchesData().map((match) => {
          return (
            <MatchDetails
              key={match.matchID}
              match={match}
              shouldDisplayDate={false}
              getTeamNameFromTeamId={getTeamNameFromTeamId}
              shouldDisplayMatchEvents={false}
            />
          );
        })}
      </div>
    );
  }

  return <></>;
}
