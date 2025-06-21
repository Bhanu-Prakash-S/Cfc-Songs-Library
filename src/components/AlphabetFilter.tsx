export default function AlphabetFilter() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="p-3 w-full bg bg-amber-500 md:w-1/3 p-5">
      <div className="flex flex-wrap justify-center gap-2 relative">
        <div className="w-10 border-1 rounded-sm text-center bg-[#f1e9bb]">
          All
        </div>

        {letters.map((letter) => (
          <div className="w-10 rounded-sm text-center bg-[#f1e9bb]">
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}
