import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import { ToastContainer, toast } from "react-toastify";
// import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  // const { notification } = useSelector((state) => state.ui);

  // console.log(notification);

  // useEffect(() => {
  //   if (notification) {
  //     notification.status = "success"
  //       ? toast.success(notification?.message)
  //       : toast.error(notification?.message);
  //   }
  // }, [notification]);

  return (
    <>
      <Header />
      {/* {notification && <ToastContainer autoClose={3000} position="top-right" />} */}
      <main className="px-4 lg:px-10 xl:px-20 py-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
