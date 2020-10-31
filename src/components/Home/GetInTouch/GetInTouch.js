import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMailBulk,
  faMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Col, Container, FormGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./GetInTouch.css";
import Fade from "react-reveal/Fade";
import { AdminContext } from "../../../App";

const GetInTouch = () => {
  const { register, handleSubmit, errors } = useForm();
  const { adminDetails } = useContext(AdminContext);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          document.getElementById("contact-form").reset();
          alert("Your message sent successfully");
        } else {
          alert("Error! Something went wrong");
        }
      });
  };
  return (
    <section className="py-5" id="getInTouch">
      <Container className="py-5">
        <Fade bottom>
          <h2 className="main-title text-center mb-5">Get In Touch</h2>
          <Row>
            <Col className="pt-4 my-2 " xs={12} md={6} lg={6}>
              <p className="gray-text">
                If you want to know more about anything. You can contact with
                me. You can also give me opinion about my page. My inbox is
                always open for you. I will try my best to reply all of your
                message
              </p>
              <div className="getInTouch-icon pb-md-3">
                <p>
                  <FontAwesomeIcon icon={faMarker}></FontAwesomeIcon>
                  &nbsp;&nbsp;{adminDetails.address}
                </p>
                <p>
                  <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
                  &nbsp;&nbsp;{adminDetails.mail}
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                  &nbsp;&nbsp;{adminDetails.phone}
                </p>
              </div>

              <div className="pt-lg-5">
                <a href={adminDetails.github} rel="noreferrer" target="_blank">
                  <FontAwesomeIcon
                    className="big-icon"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                </a>
                <a
                  href={adminDetails.linkedIn}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="big-icon"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                </a>
                <a
                  href={adminDetails.facebook}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="big-icon"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                </a>
              </div>
            </Col>
            <Col className="my-2 mt-sm-4" xs={12} md={6} lg={6}>
              <div className="form-container pt-4">
                <form
                  id="contact-form"
                  className="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <FormGroup>
                    <input
                      className="form-control"
                      name="email"
                      placeholder="Your Email *"
                      ref={register({
                        required: {
                          value: true,
                          message: "Email required",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="error">{errors.email.message}</span>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <input
                      className="form-control"
                      name="name"
                      placeholder="Your Name *"
                      ref={register({
                        required: {
                          value: true,
                          message: "Name required",
                        },
                      })}
                    />
                    {errors.name && (
                      <span className="error">{errors.name.message}</span>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <textarea
                      rows="6"
                      className="form-control"
                      name="message"
                      placeholder="Leave your message here *"
                      ref={register({
                        required: {
                          value: true,
                          message: "Message required",
                        },
                      })}
                    ></textarea>
                    {errors.message && (
                      <span className="error">{errors.message.message}</span>
                    )}
                  </FormGroup>
                  <FormGroup className="text-right">
                    <input
                      className="main-button w-50 py-2 px-4 "
                      type="submit"
                      value="Send"
                    />
                  </FormGroup>
                </form>
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default GetInTouch;
