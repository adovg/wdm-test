import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.scss";
import ButtonMain from "../../ButtonMain/ButtonMain";

export default function Hero() {
  return (
    <Container>
      <Row className="hero_row-text">
        <Col>
          <p className="hero__text">
            <span>We currently take cases</span>{" "}
            <span>that are $10,000 US and up</span>
          </p>
        </Col>
        <Col>
          <ButtonMain text={'Get a free consultation'}/>
        </Col>
      </Row>
    </Container>
  );
}
