import { matchesDataState } from "../../store/centralStoreSlice";
import { useAppSelector } from "../../store/storeHooks";

import MatchDetails from "./matchDetails";

type Props = {
  conference: number;
};

export default function MatchesFromToday({ conference }: Props) {
  const matchesData = useAppSelector(matchesDataState);

  function filterMatchesData() {
    return matchesData.filter((match) => {
      let matchDateString = new Date(match.schedule).toDateString();

      return (
        new Date().toDateString() === matchDateString &&
        match.conference === conference
      );
    });
  }

  if (filterMatchesData().length) {
    return (
      <div className="mt-3 mb-6 py-2 px-4 border-2 border-b-4 backdrop-blur-sm bg-violet-900/10 border-violet-900/20 max-w-md bg-clip-padding mx-auto">
        <h3 className="text-gray-400 mb-2">Today's matches</h3>
        {filterMatchesData().map((match) => {
          return (
            <MatchDetails
              key={match.matchID}
              match={match}
              shouldDisplayDate={false}
              shouldDisplayMatchEvents={false}
            />
          );
        })}
      </div>
    );
  }

  return <></>;
}
