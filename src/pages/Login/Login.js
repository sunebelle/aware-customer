import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import useInput from "../../hooks/useInput";
import { isEmail, isPassword } from "../../utils/formValidation";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import api from "../../axios";
import { authActions } from "../../store/auth";

const Login = ({ closeModalHandler }) => {
  //   const [rememberPassword, setRememberPassword] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

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
  if (userEmailIsValid && userPasswordIsValid) {
    formIsValid = true;
  }

  const login = async (formData) => {
    try {
      const { data } = await api.post("/user/login", formData, {
        withCredentials: true,
        credentials: "include",
      });
      dispatch(authActions.auth(data));
      history.push("/");
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    // sent request to backend for creating new user account
    login({ email: userEmail, password: userPassword });
  };

  return (
    <div className="flex items-center justify-center flex-col w-[555px] relative shadow-lg">
      <img
        onClick={closeModalHandler}
        className="absolute top-2 right-2"
        src="/img/cross.svg"
        alt="cross"
      />
      <form onSubmit={handleLogin} className="px-20 py-4 w-full">
        <h2 className=" text-center Montserrat font-bold text-3xl leading-5 pt-8 text-[#202124]">
          Log In
        </h2>
        <p
          className={`${
            error ? "opacity-100" : "opacity-0"
          } p-2 Montserrat-m text-[#f63f45] font-medium text-center`}
        >
          {error ? error : "Something went wrong"}
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
        <div className="flex justify-between items-center mb-9">
          <div className="inline-flex items-center space-x-2 ">
            <label className="checkbox-container pl-4">
              <input
                type="checkbox"
                // value={rememberPassword}
                // onChange={(e) => setRememberPassword(e.target.checked)}
                defaultChecked
              />
              <span className="checkmark"></span>
            </label>
            <p className="Montserrat-m font-normal text-[#4d4d4d]">
              Remember password
            </p>
          </div>
          <Link to="/forgot-password">
            <p className="Montserrat-m font-semibold text-[#4d4d4d]">
              Forgot your password?
            </p>
          </Link>
        </div>

        <Button type="submit" label="Log In" btnDisabled={!formIsValid} />
      </form>
      <div className="border-t w-full mt-10 items-center flex justify-center border-[#ededed]">
        <p className="Montserrat-m text-[#4d4d4d] font-medium py-4">
          Do you have an account?{" "}
          <Link to="/register">
            <span className="text-[#ff7413] font-bold border-b border-[#ff7413]  ">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
