interface AlphabetFilterProps {
  handleSelectedLetter: (letter: string) => void;
  selectedLetter: string;
}

export default function AlphabetFilter({
  handleSelectedLetter,
  selectedLetter,
}: AlphabetFilterProps) {
  const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

  return (
    <div className="p-3 w-full md:p-5">
      <div className="flex flex-wrap justify-center gap-2 relative">
        {letters.map((letter) =>
          letter === selectedLetter ? (
            <button
              key={letter}
              onClick={() => handleSelectedLetter(letter)}
              className="w-10 rounded-lg text-sm font-semibold text-center bg-blue-500"
            >
              {letter}
            </button>
          ) : (
            <button
              key={letter}
              onClick={() => handleSelectedLetter(letter)}
              className="w-10 rounded-lg text-sm font-semibold text-center bg-[#f1e9bb]"
            >
              {letter}
            </button>
          )
        )}
      </div>
    </div>
  );
}
