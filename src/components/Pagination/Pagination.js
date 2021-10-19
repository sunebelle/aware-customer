import React from "react";

const Pagination = () => {
  return (
    <div className="flex flex-row space-x-2 items-end justify-between">
      <img className="transform rotate-90" src="/img/arrow.svg" alt="arrow" />
      <p className="Montserrat-m font-medium text-[#202124]"> 1/100</p>
      <img className="transform -rotate-90" src="/img/arrow.svg" alt="arrow" />
    </div>
  );
};

export default Pagination;
