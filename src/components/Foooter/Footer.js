import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="py-5">
      <Fade bottom>
        <p className="text-warning text-center">
          ©️{new Date().getFullYear()} all rights reserved by Md. Jahedul Hoque
        </p>
      </Fade>
    </footer>
  );
};

export default Footer;
