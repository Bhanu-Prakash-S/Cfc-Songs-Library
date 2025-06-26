import _ from "lodash";

interface PaginationProps {
  pageSize: number;
  totalItemsCount: number;
  handlePageChange: (pageNum: number) => void;
  currentPage: number;
}

const activePage: string =
  "cursor-pointer rounded-sm border-1 px-2.5 p-2 bg-[#660000] text-[#f1e9bb]";
const otherPage: string =
  "cursor-pointer rounded-sm border-1 px-2.5 p-2 bg-[#f1e9bb] text-[#660000]";

export function Pagination({
  pageSize,
  totalItemsCount,
  handlePageChange,
  currentPage,
}: PaginationProps) {
  const numberOfPages = Math.ceil(totalItemsCount / pageSize);
  if (numberOfPages === 1) return null;
  const pages = _.range(1, numberOfPages + 1);
  return (
    <div className="p-2 w-full md:max-w-10/12">
      <nav>
        <ul className="flex flex-row justify-start gap-2">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={page === currentPage ? activePage : otherPage}
            >
              {page}
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
}
