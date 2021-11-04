import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/UI/Modal";
import Register from "../../pages/Register/Register";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import Login from "../../pages/Login/Login";
import { uiActions } from "../../store/ui";

const Layout = ({ children }) => {
  const { notification } = useSelector((state) => state.ui);
  const { isRegistered, isLoggedIn, isForgotPassword } = useSelector(
    (state) => state.ui
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (notification) {
      notification.status === "success"
        ? toast.success(notification?.message)
        : toast.error(notification?.message);
    }
  }, [notification]);

  const closeRegisteredModal = () => {
    dispatch(uiActions.hideRegisteredModal());
  };
  const closeLoggedInModal = () => {
    dispatch(uiActions.hideLoggedInModal());
  };
  const closeForgotPasswordModal = () => {
    dispatch(uiActions.hideForgotPasswordModal());
  };
  return (
    <>
      {isRegistered && (
        <Modal closeModalHandler={closeRegisteredModal}>
          <Register closeModalHandler={closeRegisteredModal} />
        </Modal>
      )}
      {isLoggedIn && (
        <Modal closeModalHandler={closeLoggedInModal}>
          <Login closeModalHandler={closeLoggedInModal} />
        </Modal>
      )}
      {isForgotPassword && (
        <Modal closeModalHandler={closeForgotPasswordModal}>
          <ForgotPassword closeModalHandler={closeForgotPasswordModal} />
        </Modal>
      )}
      <Header />
      {notification && <ToastContainer autoClose={3000} position="top-right" />}
      <main className="px-4 lg:px-10 xl:px-20 2xl:px-30 py-8">{children}</main>
      {/* <main className="px-4 lg:px-10 xl:px-20 py-8">{children}</main> */}
      <Footer />
    </>
  );
};

export default Layout;
