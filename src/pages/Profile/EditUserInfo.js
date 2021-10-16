import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import useInput from "../../hooks/useInput";
import { isEmail, isNotEmpty } from "../../utils/formValidation";

const EditUserInfo = ({ setIsEdited }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    value: userName,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserName,
  } = useInput(isNotEmpty);

  const {
    value: userEmail,
    isValid: userEmailIsValid,
    hasError: userEmailHasError,
    valueChangeHandler: userEmailChangeHandler,
    inputBlurHandler: userEmailBlurHandler,
    reset: resetUserEmail,
  } = useInput(isEmail);

  let formIsValid = false;
  if (userNameIsValid && userEmailIsValid) {
    formIsValid = true;
  }

  const handleCancelChangeUserInfo = () => {
    setIsEdited(false);
    history.push("/user/account-setting");
  };
  const handleChangeUserInfo = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    // dispatch(
    //     register({ name: userName, email: userEmail, password: userPassword })
    //   );
    resetUserName();
    resetUserEmail();
    setIsEdited(false);
    history.push("/user/account-setting");
  };
  return (
    <form onSubmit={handleChangeUserInfo}>
      <Input
        label="Name"
        type="text"
        placeholder="Enter your name..."
        name="name"
        value={userName}
        handleChange={userNameChangeHandler}
        handleBlur={userNameBlurHandler}
        isValid={userNameIsValid}
        errorMessage={userNameHasError && "Please enter a valid name!"}
        bgColor
      />
      <Input
        label="E-mail"
        type="email"
        placeholder="Enter your email..."
        name="email"
        value={userEmail}
        handleChange={userEmailChangeHandler}
        handleBlur={userEmailBlurHandler}
        isValid={userEmailIsValid}
        errorMessage={userEmailHasError && "Please enter a valid e-mail!"}
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
          <Button type="submit" label="Save" btnDisabled={!formIsValid} />
        </div>
      </div>
    </form>
  );
};

export default EditUserInfo;
