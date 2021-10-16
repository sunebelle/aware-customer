import React, { useState } from "react";
import { useHistory } from "react-router";
import ChangePassword from "./ChangePassword";
import EditUserInfo from "./EditUserInfo";
import UserInfo from "./UserInfo";

const Profile = () => {
  const [isEdited, setIsEdited] = useState(false);
  const [changeUserPassword, setChangeUserPassword] = useState(false);
  const history = useHistory();

  const handleEditUserInfo = () => {
    setIsEdited(true);
    history.push("/user/account-setting/edit");
  };

  const handleChangeUserPassword = () => {
    setChangeUserPassword((state) => !state);
  };

  const handleChangeUserInfo = () => {
    history.push("/user/account-setting");
  };
  return (
    <div className="flex flex-row h-96">
      <div className="w-72 flex flex-col">
        <h1 className="Montserrat font-medium text-2xl text-[#202124]">
          My Account
        </h1>
        <ul className="mt-8 flex flex-col space-y-4">
          <li
            onClick={handleChangeUserInfo}
            className="Montserrat-m font-normal text-[#4d4d4d] cursor-pointer"
          >
            Account setting #ff6900
          </li>
          <li
            onClick={handleChangeUserPassword}
            className="Montserrat-m font-normal text-[#4d4d4d] cursor-pointer"
          >
            Change password
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-[430px]">
        <div className="flex justify-between w-full align-bottom pt-2">
          <p className="Montserrat-m font-bold text-[#202124]">
            {changeUserPassword ? "Change password" : "Information"}
          </p>
          {(!isEdited || changeUserPassword) && (
            <button
              onClick={handleEditUserInfo}
              className="text-[#4d4d4d] Montserrat text-xs font-medium block"
            >
              Edit
            </button>
          )}
        </div>
        <div className="flex flex-col py-6 px-8 space-y-6 bg-[#f9f9f9] mt-2">
          {changeUserPassword ? (
            <ChangePassword />
          ) : isEdited ? (
            <EditUserInfo setIsEdited={setIsEdited} />
          ) : (
            <UserInfo />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
