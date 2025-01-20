import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import './Gallery.css'; // Styling for the gallery page

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    { src: 'path_to_custom_cake1.jpg', alt: 'Custom Cake 1', description: 'A beautifully decorated birthday cake.' },
    { src: 'path_to_custom_cake2.jpg', alt: 'Custom Cake 2', description: 'A colorful cake for any special event.' },
    { src: 'path_to_pizza1.jpg', alt: 'Pizza 1', description: 'Hot, cheesy pizza with fresh ingredients.' },
    { src: 'path_to_pizza2.jpg', alt: 'Pizza 2', description: 'Delicious pizza with various toppings.' },
    { src: 'path_to_sandwich1.jpg', alt: 'Sandwich 1', description: 'Grilled sandwich with crispy veggies.' },
    { src: 'path_to_burger1.jpg', alt: 'Burger 1', description: 'Juicy burger with a perfectly grilled patty.' },
    // Add more images as needed
  ];

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="gallery-container">
      <Container>
        <h1 className="gallery-title">Our Gallery</h1>
        <Row>
          {images.map((image, index) => (
            <Col md={4} sm={6} key={index} className="gallery-item">
              <div className="gallery-item-card" onClick={() => handleShow(image)}>
                <img src={image.src} alt={image.alt} className="gallery-item-img" />
                <div className="gallery-item-overlay">
                  <p className="overlay-text">{image.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for displaying enlarged image */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Image Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedImage.src} alt={selectedImage.alt} className="modal-img" />
          <p>{selectedImage.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Gallery;
