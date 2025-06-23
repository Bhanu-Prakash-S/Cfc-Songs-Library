interface AlphabetFilterProps {
  handleSelectedLetter: (letter: string) => void;
  selectedLetter: string;
}

export default function AlphabetFilter({
  handleSelectedLetter,
  selectedLetter,
}: AlphabetFilterProps) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="p-3 w-full bg bg-amber-500 md:w-1/3 md:p-5">
      <div className="flex flex-wrap justify-center gap-2 relative">
        <button
          onClick={() => handleSelectedLetter("")}
          className="w-10 border-1 rounded-sm text-center bg-[#f1e9bb]"
        >
          All
        </button>

        {letters.map((letter) =>
          letter === selectedLetter ? (
            <button
              onClick={() => handleSelectedLetter(letter)}
              className="w-10 rounded-sm text-center bg-blue-500"
            >
              {letter}
            </button>
          ) : (
            <button
              onClick={() => handleSelectedLetter(letter)}
              className="w-10 rounded-sm text-center bg-[#f1e9bb]"
            >
              {letter}
            </button>
          )
        )}
      </div>
    </div>
  );
}
