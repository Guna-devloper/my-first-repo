import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Contact.css'; // Styling for the contact page

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send data to server or email)
    alert('Thank you for contacting us! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <Container>
        <h1 className="contact-title">Contact Us</h1>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="danger" type="submit" className="contact-btn">
                Submit
              </Button>
            </Form>
          </Col>

          <Col md={6} className="contact-info">
            <h4>Our Contact Information</h4>
            <p><strong>Address:</strong> 123 Drizzles Avenue, Food City, 12345</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> <a href="mailto:contact@drizzles.com">contact@drizzles.com</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
