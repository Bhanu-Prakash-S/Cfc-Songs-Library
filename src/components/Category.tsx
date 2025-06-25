interface CategoryProps {
  handleSelectedCategory: (category: string) => void;
  selectedCategory: string;
}

export default function Category({
  handleSelectedCategory,
  selectedCategory,
}: CategoryProps) {
  const categories = ["All", "Worship", "Praise", "Thanksgiving"];

  return (
    <div className="p-3 w-full  md:p-5">
      <div className="flex flex-wrap justify-center gap-2 relative">
        {categories.map((category) =>
          category === selectedCategory ? (
            <button
              key={category}
              onClick={() => handleSelectedCategory(category)}
              className="inline-flex px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap bg-[#660000] text-[#f1e9bb]"
            >
              {category}
            </button>
          ) : (
            <button
              key={category}
              onClick={() => handleSelectedCategory(category)}
              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                category === "Worship"
                  ? "bg-purple-100 text-purple-800"
                  : category === "Praise"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>
    </div>
  );
}
