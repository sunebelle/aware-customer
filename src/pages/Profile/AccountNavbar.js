import React from "react";

const AccountNavbar = (props) => {
  const {
    changeUserInfo,
    changeUserPassword,
    handleChangeUserInfo,
    handleChangeUserPassword,
  } = props;
  return (
    <div className="w-72 flex flex-col">
      <h1 className="Montserrat font-medium text-2xl text-[#202124]">
        My Account
      </h1>
      <ul className="mt-8 flex flex-col space-y-4">
        <li
          onClick={handleChangeUserInfo}
          className={`${
            changeUserInfo && "text-[#ff6900]"
          } Montserrat-m font-normal text-[#4d4d4d] cursor-pointer`}
        >
          Account setting
        </li>
        <li
          onClick={handleChangeUserPassword}
          className={`${
            changeUserPassword && "text-[#ff6900]"
          } Montserrat-m font-normal text-[#4d4d4d] cursor-pointer`}
        >
          Change password
        </li>
      </ul>
    </div>
  );
};

export default AccountNavbar;
