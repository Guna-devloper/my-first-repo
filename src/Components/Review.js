import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component'; // Import the rating stars component
import './Review.css'; // Styling for the reviews page

const reviews = [
  {
    title: 'Delicious Cakes!',
    name: 'Jane Doe',
    rating: 5,
    text: 'The customized birthday cake I ordered was absolutely delicious and beautifully designed. Highly recommend Drizzles!',
  },
  {
    title: 'Amazing Pizza!',
    name: 'John Smith',
    rating: 4,
    text: 'I ordered the Margherita pizza, and it was perfect! The crust was crispy, and the toppings were fresh.',
  },
  {
    title: 'Great Service',
    name: 'Sarah Lee',
    rating: 5,
    text: 'The customer service at Drizzles was excellent. They helped me choose the right cake for my event, and it was a hit!',
  },
  // Add more reviews as needed
];

const Review = () => {
  return (
    <div className="reviews-container">
      <Container>
        <h1 className="reviews-title">Customer Reviews</h1>
        <Row>
          {reviews.map((review, index) => (
            <Col md={4} key={index} className="review-item">
              <Card>
                <Card.Body>
                  <Card.Title>{review.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">By {review.name}</Card.Subtitle>
                  <Card.Text>{review.text}</Card.Text>
                  <Card.Footer>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={24}
                      isHalf={true} // Allows half-star ratings
                      edit={false} // Makes it read-only
                      activeColor="#ffd700" // Gold color for stars
                    />
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Review;
