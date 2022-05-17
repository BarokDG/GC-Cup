import StatCardSummary from "./statCardSummary";

import { ReactComponent as StrikerIcon } from "../../assets/striker.svg";

import { players } from "../../utils/data-placeholder/players.data";
import { teams } from "../../utils/data-placeholder/team.data";

export default function Stats() {
  return (
    <>
      <StatCardSummary
        data={players}
        stat="Goals"
        icon={StrikerIcon}
        sortBy="goals"
      />
      <StatCardSummary
        data={players}
        stat="Assists"
        icon={StrikerIcon}
        sortBy="assists"
      />
      <StatCardSummary
        data={teams}
        stat="Cleansheets"
        icon={StrikerIcon}
        sortBy="cleansheets"
      />
    </>
  );
}
