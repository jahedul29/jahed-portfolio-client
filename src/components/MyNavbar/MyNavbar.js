import React, { useContext } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { AdminContext } from "../../App";
import "./MyNavbar.css";

const MyNavbar = () => {
  const { adminDetails } = useContext(AdminContext);

  return (
    <Navbar id="navbar" collapseOnSelect expand="lg">
      <Navbar.Brand style={{ color: "#4DC5AF" }} href="#home">
        Jahed
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#aboutMe">About Me</Nav.Link>
          <Nav.Link href="#myPortfolio">Portfolio</Nav.Link>
          <Nav.Link href="#blogs">Blogs</Nav.Link>
          <Nav.Link href="#skills">Abilities</Nav.Link>
          <Nav.Link href="#getInTouch">Contact</Nav.Link>

          <Button
            href={adminDetails.resume}
            target="_blank"
            className="navbar-resume-btn"
          >
            Resume
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
