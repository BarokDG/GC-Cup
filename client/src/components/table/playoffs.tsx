import EmptyState from "../emptyState";

export default function PlayOffs({ conference }: { conference: number }) {
  if (conference === 3) {
    return <EmptyState />;
  }

  return <></>;
}
