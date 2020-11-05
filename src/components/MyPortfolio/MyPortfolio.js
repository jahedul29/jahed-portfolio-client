import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import SingleWork from "./SingleWork/SingleWork";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

const MyPortfolio = () => {
  const [featuredWorks, setFeaturedWorks] = useState([]);
  let history = useHistory();

  useEffect(() => {
    fetch("http://localhost:5000/getProjects?status=featured")
      .then((res) => res.json())
      .then((data) => setFeaturedWorks(data));
  }, []);

  return (
    <section className="py-5" id="myPortfolio">
      <Container className="my-5">
        <Fade bottom>
          <h2 className="main-title">Featured Work</h2>
        </Fade>
        <br />
        <Row>
          {featuredWorks.map((work) => (
            <SingleWork key={work._id} work={work}></SingleWork>
          ))}
        </Row>
        <br />
        <div className="w-100 text-center">
          <Button
            onClick={() => history.push("/portfolios")}
            className="main-button see-all-button"
          >
            See All
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default MyPortfolio;
