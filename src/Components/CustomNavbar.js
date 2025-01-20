import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './CustomNavbar.css'; // Include the custom CSS for styling

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        Drizzles
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/menu" className="nav-link">
            Menu
          </Nav.Link>
          <Nav.Link as={Link} to="/gallery" className="nav-link">
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/order" className="nav-link">
            Order
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/reviews" className="nav-link">
            Reviews
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
