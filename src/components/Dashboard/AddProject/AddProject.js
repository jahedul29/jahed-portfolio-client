import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./../Sidebar/Sidebar";
import "./AddProject.css";
import { useForm } from "react-hook-form";

const AddProject = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addProject", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("data inserted");
          //   document.getElementById("addProject-form").reset();
        } else {
          alert("data not inserted");
        }
      });
  };

  console.log(errors);

  return (
    <Container fluid className="p-0 dashboard-content-container">
      <Row>
        <Col xs={2}>
          <Sidebar></Sidebar>
        </Col>
        <Col xs={10}>
          <h3 className="main-title py-4 text-center">Add Project</h3>
          <div className="dashboard-content m-2 overflow-auto">
            <form
              id="addProject-form"
              className="main-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="form-control"
                placeholder="Project Name"
                name="name"
                ref={register({
                  required: { value: true, message: "Project name required" },
                })}
              />
              {errors.name && (
                <span className="error">{errors.name.message}</span>
              )}
              <select
                className="form-control"
                name="category"
                ref={register({
                  required: "Category required",
                })}
              >
                <option selected value="" disabled>
                  Select Category
                </option>
                <option value="full-stack">Full-Stack</option>
                <option value="front-end">FrontEnd</option>
                <option value="landing-page">Landing Page</option>
                <option value="others">Other</option>
              </select>
              {errors.category && (
                <span className="error">{errors.category.message}</span>
              )}
              <input
                className="form-control"
                placeholder="Photo link"
                name="photo"
                ref={register({
                  required: { value: true, message: "Photo required" },
                })}
              />
              {errors.photo && (
                <span className="error">{errors.photo.message}</span>
              )}
              <textarea
                className="form-control"
                rows="4"
                placeholder="Project description"
                name="description"
                ref={register({
                  required: { value: true, message: "Description required" },
                })}
              />
              {errors.description && (
                <span className="error">{errors.description.message}</span>
              )}
              <input
                className="form-control"
                placeholder="Technologies separated by ,"
                name="technologies"
                ref={register({
                  required: {
                    value: true,
                    message: "Used technologies required",
                  },
                })}
              />
              {errors.technologies && (
                <span className="error">{errors.technologies.message}</span>
              )}
              <input
                className="form-control"
                placeholder="Github link"
                name="github"
                ref={register({
                  required: { value: true, message: "Github link required" },
                })}
              />
              {errors.github && (
                <span className="error">{errors.github.message}</span>
              )}
              <input
                className="form-control"
                placeholder="Website link"
                name="website"
                ref={register({
                  required: { value: true, message: "Website link required" },
                })}
              />
              {errors.website && (
                <span className="error">{errors.website.message}</span>
              )}
              <input
                className="form-control"
                placeholder="Video link"
                name="video"
                ref={register({ required: false })}
              />
              {errors.video && (
                <span className="error">{errors.video.message}</span>
              )}
              <select
                className="form-control"
                name="status"
                ref={register({ required: true })}
              >
                <option value="featured">Featured</option>
                <option value="common">Common</option>
              </select>
              {errors.status && (
                <span className="error">{errors.status.message}</span>
              )}
              <div className="ml-auto w-50">
                <input className="main-button input-btn w-100" type="submit" />
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProject;
