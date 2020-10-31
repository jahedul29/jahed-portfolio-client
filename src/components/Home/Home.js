import React from "react";
import Footer from "../Foooter/Footer";
import GetInTouch from "./GetInTouch/GetInTouch";
import MyPortfolio from "../MyPortfolio/MyPortfolio";
import "./Home.css";
import MyNavbar from "../MyNavbar/MyNavbar";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div className="home">
      <MyNavbar></MyNavbar>
      <Header />
      <AboutMe />
      <MyPortfolio />
      <Skills />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
