import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutMe.css";
import Fade from "react-reveal/Fade";
import myDetails from "../../../fakedata/mydetails";

const AboutMe = () => {
  const [info, setInfo] = useState({});
  const [aboutParas, setAboutParas] = useState([]);

  useEffect(() => {
    const loadedData = myDetails;
    setInfo(loadedData);
    setAboutParas(loadedData.aboutMe.split("\n"));
  }, []);

  //   const aboutParas = info.aboutMe.split("\n");
  console.log(aboutParas);

  return (
    <section id="aboutMe">
      <Container>
        <Fade bottom>
          <h2 className="main-title">About Me</h2>
          <br />
          <Row>
            <Col xs={12} lg={6} className="text-left">
              {aboutParas.map((par) => (
                <p className="aboutMe-text">{par}</p>
              ))}
            </Col>
            <Col xs={12} lg={6} className="my-4">
              <div className="text-center about-img-container">
                <div className="mask"></div>
                <img src={info.photo} alt="Jahedul Hoque" />
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default AboutMe;
