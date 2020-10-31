import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import myWorks from "../../fakedata/myPortfolio";
import SingleWork from "./SingleWork/SingleWork";
import Fade from "react-reveal/Fade";

const MyPortfolio = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const loadedData = myWorks;
    setWorks(loadedData);
  }, []);

  return (
    <section className="py-5" id="myPortfolio">
      <Container className="my-5">
        <Fade bottom>
          <h2 className="main-title">My Portfolio</h2>
          <br />
          <Row>
            {works.map((work) => (
              <SingleWork work={work}></SingleWork>
            ))}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default MyPortfolio;
