import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-[#ececec] px-4 lg:px-10 xl:px-20 2xl:px-30">
      <div className="flex justify-between items-center py-8">
        <img src="/img/logo.svg" alt="logo" />
        <div className="flex flex-row text-[#b7b7b7] Montserrat-m font-normal space-x-4">
          <p>Home</p>
          <p>Products</p>
          <p>Services</p>
          <p>About Us</p>
          <p>Help</p>
          <p>Contacts</p>
        </div>
        <div className="flex space-x-2">
          <img src="/img/twitter-icon.svg" alt="twitter-icon" />
          <img src="/img/facebook-icon.svg" alt="facebook-icon" />
          <img src="/img/instagram-6-icon.svg" alt="instagram-6-icon" />
        </div>
      </div>
      <div className="py-4 border-t border-[#ececec] flex justify-between">
        <div className="flex flex-row text-[#b7b7b7] Montserrat-s font-medium space-x-4">
          <p>Home</p>
          <p>Products</p>
          <p>Services</p>
          <p>About Us</p>
          <p>Help</p>
          <p>Contacts</p>
        </div>
        <div className="flex flex-row text-[#202124] Montserrat-s font-normal space-x-4">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
