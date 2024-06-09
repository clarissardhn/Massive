import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import "../Style/Navbar.css";
import LogoNav from "../Gambar/LogoNav.png";

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="NavbarHeader navbar-margin-top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={LogoNav} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#my-plant">My Plant</Nav.Link>
              <Nav.Link href="/Galeri">Gallery</Nav.Link>
              <Nav.Link href="#guides">Guides</Nav.Link>
              <Nav.Link href="#schedule">Schedule</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#profile">
                <i className="bi bi-person"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
