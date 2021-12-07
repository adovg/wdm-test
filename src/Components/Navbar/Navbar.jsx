import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.scss";
import { Container, Row, Col } from "react-bootstrap";
import NavLinks from "../NavLinks/NavLinks";
import Logo from "../Logo/Logo";
import CallBtn from "./CallBtn/CallBtn";

export default function Navbar() {
  return (
    <Container className="navbar__row">

        <Logo />
        <NavLinks />
        <CallBtn />

    </Container>
  );
}
