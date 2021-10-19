import React, { useState } from "react";

const FilterCheckbox = ({ title, defaultChecked }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex justify-between w-full box-border items-center bg-[#fafafa] p-2">
      <p
        className={`${
          checked || defaultChecked
            ? "font-semibold text-[#ffa15f]"
            : "font-normal text-[#4d4d4d]"
        } Montserrat-m `}
      >
        {title}
      </p>
      <label className="checkbox-container pr-4">
        <input
          type="checkbox"
          value={checked}
          onChange={(e) => setChecked(e.target.checked)}
          defaultChecked={defaultChecked}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};
// {/*Checked font-semibold text-[#ffa15f] */}

export default FilterCheckbox;
