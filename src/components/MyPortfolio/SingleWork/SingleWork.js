import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./SingleWork.css";
import Fade from "react-reveal/Fade";

const SingleWork = (props) => {
  const work = props.work;
  return (
    <Col className="my-3" xs={12} md={6} lg={4}>
      <Fade bottom>
        <div className="single-work">
          <Row>
            <Col className="text-right" xs={12}>
              <a href={work.video} rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  className="work-icon"
                  title="Quick Preview"
                  icon={faYoutube}
                ></FontAwesomeIcon>
              </a>
              <a href={work.github} rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  className="work-icon"
                  title="Go to Github"
                  icon={faGithub}
                ></FontAwesomeIcon>
              </a>
              <a href={work.website} rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  className="work-icon"
                  title="Visit Website"
                  icon={faExternalLinkAlt}
                ></FontAwesomeIcon>
              </a>
            </Col>
          </Row>
          <div className="work-img-container">
            <img className="work-img" src={work.photo} alt={work.name} />
          </div>
          <div className="p-2">
            <h4 className="gray-text">{work.name}</h4>
            <p className="gray-text">{work.description}</p>
          </div>
          <div className="bottom-text p-2 text-secondary">
            {work.technologies}
          </div>
        </div>
      </Fade>
    </Col>
  );
};

export default SingleWork;
