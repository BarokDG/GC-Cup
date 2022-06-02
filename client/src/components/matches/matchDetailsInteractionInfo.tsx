import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function MatchDetailsInteractionInfo() {
  return (
    <div className="flex justify-center items-center mt-3">
      <FontAwesomeIcon icon={faCircleInfo} className="text-slate-500 w-3 h-3" />
      <p className="ml-1 text-xs text-slate-300 leading-none">
        Click on a match to see more details
      </p>
    </div>
  );
}
