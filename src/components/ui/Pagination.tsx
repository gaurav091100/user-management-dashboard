import React from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    onPageChange(newPage);
  };

  // Show only 4 pages at a time
  const getVisiblePages = () => {
    const visibleCount = 3;

    let start = Math.max(page - 1, 1);
    let end = start + visibleCount - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - visibleCount + 1, 1);
    }

    return Array.from(
      { length: end - start + 1 },
      (_, idx) => start + idx
    );
  };

  const visiblePages = getVisiblePages();

  const baseButton =
    "min-w-[40px] h-10 px-3 rounded-lg border text-sm font-medium transition-all duration-200";

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
      <button
        disabled={page === 1}
        onClick={() => handlePageChange(1)}
        className={`${baseButton}
          bg-white text-gray-700 border-gray-300
          hover:bg-gray-100
          disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        First
      </button>
      <button
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
        className={`${baseButton}
          bg-white text-gray-700 border-gray-300
          hover:bg-gray-100
          disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        Prev
      </button>
      {visiblePages.map((currentPage) => (
        <button
          key={currentPage}
          onClick={() => handlePageChange(currentPage)}
          className={`${baseButton}
            ${
              page === currentPage
                ? "bg-black text-white border-black shadow-md scale-105"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }
          `}
        >
          {currentPage}
        </button>
      ))}
      <button
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
        className={`${baseButton}
          bg-white text-gray-700 border-gray-300
          hover:bg-gray-100
          disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        Next
      </button>
      <button
        disabled={page === totalPages}
        onClick={() => handlePageChange(totalPages)}
        className={`${baseButton}
          bg-white text-gray-700 border-gray-300
          hover:bg-gray-100
          disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;