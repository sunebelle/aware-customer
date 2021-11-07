import React from "react";
import numeral from "numeral";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import { Link } from "react-router-dom";

const CardItem = ({ product, category }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = () => {
    const addedProduct = {
      ...product,
      amount: 1,
      color: product.color[0],
      size: product.size[0],
      category: category ? category : product.category[0].name,
    };
    // console.log(addedProduct);
    dispatch(cartActions.add(addedProduct));
  };
  return (
    //  overflow-hidden
    <div className="w-[180px] cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out">
      <div className="relative h-[269px] w-full quick-shop-container  cursor-pointer mb-2 ">
        <img
          className=" w-full h-full object-fill "
          src={product.imageCover}
          alt={product.name}
        />
        {product.quantity >= 1 && (
          <div // transition-all duration-500 ease-in-out
            onClick={handleAddProductToCart}
            className=" quick-shop cursor-pointer bg-[#ffa15f] absolute bottom-0 w-full"
          >
            <span className="Montserrat-m font-medium text-white py-4 flex justify-center items-center">
              + Quick shop
            </span>
          </div>
        )}
        {product.quantity < 1 && (
          <p className="absolute  bottom-2 -left-1 Montserrat text-xs text-white px-1 bg-[#808080] font-bold leading-6">
            Sold out
          </p>
        )}
      </div>
      <Link
        to={{
          pathname: `/product/${product.name.replaceAll(" ", "-")}.${
            product._id
          }`,
          state: { category },
        }}
      >
        <div>
          <h2 className="Montserrat font-medium line-clamp-2 text-sm leading-[1.43rem] text-[#202124]">
            {product.name}
          </h2>
          <h2 className="Montserrat font-medium line-clamp-1 text-sm leading-[1.43rem] text-[#202124]">
            {category ? category : product.category[0].name}
          </h2>
          <p className="Montserrat-s font-normal text-[#4d4d4d]">
            {numeral(product.price).format("$0,0.00")}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
