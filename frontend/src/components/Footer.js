import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; WEBSCREENPDF</Col>
          <Col className="text-center py-3">
            Developed by{" "}
            <a rel="noreferrer" href="https://www.harshprasad.com" target="_blank">
              Harsh Prasad
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
