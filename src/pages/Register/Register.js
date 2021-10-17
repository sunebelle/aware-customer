import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import useInput from "../../hooks/useInput";
import { isNotEmpty, isEmail, isPassword } from "../../utils/formValidation";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import api from "../../axios";
import { authActions } from "../../store/auth";

const Register = ({ closeModalHandler }) => {
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    value: userName,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    // reset: resetUserName,
  } = useInput(isNotEmpty);
  const {
    value: userEmail,
    isValid: userEmailIsValid,
    hasError: userEmailHasError,
    valueChangeHandler: userEmailChangeHandler,
    inputBlurHandler: userEmailBlurHandler,
    // reset: resetUserEmail,
  } = useInput(isEmail);
  const {
    value: userPassword,
    isValid: userPasswordIsValid,
    hasError: userPasswordHasError,
    valueChangeHandler: userPasswordChangeHandler,
    inputBlurHandler: userPasswordBlurHandler,
    // reset: resetUserPassord,
  } = useInput(isPassword);

  let formIsValid = false;
  if (userNameIsValid && userEmailIsValid && userPasswordIsValid) {
    formIsValid = true;
  }

  const register = async (formData) => {
    try {
      const { data } = await api.post("/user/register", formData, {
        withCredentials: true,
        credentials: "include",
      });
      dispatch(authActions.auth(data));
      history.push("/");
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    // sent request to backend for creating new user account
    register({
      name: userName,
      email: userEmail,
      password: userPassword,
    });
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
        <h2 className=" text-center Montserrat font-bold text-3xl leading-5 pt-8 text-[#202124]">
          Register
        </h2>
        <p
          className={`${
            error ? "opacity-100" : "opacity-0"
          } p-2 Montserrat-m text-[#f63f45] font-medium text-center`}
        >
          {error ? error : "Something went wrong"}
        </p>
        <Input
          label="Name"
          type="text"
          placeholder="Enter your name"
          name="name"
          value={userName}
          handleChange={userNameChangeHandler}
          handleBlur={userNameBlurHandler}
          isValid={userNameIsValid}
          errorMessage={userNameHasError && "Please enter a valid name!"}
        />
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
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          value={userPassword}
          handleChange={userPasswordChangeHandler}
          handleBlur={userPasswordBlurHandler}
          isValid={userPasswordIsValid}
          errorMessage={
            userPasswordHasError &&
            "Your passwords must be more than 6 characters!"
          }
        />
        <p className="Montserrat-m font-normal text-[#202124] text-center pt-4 pb-10">
          By creating an account you agree to the {""}
          <span className="text-[#ff7413] font-bold  border-b border-[#ff7413]  ">
            Terms of Service
          </span>{" "}
          and {""}
          <span className="text-[#ff7413] font-bold border-b border-[#ff7413] ">
            Privacy Policy
          </span>
        </p>
        <Button type="submit" label="Register" btnDisabled={!formIsValid} />
      </form>
      <div className="border-t w-full mt-8 items-center flex justify-center border-[#ededed]">
        <p className="Montserrat-m text-[#4d4d4d] font-medium py-4 ">
          Do you have an account?{" "}
          <Link to="/login">
            <span className="text-[#ff7413] font-bold  border-b border-[#ff7413]  ">
              Log in
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
