import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaInstagram } from 'react-icons/fa';

const ContactForm = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields); 
  };

  return (
<Container className="container-fluid view">
  <Row className="">
    <Col xs={12} md={6} className="p-5 text-center align-items-center justify-content-center">
      <h2>Bize Ulaşın</h2>
      <ul className="list-unstyled">
        <li><FaYoutube /> <a href="https://www.youtube.com/channel/UCd8e-ghMPaM0GKvuonP939A"> @arskaciftlik</a></li>
        <li><FaInstagram /> Telefon: +90 (212) 555 55 55</li>
        <li><FaPhone /> Telefon: +90 (212) 555 55 55</li>
        <li><FaEnvelope /> E-posta: arskaciftlik@gmail.com</li>
        <li><FaMapMarkerAlt /> Adres: Çanakkale, Türkiye</li>
      </ul>
    </Col>
    <Col xs={12} md={6}>
      <h2 className="my-4 text-center">İletişim Formu</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Adınız</Form.Label>
          <Form.Control
            type="text"
            placeholder="Adınız"
            name="name"
            value={formFields.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>E-Posta Adresiniz</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-Posta Adresiniz"
            name="email"
            value={formFields.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Mesajınız</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Mesajınız"
            name="message"
            value={formFields.message}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Gönder
        </Button>
      </Form>
    </Col>
  </Row>
</Container>
  );
};

export default ContactForm;
