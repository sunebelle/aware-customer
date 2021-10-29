import React from "react";
import numeral from "numeral";

const CardItem = ({ product, category }) => {
  // console.log(product);
  return (
    // <div className="flex flex-col w-[180px] ">

    <div className="grid-cols-1 w-[180px] mb-3 hover:shadow-2xl cursor-pointer hover:p-2 hover:mb-5">
      <div className="relative h-[269px] w-full quick-shop-container cursor-pointer mb-2 ">
        <img
          className=" w-full h-full object-center "
          src={product.imageCover}
          alt={product.name}
        />
        {product.quantity >= 1 && (
          <div className=" quick-shop cursor-pointer bg-[#ffa15f] h-[54px] absolute bottom-0 w-full">
            <span className="Montserrat-m font-medium text-white py-4 flex justify-center items-center">
              + Quick shop
            </span>
          </div>
        )}
        {product.quantity < 1 && (
          <p className="absolute bottom-2 -left-1 Montserrat text-xs text-white px-1 bg-[#808080] font-bold leading-6">
            Sold out
          </p>
        )}
      </div>
      <h2 className="Montserrat font-medium text-sm leading-[1.43rem] text-[#202124]">
        {product.name}
      </h2>
      <h2 className="Montserrat font-medium text-sm leading-[1.43rem] text-[#202124]">
        {category ? category : product.category[0].name}
      </h2>
      <p className="Montserrat-s font-normal text-[#4d4d4d]">
        {numeral(product.price).format("$0,0.00")}
      </p>
    </div>
  );
};
// object-contain

export default CardItem;
