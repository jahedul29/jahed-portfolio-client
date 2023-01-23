import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { baseUrl } from "../../utils/config";
import Footer from "../Foooter/Footer";
import SingleBlog from "../Home/Blogs/SingleBlog/SingleBlog";
import MyNavbar from "../MyNavbar/MyNavbar";

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch(`${baseUrl}getBlogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <section className="mainBackground h-100">
      <MyNavbar />
      <Container className="py-2 py-md-5">
        <h2 className="main-title text-center mb-3">Blogs</h2>
        <br />
        <div>
          <Row>
            {blogs &&
              blogs.map((blog) => (
                <Col md={6} lg={4} key={blog._id}>
                  <SingleBlog key={blog._id} blog={blog} />
                </Col>
              ))}
          </Row>
        </div>
      </Container>
      <Footer />
    </section>
  );
};

export default Blogs;
