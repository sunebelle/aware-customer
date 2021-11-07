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

  const isActive = !btnDisabled
    ? redBgColor
      ? "bg-[#ff5f6d] cursor-pointer "
      : "bg-[#ffa15f] cursor-pointer "
    : "cursor-not-allowed bg-[#d4d3d3]  ";

  const fontWeight = textNormal ? "font-semibold" : "font-bold";
  return (
    <button
      type={type}
      onClick={handleChange}
      disabled={btnDisabled}
      // className={`  ${isActive} ${fontWeight} ${addCSS} w-full px-4 py-3 Montserrat-m  text-white`}
      className={`  ${isActive} ${fontWeight} ${addCSS} w-full px-4 py-3 Montserrat-m  text-white  transition-opacity duration-500 ease-in opacity-80 hover:opacity-100`}
    >
      {label}
    </button>
  );
};

export default Button;
