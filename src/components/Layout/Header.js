import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logUserOut } from "../../actions/auth";
import {
  getAllCategories,
  getAllProductsBySearch,
} from "../../actions/product";
import Baskets from "../Layout/Baskets";
import { productActions } from "../../store/product";

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
      dispatch(getAllProductsBySearch(search));
      history.push(`/products/search?name=${search}`);
    }
  };

  // console.log(JSON.parse(localStorage.getItem("profile")));
  const handleRegister = () => {
    dispatch(uiActions.showRegisteredModal());
    // history.push("/register");
  };
  const handleLoggedIn = () => {
    dispatch(uiActions.showLoggedInModal());
    // history.push("/login");
  };
  const handleLogout = () => {
    setOpenUserSetting(false);
    dispatch(logUserOut());
    // history.push("/");
  };

  const handleAccountSetting = () => {
    setOpenUserSetting(false);
    history.push("/user/account-setting");
  };

  const handleCategoryId = (name, categoryId, category) => {
    // history.push(`/categories/${category}.${categoryId}/products`);
    dispatch(
      productActions.getCategoryInfo({
        categoryId,
        title: `${name} / ${category}`,
        pathname: `/${name}/${category}`,
        // pathname: `/categories/${category}.${categoryId}`,
        // pathname: `${category}.${categoryId}`,
      })
    );
    history.push(`/${name}/${category}/products`);
  };
  return (
    <div>
      <div className="grid relative grid-cols-3 pt-5 px-4 lg:px-10 xl:px-20 pb-2  justify-between items-center">
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
            {items.length > 0 && (
              <span className="absolute right-0 top-0 w-4 h-4 Montserrat-s text-center text-white font-medium  rounded-full bg-[#ffa15f]">
                {items?.length}
              </span>
            )}
          </div>
        </div>
        {items.length > 0 && openBasket && (
          <div className="absolute top-16 z-50 right-0 px-4 lg:px-10 xl:px-20">
            <Baskets setOpenBasket={setOpenBasket} />
          </div>
        )}
      </div>

      <div className="relative  border-t border-b border-[#ececec] flex space-x-3 justify-center items-center">
        {/* show account setting on click */}

        <div
          onMouseLeave={() => setOpenUserSetting(false)}
          onMouseEnter={() => setOpenUserSetting(true)}
          className={` ${
            openUserSetting ? "visible" : "invisible"
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

        {categories?.map((item) => (
          <div
            key={item._id}
            className=" relative flex justify-center items-center"
          >
            <div className=" category-container py-2 flex z-10 cursor-pointer ">
              <span className="Montserrat-m font-medium text-[#202124]">
                {item.name}
              </span>
              <img src="/img/arrow.svg" alt="arrow" />
            </div>

            <div className="categories  ">
              <div className=" category-content space-x-8 ">
                {item?.categories?.map((category) => (
                  <span
                    key={category._id}
                    onClick={() =>
                      handleCategoryId(item.name, category._id, category.name)
                    }
                    className="Montserrat-m font-normal text-[#202124] cursor-pointer"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;

{
  /* <Link
                    key={category._id}
                    to={`/categories/${category.name}.${category._id}/products`}
                  >
                    <span
                      // key={category._id}
                      // onClick={() =>
                      //   handleCategoryId(item.name, category._id, category.name)
                      // }
                      className="Montserrat-m font-normal text-[#202124] cursor-pointer"
                    >
                      {category.name}
                    </span>
                  </Link> */
}
