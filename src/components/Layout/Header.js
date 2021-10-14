import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(uiActions.showRegisteredModal());
    history.push("/register");
  };
  const handleLoggedIn = () => {
    dispatch(uiActions.showLoggedInModal());
    history.push("/login");
  };

  return (
    <>
      <div className="flex flex-rows pt-5 px-4 lg:px-10 xl:px-20 pb-2  justify-between items-center">
        <div className="border rounded-full border-[#b7b7b7] flex h-8 px-2 items-center">
          <input
            className="focus:outline-none Montserrat-m font-normal border-none flex-grow placeholder-[#cccccc]"
            type="text"
            placeholder="search"
          />
          <img className="opacity-60" src="/img/search.svg" alt="search" />
        </div>
        <img src="/img/logo.svg" alt="logo" />
        <div className="flex flex-row justify-between Montserrat-m font-normal space-x-4">
          <button onClick={handleRegister} className=" text-[#4d4d4d]">
            Register
          </button>
          <button
            onClick={handleLoggedIn}
            className="w-28 h-8 Montserrat-m font-normal rounded-full border text-[#ffa15f] border-[#ffa15f]"
          >
            Log in
          </button>
          <div className="relative">
            <img className="w-full h-full" src="/img/cart.svg" alt="cart" />
            <span className="absolute right-0 top-0 w-4 h-4 Montserrat-s text-center text-white font-medium  rounded-full bg-[#ffa15f]">
              7
            </span>
          </div>
        </div>
      </div>
      <div className="flex whitespace-nowrap border-t border-b border-[#ececec] space-x-2 py-2 justify-center items-center">
        <div className="flex">
          <span className="Montserrat-m font-medium text-[#202124]">Men</span>
          <img src="/img/arrow.svg" alt="arrow" />
        </div>
        <div className="flex">
          <span className="Montserrat-m font-medium text-[#202124]">
            Ladies
          </span>
          <img src="/img/arrow.svg" alt="arrow" />
        </div>
        <div className="flex">
          <span className="Montserrat-m font-medium text-[#202124]">Girls</span>
          <img src="/img/arrow.svg" alt="arrow" />
        </div>
        <div className="flex">
          <span className="Montserrat-m font-medium text-[#202124]">Boys</span>
          <img src="/img/arrow.svg" alt="arrow" />
        </div>
      </div>
    </>
  );
};

export default Header;
