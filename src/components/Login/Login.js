import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { AdminContext } from "../../App";
import "./Login.css";
import { handleGoogleSignIn, initializeLoginFramework } from "./loginManager";

// Initializing firebase
initializeLoginFramework();

const Login = () => {
  // state for storing logged in user data
  const { loggedInUser, setLoggedInUser, adminDetails } = useContext(
    AdminContext
  );

  document.title = "Login";

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/addProject" } };

  // Function to handle google signIN
  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      if (res.email === adminDetails.email) {
        setLoggedInUser(res);
        history.push(from);
      } else {
        alert("Sorry! You don't have permission to access this page");
        sessionStorage.removeItem("jahedportfoliotoken");
        history.push("/");
      }
    });
  };

  console.log("loggedInUser", loggedInUser);

  return (
    <Container fluid className="login-container px-0">
      <div className="form-container">
        <div className="m-auto input-form-container">
          <h4 className="my-5">Sign In</h4>
          <div>
            <div onClick={googleSignIn} className="login-alternative">
              <img src="https://i.imgur.com/P9ZVhek.png" alt="" />
              <h6 className="mt-1">Sign in with google</h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
