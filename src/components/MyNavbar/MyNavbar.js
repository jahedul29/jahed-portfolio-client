import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import "./MyNavbar.css";

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand style={{ color: "#4DC5AF" }} href="#home">
        Jahed
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features">About Me</Nav.Link>
          <Nav.Link href="#pricing">Abilities</Nav.Link>
          <Nav.Link href="#pricing">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Blogs</Nav.Link>
          <Nav.Link href="#pricing">Abilities</Nav.Link>

          <Button className="navbar-resume-btn">Resume</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
