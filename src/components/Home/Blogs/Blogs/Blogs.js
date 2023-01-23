import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";
import "./Blogs.css";
import "swiper/swiper-bundle.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Virtual,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SingleBlog from "../SingleBlog/SingleBlog";
import { baseUrl } from './../../../../utils/config';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);

const Blogs = () => {
  let history = useHistory();
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch(`${baseUrl}getBlogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <section className="py-5" id="blogs">
      <Container className="my-5">
        <Fade bottom>
          <h2 className="main-title">Blogs</h2>
        </Fade>
        <br />
        <Fade bottom>
          <Swiper
            spaceBetween={50}
            slidesPerView="auto"
            centeredSlide={false}
            navigation
            autoplay={true}
            key={blogs && blogs.length}
          >
            {blogs &&
              blogs.map((blog, index) => (
                <SwiperSlide key={index}>
                  <SingleBlog key={blog._id} blog={blog} />
                </SwiperSlide>
              ))}
          </Swiper>
          <br />
          <br />
          <div className="w-100 text-center">
            <Button
              onClick={() => history.push("/blogs")}
              className="main-button see-all-button"
            >
              See More
            </Button>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Blogs;
