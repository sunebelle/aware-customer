import React from "react";

const Button = ({ label, btnDisabled, type, handleChange }) => {
  const isActive = !btnDisabled
    ? "bg-[#ffa15f] cursor-pointer "
    : "cursor-not-allowed bg-[#d4d3d3] ";
  return (
    <button
      type={type}
      onChange={handleChange}
      disabled={btnDisabled}
      className={`${isActive} w-full px-4 py-2 mb-8 Montserrat-m font-bold text-white`}
    >
      {label}
    </button>
  );
};

export default Button;
