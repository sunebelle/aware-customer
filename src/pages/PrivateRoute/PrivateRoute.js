import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

//https://medium.com/@tomlarge/private-routes-with-react-router-dom-28e9f40c7146
//https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e

const PrivateRoute = ({
  component1: Component1,
  component2: Component2,
  ...rest
}) => {
  const { user } = useSelector((state) => state.auth);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to / page
    <Route
      {...rest} //path || exact
      render={() =>
        user ? (
          <Component1>
            <Component2 />
          </Component1>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;


