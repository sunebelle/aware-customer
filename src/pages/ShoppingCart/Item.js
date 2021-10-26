import React from "react";
import numeral from "numeral";

const Item = () => {
  return (
    <tr className="border-t border-[#979797] box-border border-opacity-50">
      <td>
        <div className="py-2 text-left  flex flex-row ">
          <img
            className="w-[80px] h-[113px]"
            src="https://tse4.mm.bing.net/th?id=OIP.51RNGQ5rSUtPzF0EQdOkDwHaJ4&pid=Api&P=0&w=300&h=300"
            alt="product"
          />
          <div className="flex flex-col justify-between pl-4">
            <h2 className="Montserrat font-medium text-sm leading-5 ">
              Collete Stretch Linen Minidress
            </h2>
            <div className="Montserrat-s font-normal  flex flex-row">
              <button className="cursor-pointer">Change</button>
              <span className="px-1"> | </span>
              <button className="cursor-pointer">Remove</button>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex justify-center items-center">
          <div className="w-[30px] h-[30px] rounded-full bg-[#a4624c] cursor-pointer" />
        </div>
      </td>
      <td className="text-center ">
        <h2 className="Montserrat font-medium leading-5 text-lg  ">S</h2>
      </td>
      <td>
        <div className="flex justify-center items-center">
          <div className="flex w-[108px] flex-row border justify-center py-2 items-center border-[#d4d3d3]  space-x-4  Montserrat-m  font-medium">
            <img src="/img/minus.svg" alt="minus" />
            <span>3</span>
            <img src="/img/plus.svg" alt="minus" />
          </div>
        </div>
      </td>
      <td className="text-right">
        <h2 className="Montserrat font-medium  text-base leading-6">
          {numeral(6900).format("$0,0")}
        </h2>
      </td>
    </tr>
  );
};

export default Item;
