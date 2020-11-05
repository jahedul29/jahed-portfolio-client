import React, { useEffect, useState } from "react";
import { Container, Nav, Row, Button } from "react-bootstrap";
import Footer from "../Foooter/Footer";
import MyNavbar from "../MyNavbar/MyNavbar";
import SingleWork from "../MyPortfolio/SingleWork/SingleWork";
import "./AllPortfolios.css";

const AllPortfolios = () => {
  const [allWorks, setAllWorks] = useState([]);

  useEffect(() => {
    fetch("https://jahed-portfolio-server.herokuapp.com/getProjects")
      .then((res) => res.json())
      .then((data) => setAllWorks(data));
  }, []);

  const handleFilterBtnClick = (e) => {
    const category = e.target.value === "all" ? "" : e.target.value;
    fetch(
      "https://jahed-portfolio-server.herokuapp.com/getProjects?category=" +
        category
    )
      .then((res) => res.json())
      .then((data) => setAllWorks(data));
  };

  return (
    <section className="mainBackground">
      <MyNavbar />
      <Container className="py-5">
        <h2 className="main-title text-center">Projects</h2>
        <br />
        <Nav className="my-4 ">
          <div className="project-button-container">
            <button value="all" onClick={handleFilterBtnClick}>
              All
            </button>
            <button value="full-stack" onClick={handleFilterBtnClick}>
              Full Stack
            </button>
            <button value="front-end" onClick={handleFilterBtnClick}>
              Front End
            </button>
            <button value="landing-page" onClick={handleFilterBtnClick}>
              Landing Page
            </button>
            <button value="others" onClick={handleFilterBtnClick}>
              Others
            </button>
          </div>
        </Nav>
        <div>
          <Row>
            {allWorks.map((work) => (
              <SingleWork work={work}></SingleWork>
            ))}
          </Row>
        </div>
      </Container>
      <Footer />
    </section>
  );
};

export default AllPortfolios;
