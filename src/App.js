import React from "react";
import Layout from "./components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui";
import Modal from "./components/UI/Modal";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

const App = () => {
  const dispatch = useDispatch();
  const { isRegistered, isLoggedIn, isForgotPassword } = useSelector(
    (state) => state.ui
  );
  const closeRegisteredModal = () => {
    dispatch(uiActions.hideRegisteredModal());
  };
  const closeLoggedInModal = () => {
    dispatch(uiActions.hideLoggedInModal());
  };
  const closeForgotPasswordModal = () => {
    dispatch(uiActions.hideForgotPasswordModal());
  };

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register">
          {isRegistered && (
            <Modal closeModalHandler={closeRegisteredModal}>
              <Register closeModalHandler={closeRegisteredModal} />
            </Modal>
          )}
          <Home />
        </Route>
        <Route path="/login">
          {isLoggedIn && (
            <Modal closeModalHandler={closeLoggedInModal}>
              <Login closeModalHandler={closeLoggedInModal} />
            </Modal>
          )}
          <Home />
        </Route>
        <Route path="/forgot-password">
          {isForgotPassword && (
            <Modal closeModalHandler={closeForgotPasswordModal}>
              <ForgotPassword closeModalHandler={closeForgotPasswordModal} />
            </Modal>
          )}
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
