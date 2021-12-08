import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.scss";
import logoFooter from "../../Assets/logo-footer.svg";
import DMCA from "../../Assets/DMCA.svg";

export default function Footer() {
  return (
    <Container className="footer__container">
      <Row className="footer__row">
        <Col>
          <div>
            {" "}
            <img src={logoFooter} alt="logo footer" />
          </div>
          <p>All Rights Reserved to info.com</p>
          <p>© DDD – Web Marketing</p>
          <p>Privacy Policy</p>
          <div>
            {" "}
            <img src={DMCA} alt="DMCA logo" />
          </div>
        </Col>
        <Col>
          <h4>CONTACT US</h4>
          <p>
            <span>UK</span> +44-2020202020
          </p>
          <p>+44-2020202020</p>
          <p>
            <span>AUT</span> +44-2020202020
          </p>
          <p>
            <span>AUS</span> +44-2020202020
          </p>
        </Col>
        <Col>
          <h4>Adress</h4>
          <p>Lorem ipsum dolor sit.</p>
          <h4>OUR OFFICE HOURS</h4>
          <p>Mon-Fr: 8:00-18:00 GMT</p>
          <p>Sat/Su: Closed</p>
        </Col>
        <Col>
          <h4>Email Us</h4>
          <a href="mailto:info@info.com">info@info.com</a>
        </Col>
      </Row>
    </Container>
  );
}
