import React from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ closeModalHandler }) => {
  return (
    <div
      onClick={closeModalHandler}
      className="z-30 top-0 left-0 fixed h-screen w-full bg-[#212121] opacity-20"
    />
  );
};
const ModalOverlay = ({ children, closeModalHandler }) => {
  return (
    <div className="z-50 fixed left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 flex justify-center items-center">
      <div className="bg-white">{children}</div>
    </div>
  );
};
const Modal = ({ children, closeModalHandler }) => {
  const modalEl = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModalHandler={closeModalHandler} />,
        modalEl
      )}
      {ReactDOM.createPortal(
        <ModalOverlay closeModalHandler={closeModalHandler}>
          {children}
        </ModalOverlay>,
        modalEl
      )}
    </>
  );
};

export default Modal;
