import React from "react";
import Button from "./Button";

const CardModal = ({ closeModalHandler, removeAProduct }) => {
  return (
    <div className="p-10">
      <h5 className="Montserrat-m text-[#202124]">
        Are you sure, you want to delete this product?
      </h5>

      <div className="flex items-center justify-between mt-2">
        <Button label="Cancel" type="button" handleChange={closeModalHandler} />
        <p  onClick={removeAProduct} className="flex-grow text-center border border-green-600 px-4 py-2">
            Remove
        </p>
      </div>
    </div>
  );
};

export default CardModal;
