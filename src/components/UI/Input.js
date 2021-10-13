import React from "react";

const Input = ({
  label,
  type,
  name,
  placeholder,
  handleBlur,
  handleChange,
  errorMessage,
  isValid,
  value,
}) => {
  return (
    <>
      <label className="uppercase Montserrat font-bold text-[#202124] text-xs leading-6">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        className={`${
          errorMessage && !isValid && "border-[#f63f45] border"
        } w-full my-1 px-4 py-2 Montserrat-m text-[#4d4d4d] font-medium bg-[#f6f6f6] focus:outline-[#b7b7b7]`}
        placeholder={placeholder}
      />
      <p
        className={`${
          errorMessage && !isValid ? "opacity-100" : "opacity-0"
        } text-[#f63f45] Montserrat font-medium leading-5 text-xs h-full`}
      >
        {errorMessage ? errorMessage : "Please enter a valid input"}
      </p>
      {/* mb-3 mt-1 */}
      {/* {errorMessage && !isValid && (
        <span className="text-[#f63f45] Montserrat font-medium leading-5 text-xs">
          {errorMessage}
        </span>
      )} */}
    </>
  );
};

export default Input;
