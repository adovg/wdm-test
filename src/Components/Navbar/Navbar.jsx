import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.scss";
import Logo from "../Logo/Logo";
import CallBtn from "./CallBtn/CallBtn";

export default function NavbarItem() {
  return (
    <div className="nav__container">
      <Logo className="d-inline-block align-top"/>
    <Navbar collapseOnSelect expand="lg">
    <Navbar.Brand href="#home">
      
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#About">About us</Nav.Link>
        <NavDropdown title="Our services" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Lorem ipsum</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Lorem ipsum</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Lorem ipsum</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Lorem ipsum</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#contact">Contact Us</Nav.Link>
      </Nav>
      
      <Nav>
  
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <CallBtn />
  </div>
  );
}
