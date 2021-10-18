import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Pagination from "../../components/Pagination/Pagination";
import CardItem from "./CardItem";

const Items = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <Dropdown />
        <Pagination />
      </div>
      <div className="flex flex-wrap">
        {/* Many items display here */}
        <CardItem />
      </div>
      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default Items;
