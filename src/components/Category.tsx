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
    <div className="p-3 w-full bg bg-amber-500 md:w-1/3 md:p-5">
      <div className="flex flex-wrap justify-center gap-2 relative">
        {categories.map((category) =>
          category === selectedCategory ? (
            <button
              onClick={() => handleSelectedCategory(category)}
              className="w-15 rounded-sm text-center bg-blue-500"
            >
              {category}
            </button>
          ) : (
            <button
              onClick={() => handleSelectedCategory(category)}
              className="w-15 rounded-sm text-center bg-[#f1e9bb]"
            >
              {category}
            </button>
          )
        )}
      </div>
    </div>
  );
}
