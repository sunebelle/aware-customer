import React, { useState } from "react";
import { useSelector } from "react-redux";

const Pagination = ({ setPage }) => {
  const [pageState, setPageState] = useState(1);
  // const {
  //   products: { numberOfPages },
  // } = useSelector((state) => state.product);
  let numberOfPages = 2;
  // const [page, setPage] = useState(1);
  const nextPage = () => {
    if (pageState < numberOfPages) {
      setPage(pageState + 1);
      setPageState(pageState + 1);
    }
  };

  const previousPage = () => {
    if (pageState <= 1) {
      return;
    }
    setPage(pageState - 1);
    setPageState(pageState - 1);
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
        {pageState}/{numberOfPages}
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
