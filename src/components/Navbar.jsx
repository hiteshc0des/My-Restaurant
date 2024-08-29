import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar as BootstrapNavbar,
  Container as BootstrapContainer,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <BootstrapNavbar
      expand="lg"
      className="fixed-top bg-body-tertiary shadow custom-nav shift"
    >
      <BootstrapContainer fluid>
        {" "}
        <BootstrapNavbar.Brand>
          <Link to="/" className="navbar-brand text-success fw-semibold">
            Khana Khazana
          </Link>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100">
            <Nav.Link
              as={Link}
              to="/"
              className="text-uppercase nav-link-custom"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/menu"
              className="text-uppercase nav-link-custom"
            >
              Menu
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="text-uppercase nav-link-custom"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="text-uppercase nav-link-custom"
            >
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapContainer>
    </BootstrapNavbar>
  );
};

export default Navbar;
