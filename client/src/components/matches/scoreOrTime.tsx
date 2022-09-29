type Props = {
  state: string;
  time: string;
  score: {
    team1: number | null;
    team2: number | null;
  };
};

export default function ScoreOrTime({ state, time, score }: Props) {
  if (state === "sc") {
    // Scheduled
    return (
      <p className="w-max px-2 py-2 bg-gray-800 text-slate-200 text-lg font-bold">
        {time}
      </p>
    );
  } else if (state === "ps") {
    // Postponed
    return (
      <p className="w-max px-2 py-2 bg-violet-200 text-violet-900 text-md font-bold">
        Postponed
      </p>
    );
  } else if (state === "tba") {
    return (
      <p className="w-max px-2 py-2 bg-gray-800 text-slate-200 text-lg font-bold">
        TBA
      </p>
    );
  } else {
    // Full-time
    return (
      <>
        <p className="w-8 py-2 bg-gray-800 text-center text-gray-200 font-bold border-r border-r-gray-400">
          {score.team1}
        </p>
        <p className="w-8 py-2 bg-gray-800 text-center text-gray-200 font-bold">
          {score.team2}
        </p>
      </>
    );
  }
}
