import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Styling for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="footer-section">
            <h5>About Drizzles</h5>
            <p>
              Drizzles is your go-to restaurant for customized cakes, delicious pizzas, sandwiches, and burgers. 
              Perfect for birthdays, parties, or any special occasion!
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="footer-section">
            <h5>Contact Us</h5>
            <p><strong>Address:</strong> Daily Market, Neyveli Township</p>
            <p><strong>Phone:</strong> 8220775520 </p>
            <p><strong>Email:</strong> <a href="mailto:contact@drizzles.com">contact@drizzles.com</a></p>

            {/* Social Media Links */}
            <div className="footer-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row>
          <Col className="footer-copyright">
            <p>© {new Date().getFullYear()} Drizzles. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
