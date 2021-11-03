import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../Product/CardItem";
import Loader from "../../components/Loader/Loader";
import { useLocation } from "react-router";
import { getAllProductsBySearch } from "../../actions/product";

const SearchProduct = () => {
  const { products } = useSelector((state) => state.product);
  const { isLoading } = useSelector((state) => state.ui);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchQuery = location?.search.replaceAll("?name=", "");
    dispatch(getAllProductsBySearch(searchQuery));
  }, [location?.search, dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="w-full flex items-center justify-center h-[344px]">
          <Loader />
        </div>
      ) : products.length === 0 ? (
        <div className="w-full flex items-center justify-center  h-[344px]">
          <p className="Montserrat-m font-normal text-[#b7b7b7]">
            No result found
          </p>
        </div>
      ) : (
        <div className="grid-container--fill w-full">
          {products?.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product.name.replaceAll(" ", "-")}.${
                product._id
              }`}
            >
              <CardItem product={product} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchProduct;
