import React from "react";
import numeral from "numeral";
import Button from "../../components/UI/Button";
import Item from "./Item";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  const totalAmount = items.reduce(
    (accumulator, product) => accumulator + product.amount * product.price,
    0
  );
  return (
    <div className="text-[#202124]">
      <h1 className=" mb-8 Montserrat font-medium text-2xl leading-5  ">
        My Bag
      </h1>
      <div className="grid grid-cols-7 gap-x-16">
        <div className="col-span-5">
          <table className="table-fixed w-full ">
            <thead>
              <tr>
                <th className="w-4/12 Montserrat-m font-bold  py-2 text-left ">
                  Product
                </th>
                <th className="w-2/12 Montserrat-m font-bold ">Color</th>
                <th className="w-2/12 Montserrat-m font-bold ">Size</th>
                <th className="w-2/12 Montserrat-m font-bold ">Quantity</th>
                <th className="w-2/12 Montserrat-m font-bold  text-right">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 &&
                items.map((item, i) => <Item key={uuidv4()} product={item} />)}
              {/* <Item />
              <Item /> */}
            </tbody>
          </table>
        </div>
        <div className="col-span-2">
          <h2 className="Montserrat-m font-bold  py-2">Total</h2>
          <div className="w-full bg-[#f9f9f9] p-6">
            <div className="flex justify-between">
              <span className="Montserrat-m font-medium ">
                Shipping & Handling:
              </span>
              <span className="Montserrat-m font-medium ">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="Montserrat-m font-medium ">Total product:</span>
              <span className="Montserrat-m font-medium ">
                {numeral(totalAmount).format("$0,0")}
              </span>
            </div>
            <hr className="bg-[#979797] h-0.5 mt-4 mb-2 bg-opacity-50 " />
            <div className="flex justify-between">
              <span className="Montserrat-b ">Subtotal</span>
              <span className="Montserrat-b ">
                {numeral(totalAmount).format("$0,0")}
              </span>
            </div>
          </div>
          <Button
            type="submit"
            label="Check out"
            redBgColor
            addCSS="h-[49px] box-border mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
