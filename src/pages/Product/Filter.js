import React, { useState } from "react";
import FilterCheckbox from "../../components/Checkbox/FilterCheckbox";
import RangeSlider from "../../components/RangeSlider.js/RangeSlider";

const Filter = () => {
  const [size, setSize] = useState(false);
  const [color, setColor] = useState(false);
  const [brand, setBrand] = useState(false);
  const [price, setPrice] = useState(false);
  const [available, setAvailable] = useState(false);
  return (
    <div>
      <h1 className="Montserrat-b mb-6 text-[#202124]">Filter</h1>
      <div>
        {/* Size */}
        <div
          onClick={() => setSize((state) => !state)}
          className="flex justify-between items-center"
        >
          <p className="Montserrat-m font-normal py-2">Size</p>
          <img
            className={`${size && "transform rotate-180"} opacity-60 `}
            src="/img/arrow.svg"
            alt="arrow"
          />
        </div>
        {size && (
          <div className="filter-border-dashed space-x-4 flex-row text-center">
            <div className="text-white font-bold filter-size Montserrat-m bg-[#ffa15f] hover:bg-[#ec6c11]">
              S
            </div>
            <div className="text-[#202124] font-normal filter-size Montserrat-m border-[#808080] hover:bg-[#808080]">
              M
            </div>
            <div className="text-[#4d4d4d] font-bold  filter-size Montserrat-m border-[#d4d3d3] hover:bg-[#d4d3d3]">
              L
            </div>
          </div>
        )}
        <hr className="text-[#979797]" />

        {/* Color */}
        <div
          onClick={() => setColor((state) => !state)}
          className="flex justify-between items-center"
        >
          <p className="Montserrat-m font-normal py-2">Color</p>
          <img
            className={`${color && "transform rotate-180"} opacity-60 `}
            src="/img/arrow.svg"
            alt="arrow"
          />
        </div>
        {color && (
          <div className="filter-border-dashed flex-wrap flex-row">
            <div className="bg-[#ff5f6d] h-[30px] w-[30px] hover:scale-150 cursor-pointer rounded-full mr-4 mb-4" />
            <div className="bg-[#ffd543] bg-opacity-40 h-[30px] w-[30px]  hover:scale-150 cursor-pointer rounded-full mr-4 mb-4" />
            <div className="bg-[#5f6dff]  bg-opacity-40 h-[30px] w-[30px] hover:scale-150  cursor-pointer rounded-full mr-4 mb-4" />
            <div className="bg-[#ffa15f] bg-opacity-40  h-[30px] w-[30px] hover:scale-150 cursor-pointer rounded-full mr-4 mb-4" />
            <div className="bg-[#3d3d3f] bg-opacity-40  h-[30px] w-[30px] hover:scale-150 cursor-pointer rounded-full mr-4 " />
            <div className="bg-[#ededed]  bg-opacity-40 h-[30px] w-[30px]  hover:scale-150 cursor-pointer rounded-full " />
          </div>
        )}
        <hr className="text-[#979797]" />

        {/* Brand */}
        <div
          onClick={() => setBrand((state) => !state)}
          className="flex justify-between items-center"
        >
          <p className="Montserrat-m font-normal py-2">Brand</p>
          <img
            className={`${brand && "transform rotate-180"} opacity-60 `}
            src="/img/arrow.svg"
            alt="arrow"
          />
        </div>
        {brand && (
          <div className="filter-border-dashed flex-col space-y-1">
            <FilterCheckbox title="Zara" defaultChecked />
            <FilterCheckbox title="H&M" />
            <FilterCheckbox title="Pull&Bear" />
            <FilterCheckbox title="Dior" />
            <FilterCheckbox title="Chanel" />
          </div>
        )}
        <hr className="text-[#979797]" />

        {/* Price */}
        <div
          onClick={() => setPrice((state) => !state)}
          className="flex justify-between items-center"
        >
          <p className="Montserrat-m font-normal py-2">Price</p>
          <img
            className={`${price && "transform rotate-180"} opacity-60 `}
            src="/img/arrow.svg"
            alt="arrow"
          />
        </div>
        {/* <div className="w-full pr-2"> */}
        {price && (
          <div className="w-11/12">
            <RangeSlider min="69" max="300" label="Price" value="80" />
          </div>
        )}
        <hr className="text-[#979797]" />

        {/* Available */}
        <div
          onClick={() => setAvailable((state) => !state)}
          className="flex justify-between items-center"
        >
          <p className="Montserrat-m font-normal py-2">Available</p>
          <img
            className={`${available && "transform rotate-180"} opacity-60 `}
            src="/img/arrow.svg"
            alt="arrow"
          />
        </div>
        {available && (
          <div className="filter-border-dashed flex-col space-y-1">
            <FilterCheckbox title="In-store" defaultChecked />
            <FilterCheckbox title="Out of stock" />
          </div>
        )}

        <hr className="text-[#979797]" />
      </div>
    </div>
  );
};

export default Filter;
