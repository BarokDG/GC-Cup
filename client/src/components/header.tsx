import MatchDayIndicator from "./matchDayIndicator";

import { ReactComponent as GraduationCap } from "../assets/icons/graduation-cap.svg";

type Props = {
  isMobile?: boolean;
};

export default function Header({ isMobile = true }: Props) {
  return (
    <header className="bg-slate-800 py-2 relative">
      <h1 className="text-2xl text-gray-300 font-bold flex justify-center items-center">
        <span>GC</span> <GraduationCap className="w-8 h-8 inline-block mx-1" />
        <span>Cup</span>
      </h1>
      {isMobile && <MatchDayIndicator />}
    </header>
  );
}
