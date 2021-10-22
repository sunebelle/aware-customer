import React, { useState } from "react";
import FilterCheckbox from "../../components/Checkbox/FilterCheckbox";
import RangeSlider from "../../components/RangeSlider.js/RangeSlider";

const Filter = (props) => {
  const {
    price,
    setPrice,
    setSize,
    setColor,
    brand,
    setBrand,
    available,
    setAvailable,
  } = props;
  const [sizeState, setSizeState] = useState(false);
  const [colorState, setColorState] = useState(false);
  const [brandState, setBrandState] = useState(false);
  const [priceState, setPriceState] = useState(false);
  const [availableState, setAvailableState] = useState(false);

  return (
    <div>
      <h1 className="Montserrat-b mb-6 text-[#202124]">Filter</h1>
      <div>
        {/* Size */}
        <div
          onClick={() => setSizeState((state) => !state)}
          className="flex justify-between items-center"
        >
          <p className="Montserrat-m font-normal py-2">Size</p>
          <img
            className={`${sizeState && "transform rotate-180"} opacity-60 `}
            src="/img/arrow.svg"
            alt="arrow"
          />
        </div>
        {sizeState && (
          <div className="filter-border-dashed space-x-4 flex-row text-center">
            <div
              onClick={() => setSize("S")}
              className="text-white font-bold filter-size Montserrat-m bg-[#ffa15f] hover:bg-[#ec6c11]"
            >
              S
            </div>
            <div
              onClick={() => setSize("M")}
              className="text-[#202124] font-normal filter-size Montserrat-m border-[#808080] hover:bg-[#808080]"
            >
              M
            </div>
            <div
              onClick={() => setSize("L")}
              className="text-[#4d4d4d] font-bold  filter-size Montserrat-m border-[#d4d3d3] hover:bg-[#d4d3d3]"
            >
              L
            </div>
          </div>
        )}
        <hr className="text-[#979797]" />

        {/* Color */}
        <div
          onClick={() => setColorState((state) => !state)}
          className="flex justify-between items-center"
        >
          <p className="Montserrat-m font-normal py-2">Color</p>
          <img
            className={`${colorState && "transform rotate-180"} opacity-60 `}
            src="/img/arrow.svg"
            alt="arrow"
          />
        </div>
        {colorState && (
          <div className="filter-border-dashed flex-wrap flex-row">
            <div
              onClick={() => setColor("red")}
              className="bg-[#ff5f6d] h-[30px] w-[30px] hover:scale-150 cursor-pointer rounded-full mr-4 mb-4"
            />
            <div
              onClick={() => setColor("light-gold")}
              className="bg-[#ffd543] bg-opacity-40 h-[30px] w-[30px]  hover:scale-150 cursor-pointer rounded-full mr-4 mb-4"
            />
            <div
              onClick={() => setColor("cornflower")}
              className="bg-[#5f6dff]  bg-opacity-40 h-[30px] w-[30px] hover:scale-150  cursor-pointer rounded-full mr-4 mb-4"
            />
            <div
              onClick={() => setColor("orange")}
              className="bg-[#ffa15f] bg-opacity-40  h-[30px] w-[30px] hover:scale-150 cursor-pointer rounded-full mr-4 mb-4"
            />
            <div
              onClick={() => setColor("charcoal-grey")}
              className="bg-[#3d3d3f] bg-opacity-40  h-[30px] w-[30px] hover:scale-150 cursor-pointer rounded-full mr-4 "
            />
            <div
              onClick={() => setColor("white")}
              className="bg-[#ededed]  bg-opacity-40 h-[30px] w-[30px]  hover:scale-150 cursor-pointer rounded-full "
            />
          </div>
        )}
        <hr className="text-[#979797]" />

        {/* Brand */}
        <div
          onClick={() => setBrandState((state) => !state)}
          className="flex justify-between items-center"
        >
          <p className="Montserrat-m font-normal py-2">Brand</p>
          <img
            className={`${brandState && "transform rotate-180"} opacity-60 `}
            src="/img/arrow.svg"
            alt="arrow"
          />
        </div>
        {brandState && (
          <div className="filter-border-dashed flex-col space-y-1">
            <FilterCheckbox
              brand={brand}
              setBrand={setBrand}
              value="Zara"
              name="brand"
              title="Zara"
            />
            <FilterCheckbox
              brand={brand}
              setBrand={setBrand}
              value="H&M"
              name="brand"
              title="H&M"
            />
            <FilterCheckbox
              brand={brand}
              setBrand={setBrand}
              value="Pull&Bear"
              name="brand"
              title="Pull&Bear"
            />
            <FilterCheckbox
              brand={brand}
              setBrand={setBrand}
              value="Dior"
              name="brand"
              title="Dior"
            />
            <FilterCheckbox
              brand={brand}
              setBrand={setBrand}
              value="Chanel"
              name="brand"
              title="Chanel"
            />
          </div>
        )}
        <hr className="text-[#979797]" />

        {/* Price */}
        <div
          onClick={() => setPriceState((state) => !state)}
          className="flex justify-between items-center"
        >
          <p className="Montserrat-m font-normal py-2">Price</p>
          <img
            className={`${priceState && "transform rotate-180"} opacity-60 `}
            src="/img/arrow.svg"
            alt="arrow"
          />
        </div>

        {priceState && (
          <div className="w-11/12">
            <RangeSlider price={price} setPrice={setPrice} min="0" max="300" />
          </div>
        )}
        <hr className="text-[#979797]" />

        {/* Available */}
        <div
          onClick={() => setAvailableState((state) => !state)}
          className="flex justify-between items-center"
        >
          <p className="Montserrat-m font-normal py-2">Available</p>
          <img
            className={`${
              availableState && "transform rotate-180"
            } opacity-60 `}
            src="/img/arrow.svg"
            alt="arrow"
          />
        </div>
        {availableState && (
          <div className="filter-border-dashed flex-col space-y-1">
            {/* <FilterCheckbox title="In-store" defaultChecked />
            <FilterCheckbox title="Out of stock" /> */}
            <FilterCheckbox
              available={available}
              setAvailable={setAvailable}
              value="In-store"
              title="In-store"
              name="available"
            />
            <FilterCheckbox
              available={available}
              setAvailable={setAvailable}
              value="Out-of-stock"
              title="Out of stock"
              name="available"
            />
          </div>
        )}

        <hr className="text-[#979797]" />
      </div>
    </div>
  );
};

export default Filter;
