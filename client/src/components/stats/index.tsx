import StatCardSummary from "./statCardSummary";

import { useAppSelector } from "../../store/storeHooks";
import {
  teamsDataState,
  playersDataState,
} from "../../store/centralStoreSlice";

import { ReactComponent as StrikerIcon } from "../../assets/illustrations/striker.svg";

export default function Stats() {
  const teamData = useAppSelector(teamsDataState);
  const playerData = useAppSelector(playersDataState);

  return (
    <>
      <StatCardSummary
        data={playerData}
        stat="Goals"
        icon={StrikerIcon}
        sortBy="goals"
      />
      <StatCardSummary
        data={playerData}
        stat="Assists"
        icon={StrikerIcon}
        sortBy="assists"
      />
      <StatCardSummary
        data={teamData}
        stat="Cleansheets"
        icon={StrikerIcon}
        sortBy="cleansheets"
      />
    </>
  );
}
