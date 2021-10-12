import React from "react";
import Layout from "./components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <Home />
        </Layout>
      </Route>
    </Switch>
  );
};

export default App;
