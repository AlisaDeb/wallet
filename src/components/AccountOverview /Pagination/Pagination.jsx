import React, { useEffect, useState } from 'react';

export const Pagination = ({ totalPages, changeCurrentPage, currentPage }) => {
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    const tempPagination = [];
    for (let i = 0; i < totalPages; i++) {
      tempPagination.push(i + 1);
    }
    setPagination(tempPagination);
  }, [totalPages]);

  return (
    <>
      {pagination.map((page) => (
        <button
          key={page}
          onClick={() => changeCurrentPage(page)}
          className={`whitespace-nowrap px-3 py-1 rounded-lg text-sm cursor-pointer ${
            currentPage === page
              ? 'bg-indigo-100 text-indigo-600'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {page}
        </button>
      ))}
    </>
  );
};
