import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Service = () => {
  const services = [
    {
      title: 'Product Warranty Service',
      description: 'We provide extended warranty services for electronics and appliances.',
      image: 'https://thumbs.dreamstime.com/b/warranty-pressing-button-virtual-screen-35134149.jpg',
    },
    {
      title: 'Home Delivery Service',
      description: 'Fast and reliable home delivery for all your product orders.',
      image: 'https://img.freepik.com/premium-vector/delivery-service_203633-734.jpg?semt=ais_hybrid',
    },
    {
      title: '24/7 Customer Support',
      description: 'Our support team is available around the clock to assist you.',
      image: 'https://img.freepik.com/free-vector/people-addicted-smartphones-social-media-obsession-trendy-lifestyle-gadgets-abuse-contemporary-leisure-modern-generation-problem_335657-63.jpg?semt=ais_hybrid',
    },
    {
      title: 'Product Customization',
      description: 'Get your products customized according to your preferences.',
      image: 'https://chisellabs.com/glossary/wp-content/uploads/2022/07/pasted-image-0-8.png',
    },
    {
      title: 'Easy Returns & Refunds',
      description: 'Hassle-free return and refund services for a better shopping experience.',
      image: 'https://img.freepik.com/premium-vector/easy-returns-sign-label-delivery-service-vector-stock-illustration_100456-11334.jpg?semt=ais_hybrid',
    },
    {
        title: 'Multiple Payment Options',
        description: 'Pay with your preferred method—credit card, digital wallet, or COD.',
        image: 'https://img.freepik.com/free-vector/online-payment-concept-illustration_114360-1602.jpg',
      },
  ];

  return (
    <>
      <Header />
      <Container className="my-3">
  <h1 className="text-center mb-4">Our Services</h1>
  <Row className="g-4">
    {services.map((service, index) => (
      <Col key={index} md={6} lg={4}>
        <Card className="h-100 shadow-sm">
          <div className="card-image-container">
            <Card.Img variant="top" src={service.image} alt={service.title} />
          </div>
          <Card.Body>
            <Card.Title>{service.title}</Card.Title>
            <Card.Text>{service.description}</Card.Text>
            <button style={{ background: "var(--salmon-pink)",color:"white" ,padding: "10px 20px",marginTop:"5px", borderRadius: "5px", cursor: "pointer" }}>
            Learn more
            </button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

      <Footer />
      <style jsx="true">{`
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default Service;
