import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logUserOut } from "../../actions/auth";
import Baskets from "../Layout/Baskets";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.product);
  const { items } = useSelector((state) => state.cart);
  const [openUserSetting, setOpenUserSetting] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);
  const [search, setSearch] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && search.trim()) {
      history.push(`/products/search?name=${search}`);
      setSearch("");
      // dispatch(getAllProductsBySearch(search));
    }
  };

  const handleRegister = () => {
    dispatch(uiActions.showRegisteredModal());
  };
  const handleLoggedIn = () => {
    dispatch(uiActions.showLoggedInModal());
  };
  const handleLogout = () => {
    setOpenUserSetting(false);
    dispatch(logUserOut());
  };

  const handleAccountSetting = () => {
    setOpenUserSetting(false);
    history.push("/user/account-setting");
  };

  return (
    <div>
      <div className="grid relative grid-cols-3 pt-5 px-4 lg:px-10 xl:px-20 2xl:px-30 pb-3  justify-between items-center">
        <div className="border rounded-full w-56 border-[#b7b7b7] flex h-8 px-2 items-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={handleKeyPress}
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
        <div className="flex flex-row items-center justify-end Montserrat-m font-normal space-x-5">
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
              src="https://tse3.mm.bing.net/th?id=OIP.7Di12Twz-DxGVwkxvs7snQHaHa&pid=Api&P=0&w=300&h=300"
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
            className="relative cursor-pointer flex mt-1"
          >
            <img className="w-full h-full" src="/img/cart.svg" alt="cart" />
            {items.length > 0 && (
              <div className="absolute -right-1 -top-1.5  Montserrat-s text-white font-medium text-center w-[18px] h-[18px] rounded-full bg-[#ffa15f] ">
                <span className="pb-2 ">{items?.length}</span>
              </div>

              /* <div className="absolute right-0 top-0 w-[18px] h-[18px] Montserrat-s text-center items-center text-white font-medium  rounded-full bg-[#ffa15f]">
                <span className="text-center pb-1">{items?.length}</span>
              </div> */
            )}
          </div>
        </div>
        {items.length > 0 && openBasket && (
          <div className="absolute top-16 z-50 right-0 px-4 lg:px-10 xl:px-20">
            <Baskets setOpenBasket={setOpenBasket} />
          </div>
        )}
      </div>

      <div className="relative  border-t border-b border-[#ececec] flex space-x-3 flex-nowrap justify-center items-center ">
        {/* show account setting on click */}
        <div
          onMouseLeave={() => setOpenUserSetting(false)}
          onMouseEnter={() => setOpenUserSetting(true)}
          className={` ${
            openUserSetting ? "visible" : "invisible"
          } absolute z-10 top-0 right-[122px] w-44 flex-start shadow-lg bg-[#fbfbfb] border border-[#eaeaea] flex flex-col p-2 space-y-2`}
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

        {categories?.map((item) => (
          <React.Fragment key={item._id}>
            <div
              key={item._id}
              className=" category-container py-2 flex z-10 cursor-pointer "
            >
              <span className="Montserrat-m font-medium text-[#202124]">
                {item.name}
              </span>
              <img src="/img/arrow.svg" alt="arrow" />
            </div>

            <div className="categories w-full">
              <div className=" category-content space-x-8 ">
                {item?.categories?.map((category) => (
                  <Link
                    key={category._id}
                    to={`/${item.name}/${category.name}/products`}
                    // to={`/${item.name}/${category.name}.${category._id}/products`}
                  >
                    <span
                      key={category._id}
                      className="Montserrat-m font-normal text-[#202124] cursor-pointer"
                    >
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Header;
