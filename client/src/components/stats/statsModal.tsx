export default function StatsModal({ setIsStatsModalOpen }) {
  return (
    <div className="modal">
      <button onClick={() => setIsStatsModalOpen(false)}>x</button>
    </div>
  );
}
