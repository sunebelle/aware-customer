import React from "react";
import { useLocation } from "react-router";
// import Dropdown from "../../components/Dropdown/Dropdown";
import Category from "./Category";
import Filter from "./Filter";
import Items from "./Items";
//product?ladies&type=Dresses&category=All dresses&size=""&color=""&page=""
//product?ladies || ladies/girls/boys/men
//type=dresses (Tops ||Bottoms||Dresses)
// category=all (All dresses||Rompers / Jumpsuits)
//filter=size, color,brand, price, available
//sort= popularity/price/name
//pagination = page
//20 products => 100 products

const Product = () => {
  const location = useLocation();
  const searchTitle = location?.search.replace("?", "");
  //   console.log(searchTitle);

  return (
    <div className="">
      <h2 className=" pb-8 text-center Montserrat-m font-normal text-[#202124]">
        {/* {searchTitle} */}
        Ladies / Dresses
      </h2>
      <div className="grid grid-cols-6 gap-4">
        <div className="flex flex-col space-y-11">
          <Category />
          <hr className="text-[#979797] w-1/2" />
          <Filter />
        </div>
        <div className="col-span-5">
          <Items />
        </div>
      </div>
    </div>
  );
};

export default Product;
