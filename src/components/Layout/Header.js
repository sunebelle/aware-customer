import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logUserOut } from "../../actions/auth";
import { getAllCategories, getAllPatterns } from "../../actions/product";
import Baskets from "../Layout/Baskets";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { patterns } = useSelector((state) => state.product);
  const [openUserSetting, setOpenUserSetting] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);

  const handleRegister = () => {
    dispatch(uiActions.showRegisteredModal());
    history.push("/register");
  };
  const handleLoggedIn = () => {
    dispatch(uiActions.showLoggedInModal());
    history.push("/login");
  };
  const handleLogout = () => {
    dispatch(logUserOut());
    setOpenUserSetting(false);
    history.push("/");
  };

  const handleAccountSetting = () => {
    history.push("/user/account-setting");
    setOpenUserSetting(false);
  };
  useEffect(() => {
    dispatch(getAllPatterns());
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div>
      <div className="grid relative grid-cols-3 pt-5 px-4 lg:px-10 xl:px-20 pb-2  justify-between items-center">
        <div className="border rounded-full w-56 border-[#b7b7b7] flex h-8 px-2 items-center">
          <input
            className="focus:outline-none pl-2 Montserrat-m font-normal border-none flex-grow placeholder-[#cccccc]"
            type="text"
            placeholder="Search"
          />
          <img className="opacity-60" src="/img/search.svg" alt="search" />
        </div>
        <Link to="/">
          <div className="flex items-center justify-center cursor-pointer">
            <img src="/img/logo.svg" alt="logo" />
          </div>
        </Link>
        <div className="flex flex-row items-center justify-end Montserrat-m font-normal space-x-4">
          {!user && (
            <button onClick={handleRegister} className=" text-[#4d4d4d]">
              Register
            </button>
          )}
          {user ? (
            <img
              onClick={() => setOpenUserSetting((state) => !state)}
              className="h-7 w-7 rounded-full cursor-pointer"
              alt="avatar"
              src="https://tse1.mm.bing.net/th?id=OIP.v6pO-sfFocVZMFaKp64EGwHaEo&pid=Api&P=0&w=289&h=181"
            />
          ) : (
            <button
              onClick={handleLoggedIn}
              className="w-28 h-8 Montserrat-m font-normal rounded-full border text-[#ffa15f] border-[#ffa15f]"
            >
              Log in
            </button>
          )}
          <div
            onClick={() => setOpenBasket((state) => !state)}
            className="relative cursor-pointer"
          >
            <img className="w-full h-full" src="/img/cart.svg" alt="cart" />
            <span className="absolute right-0 top-0 w-4 h-4 Montserrat-s text-center text-white font-medium  rounded-full bg-[#ffa15f]">
              7
            </span>
          </div>
        </div>
        {openBasket && (
          <div className="absolute top-16 z-50 right-0 px-4 lg:px-10 xl:px-20">
            <Baskets />
          </div>
        )}
      </div>

      <div className=" whitespace-nowrap flex relative border-t border-b border-[#ececec] space-x-3  justify-center items-center">
        {/* show account setting on click */}
        <div
          className={` ${
            openUserSetting ? "opacity-100" : "opacity-0"
          } absolute z-10 top-0 right-28 w-44 flex-start shadow-lg bg-[#fbfbfb] border border-[#eaeaea] flex flex-col p-2 space-y-2`}
        >
          <p
            onClick={handleAccountSetting}
            className="Montserrat-s font-medium text-[#4d4d4d] cursor-pointer"
          >
            Account setting
          </p>
          <p
            onClick={handleLogout}
            className="Montserrat-s text-left font-medium text-[#4d4d4d] cursor-pointer"
          >
            Log out
          </p>
        </div>

        {/* Men && show menu */}
        <div className=" py-2 flex">
          <span className="Montserrat-m font-medium text-[#202124]">Men</span>
          <img src="/img/arrow.svg" alt="arrow" />
        </div>

        {/* Ladies && show menu */}
        <div className=" ladies-container py-2 relative flex z-10">
          <span className="Montserrat-m font-medium text-[#202124]">
            Ladies
          </span>
          <img src="/img/arrow.svg" alt="arrow" />
        </div>

        {/* show ladies menu */}
        <div className="ladies-menu  ">
          <div className=" ladies-content space-x-8 ">
            {patterns?.data?.map((type) => (
              <Link
                key={type._id}
                to={`/products?for=Ladies&type=${type.name}`}
              >
                <span className="Montserrat-m font-normal text-[#202124]">
                  {type.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Girls && show menu */}
        <div className="flex py-2">
          <span className="Montserrat-m font-medium text-[#202124]">Girls</span>
          <img src="/img/arrow.svg" alt="arrow" />
        </div>

        {/* Boys && show menu */}
        <div className="flex py-2">
          <span className="Montserrat-m font-medium text-[#202124]">Boys</span>
          <img src="/img/arrow.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Header;
