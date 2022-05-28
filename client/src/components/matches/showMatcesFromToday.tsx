import {
  matchesDataState,
  teamsDataState,
} from "../../store/centralStoreSlice";
import { useAppSelector } from "../../store/storeHooks";

import { isMatchDay } from "../../utils/isMatchDay";
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

  if (isMatchDay(matchesData) && conference !== 3) {
    return (
      <div className="mt-3 mb-6">
        <h3 className="text-slate-400 mb-2">Today's Matches</h3>
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
