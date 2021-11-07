import React from "react";
import numeral from "numeral";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Baskets = ({ setOpenBasket }) => {
  const history = useHistory();

  const { items } = useSelector((state) => state.cart);

  const handleBasket = () => {
    history.push("/cart");
    setOpenBasket(false);
  };

  return (
    <div className=" shadow-2xl w-[270px] bg-[#fbfbfb] border border-[#eaeaea] border-opacity-50">
      <div className="flex flex-col">
        {/* show single product */}
        {items.length > 0 &&
          items.map((item, i) => (
            <div
              key={uuidv4()}
              className="flex flex-row py-3 pl-3 pr-5 space-x-6 border-b border-[#eaeaea] "
            >
              <img
                // className="w-[60px] h-[60px]"
                className="w-[40px] h-[60px]"
                src={item.imageCover}
                alt={item.name}
              />
              <div className="flex-grow content-between py-1 justify-between flex-col">
                <h2 className="Montserrat text-[#4d4d4d] capitalize font-semibold text-xs leading-snug">
                  {item.name}
                </h2>
                <h2 className="Montserrat text-[#4d4d4d] capitalize font-semibold text-xs leading-snug">
                  {item.category}
                </h2>
                <div className="flex items-center pt-1 justify-between Montserrat-s font-normal">
                  <span className="text-[#4d4d4d] ">
                    {numeral(item.price).format("$0,0")}
                  </span>
                  <span className="text-[#202124]  capitalize opacity-40 ">
                    {item.size} • {item.color} • {item.amount} pcs
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div
        onClick={handleBasket}
        className="flex items-center w-full justify-center py-6 text-center cursor-pointer"
      >
        <span className="Montserrat-m text-[#ffa15f] font-bold ">
          View cart
        </span>
      </div>
    </div>
  );
};

export default Baskets;
