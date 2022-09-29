import PlayerStatsCard from "./playerStatsCard";
import TeamStatsCard from "./teamStatsCard";

import { useAppSelector } from "../../store/storeHooks";
import {
  teamsDataState,
  playersDataState,
} from "../../store/centralStoreSlice";

import { FunctionComponent, SVGProps } from "react";

import { ReactComponent as StrikerIcon } from "../../assets/illustrations/striker.svg";
import { ReactComponent as MidfielderIcon } from "../../assets/illustrations/midfielder.svg";
import { ReactComponent as GoalKeeperIcon } from "../../assets/illustrations/goalkeeper.svg";

export interface statsCardProps {
  stat: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  sortBy: string;
}

export default function Stats() {
  const teamData = useAppSelector(teamsDataState);
  const playerData = useAppSelector(playersDataState);

  return (
    <>
      <PlayerStatsCard
        statSource={playerData}
        stat="Goals"
        icon={StrikerIcon}
        sortBy="goals"
      />
      <PlayerStatsCard
        statSource={playerData}
        stat="Assists"
        icon={MidfielderIcon}
        sortBy="assists"
      />
      <TeamStatsCard
        statSource={teamData}
        stat="Goals Conceded"
        icon={GoalKeeperIcon}
        sortBy="goalsAgainst"
      />
    </>
  );
}
