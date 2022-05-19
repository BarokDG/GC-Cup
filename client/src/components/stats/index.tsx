import StatCardSummary from "./statCardSummary";

import { useAppSelector } from "../../store/storeHooks";
import {
  teamsDataState,
  playersDataState,
} from "../../store/centralStoreSlice";

import { ReactComponent as StrikerIcon } from "../../assets/illustrations/striker.svg";
import { ReactComponent as MidfielderIcon } from "../../assets/illustrations/midfielder.svg";
import { ReactComponent as GoalKeeperIcon } from "../../assets/illustrations/goalkeeper.svg";

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
        icon={MidfielderIcon}
        sortBy="assists"
      />
      <StatCardSummary
        data={teamData}
        stat="Cleansheets"
        icon={GoalKeeperIcon}
        sortBy="cleansheets"
      />
    </>
  );
}
