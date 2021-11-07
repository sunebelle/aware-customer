import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import AccountNavbar from "./AccountNavbar";
import ChangePassword from "./ChangePassword";
import EditUserInfo from "./EditUserInfo";
import UserInfo from "./UserInfo";

const Profile = () => {
  const [isEdited, setIsEdited] = useState(false);
  const [changeUserInfo, setChangeUserInfo] = useState(false);
  const [changeUserPassword, setChangeUserPassword] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const accSettingURL = "/user/account-setting";
  const changePasswordURL = "/user/account-setting/change-password";
  const editUserInfoURL = "/user/account-setting/edit";

  useEffect(() => {
    if (location?.pathname === accSettingURL) {
      setChangeUserPassword(false);
      setChangeUserInfo(true);
      setIsEdited(false);
    } else if (location?.pathname === editUserInfoURL) {
      setChangeUserInfo(true);
      setChangeUserPassword(false);
      setIsEdited(true);
    } else if (location?.pathname === changePasswordURL) {
      setChangeUserInfo(false);
      setChangeUserPassword(true);
      setIsEdited(true);
    } else {
      return;
    }
  }, [location]);

  const handleChangeUserInfo = () => {
    history.push("/user/account-setting");
  };
  const handleChangeUserPassword = () => {
    history.push("/user/account-setting/change-password");
  };
  const handleEditUserInfo = () => {
    history.push("/user/account-setting/edit");
  };
  return (
    <div className="flex flex-row h-96">
      <AccountNavbar
        changeUserInfo={changeUserInfo}
        changeUserPassword={changeUserPassword}
        handleChangeUserPassword={handleChangeUserPassword}
        handleChangeUserInfo={handleChangeUserInfo}
      />
      <div className="flex flex-col w-[430px]">
        <div className="flex justify-between w-full align-bottom pt-2">
          <p className="Montserrat-m font-bold text-[#202124]">
            {changeUserPassword ? "Change password" : "Information"}
          </p>
          {!isEdited && (
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
            <ChangePassword setIsEdited={setIsEdited} />
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
