import React from "react";
import { Link } from "react-router-dom";

const SimilarItem = ({ similarProducts, category }) => {
  return (
    <div className="inline-flex flex-nowrap w-full mt-5 mb-7  overflow-x-auto scrollbar-thumb-rounded-lg scrollbar-w-1 scrollbar-thumb-gray-200  space-x-5">
      {/* Single product */}
      {similarProducts.length > 0 &&
        similarProducts.map((product) => (
          <Link
            key={product._id}
            to={{
              pathname: `/product/${product.name.replaceAll(" ", "-")}.${
                product._id
              }`,
              state: { category },
            }}
          >
            <div className=" flex flex-col w-[130px]">
              <div className="w-[130px] h-[194px]">
                <img
                  className="w-full h-full object-cover"
                  src={product.imageCover}
                  alt="product cover"
                />
              </div>
              <p className="Montserrat line-clamp-1 font-medium text-xs leading-snug text-[#4d4d4d] pt-1 ">
                {product.name}
              </p>
              <p className="Montserrat line-clamp-1 pb-1 leading-snug font-medium text-xs text-[#4d4d4d] ">
                {category}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default React.memo(SimilarItem);
