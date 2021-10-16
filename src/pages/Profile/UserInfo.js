import React from "react";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const { user } = useSelector((state) => state.auth);
  // console.log(user.data.user);

  return (
    <>
      <div className="flex flex-col">
        <p className="Montserrat-m font-medium text-[#202124]">Name</p>
        <p className="Montserrat-m font-normal text-[#4d4d4d]">
          {user.data.user.name}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="Montserrat-m font-medium text-[#202124]">E-mail</p>
        <p className="Montserrat-m font-normal text-[#4d4d4d]">
          {user.data.user.email}
        </p>
      </div>
    </>
  );
};

export default UserInfo;
