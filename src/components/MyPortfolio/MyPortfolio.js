import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleWork from "./SingleWork/SingleWork";
import Fade from "react-reveal/Fade";

const MyPortfolio = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getProjects")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);

  return (
    <section className="py-5" id="myPortfolio">
      <Container className="my-5">
        <Fade bottom>
          <h2 className="main-title">My Portfolio</h2>
          <br />
          <Row>
            {works.map((work) => (
              <SingleWork key={work._id} work={work}></SingleWork>
            ))}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default MyPortfolio;
