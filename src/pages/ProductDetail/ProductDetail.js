import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouteMatch } from "react-router";
import numeral from "numeral";
import Review from "./Review";
import SimilarItem from "./SimilarItem";
import RatingStar from "../../components/RatingStar/RatingStar";
import { getAProduct, getSimilarBrandProducts } from "../../actions/product";
import Loader from "../../components/Loader/Loader";
import { uiActions } from "../../store/ui";
import { cartActions } from "../../store/cart";

const ProductDetail = () => {
  const { products } = useSelector((state) => state.product);
  const { isLoading } = useSelector((state) => state.ui);

  const [showImage, setShowImage] = useState("");
  const [amount, setAmount] = useState(3);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const params = useParams();
  // const match = useRouteMatch();
  const dispatch = useDispatch();
  const {
    categoryLocation: { title, categoryId },
    product,
    similarBrandProducts,
  } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAProduct(params.productId));
  }, [params.productId, dispatch]);

  useEffect(() => {
    dispatch(getSimilarBrandProducts(categoryId, product));
  }, [product, categoryId, dispatch]);

  const similarProducts = products?.filter(
    (product) => product._id !== params.productId
  );

  const handleMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const handleAdd = (quantity) => {
    // amount < quantity in stock
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
      const addedProduct = { ...product, color, size, amount };
      // console.log(addedProduct);
      dispatch(cartActions.add(addedProduct));
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
            {`${title} / ${product.name}`}
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
                <p className="Montserrat text-[#202124] text-2xl leading-6 font-light ">
                  {numeral(product.price).format("$0,0.00")}
                </p>
                <div className="pt-3 py-3 flex items-center">
                  <RatingStar
                    rating={product?.ratingsAverage}
                    setRating={() => {}}
                    setHover={() => {}}
                  />

                  <span className="text-[#979797] px-2">|</span>
                  {/* <div className=" px-2 opacity-50 w-[2px] h-[18px] border border-[#979797]" /> */}
                  <span className="Montserrat-s font-normal text-[#202124]">
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
                      className="text-white font-bold filter-size Montserrat-m bg-[#ffa15f] hover:bg-[#ec6c11]"
                    >
                      S
                    </div>
                    <div
                      onClick={() => setSize("M")}
                      className="text-[#202124] font-normal filter-size Montserrat-m border-[#808080] hover:bg-[#808080]"
                    >
                      M
                    </div>
                    <div
                      onClick={() => setSize("L")}
                      className="text-[#4d4d4d] font-bold  filter-size Montserrat-m border-[#d4d3d3] hover:bg-[#d4d3d3]"
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
                    <div
                      onClick={() => setColor("red")}
                      className="bg-[#ff5f6d] filter-color "
                    />
                    <div
                      onClick={() => setColor("lightGold")}
                      className="bg-[#ffd543] filter-color"
                    />
                    <div
                      onClick={() => setColor("cornflower")}
                      className="bg-[#5f6dff]  filter-color "
                    />
                    <div
                      onClick={() => setColor("orange")}
                      className="bg-[#ffa15f] filter-color "
                    />
                    <div
                      onClick={() => setColor("charcoalGrey")}
                      className="bg-[#3d3d3f] filter-color "
                    />
                    <div
                      onClick={() => setColor("white")}
                      className="bg-[#ededed]  filter-color "
                    />
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
                    // className="my-7 w-[429px] h-[50px] bg-[#5f6dff] shadow-sm text-white Montserrat-b"
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
                      similarBrandProducts
                        .slice(0, 4)
                        .map((product) => (
                          <img
                            key={product._id}
                            className="w-20 h-[114px]"
                            src={product.imageCover}
                            alt={product.name}
                          />
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
          <div className="flex w-full items-center flex-nowrap">
            <div className=" w-[80px] h-[2px]  border border-[#979797] opacity-50" />
            <h2 className="px-4"> You may also like </h2>
            <div className=" flex-grow h-[2px] border border-[#979797] opacity-50" />
          </div>
          <SimilarItem similarProducts={similarProducts} />
        </div>
      )}
    </div>
  );
};
// };

export default ProductDetail;
