import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutMe.css";
import Fade from "react-reveal/Fade";
import { AdminContext } from "../../../App";

const AboutMe = () => {
  const { adminDetails } = useContext(AdminContext);

  const { aboutMe } = adminDetails;

  return (
    <section id="aboutMe">
      <Container>
        <Fade bottom>
          <h2 className="main-title">About Me</h2>
          <br />
          <Row>
            <Col xs={12} lg={6} className="text-left">
              {aboutMe &&
                aboutMe.map((par) => <p className="aboutMe-text">{par}</p>)}
            </Col>
            <Col xs={12} lg={6} className="my-4">
              <div className="text-center about-img-container">
                <div className="mask"></div>
                <img src={adminDetails.photo_url} alt="Jahedul Hoque" />
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default AboutMe;
