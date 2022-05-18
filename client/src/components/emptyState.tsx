export default function EmptyState() {
  return (
    <div className="absolute inset-0 w-80 m-auto flex flex-col justify-center">
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
