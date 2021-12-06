import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Hero() {
  return (
    <Container>
      <Row>
        <Col>
          <p>We currently take cases that are $10,000 US and up</p>
        </Col>
        <Col>
          <Button>Get a free consultation</Button>
        </Col>
      </Row>
    </Container>
  );
}
