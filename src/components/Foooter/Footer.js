import React from "react";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";

const Footer = () => {
  let history = useHistory();

  return (
    <footer className="py-5">
      <Fade bottom>
        <p className="text-warning text-center">
          ©️{new Date().getFullYear()} all rights reserved by{" "}
          <span onClick={() => history.push("/addProject")}>
            Md. Jahedul Hoque
          </span>
        </p>
      </Fade>
    </footer>
  );
};

export default Footer;
