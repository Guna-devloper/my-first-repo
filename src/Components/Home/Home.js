import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">FuelMate</div>
        <ul className="nav-links">
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login" className="btn-login">Login</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Order Fuel Anytime, Anywhere</h1>
        <p>Experience the convenience of doorstep petrol delivery with FuelMate.</p>
        <a href="/order" className="btn-order">Order Now</a>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose FuelMate?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Convenience</h3>
            <p>Order fuel online and get it delivered to your location.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Payments</h3>
            <p>Multiple payment options with complete security.</p>
          </div>
          <div className="feature-card">
            <h3>24/7 Availability</h3>
            <p>Order anytime, day or night, and we’ll deliver.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 FuelMate. All rights reserved.</p>
        <div className="social-links">
          <a href="/facebook">Facebook</a>
          <a href="/twitter">Twitter</a>
          <a href="/instagram">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
