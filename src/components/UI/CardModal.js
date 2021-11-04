import React from "react";
import Button from "./Button";

const CardModal = ({ closeModalHandler, removeAProduct }) => {
  return (
    <div className="p-10">
      <h5 className="Montserrat-m text-[#202124]">
        Are you sure, you want to delete this product?
      </h5>

      <div className="flex items-center justify-between mt-2">
        <div className="w-1/2">
          <Button
            label="Cancel"
            type="button"
            handleChange={closeModalHandler}
          />
        </div>
        <p
          onClick={removeAProduct}
          className="flex-grow text-center box-border border border-opacity-80 cursor-pointer px-4 py-2"
        >
          Remove
        </p>
      </div>
    </div>
  );
};

export default CardModal;
