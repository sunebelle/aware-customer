import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useRouteMatch } from "react-router";
import numeral from "numeral";
import { uiActions } from "../../store/ui";
import api from "../../axios";
import Review from "./Review";
import SimilarItem from "./SimilarItem";

// import StarRateIcon from "@material-ui/icons/StarRate";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const params = useParams();
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async (id) => {
      //   setIsLoading(true);
      dispatch(uiActions.showLoader());
      try {
        const {
          data: { data },
        } = await api.get(`/products/${id}`);
        dispatch(uiActions.hideLoader());

        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct(params.productId);
  }, [params.productId, dispatch]);

  //   console.log(match);
  console.log(product);

  if (!product) {
    return <div> Found no product</div>;
  } else {
    return (
      <div>
        <h2 className=" pb-8 text-center Montserrat-m font-normal text-[#202124]">
          Ladies / Dresses / {product.name}
        </h2>
        <div className="flex flex-row space-x-8">
          <div className=" flex flex-row space-x-5">
            <div className="flex flex-col space-y-6">
              <img
                className="w-20 h-[116px]"
                src={product.imageCover}
                alt="product cover"
              />
              <img
                className="w-20 h-[116px]"
                src={product.imageCover}
                alt="product cover"
              />
              <img
                className="w-20 h-[116px]"
                src={product.imageCover}
                alt="product cover"
              />
              <img
                className="w-20 h-[116px]"
                src={product.imageCover}
                alt="product cover"
              />
            </div>
            <div className="flex-grow">
              <img
                className="w-[379px] h-[537px]"
                src={product.imageCover}
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
                <div className="flex flex-row">
                  <img
                    className="text-red-500"
                    src="/img/star.svg"
                    alt="star"
                  />
                  <img
                    className="text-red-500"
                    src="/img/star.svg"
                    alt="star"
                  />
                </div>
                <span className="text-[#979797] px-2">|</span>
                {/* <div className=" px-2 opacity-50 w-[2px] h-[18px] border border-[#979797]" /> */}
                <span className="Montserrat-s font-normal text-[#202124]">
                  0 Review
                </span>
              </div>
              <div>
                <p className="Montserrat-m text-[#202124] font-medium py-2">
                  Size
                </p>
                <div className="flex flex-row space-x-4 ">
                  <div className="text-white font-bold filter-size Montserrat-m bg-[#ffa15f] hover:bg-[#ec6c11]">
                    S
                  </div>
                  <div className="text-[#202124] font-normal filter-size Montserrat-m border-[#808080] hover:bg-[#808080]">
                    M
                  </div>
                  <div className="text-[#4d4d4d] font-bold  filter-size Montserrat-m border-[#d4d3d3] hover:bg-[#d4d3d3]">
                    L
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p className="Montserrat-m text-[#202124] font-medium py-2">
                  Color
                </p>
                <div className=" flex flex-nowrap">
                  <div className="bg-[#ff5f6d] h-[30px] w-[30px] hover:scale-150 cursor-pointer rounded-full mr-4 mb-4" />
                  <div className="bg-[#ffd543] bg-opacity-40 h-[30px] w-[30px]  hover:scale-150 cursor-pointer rounded-full mr-4 mb-4" />
                  <div className="bg-[#5f6dff]  bg-opacity-40 h-[30px] w-[30px] hover:scale-150  cursor-pointer rounded-full mr-4 mb-4" />
                  <div className="bg-[#ffa15f] bg-opacity-40  h-[30px] w-[30px] hover:scale-150 cursor-pointer rounded-full mr-4 mb-4" />
                  <div className="bg-[#3d3d3f] bg-opacity-40  h-[30px] w-[30px] hover:scale-150 cursor-pointer rounded-full mr-4 " />
                  <div className="bg-[#ededed]  bg-opacity-40 h-[30px] w-[30px]  hover:scale-150 cursor-pointer rounded-full " />
                </div>
              </div>
              <div className="flex flex-row mt-3">
                <p className="Montserrat-m text-[#202124] font-medium py-2  mr-5">
                  Quantity
                </p>
                <div className="flex justify-center align-center border border-[#d4d3d3] px-4 py-2 space-x-5  Montserrat-m text-[#202124] font-medium">
                  <button className="scale-150">-</button>
                  <span>3</span>
                  <button className="scale-150">+</button>
                </div>
              </div>
              {/* btnDisabled={!formIsValid} */}
              <div>
                <button className="my-7 w-[429px] h-[50px] bg-[#5f6dff] shadow-sm text-white Montserrat-b">
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
              <p className="Montserrat-m font-normal text-[#4d4d4d]">Zara</p>
              <div className="flex  items-end h-full">
                <div className="flex flex-col space-y-2">
                  <img
                    className="w-20 h-[114px]"
                    src={product.imageCover}
                    alt="product cover"
                  />
                  <img
                    className="w-20 h-[114px]"
                    src={product.imageCover}
                    alt="product cover"
                  />
                  <img
                    className="w-20 h-[114px]"
                    src={product.imageCover}
                    alt="product cover"
                  />
                  <img
                    className="w-20 h-[114px]"
                    src={product.imageCover}
                    alt="product cover"
                  />
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
        <Review />

        {/* you may also like component */}
        <div className="flex w-full items-center flex-nowrap">
          <div className=" w-[80px] h-[2px]  border border-[#979797] opacity-50" />
          <h2 className="px-4"> You may also like </h2>
          <div className=" flex-grow h-[2px] border border-[#979797] opacity-50" />
        </div>
        <SimilarItem />
      </div>
    );
  }
};

export default ProductDetail;
