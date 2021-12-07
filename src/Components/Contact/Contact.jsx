import React from 'react';
import FormItem from './Form/Form';
import './Contact.scss';
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
    return (
        <Container className="contact">
            <h3><span>Contact</span>Us</h3>
            <FormItem />
        </Container>
    )
}
