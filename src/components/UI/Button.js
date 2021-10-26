import React from "react";

const Button = ({
  label,
  btnDisabled,
  type,
  handleChange,
  redBgColor,
  textNormal,
  addCSS,
}) => {
  // const isActive = !btnDisabled
  //   ? "bg-[#ffa15f] cursor-pointer "
  //   : "cursor-not-allowed bg-[#d4d3d3] ";
  const isActive = !btnDisabled
    ? redBgColor
      ? "bg-[#ff5f6d] cursor-pointer "
      : "bg-[#ffa15f] cursor-pointer "
    : "cursor-not-allowed bg-[#d4d3d3]  ";

  const fontWeight = textNormal ? "font-semibold" : "font-bold";
  return (
    <button
      type={type}
      onChange={handleChange}
      disabled={btnDisabled}
      className={`${isActive} ${fontWeight} ${addCSS} w-full px-4 py-2 Montserrat-m  text-white`}
    >
      {label}
    </button>
  );
};

export default Button;
