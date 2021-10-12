import React from "react";

const Login = ({ closeModalHandler }) => {
  return (
    <div className="flex items-center justify-center flex-col w-[555px] relative shadow-lg">
      <img
        onClick={closeModalHandler}
        className="absolute top-2 right-2"
        src="/img/cross.svg"
        alt="cross"
      />
      <div className="px-20 py-4 w-full border-b">
        <h2 className=" text-center Montserrat font-bold text-3xl leading-5 p-8 text-[#202124]">
          Register
        </h2>
        <label className="uppercase Montserrat font-bold text-[#202124] text-xs leading-6">
          Name
        </label>
        <input
          type="text"
          className="w-full mb-3 mt-1 px-4 py-2 Montserrat-m text-[#4d4d4d] font-medium bg-[#f6f6f6] focus:outline-none"
          placeholder="Enter your name"
        />
        <label className="uppercase Montserrat font-bold text-[#202124] text-xs leading-6">
          Email
        </label>
        <input
          type="email"
          className="w-full mb-3 mt-1 px-4 py-2 Montserrat-m text-[#4d4d4d] font-medium bg-[#f6f6f6] focus:outline-none"
          placeholder="Enter your email"
        />
        <label className="uppercase Montserrat font-bold text-[#202124] text-xs leading-6">
          Password
        </label>
        <input
          type="password"
          className="w-full mb-3 mt-1 px-4 py-2 Montserrat-m text-[#4d4d4d] font-medium bg-[#f6f6f6] focus:outline-none"
          placeholder="Enter your password"
        />
        <p className="Montserrat-m font-normal text-[#202124] text-center py-8">
          By creating an account you agree to the {""}
          <span className="text-[#ff7413] font-bold pb-1 border-b border-[#ff7413]  ">
            Terms of Service
          </span>{" "}
          and {""}
          <span className="text-[#ff7413] font-bold pb-1 border-b border-[#ff7413] ">
            Privacy Policy
          </span>
        </p>
        <button className="w-full px-4 py-2 mb-8 bg-[#d4d3d3] Montserrat-m font-bold text-white">
          Register
        </button>
      </div>
      <p className="Montserrat-m text-[#4d4d4d] font-medium py-4">
        Do you have an account?{" "}
        <span className="text-[#ff7413] font-bold pb-1 border-b border-[#ff7413]  ">
          Log in
        </span>
      </p>
    </div>
  );
};

export default Login;
