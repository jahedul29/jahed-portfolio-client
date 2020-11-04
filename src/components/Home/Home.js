import React from "react";
import Footer from "../Foooter/Footer";
import GetInTouch from "./GetInTouch/GetInTouch";
import MyPortfolio from "../MyPortfolio/MyPortfolio";
import "./Home.css";
import MyNavbar from "../MyNavbar/MyNavbar";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Blogs from "./Blogs/Blogs/Blogs";

const Home = () => {
  return (
    <div className="mainBackground">
      <MyNavbar></MyNavbar>
      <Header />
      <AboutMe />
      <MyPortfolio />
      <Blogs />
      <Skills />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
