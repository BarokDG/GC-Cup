import { matchesDataState } from "../store/centralStoreSlice";
import { useAppSelector } from "../store/storeHooks";

import { isMatchDay } from "../utils/isMatchDay";

export default function MatchDayIndicator() {
  const matchesData = useAppSelector(matchesDataState);

  if (isMatchDay(matchesData)) {
    return (
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <span className="bg-emerald-400 text-slate-900 text-xs font-bold font-mono rounded-full px-1 border border-emerald-900 border-b-2">
          match day
          <span className="w-2 h-2 rounded-full bg-violet-500 inline-block ml-1 relative">
            <span className="animate-ping w-2 h-2 rounded-full bg-violet-500 inline-block absolute"></span>
          </span>
        </span>
      </div>
    );
  } else {
    return <></>;
  }
}
