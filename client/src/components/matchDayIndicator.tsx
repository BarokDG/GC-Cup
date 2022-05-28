import { matchesDataState } from "../store/centralStoreSlice";
import { useAppSelector } from "../store/storeHooks";

import { isMatchDay } from "../utils/isMatchDay";

export default function MatchDayIndicator() {
  const matchesData = useAppSelector(matchesDataState);

  if (isMatchDay(matchesData)) {
    return (
      <span className="bg-emerald-400 text-slate-900 text-xs font-bold font-mono rounded-full px-1 absolute right-2 top-1/2 -translate-y-1/2">
        match day
      </span>
    );
  } else {
    return <></>;
  }
}
