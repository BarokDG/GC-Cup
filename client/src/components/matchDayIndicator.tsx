import {
  centralStoreActions,
  matchesDataState,
} from "../store/centralStoreSlice";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";

import { useNavigate } from "react-router-dom";

import { isMatchDay } from "../utils/isMatchDay";

export default function MatchDayIndicator() {
  const matchesData = useAppSelector(matchesDataState);
  const dispatch = useAppDispatch();

  const matchInConference = isMatchDay(matchesData);

  const navigate = useNavigate();

  if (matchInConference) {
    return (
      <div
        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => {
          navigate("/");
          dispatch(centralStoreActions.setConference(matchInConference));
        }}
      >
        <span className="bg-emerald-400 text-slate-900 text-xs font-bold font-mono rounded-full px-1">
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
