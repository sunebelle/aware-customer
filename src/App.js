import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const openRegisteredModal = () => {
    setIsRegistered(true);
  };
  const closeRegisteredModal = () => {
    setIsRegistered(false);
  };
  const openLoggedInModal = () => {
    setIsLoggedIn(true);
  };
  const closeLoggedInModal = () => {
    setIsLoggedIn(false);
  };
  const openForgotPasswordModal = () => {
    setIsForgotPassword(true);
  };
  const closeForgotPasswordModal = () => {
    setIsForgotPassword(false);
  };

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Home isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
        </Route>
        <Route path="/login" exact>
          <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/forgot-password" exact>
          <Home
            isForgotPassword={isForgotPassword}
            setIsForgotPassword={setIsForgotPassword}
          />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
