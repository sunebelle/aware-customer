import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import useInput from "../../hooks/useInput";
import { uiActions } from "../../store/ui";
import { isEmail } from "../../utils/formValidation";

const ForgotPassword = ({ closeModalHandler }) => {
  const dispatch = useDispatch();
  const {
    value: userEmail,
    isValid: userEmailIsValid,
    hasError: userEmailHasError,
    valueChangeHandler: userEmailChangeHandler,
    inputBlurHandler: userEmailBlurHandler,
    reset: resetUserEmail,
  } = useInput(isEmail);

  let formIsValid = false;
  if (userEmailIsValid) {
    formIsValid = true;
  }

  const handleRegister = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    // sent request to backend for creating new user account
    resetUserEmail();
  };

  return (
    <div className="flex items-center justify-center flex-col w-[555px] relative shadow-lg">
      <img
        onClick={closeModalHandler}
        className="absolute top-2 right-2"
        src="/img/cross.svg"
        alt="cross"
      />
      <form onSubmit={handleRegister} className="px-20 py-4 w-full">
        <h2 className=" text-center Montserrat font-bold text-3xl leading-5 pt-8 pb-3 text-[#202124]">
          Forgot Password
        </h2>
        <p className="Montserrat-s mb-4 font-medium text-center text-[#808080]">
          Enter your e-mail address below and we’ll get you back on track.
        </p>
        <Input
          label="E-mail"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={userEmail}
          handleChange={userEmailChangeHandler}
          handleBlur={userEmailBlurHandler}
          isValid={userEmailIsValid}
          errorMessage={userEmailHasError && "Please enter a valid e-mail!"}
        />

        <Button type="submit" label="Submit" btnDisabled={!formIsValid} />
      </form>
      <div className="border-t w-full mt-10 items-center flex justify-center border-[#ededed]">
        <p className="Montserrat-m text-[#4d4d4d] font-medium py-4">
          I remember my password now. {""}
          <span
            onClick={() => dispatch(uiActions.showLoggedInModal())}
            className="text-[#ff7413] font-bold border-b border-[#ff7413] cursor-pointer "
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
