export default function EmptyState() {
  return (
    <div className="relative inset-1/2 -translate-x-1/2 -translate-y-1/2 w-80 my-12">
      <img
        src="https://i.imgur.com/AnMJIeO.gif"
        alt=""
        className="block max-w-full"
      />
      <p className="text-gray-300 text-center mt-3">
        Nothing to show at the moment...
      </p>
    </div>
  );
}
