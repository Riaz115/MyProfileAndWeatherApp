import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
function Header() {
  return (
    <div>
      <Navbar expand="lg" className="myNavbar">
        <Container>
          <Navbar.Brand href="/weather" className="weather">
            <FontAwesomeIcon icon={faSnowflake} className="mx-1 icon" />
            Weather <FontAwesomeIcon icon={faSnowflake} className="mx-1 icon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto forLinks ">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link ">
                About
              </NavLink>
              <NavLink to="/weather" className="nav-link ">
                Weather
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
