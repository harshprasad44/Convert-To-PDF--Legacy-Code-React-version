import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const ContainerBox = ({ url, title }) => {
  return (
    <Link to={`/convert/${url}`}>
      <Card className="my-3 p-3 rounded" border="primary" style={{ width: "18rem" }}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Title>Convert {title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ContainerBox;
