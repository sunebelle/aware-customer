import React from "react";

const FilterCheckbox = ({
  brand,
  setBrand,
  available,
  setAvailable,
  value,
  name,
  title,
}) => {
  const handleCheck = (event) => {
    if (name === "brand") {
      setBrand(event.target.value);
    } else if (name === "available") {
      setAvailable(event.target.value);
    }
  };

  return (
    <div className="flex justify-between w-full box-border items-center bg-[#fafafa] p-2">
      <p
        className={`${
          // brand === value || defaultChecked
          brand === value || available === value
            ? "font-semibold text-[#ffa15f]"
            : "font-normal text-[#4d4d4d]"
        } Montserrat-m `}
      >
        {title}
      </p>
      <label className="checkbox-container pr-4">
        <input
          type="radio"
          onChange={handleCheck}
          // onChange={(e) => setBrand(e.target.value)}
          checked={brand === value || available === value}
          name={name}
          value={value}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default FilterCheckbox;
