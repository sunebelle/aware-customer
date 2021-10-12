import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-4 lg:px-10 xl:px-20 py-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
