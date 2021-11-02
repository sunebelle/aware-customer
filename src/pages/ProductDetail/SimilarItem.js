import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { getSimilarBrandProducts } from "../../actions/product";

const SimilarItem = ({ similarProducts, category }) => {
  // console.log("similar", similarProducts);
  // const {
  //   categoryLocation: { categoryId },
  //   product,
  //   similarBrandProducts,
  // } = useSelector((state) => state.product);

  // useEffect(() => {
  //   dispatch(getSimilarBrandProducts(categoryId, product));
  // }, [categoryId, product]);

  return (
    <div className="flex flex-row justify-between w-full mt-4 mb-7  overflow-x-auto scrollbar-thumb-rounded-lg scrollbar-w-1 scrollbar-thumb-gray-200  space-x-5">
      {/* Single product */}
      {similarProducts.length > 0 &&
        similarProducts.map((product) => (
          <Link
            to={{
              pathname: `/product/${product.name.replaceAll(" ", "-")}.${
                product._id
              }`,
              state: { category },
            }}
          >
            <div key={product._id} className=" flex flex-col w-[130px]">
              <div className="w-[130px] h-[194px]">
                <img
                  className="w-full h-full object-cover"
                  src={product.imageCover}
                  alt="product cover"
                />
              </div>
              <p className="Montserrat font-medium text-xs leading-5 text-[#4d4d4d] pt-1 ">
                {product.name}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default React.memo(SimilarItem);