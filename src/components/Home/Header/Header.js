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
import "./Header.css";
import Typical from "react-typical";
import Particles from "react-particles-js";
import { baseUrl } from './../../../utils/config';

const styles = {
  part: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
};

const Header = () => {
  const { adminDetails, setAdminDetails } = useContext(AdminContext);

  useEffect(() => {
    fetch(`${baseUrl}getAdmin`)
      .then((res) => res.json())
      .then((data) => {
        data.aboutMe = data.aboutMe.split("\n");

        let innerWorkIn = [];
        const itemList = data.workIn.split(",");
        for(let i=0; i< itemList.length; i++){
          innerWorkIn = [...innerWorkIn, itemList[i], 2000]
        }
        data.workIn = innerWorkIn;
        console.log("innerWorkIn", data)
        setAdminDetails(data);
      });
  }, [setAdminDetails]);

  return (
    <header id="header">
      <div style={styles.part}>
        <Particles
          params={{
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
          }}
          height="550px"
        />
      </div>
      <div className="header-text w-100 w-lg-75 py-4 ">
        <h4 className="main-title">Hi, I am</h4>
        <h1>{adminDetails.name}</h1>
        <br />
        <h2 className="text-secondary">{adminDetails.designation}</h2>
        <br />
        {
          adminDetails?.workIn && (
            <h5 className="text-secondary">
              I Work in{" "}
              <span className="typewriter-span">
                <Typical
                  steps={adminDetails.workIn}
                  loop={Infinity}
                  wrapper="span"
                />
              </span>
            </h5>
          )
        }
        
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
