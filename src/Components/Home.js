import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css'; // Make sure to include styling for the homepage
import logo from "../Images/drizzles-logo.png"; // Path to the logo image
import cakeImage from "../Images/cake1.png"; // Replace with your actual image paths
import pizzaImage from "../Images/pizza1.png";
import sandwichImage from "../Images/sandwich1.png";
import brownieImage from "../Images/browine1.png"; // New brownie image
import pizzaImage2 from "../Images/pizza2.png"; // New pizza image
import sandwichImage2 from "../Images/sandwich2.png"; // New sandwich image
import cakeImage2 from "../Images/cake2.png"; // New cake image

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="hero-text">
              <h1 className="hero-title">Welcome to <span className="highlight">Drizzles</span></h1>
              <p className="hero-description">
                Indulge in our customized cakes, pizzas, sandwiches, and brownies. Perfect for any occasion!
              </p>
              <Button href="/menu" variant="primary" size="lg" className="hero-btn">Explore Menu</Button>
            </Col>
            <Col md={6} className="hero-image-container">
              <img src={logo} alt="Drizzles Logo" className="hero-img" />
            </Col>
          </Row>
        </Container>
        <div className="hero-overlay"></div>
      </section>

      {/* Featured Items */}
      <section className="featured-items">
        <Container>
          <h2 className="section-title">Our Specialties</h2>
          <Row>
            {/* First Row */}
            <Col md={4} sm={6}>
              <div className="feature-item">
                <img src={cakeImage} alt="Customized Cake" className="feature-img" />
                <h3>Custom Cakes</h3>
                <p>Design your dream cake for any occasion.</p>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="feature-item">
                <img src={pizzaImage} alt="Pizza" className="feature-img" />
                <h3>Delicious Pizzas</h3>
                <p>Freshly made pizzas with your favorite toppings.</p>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="feature-item">
                <img src={sandwichImage} alt="Sandwich" className="feature-img" />
                <h3>Tasty Sandwiches</h3>
                <p>Enjoy our crispy, filling sandwiches.</p>
              </div>
            </Col>

            {/* Second Row */}
            <Col md={4} sm={6}>
              <div className="feature-item">
                <img src={brownieImage} alt="Brownie" className="feature-img" />
                <h3>Gooey Brownies</h3>
                <p>Delightful brownies with rich chocolate flavor.</p>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="feature-item">
                <img src={pizzaImage2} alt="Pizza Variety" className="feature-img" />
                <h3>Pizza Variety</h3>
                <p>Try our special pizza varieties with unique flavors.</p>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="feature-item">
                <img src={cakeImage2} alt="Special Cakes" className="feature-img" />
                <h3>Special Cakes</h3>
                <p>Delightful cakes for every celebration.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className="cta-title">Ready to Taste the Best?</h2>
              <Button href="/order" variant="danger" size="lg" className="cta-btn">Order Now</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
