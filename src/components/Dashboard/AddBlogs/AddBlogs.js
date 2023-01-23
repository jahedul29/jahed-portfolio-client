import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import { baseUrl } from './../../../utils/config';

const AddBlogs = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    fetch(`${baseUrl}addBlog`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Blog added successfully");
          document.getElementById("addBlog-form").reset();
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <Container fluid className="p-0 dashboard-content-container">
      <Row>
        <Col xs={2}>
          <Sidebar></Sidebar>
        </Col>
        <Col xs={10}>
          <h3 className="main-title py-4 text-center">Add Blog</h3>
          <div className="dashboard-content m-2 overflow-auto">
            <form
              id="addBlog-form"
              className="main-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="form-control"
                placeholder="Title"
                name="title"
                ref={register({
                  required: { value: true, message: "Project name required" },
                })}
              />
              {errors.title && (
                <span className="error">{errors.title.message}</span>
              )}
              <select
                className="form-control"
                name="field"
                ref={register({
                  required: "Field required",
                })}
              >
                <option selected value="" disabled>
                  Select field
                </option>
                <option value="programming">Programming</option>
                <option value="web-development">Web-Development</option>
                <option value="technologies">Technologies</option>
                <option value="others">Others</option>
              </select>
              {errors.field && (
                <span className="error">{errors.field.message}</span>
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

              <input
                className="form-control"
                placeholder="Blog link"
                name="link"
                ref={register({
                  required: { value: true, message: "Blog link required" },
                })}
              />
              {errors.link && (
                <span className="error">{errors.link.message}</span>
              )}
              <input
                className="form-control"
                placeholder="Where posted?"
                name="hosting"
                ref={register({
                  required: {
                    value: true,
                    message: "Hosting site name required",
                  },
                })}
              />
              {errors.hosting && (
                <span className="error">{errors.hosting.message}</span>
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

export default AddBlogs;
