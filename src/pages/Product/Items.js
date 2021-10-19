import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Pagination from "../../components/Pagination/Pagination";
import CardItem from "./CardItem";
import { products } from "./dummyData";

const Items = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Dropdown />
        <Pagination />
      </div>
      {/* Many items display here */}
      {/* <div className="flex flex-row flex-wrap justify-start space-y-4 first:space-y-0 mt-4 w-full"> */}
      <div className="grid grid-cols-5 place-content-stretch gap-2 mt-3 w-full">
        {products?.map((product, i) => (
          <CardItem key={i} product={product} />
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Pagination />
      </div>
    </div>
  );
};

export default Items;
