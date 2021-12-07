import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.scss";

export default function Hero() {
  return (
    <Container>
      <Row>
        <Col>
          <p className="hero__text">
            <span>We currently take cases</span>{" "}
            <span>that are $10,000 US and up</span>
          </p>
        </Col>
        <Col>
          <div className="hero__btn-wrap">
            <button className="hero__btn">Get a free consultation</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
