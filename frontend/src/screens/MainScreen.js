import React from "react";
import { Col, Row } from "react-bootstrap";
import ContainerBox from "../components/ContainerBox";

const MainScreen = () => {
  return (
    <Row>
      <Col className="ContainerBox" sm={12} md={6} lg={4} xl={4}>
        <ContainerBox url="docx-pdf" title="DOCX to PDF" />
      </Col>
      <Col className="ContainerBox" sm={12} md={6} lg={4} xl={4}>
        <ContainerBox url="docx-pdf" title="DOCX to PDF" />
      </Col>
      <Col className="ContainerBox" sm={12} md={6} lg={4} xl={4}>
        <ContainerBox url="docx-pdf" title="DOCX to PDF" />
      </Col>
      <Col className="ContainerBox" sm={12} md={6} lg={4} xl={4}>
        <ContainerBox url="docx-pdf" title="DOCX to PDF" />
      </Col>
      <Col className="ContainerBox" sm={12} md={6} lg={4} xl={4}>
        <ContainerBox url="docx-pdf" title="DOCX to PDF" />
      </Col>
      <Col className="ContainerBox" sm={12} md={6} lg={4} xl={4}>
        <ContainerBox url="docx-pdf" title="DOCX to PDF" />
      </Col>
      <Col className="ContainerBox" sm={12} md={6} lg={4} xl={4}>
        <ContainerBox url="docx-pdf" title="DOCX to PDF" />
      </Col>
      <Col className="ContainerBox" sm={12} md={6} lg={4} xl={4}>
        <ContainerBox url="docx-pdf" title="DOCX to PDF" />
      </Col>
    </Row>
  );
};

export default MainScreen;
