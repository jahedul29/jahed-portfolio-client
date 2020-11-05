import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AdminContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const { loggedInUser } = useContext(AdminContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          // loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
