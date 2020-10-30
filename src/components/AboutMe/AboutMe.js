import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import myDetails from "../../fakedata/mydetails";
import "./AboutMe.css";

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
        <h2 className="main-title text-left">About Me</h2>
        <br />
        <Row>
          <Col xs={12} md={6} className="text-left">
            {aboutParas.map((par) => (
              <p className="aboutMe-text">{par}</p>
            ))}
          </Col>
          <Col xs={12} md={6}>
            <div className="aboutMeImg-container">
              <img src={info.photo} alt="Jahedul Hoque" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
