import React from "react";
import numeral from "numeral";

const Baskets = () => {
  return (
    <div className=" shadow-2xl w-[270px] bg-[#fbfbfb] border border-[#eaeaea] border-opacity-50">
      <div className="flex flex-col">
        {/* show single product */}
        <div className="flex flex-row py-3 px-3 space-x-6 border-b border-[#eaeaea] ">
          <img
            className="w-[60px] h-[60px]"
            src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
            alt="product cover"
          />
          <div className="">
            <h2 className="Montserrat text-[#4d4d4d] font-semibold text-xs leading-5">
              New Balance Men's Street Backpack
            </h2>
            <div className="flex items-center justify-between Montserrat-s font-normal">
              <span className="#4d4d4d"> {numeral(485.52).format("$0,0")}</span>
              <span className="text-[#202124]">S • Black • 1 pcs </span>
            </div>
          </div>
        </div>
        {/* show single product */}
        <div className="flex flex-row py-3 px-3 space-x-6 border-b border-[#eaeaea] ">
          <img
            className="w-[60px] h-[60px]"
            src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
            alt="product cover"
          />
          <div className="">
            <h2 className="Montserrat text-[#4d4d4d] font-semibold text-xs leading-5">
              New Balance Men's Street Backpack
            </h2>
            <div className="flex items-center justify-between Montserrat-s font-normal">
              <span className="#4d4d4d"> {numeral(485.52).format("$0,0")}</span>
              <span className="text-[#202124]">S • Black • 1 pcs </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-center py-6 text-center">
        <span className="Montserrat-m text-[#ffa15f] font-bold ">
          View cart
        </span>
      </div>
    </div>
  );
};

export default Baskets;
