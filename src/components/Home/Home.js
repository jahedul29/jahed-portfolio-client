import React from "react";
import { Container } from "react-bootstrap";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <AboutMe />
    </div>
  );
};

export default Home;
