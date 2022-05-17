import StatCardSummary from "./statCardSummary";

import { ReactComponent as StrikerIcon } from "../../assets/striker.svg";

export default function Stats() {
  return (
    <>
      <StatCardSummary Stat="Goals" Icon={StrikerIcon} sortBy="goals" />
      <StatCardSummary Stat="Assists" Icon={StrikerIcon} sortBy="assists" />
    </>
  );
}
