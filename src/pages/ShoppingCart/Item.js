import React, { useState } from "react";
import numeral from "numeral";
import colors from "../../utils/color";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import Modal from "../../components/UI/Modal";
import CardModal from "../../components/UI/CardModal";
const Item = ({ product }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const dispatch = useDispatch();
  const removeProduct = () => {
    const removedProduct = { ...product, amount: 1 };
    // console.log(removedProduct);
    dispatch(cartActions.remove(removedProduct));
  };
  const addProduct = () => {
    if (product.amount < product.quantity) {
      const addedProduct = { ...product, amount: 1 };
      // console.log(addedProduct);
      dispatch(cartActions.add(addedProduct));
    }
  };

  const openModalHandler = () => {
    setIsModalOpened(true);
  };
  const closeModalHandler = () => {
    setIsModalOpened(false);
  };
  const removeAProduct = () => {
    dispatch(cartActions.remove(product));
    setIsModalOpened(false);
  };

  return (
    <>
      {isModalOpened && (
        <Modal closeModalHandler={closeModalHandler}>
          <CardModal
            removeAProduct={removeAProduct}
            closeModalHandler={closeModalHandler}
          />
        </Modal>
      )}
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
                {product.name}
              </h2>
              <h2 className="Montserrat font-medium text-sm leading-5 ">
                Minidress
              </h2>
              <div className="Montserrat-s font-normal  flex flex-row">
                <button className="cursor-pointer">Change</button>
                <span className="px-1"> | </span>
                <button onClick={openModalHandler} className="cursor-pointer">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex justify-center items-center">
            <div
              className={`w-[30px] h-[30px] rounded-full ${
                colors[product.color]
              } cursor-pointer`}
            />
            {/* <div className="w-[30px] h-[30px] rounded-full bg-[#a4624c] cursor-pointer" /> */}
          </div>
        </td>
        <td className="text-center ">
          <h2 className="Montserrat font-medium leading-5 text-lg  ">
            {product.size}
          </h2>
        </td>
        <td>
          <div className="flex justify-center items-center">
            <div className="flex w-[108px] flex-row border justify-center py-2 items-center border-[#d4d3d3]  space-x-4  Montserrat-m  font-medium">
              <img
                className={`${product.amount <= 1 && "opacity-50"}`}
                onClick={removeProduct}
                src="/img/minus.svg"
                alt="minus"
              />
              <span>{product.amount}</span>
              <img
                className={`${
                  product.amount >= product.quantity && "opacity-50"
                }`}
                onClick={addProduct}
                src="/img/plus.svg"
                alt="minus"
              />
            </div>
          </div>
        </td>
        <td className="text-right">
          <h2 className="Montserrat font-medium  text-base leading-6">
            {numeral(product.price * product.amount).format("$0,0.00")}
          </h2>
        </td>
      </tr>
    </>
  );
};

export default Item;
