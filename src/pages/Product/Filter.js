import React, { useState } from "react";

const Filter = () => {
  const [size, setSize] = useState(false);
  const [color, setColor] = useState(false);
  const [brand, setBrand] = useState(false);
  const [price, setPrice] = useState(false);
  const [available, setAvailable] = useState(false);
  return (
    <div>
      <h1 className="Montserrat-b mb-4 text-[#202124]">Filter</h1>
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
        {size && <h1> choose the size here</h1>}
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
        {color && <h1> choose the color here</h1>}
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
        {brand && <h1> choose the brand here</h1>}
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
        {price && <h1> choose the price here</h1>}
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
        {available && <h1> choose the available here</h1>}

        <hr className="text-[#979797]" />
      </div>
    </div>
  );
};

export default Filter;
