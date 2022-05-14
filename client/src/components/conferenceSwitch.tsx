import { useEffect } from "react";
import { useAppDispatch } from "../store/storeHooks";

import { useSelector } from "react-redux";
import { tableActions, conferenceState } from "../store/tableSlice";

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
    <div className="conference-switch flex py-2 relative">
      <button onClick={() => dispatch(tableActions.setConference(1))}>
        Conference 1
      </button>
      <button onClick={() => dispatch(tableActions.setConference(2))}>
        Conference 2
      </button>
      <button
        className="ml-auto"
        onClick={() => dispatch(tableActions.setConference(3))}
      >
        Play-offs
      </button>
    </div>
  );
}
