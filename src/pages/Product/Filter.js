import React, { useState } from "react";
import FilterCheckbox from "../../components/Checkbox/FilterCheckbox";
import RangeSlider from "../../components/RangeSlider.js/RangeSlider";
import colors from "../../utils/color";

const Filter = (props) => {
  const {
    setPrice,
    size,
    setSize,
    color,
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
  const colorArray = Object.keys(colors);

  return (
    <div>
      <h1 className="Montserrat-b mb-6 text-[#202124]">Filter</h1>
      <div>
        {/* Size */}
        <div
          onClick={() => setSizeState((state) => !state)}
          className="flex justify-between items-center cursor-pointer"
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
              className={`${
                size === "S" && " bg-[#ec6c11]"
              } text-white transition-all duration-500 ease-in-out font-bold filter-size Montserrat-m bg-[#ffa15f] hover:bg-[#ec6c11]`}
            >
              S
            </div>
            <div
              onClick={() => setSize("M")}
              className={`${
                size === "M" ? "bg-[#ec6c11] " : "opacity-60"
              } text-[#202124] transition-all duration-500 ease-in-out font-normal filter-size Montserrat-m border-[#808080] hover:bg-[#ec6c11]`}
            >
              M
            </div>
            <div
              onClick={() => setSize("L")}
              className={`${
                size === "L" ? "bg-[#ec6c11]" : "text-opacity-30"
              } text-[#4d4d4d]  transition-all duration-500 ease-in-out font-bold  filter-size Montserrat-m border-[#d4d3d3] hover:bg-[#ec6c11]`}
            >
              L
            </div>
          </div>
        )}
        <hr className="text-[#979797]" />

        {/* Color */}
        <div
          onClick={() => setColorState((state) => !state)}
          className="flex justify-between items-center cursor-pointer"
        >
          <p className="Montserrat-m font-normal py-2">Color</p>
          <img
            className={`${colorState && "transform rotate-180"} opacity-60 `}
            src="/img/arrow.svg"
            alt="arrow"
          />
        </div>
        {colorState && (
          <div className="flex  pt-3  border-t border-dashed border-[#cccccc] border-opacity-50 flex-wrap flex-row">
            {colorArray?.map((item) => {
              const active = item === color;
              return (
                <div
                  key={item}
                  onClick={() => setColor(item)}
                  className={`filter-color ${active && "scale-150"} ${
                    colors[item]
                  } cursor-pointer mb-4 transition-scale duration-500 ease-in-out`}
                />
              );
            })}
          </div>
        )}
        <hr className="bg-[#979797]" />

        {/* Brand */}
        <div
          onClick={() => setBrandState((state) => !state)}
          className="flex justify-between items-center cursor-pointer"
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
              value="H-M"
              name="brand"
              title="H&M"
            />
            <FilterCheckbox
              brand={brand}
              setBrand={setBrand}
              value="Pull-Bear"
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
          className="flex justify-between items-center cursor-pointer"
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
            <RangeSlider setPrice={setPrice} min="0" max="300" />
          </div>
        )}
        <hr className="text-[#979797]" />

        {/* Available */}
        <div
          onClick={() => setAvailableState((state) => !state)}
          className="flex justify-between items-center cursor-pointer"
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
