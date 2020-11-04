import {
  faClipboard,
  faClipboardCheck,
  faCog,
  faHome,
  faList,
  faPaste,
  faPlus,
  faSignOutAlt,
  faTh,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";
// import { handleSignOut } from "../../Login/loginManager";
import "./Sidebar.css";

const Sidebar = () => {
  // const { setLoggedInUser } = useContext(UserContext);
  // const signOut = () => {
  //   handleSignOut()
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoggedInUser(data);
  //       sessionStorage.removeItem("dental-token");
  //     });
  // };

  return (
    <div className="sidebar">
      <div style={{ height: "100%" }} className="w-75  mx-auto">
        <div style={{ height: "85%" }} className=" d-flex flex-column pt-3">
          <Link to="/">
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            &nbsp;&nbsp;Home
          </Link>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faTh}></FontAwesomeIcon>
            &nbsp;&nbsp;Dashboard
          </Link>
          <Link to="/addProject">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            &nbsp;&nbsp;Add Project
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
            &nbsp;&nbsp;Projects
          </Link>
          <Link to="/addBlogs">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            &nbsp;&nbsp;Add Blogs
          </Link>
          <Link to="/adddoctor">
            <FontAwesomeIcon icon={faClipboardCheck}></FontAwesomeIcon>
            &nbsp;&nbsp;Blogs
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
            &nbsp;&nbsp;Settings
          </Link>
        </div>
        <Link>
          <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
          &nbsp;&nbsp;Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
