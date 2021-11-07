import React from "react";

const CardModal = ({ closeModalHandler, removeAProduct }) => {
  return (
    <div className="p-10">
      <h5 className="Montserrat-m text-[#202124]">
        Are you sure, you want to delete this product?
      </h5>

      <div className="flex items-center justify-center mt-4 space-x-4 Montserrat-m">
        <button
          onClick={closeModalHandler}
          className=" w-1/4 text-center box-border border border-opacity-80 cursor-pointer px-4 py-2  transition-opacity duration-500 ease-in opacity-80 hover:opacity-100"
        >
          Cancel
        </button>

        <button
          onClick={removeAProduct}
          className="text-white w-1/4 text-center bg-[#ff5f6d]  cursor-pointer px-4 py-2 transition-opacity duration-500 ease-in opacity-80 hover:opacity-100 "
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CardModal;
