import React, { useState } from "react";

const Dropdown = () => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const [selected, setSelected] = useState({ title: "Popularity" });

  const listOptions = [
    { title: "Popularity" },
    { title: "Name: A - Z" },
    { title: "Price: lowest to highest" },
    { title: "Price: highest to lowest" },
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setShowDropdownMenu(false);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setShowDropdownMenu((state) => !state)}
        className="flex cursor-pointer justify-between py-1 pl-3 items-center w-60 bg-[#f6f6f6] border border-[#b7b7b7] border-opacity-50 bg-opacity-50"
      >
        <p className="Montserrat-s text-[#4d4d4d]">
          Sort By:{" "}
          <strong className="Montserrat text-[#202124] font-bold text-xs leading-6">
            {selected.title}
          </strong>
        </p>
        <img
          className={`${showDropdownMenu && "transform rotate-180"}`}
          src="/img/arrow.svg"
          alt="arrow"
        />
      </div>
      {showDropdownMenu && (
        <ul className="absolute  z-50 top-9 w-60 shadow-lg bg-[#fbfbfb] border border-[#eaeaea] border-opacity-50">
          {/* w-44 */}
          {listOptions?.map((option, i) => {
            const active = option.title === selected.title;
            return (
              <div key={i} onClick={() => handleSelect(option)}>
                <li
                  className={`${
                    active && "bg-[#FFE699]"
                  } Montserrat-s text-[#4d4d4d] font-medium p-2 cursor-pointer`}
                >
                  {option.title}
                </li>
                <hr className="text-[#ececec]" />
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
