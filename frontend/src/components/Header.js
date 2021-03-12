import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="header-logo">
              <img src={"logo"} width="20%" alt="logo"></img>Nerdy Web
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/faq">
                <Nav.Link>
                  <i className="fa fa-question-circle"></i> FAQ
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link>
                  <i className="fas fa-info-circle"></i> About
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
