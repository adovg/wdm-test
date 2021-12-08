import React from "react";
import "./Form.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col } from "react-bootstrap";
import ButtonMain from "../../ButtonMain/ButtonMain";

export default function FormItem() {
  return (
    <Form className="contact__form">
      <Row className="row__input">
        <Col>
          <Form.Control placeholder="First name" className="input" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Row className="row__input">
        <Col>
          <Form.Control placeholder="Phone Number" />
        </Col>
        <Col>
          <Form.Control placeholder="Enter Email" />
        </Col>
      </Row>
      <Row className="row__input">
        <Col>
          <Form.Control as="textarea" placeholder="Tell Us What Happened" />
        </Col>
      </Row>
      <Row className="row__input">
        <Col className="row__btn">
          <ButtonMain type="submit" text={"Send"} />
        </Col>
      </Row>
    </Form>
  );
}
