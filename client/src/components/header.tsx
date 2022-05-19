import { ReactComponent as GraduationCap } from "../assets/icons/graduation-cap.svg";

export default function Header() {
  return (
    <header className="bg-gray-800 py-2">
      <h1 className="text-2xl text-gray-300 font-bold flex items-center justify-center">
        <span>GC</span> <GraduationCap className="w-8 h-8 inline-block mx-1" />{" "}
        <span>Cup</span>
      </h1>
    </header>
  );
}
