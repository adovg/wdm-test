import React from "react";
import Hero from "./Hero/Hero";
import { Container, Row } from "react-bootstrap";
import "./Main.scss";

export default function Main() {
  return (
    <Container className="main__container">
      <Row className="hero__row">
        <h1 className="hero__h1">
          <span>Lorem ipsum set</span>
          <span>ammet test-test</span>
        </h1>
      </Row>
      <Row>
        <h2 className="hero__h2">Let us help you get it all back</h2>
      </Row>
      <Hero />
    </Container>
  );
}
