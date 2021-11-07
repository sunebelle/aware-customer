import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import numeral from "numeral";
import Review from "./Review";
import SimilarItem from "./SimilarItem";
import RatingStar from "../../components/RatingStar/RatingStar";
import {
  getAProduct,
  getSimilarBrandProducts,
  getAllSimilarProducts,
} from "../../actions/product";
import Loader from "../../components/Loader/Loader";
import { uiActions } from "../../store/ui";
import { cartActions } from "../../store/cart";
import colors from "../../utils/color";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { product, categories, similarBrandProducts, similarProducts } =
    useSelector((state) => state.product);
  const { isLoading } = useSelector((state) => state.ui);

  const [showImage, setShowImage] = useState("");
  const [amount, setAmount] = useState(3);
  const [color, setColor] = useState("cornflower");
  const [size, setSize] = useState("S");
  const [parentName, setParentName] = useState("");
  const [subName, setSubName] = useState("");
  const colorArray = Object.keys(colors);
  const location = useLocation();
  const dispatch = useDispatch();
  const pathname = location.pathname;
  const subCategoryName = location?.state?.category; //props from link (Products component)
  const productId = pathname.substr(pathname.indexOf(".") + 1, pathname.length);

  useEffect(() => {
    dispatch(getAProduct(productId));
    setShowImage("");
    setColor("cornflower");
    setSize("S");
  }, [productId, dispatch]);

  useEffect(() => {
    if (product) {
      setSubName(product.category[0].name);
      const categoryId = product.category[0].parentId;
      // dispatch(getAllProducts(categoryId));
      dispatch(getAllSimilarProducts(categoryId));
      dispatch(getSimilarBrandProducts(categoryId, product));

      const categoryParent = categories?.find((category) =>
        category.categories.find((item) => item._id === categoryId)
      );
      if (categoryParent) {
        setParentName(categoryParent.name);
      }
    }
  }, [product, dispatch, categories]);

  const similarProductsArray = similarProducts?.filter(
    (product) => product._id !== productId
  );

  const handleMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const handleAdd = (quantity) => {
    if (amount < quantity) {
      setAmount(amount + 1);
    }
  };

  let isProductValid = false;
  if (size && color) {
    isProductValid = true;
  }

  const handleAddProductToCart = () => {
    if (!isProductValid) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: "Please choose a color and a size",
        })
      );
    } else {
      const addedProduct = {
        ...product,
        color,
        size,
        amount,
        category: subCategoryName ? subCategoryName : subName,
      };
      dispatch(cartActions.add(addedProduct));
      dispatch(
        uiActions.showNotification({
          status: "success",
          message: "Successfully added to cart",
        })
      );
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className="w-full flex items-center justify-center  h-[344px]">
          <Loader />
        </div>
      ) : !product ? (
        <div> Found no product</div>
      ) : (
        <div>
          <h2 className=" pb-8 text-center Montserrat-m font-normal text-[#202124]">
            {`${parentName && `${parentName} / `}  ${
              subCategoryName ? subCategoryName : subName
            } / ${product.name}`}
          </h2>
          <div className="flex flex-row space-x-8">
            <div className=" flex flex-row space-x-5">
              <div className="flex flex-col space-y-6">
                {product.images?.map((img, i) => (
                  <img
                    onClick={() => setShowImage(img)}
                    key={i}
                    className="w-20 h-[116px]"
                    src={img}
                    alt="product cover"
                  />
                ))}
              </div>
              <div className="flex-grow">
                <img
                  className="w-[379px] h-[537px] object-fill"
                  src={showImage ? showImage : product.imageCover}
                  alt="product cover"
                />
              </div>
            </div>
            <div className="pl-8 flex flex-row justify-between flex-grow">
              <div className="flex-col flex flex-grow">
                <h1 className="Montserrat font-medium text-[#202124] text-2xl leading-6">
                  {product.name}
                </h1>
                <p className="Montserrat text-[#202124] mt-[6px] text-2xl leading-6 font-light ">
                  {numeral(product.price).format("$0,0.00")}
                </p>
                <div className="pt-2 pb-3 flex items-center text-center">
                  <RatingStar
                    rating={product?.ratingsAverage}
                    setRating={() => {}}
                    setHover={() => {}}
                  />
                  <span className="text-[#979797] px-2">|</span>
                  <span className="Montserrat-s font-normal pt-2 text-[#202124]">
                    {product?.ratingsQuantity} Review
                  </span>
                </div>
                <div>
                  <p className="Montserrat-m text-[#202124] font-medium py-2">
                    Size
                  </p>
                  <div className="flex flex-row space-x-4 ">
                    <div
                      onClick={() => setSize("S")}
                      className={`${
                        size === "S" && " bg-[#ec6c11]"
                      } text-white transition-all duration-500 ease-in-out font-bold filter-size Montserrat-m bg-[#ffa15f] hover:bg-[#ec6c11]`}
                    >
                      S
                    </div>
                    <div
                      onClick={() => setSize("M")}
                      className={`${
                        size === "M" ? "bg-[#ec6c11] " : "opacity-60"
                      } text-[#202124] transition-all duration-500 ease-in-out font-normal filter-size Montserrat-m border-[#808080] hover:bg-[#ec6c11]`}
                    >
                      M
                    </div>
                    <div
                      onClick={() => setSize("L")}
                      className={`${
                        size === "L" ? "bg-[#ec6c11]" : "text-opacity-30"
                      } text-[#4d4d4d]  transition-all duration-500 ease-in-out font-bold  filter-size Montserrat-m border-[#d4d3d3] hover:bg-[#ec6c11]`}
                    >
                      L
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="Montserrat-m text-[#202124] font-medium py-2">
                    Color
                  </p>
                  <div className=" flex flex-nowrap mb-4">
                    {colorArray?.map((item) => {
                      const active = item === color;
                      return (
                        <div
                          key={item}
                          onClick={() => setColor(item)}
                          className={`filter-color ${active && "scale-150"} ${
                            colors[item]
                          } cursor-pointer transition-scale duration-500 ease-in-out`}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-row mt-3">
                  <p className="Montserrat-m text-[#202124] font-medium py-2  mr-5">
                    Quantity
                  </p>
                  <div className="flex justify-center items-center border border-[#d4d3d3] px-4 py-2 space-x-4  Montserrat-m text-[#202124] font-medium">
                    {/* <button className="scale-x-150">-</button> */}
                    <img
                      className={`${amount <= 1 && "opacity-50"}`}
                      onClick={handleMinus}
                      src="/img/minus.svg"
                      alt="minus"
                    />
                    <span>{amount}</span>
                    <img
                      className={`${
                        amount >= product.quantity && "opacity-50"
                      }`}
                      onClick={() => handleAdd(product.quantity)}
                      src="/img/plus.svg"
                      alt="minus"
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleAddProductToCart}
                    className={`my-7 w-[429px] h-[50px] bg-[#5f6dff] shadow-sm text-white Montserrat-b ${
                      !isProductValid && "opacity-50"
                    }`}
                  >
                    Add to cart
                  </button>
                </div>
                <hr className="text-[#979797] w-[429px]" />
                <div className="items-end h-full flex text-[#202124] Montserrat-s">
                  <div className="flex flex-col">
                    <p className=" font-medium ">Model wearing size S</p>
                    <div className="flex flex-col font-normal">
                      <span>- Chest: 36”</span>
                      <span>- Length: 25.75”</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* More product from same brand */}
              <div className="flex flex-col ">
                <h2 className="Montserrat-m font-medium text-[#202124]">
                  More from
                </h2>
                <p className="Montserrat-m font-normal text-[#4d4d4d]">
                  {product.brand}
                </p>
                <div className="flex  items-end h-full">
                  <div className="flex flex-col space-y-2 ">
                    {similarBrandProducts.length > 0 &&
                      similarBrandProducts.slice(0, 4).map((product) => (
                        <Link
                          key={product._id}
                          to={{
                            pathname: `/product/${product.name.replaceAll(
                              " ",
                              "-"
                            )}.${product._id}`,
                            state: {
                              category: subCategoryName
                                ? subCategoryName
                                : subName,
                            },
                          }}
                        >
                          <img
                            className="w-20 h-[114px]"
                            src={product.imageCover}
                            alt={product.name}
                          />
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Review component */}
          <div className="flex w-full items-center mt-12">
            <div className=" w-[80px] h-[2px]  border border-[#979797] opacity-50" />
            <h2 className="px-4"> Reviews </h2>
            <div className=" flex-grow h-[2px] border border-[#979797] opacity-50" />
          </div>
          <Review product={product} />

          {/* you may also like component */}
          {similarProductsArray.length > 0 && (
            <div className="flex w-full items-center flex-nowrap">
              <div className=" w-[80px] h-[2px]  border border-[#979797] opacity-50" />
              <h2 className="px-4"> You may also like </h2>
              <div className=" flex-grow h-[2px] border border-[#979797] opacity-50" />
            </div>
          )}
          <SimilarItem
            category={subCategoryName ? subCategoryName : subName}
            similarProducts={similarProductsArray}
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
