import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import AllPortfolios from "./components/AllPortfolios/AllPortfolios";
import AddProject from "./components/Dashboard/AddProject/AddProject";
import Blogs from "./components/Blogs/Blogs";
import AddBlogs from "./components/Dashboard/AddBlogs/AddBlogs";

export const AdminContext = createContext();

function App() {
  const [adminDetails, setAdminDetails] = useState({});

  return (
    <AdminContext.Provider value={{ adminDetails, setAdminDetails }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolios">
            <AllPortfolios />
          </Route>
          <Route exact path="/addProject">
            <AddProject />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route exact path="/addBlogs">
            <AddBlogs />
          </Route>
        </Switch>
      </Router>
    </AdminContext.Provider>
  );
}

export default App;
