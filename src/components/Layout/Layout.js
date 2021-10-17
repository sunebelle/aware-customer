import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import { ToastContainer, toast } from "react-toastify";

const Layout = ({ children }) => {
  // const notify = () => toast.success("Wow so easy!");

  return (
    <>
      <Header />
      {/* <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer autoClose={3000} position="top-right" />
      </div> */}
      <main className="px-4 lg:px-10 xl:px-20 py-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
