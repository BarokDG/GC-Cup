import { ReactComponent as KnockoutBracket } from "../../assets/illustrations/knockout_bracket.svg";

export default function PlayOffs({ conference }: { conference: number }) {
  if (conference === 3) {
    return (
      <div className="overflow-x-auto mt-6">
        <KnockoutBracket className="w-[300vw] max-w-5xl" />
      </div>
    );
  }

  return <></>;
}
