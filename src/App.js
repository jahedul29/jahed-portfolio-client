import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import AllPortfolios from "./components/AllPortfolios/AllPortfolios";
import AddProject from "./components/Dashboard/AddProject/AddProject";
import Blogs from "./components/Blogs/Blogs";
import AddBlogs from "./components/Dashboard/AddBlogs/AddBlogs";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const AdminContext = createContext();

function App() {
  const [adminDetails, setAdminDetails] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});

  console.log(loggedInUser);

  return (
    <AdminContext.Provider
      value={{ adminDetails, setAdminDetails, loggedInUser, setLoggedInUser }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolios">
            <AllPortfolios />
          </Route>

          <Route path="/blogs">
            <Blogs />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/addProject">
            <AddProject />
          </PrivateRoute>

          <PrivateRoute path="/addBlogs">
            <AddBlogs />
          </PrivateRoute>
        </Switch>
      </Router>
    </AdminContext.Provider>
  );
}

export default App;
