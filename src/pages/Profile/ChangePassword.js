import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import useInput from "../../hooks/useInput";
import { isPassword } from "../../utils/formValidation";
import { updatePassword } from "../../actions/user";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const {
    value: currentPassword,
    isValid: currentPasswordIsValid,
    hasError: currentPasswordHasError,
    valueChangeHandler: currentPasswordChangeHandler,
    inputBlurHandler: currentPasswordBlurHandler,
    reset: resetCurrentPassword,
  } = useInput(isPassword);
  const {
    value: newPassword,
    isValid: newPasswordIsValid,
    hasError: newPasswordHasError,
    valueChangeHandler: newPasswordChangeHandler,
    inputBlurHandler: newPasswordBlurHandler,
    reset: resetnewPassword,
  } = useInput(isPassword);
  const {
    value: confirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
  } = useInput(isPassword);
  let formIsValid = false;

  if (currentPasswordIsValid && confirmPasswordIsValid && newPasswordIsValid) {
    formIsValid = true;
  }

  const handleChangeUserPassword = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    dispatch(updatePassword({ currentPassword, newPassword, confirmPassword }));
    resetCurrentPassword();
    resetnewPassword();
    resetConfirmPassword();
  };
  return (
    <form onSubmit={handleChangeUserPassword}>
      <Input
        label="current password"
        bgColor
        type="password"
        placeholder="Enter your password..."
        name="current password"
        value={currentPassword}
        handleChange={currentPasswordChangeHandler}
        handleBlur={currentPasswordBlurHandler}
        isValid={currentPasswordIsValid}
        errorMessage={
          currentPasswordHasError &&
          "Your passwords must be more than 6 characters!"
        }
      />
      <Input
        label="new password"
        bgColor
        type="password"
        placeholder="Enter your password..."
        name="new password"
        value={newPassword}
        handleChange={newPasswordChangeHandler}
        handleBlur={newPasswordBlurHandler}
        isValid={newPasswordIsValid}
        errorMessage={
          newPasswordHasError &&
          "Your passwords must be more than 6 characters!"
        }
      />
      <Input
        label="re-enter new password"
        bgColor
        type="password"
        placeholder="Enter your password..."
        name="re-enter password"
        value={confirmPassword}
        handleChange={confirmPasswordChangeHandler}
        handleBlur={confirmPasswordBlurHandler}
        isValid={confirmPasswordIsValid}
        errorMessage={
          confirmPasswordHasError &&
          "Your passwords must be more than 6 characters!"
        }
      />
      <div className="flex justify-end ">
        <div className=" w-2/5 flex flex-row space-x-4">
          <Button type="submit" label="Save" btnDisabled={!formIsValid} />
        </div>
      </div>
    </form>
  );
};

export default ChangePassword;
