import React from "react";
import { Button } from "react-bootstrap";
import MyNavbar from "../MyNavbar/MyNavbar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <MyNavbar></MyNavbar>
      <div className="header-text w-100 w-lg-75 ">
        <h4 className="main-title">Hi, I am</h4>
        <h1>Md Jahedul Hoque</h1>
        <br />
        <h2 className="text-secondary">Full Stack Web Developer</h2>
        <br />
        <p className="text-secondary">
          Hi I am a full stack developer. Mainly work wit React.js, Node.js,
          .NET framework
        </p>
        <br />
        <Button className="main-button ">Hire me</Button>
      </div>
    </header>
  );
};

export default Header;
