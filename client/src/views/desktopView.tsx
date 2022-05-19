import Meme from "../assets/images/meme.png";

export default function DesktopView() {
  return (
    <div className="h-screen grid place-items-center bg-slate-900">
      <div className="wrapper w-3/4">
        <img src={Meme} alt="" />
        <p className="text-slate-300 text-center mt-6 text-lg">
          Too lazy/buzy to redesign for larger screens at the moment. Maybe
          later... Works great on Mobile tho, check it out!
        </p>
      </div>
    </div>
  );
}
