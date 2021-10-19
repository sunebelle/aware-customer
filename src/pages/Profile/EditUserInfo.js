import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import api from "../../axios";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { authActions } from "../../store/auth";
import { uiActions } from "../../store/ui";

const EditUserInfo = ({ setIsEdited }) => {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user?.data?.user?.name);
  const [email, setEmail] = useState(user?.data?.user?.email);
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const validName = name.trim() !== "";
  const validEmail =
    email.includes("@") && email.length >= 6 && email.includes(".");
  const invalidName = !validName && nameTouched; //true
  const invalidEmail = !validEmail && emailTouched; //true

  let formIsvalid = false;
  if (validName && validEmail) {
    formIsvalid = true;
  }

  const handleCancelChangeUserInfo = () => {
    setIsEdited(false);
    history.push("/user/account-setting");
  };

  const updateUser = async (formData) => {
    try {
      const { data } = await api.patch("/user/update-user", formData, {
        withCredentials: true,
        credentials: "include",
      });
      dispatch(authActions.auth(data));
      setIsEdited(false);
      history.push("/user/account-setting");
      dispatch(
        uiActions.showNotification({
          status: "success",
          message: "Successfully update your information!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: error?.response?.data?.message,
        })
      );
    }
  };
  const handleChangeUserInfo = (event) => {
    event.preventDefault();
    if (!formIsvalid) {
      return;
    }
    updateUser({ name, email });
  };
  return (
    <form onSubmit={handleChangeUserInfo}>
      <Input
        label="Name"
        type="text"
        placeholder="Enter your name..."
        name="name"
        value={name}
        handleChange={(e) => setName(e.target.value)}
        handleBlur={() => setNameTouched(true)}
        isValid={validName}
        errorMessage={invalidName && "Please enter a valid name!"}
        bgColor
      />
      <Input
        label="E-mail"
        type="email"
        placeholder="Enter your email..."
        name="email"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        handleBlur={() => setEmailTouched(true)}
        isValid={validEmail}
        errorMessage={invalidEmail && "Please enter a valid e-mail!"}
        bgColor
      />
      <div className="flex justify-end ">
        <div className=" w-3/5 flex flex-row space-x-4">
          <button
            onClick={handleCancelChangeUserInfo}
            type="button"
            className="Montserrat-m font-medium px-4 py-2 text-[#202124]"
          >
            Cancel
          </button>
          <Button type="submit" label="Save" btnDisabled={!formIsvalid} />
        </div>
      </div>
    </form>
  );
};

export default EditUserInfo;
