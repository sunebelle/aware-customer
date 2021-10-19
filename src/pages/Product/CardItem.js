import React from "react";
import numeral from "numeral";

const CardItem = ({ product }) => {
  return (
    // <div className="flex flex-col w-[180px] ">
    <div className="grid-cols-1 w-[180px] mb-3">
      <img
        className=" w-full h-[269px] object-center mb-2 "
        src={product.img}
        alt={product.title}
      />
      <h2 className="Montserrat font-medium text-sm leading-[1.43rem] text-[#202124]">
        {product.title}
      </h2>
      <h2 className="Montserrat font-medium text-sm leading-[1.43rem] text-[#202124]">
        {product.category}
      </h2>
      <p className="Montserrat-s font-normal text-[#4d4d4d]">
        {numeral(product.price).format("$0,0.00")}
      </p>
    </div>
  );
};
// object-contain

export default CardItem;
