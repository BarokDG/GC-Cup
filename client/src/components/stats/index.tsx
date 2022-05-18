import StatCardSummary from "./statCardSummary";

import { ReactComponent as StrikerIcon } from "../../assets/striker.svg";

import { useAppSelector } from "../../store/storeHooks";
import { teamDataState, playerDataState } from "../../store/centralStoreSlice";

export default function Stats() {
  const teamData = useAppSelector(teamDataState);
  const playerData = useAppSelector(playerDataState);

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
