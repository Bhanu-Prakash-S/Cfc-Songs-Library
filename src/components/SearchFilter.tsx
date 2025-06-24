interface SearchFilterProps {
  handleSearchTerm: (input: string) => void;
  searchTerm: string;
}

export default function SearchFilter({
  handleSearchTerm,
  searchTerm,
}: SearchFilterProps) {
  return (
    <div className="px-6 py-2 w-full md:p-5">
      <input
        type="text"
        placeholder="Search songs..."
        value={searchTerm}
        onChange={(e) => handleSearchTerm(e.target.value)}
        className="w-full placeholder:italic font-semibold pl-5 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}
