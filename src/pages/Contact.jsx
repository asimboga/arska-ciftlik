import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
    console.log(formFields); // Burada form alanlarını konsolda yazdırabilirsiniz
  };

  return (
    <Container>
      <Col md={6}>
          <h2>Bize Ulaşın</h2>
          <ul className="list-unstyled">
            <li><FaPhone /> Telefon: +90 (212) 555 55 55</li>
            <li><FaEnvelope /> E-posta: info@eticaretsitem.com</li>
            <li><FaMapMarkerAlt /> Adres: İstanbul, Türkiye</li>
          </ul>
        </Col>
      <Row className="justify-content-md-center">
        <Col md={6}>
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
