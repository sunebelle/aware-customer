import React from "react";

const SimilarItem = ({ similarProducts }) => {
  // console.log("similar", similarProducts);
  return (
    <div className="flex flex-row justify-between w-full mt-4 mb-7 overflow-x-auto scrollbar-thumb-rounded-sm  scrollbar-w-1 scrollbar-thumb-gray-400 scrollbar-track-gray-200 space-x-4">
      {/* Single product */}
      {similarProducts.length > 0 &&
        similarProducts.map((product) => (
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
        ))}
      {/* Single product */}
      <div className=" flex flex-col w-[130px]">
        <div className="w-[130px] h-[194px]">
          <img
            className="w-full h-full"
            src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
            alt="product cover"
          />
        </div>
        <p className="Montserrat font-medium text-xs leading-5 text-[#4d4d4d] pt-1 ">
          Collete Stretch Linen Minidress
        </p>
      </div>
      {/* Single product */}
      {/* <div className=" flex flex-col w-[130px]">
        <img
          className="w-full h-[194px]"
          src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
          alt="product cover"
        />
        <p className="Montserrat font-medium text-xs leading-5 text-[#4d4d4d] pt-1 ">
          Collete Stretch Linen Minidress
        </p>
      </div> */}
      {/* Single product */}
      {/* <div className=" flex flex-col w-[130px]">
        <img
          className="w-full h-[194px]"
          src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
          alt="product cover"
        />
        <p className="Montserrat font-medium text-xs leading-5 text-[#4d4d4d] pt-1 ">
          Collete Stretch Linen Minidress
        </p>
      </div> */}
      {/* Single product */}
      {/* <div className=" flex flex-col w-[130px]">
        <img
          className="w-full h-[194px]"
          src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
          alt="product cover"
        />
        <p className="Montserrat font-medium text-xs leading-5 text-[#4d4d4d] pt-1 ">
          Collete Stretch Linen Minidress
        </p>
      </div> */}
      {/* Single product */}
      {/* <div className=" flex flex-col w-[130px]">
        <img
          className="w-full h-[194px]"
          src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
          alt="product cover"
        />
        <p className="Montserrat font-medium text-xs leading-5 text-[#4d4d4d] pt-1 ">
          Collete Stretch Linen Minidress
        </p>
      </div> */}
      {/* Single product */}
      {/* <div className=" flex flex-col w-[130px]">
        <img
          className="w-full h-[194px]"
          src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
          alt="product cover"
        />
        <p className="Montserrat font-medium text-xs leading-5 text-[#4d4d4d] pt-1 ">
          Collete Stretch Linen Minidress
        </p>
      </div> */}
      {/* Single product */}
      {/* <div className=" flex flex-col w-[130px]">
        <img
          className="w-full h-[194px]"
          src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
          alt="product cover"
        />
        <p className="Montserrat font-medium text-xs leading-5 text-[#4d4d4d] pt-1 ">
          Collete Stretch Linen Minidress
        </p>
      </div> */}
      {/* Single product */}
      {/* <div className=" flex flex-col w-[130px]">
        <img
          className="w-full h-[194px]"
          src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
          alt="product cover"
        />
        <p className="Montserrat font-medium text-xs leading-5 text-[#4d4d4d] pt-1 ">
          Collete Stretch Linen Minidress
        </p>
      </div> */}
      {/* Single product */}
      {/* <div className=" flex flex-col w-[130px]">
        <img
          className="w-full h-[194px]"
          src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
          alt="product cover"
        />
        <p className="Montserrat font-medium text-xs leading-5 text-[#4d4d4d] pt-1 ">
          Collete Stretch Linen Minidress
        </p>
      </div> */}
      {/* Single product */}
      {/* <div className=" flex flex-col w-[130px]">
        <img
          className="w-full h-[194px]"
          src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
          alt="product cover"
        />
        <p className="Montserrat font-medium text-xs leading-5 text-[#4d4d4d] pt-1 ">
          Collete Stretch Linen Minidress
        </p>
      </div> */}
      {/* Single product */}
      {/* <div className=" flex flex-col w-[130px]">
        <img
          className="w-full h-[194px]"
          src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
          alt="product cover"
        />
        <p className="Montserrat font-medium text-xs leading-5 text-[#4d4d4d] pt-1 ">
          Collete Stretch Linen Minidress
        </p>
      </div> */}
      {/* Single product */}
      {/* <div className=" flex flex-col w-[130px]">
        <img
          className="w-full h-[194px]"
          src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
          alt="product cover"
        />
        <p className="Montserrat font-medium text-xs leading-5 text-[#4d4d4d] pt-1 ">
          Collete Stretch Linen Minidress
        </p>
      </div> */}
    </div>
  );
};

export default SimilarItem;
