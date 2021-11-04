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
  bgColor,
}) => {
  const showPasswordHint =
    (value !== "" && !isValid) || (!isValid && errorMessage);
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
          errorMessage && !isValid
            ? "border-[#f63f45] border bg-[#f63f45] bg-opacity-5 "
            : bgColor
            ? "bg-[#ffffff] border-none"
            : isValid
            ? "bg-[#f6f6f6]  border-[#b7b7b7] border "
            : "bg-[#f6f6f6] border-none"
        } w-full my-1 px-5 py-2.5 Montserrat-m text-[#4d4d4d] font-medium  focus:outline-none `}
        placeholder={placeholder}
      />
      {/* bg-[rgba(246, 63, 69, 0.04)]: https://simplecss.eu/rgbatohex.html focus:outline-[#b7b7b7] */}

      {type !== "password" && (
        <p
          className={`${
            errorMessage && !isValid ? "opacity-100" : "opacity-0"
          } text-[#f63f45] Montserrat font-medium leading-5 text-xs`}
        >
          {errorMessage ? errorMessage : "Please enter a valid input"}
        </p>
      )}
      {type === "password" && showPasswordHint ? (
        <p
          className={`${errorMessage && !isValid && "text-[#f63f45]"} ${
            isValid && "opacity-0"
          } Montserrat font-medium leading-5 text-xs`}
        >
          {errorMessage
            ? errorMessage
            : "Your passwords must be more than 6 characters!"}
        </p>
      ) : (
        type === "password" && (
          <p className="Montserrat font-medium leading-5 text-xs opacity-0">
            Your passwords must be more than 6 characters!
          </p>
        )
      )}
    </>
  );
};

export default Input;
