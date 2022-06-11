import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

type Props = {
  message: string;
};

export default function InteractionInfo({ message }: Props) {
  return (
    <div className="flex justify-center items-center">
      <FontAwesomeIcon icon={faCircleInfo} className="text-slate-500 w-3 h-3" />
      <p className="ml-1 text-xs text-slate-300 leading-none">{message}</p>
    </div>
  );
}
