import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";

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
        </Switch>
      </Router>
    </AdminContext.Provider>
  );
}

export default App;
