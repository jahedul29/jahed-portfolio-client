import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import myDetails from "../../fakedata/mydetails";
import MyNavbar from "../MyNavbar/MyNavbar";
import "./Header.css";

const Header = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const loadedData = myDetails;
    setInfo(loadedData);
  }, []);

  return (
    <header>
      <MyNavbar></MyNavbar>
      <div className="header-text w-100 w-lg-75 ">
        <h4 className="main-title">Hi, I am</h4>
        <h1>{info.name}</h1>
        <br />
        <h2 className="text-secondary">{info.designation}</h2>
        <br />
        <p className="text-secondary">{info.summary}</p>
        <br />
        <Button className="main-button">Hire Me</Button>
      </div>
    </header>
  );
};

export default Header;
