import React from "react";
import "./SingleBlog.css";

const SingleBlog = ({ blog }) => {
  const { title, photo, link, hosting } = blog;
  return (
    <div className="single-blog my-3 d-flex flex-column justify-content justify-content-around">
      <div className="blog-img-container overflow-hidden">
        <img className="w-100 blog-img" src={photo} alt="blog-img" />
      </div>
      <h5>{title}</h5>
      <a href={link} target="_blank" rel="noreferrer">
        <button className="main-button">Read at {hosting}</button>
      </a>
    </div>
  );
};

export default SingleBlog;
