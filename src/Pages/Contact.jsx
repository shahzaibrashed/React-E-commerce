/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Contact = () => {
    return (
        <>
            <Header />
            <main className="py-5 bg-light">
                <Container>
                    <Row className="g-4">
                        <Col md={6}>
                            <h2 className="fw-bold mb-4">Contact Information</h2>
                            <div className="mb-3">
                                <i className="bi bi-envelope-fill text-primary me-2"></i>
                                <strong>Email : </strong>anon@gmail.com
                            </div>
                            <div className="mb-3">
                                <i className="bi bi-telephone-fill text-primary me-2"></i>
                                <strong>Phone :</strong> +0123456789
                            </div>
                            <div className="mb-3">
                                <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                                <strong>Address : </strong>
                                419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
                            </div>
                            <iframe
                                className="mt-4 w-100 rounded shadow-sm"
                                height="300"
                                frameBorder="0"
                                scrolling="no"
                                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            ></iframe>
                        </Col>
                        <Col md={6}>
                            <h4 className="fw-bold mb-4">Send Us a Message</h4>
                            <Form>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group controlId="formFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text" placeholder="John" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Doe" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="tel" placeholder="+1234567890" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Write your message here..." />
                                </Form.Group>
    
    <button style={{ background: "var(--salmon-pink)",color:"white" ,padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>
                                    Send Message
                                </button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
            <style>{`
        a {
          text-decoration: none;
        }
      `}</style>
        </>
    );
};

export default Contact;
