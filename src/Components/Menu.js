import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Menu.css'; // Styling for the menu page

const Menu = () => {
  const menuItems = [
    {
      name: 'Customized Birthday Cake',
      description: 'Delicious and beautifully designed cakes for all occasions. Choose your flavors and decorations.',
      price: '$30',
      image: 'path_to_cake_image.jpg',
      link: '/order',
    },
    {
      name: 'Margherita Pizza',
      description: 'Classic pizza with fresh mozzarella, basil, and a rich tomato sauce.',
      price: '$15',
      image: 'path_to_pizza_image.jpg',
      link: '/order',
    },
    {
      name: 'Grilled Chicken Sandwich',
      description: 'A crispy sandwich filled with juicy grilled chicken, lettuce, and mayo.',
      price: '$10',
      image: 'path_to_sandwich_image.jpg',
      link: '/order',
    },
    {
      name: 'Classic Beef Burger',
      description: 'A savory burger with a juicy beef patty, fresh lettuce, tomato, and a special sauce.',
      price: '$12',
      image: 'path_to_burger_image.jpg',
      link: '/order',
    },
  ];

  return (
    <div className="menu-container">
      <Container>
        <h1 className="menu-title">Our Menu</h1>
        <Row>
          {menuItems.map((item, index) => (
            <Col md={6} lg={3} key={index} className="menu-item">
              <div className="menu-item-card">
                <img src={item.image} alt={item.name} className="menu-item-img" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">{item.price}</p>
                <Button href={item.link} variant="danger" size="lg" className="order-btn">
                  Order Now
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
