import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { AdminContext } from "../../../App";
import MyNavbar from "../../MyNavbar/MyNavbar";
import "./Header.css";

const Header = () => {
  const { adminDetails, setAdminDetails } = useContext(AdminContext);

  useEffect(() => {
    fetch("http://localhost:5000/getAdmin")
      .then((res) => res.json())
      .then((data) => {
        data.aboutMe = data.aboutMe.split("\n");
        setAdminDetails(data);
      });
  }, [setAdminDetails]);

  return (
    <header id="header">
      <div className="header-text w-100 w-lg-75 py-4 ">
        <h4 className="main-title">Hi, I am</h4>
        <h1>{adminDetails.name}</h1>
        <br />
        <h2 className="text-secondary">{adminDetails.designation}</h2>
        <br />
        <p className="text-secondary">{adminDetails.summary}</p>
        <br />
        <Button
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${adminDetails.mail}`}
          target="_blank"
          className="main-button"
        >
          Hire Me
        </Button>
      </div>
      <div className="d-none d-lg-block">
        <div className="d-flex flex-column sticky-icon-container ">
          <a href={adminDetails.github} rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              className="sticky-icon"
              icon={faGithub}
            ></FontAwesomeIcon>
          </a>
          <a href={adminDetails.linkedIn} rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              className="sticky-icon"
              icon={faLinkedin}
            ></FontAwesomeIcon>
          </a>
          <a href={adminDetails.facebook} rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              className="sticky-icon"
              icon={faFacebook}
            ></FontAwesomeIcon>
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${adminDetails.mail}`}
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              mailto="jahedulh1@gmail.com"
              className="sticky-icon"
              icon={faMailBulk}
            ></FontAwesomeIcon>
          </a>
          <div className="line"></div>
        </div>
      </div>

      <Button href="#navbar" className="fixed-button">
        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
      </Button>
    </header>
  );
};

export default Header;
