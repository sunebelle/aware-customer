import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import useInput from "../../hooks/useInput";
import { isEmail, isPassword } from "../../utils/formValidation";
import { login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Login = ({ closeModalHandler }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  //   const [rememberPassword, setRememberPassword] = useState(false);
  const {
    value: userEmail,
    isValid: userEmailIsValid,
    hasError: userEmailHasError,
    valueChangeHandler: userEmailChangeHandler,
    inputBlurHandler: userEmailBlurHandler,
    reset: resetUserEmail,
  } = useInput(isEmail);
  const {
    value: userPassword,
    isValid: userPasswordIsValid,
    hasError: userPasswordHasError,
    valueChangeHandler: userPasswordChangeHandler,
    inputBlurHandler: userPasswordBlurHandler,
    reset: resetUserPassord,
  } = useInput(isPassword);

  let formIsValid = false;
  if (userEmailIsValid && userPasswordIsValid) {
    formIsValid = true;
  }

  const handleRegister = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    // console.log(userEmail, userPassword);
    // sent request to backend for creating new user account
    dispatch(login({ email: userEmail, password: userPassword }));
    resetUserEmail();
    resetUserPassord();
    history.push("/");
  };

  return (
    <div className="flex items-center justify-center flex-col w-[555px] relative shadow-lg">
      <img
        onClick={closeModalHandler}
        className="absolute top-2 right-2"
        src="/img/cross.svg"
        alt="cross"
      />
      <form onSubmit={handleRegister} className="px-20 py-4 w-full border-b">
        <h2 className=" text-center Montserrat font-bold text-3xl leading-5 p-8 text-[#202124]">
          Log In
        </h2>
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
        <div className="flex justify-between items-center mb-8">
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
      <p className="Montserrat-m text-[#4d4d4d] font-medium py-4">
        Do you have an account?{" "}
        <Link to="/register">
          <span className="text-[#ff7413] font-bold border-b border-[#ff7413]  ">
            Register
          </span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
