import { ReactComponent as KnockoutBracket } from "../../assets/illustrations/knockout_bracket.svg";

type Props = {
  conference: number;
};

export default function PlayOffs({ conference }: Props) {
  if (conference === 3) {
    return (
      <div className="custom-scrollbar overflow-x-auto mt-6 md:mt-0">
        <KnockoutBracket className="w-[400vw] max-w-7xl" />
      </div>
    );
  }

  return <></>;
}
