import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import "./NavLinks";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavLinks() {
  return (
    <Nav className="nav__wrap">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#link">About Us</Nav.Link>
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Lorem Ipsum</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Lorem Ipsum</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Lorem Ipsum</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.4">Lorem Ipsum</NavDropdown.Item>
      <NavDropdown.Divider />
    </NavDropdown>
    <Nav.Link href="#link">Contact Us</Nav.Link>
  </Nav>
  );
}
