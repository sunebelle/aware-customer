import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({ page, setPage }) => {
  const {
    products: { numberOfPages },
  } = useSelector((state) => state.product);
  // const [page, setPage] = useState(1);
  const nextPage = () => {
    if (page < numberOfPages) {
      setPage(page + 1);
    }
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
        {page}/{numberOfPages}
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
