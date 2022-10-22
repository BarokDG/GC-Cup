import { useEffect } from "react";
import { useAppDispatch } from "../store/storeHooks";

import { useSelector } from "react-redux";
import {
  centralStoreActions,
  conferenceState,
} from "../store/centralStoreSlice";

export default function ConferenceSwitch() {
  const conference = useSelector(conferenceState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const conferenceSwitch: HTMLDivElement | null =
      document.querySelector(".conference-switch");

    switch (conference) {
      case 1:
        conferenceSwitch?.style.setProperty("--start", "8px");
        break;
      case 2:
        conferenceSwitch?.style.setProperty("--start", "122px");
        break;
      case 3:
        conferenceSwitch?.style.setProperty("--start", "calc(100% - 92px)");
        break;
    }
  }, [conference]);

  return (
    <div className="conference-switch flex py-2 relative mt-3 max-w-md mx-auto">
      <button
        onClick={() => dispatch(centralStoreActions.setConference(1))}
        className={conference === 1 ? "" : "text-gray-200"}
      >
        <a href="#tables-and-stats">Conference 1</a>
      </button>

      <button
        onClick={() => dispatch(centralStoreActions.setConference(2))}
        className={conference === 2 ? "" : "text-gray-200"}
      >
        <a href="#tables-and-stats">Conference 2</a>
      </button>
      <button
        className={conference === 3 ? "ml-auto" : "ml-auto text-gray-200"}
        onClick={() => dispatch(centralStoreActions.setConference(3))}
      >
        <a href="#playoffs">Play-offs</a>
      </button>
    </div>
  );
}
