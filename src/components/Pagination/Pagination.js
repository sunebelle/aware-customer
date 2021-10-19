import React, { useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page <= 1) {
      return;
    }
    setPage(page - 1);
  };

  return (
    <div className="flex flex-row space-x-2 items-end justify-between">
      <img
        onClick={previousPage}
        className="transform rotate-90"
        src="/img/arrow.svg"
        alt="arrow"
      />
      <p className="Montserrat-m w-14 font-medium text-center text-[#202124]">
        {page}/100
      </p>
      <img
        onClick={nextPage}
        className="transform -rotate-90"
        src="/img/arrow.svg"
        alt="arrow"
      />
    </div>
  );
};

export default Pagination;
