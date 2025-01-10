import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { clearCart, RemoveProduct } from '../redux/cartSlice';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const { cart } = useSelector((state) => state.cartsItem);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

   const navigate = useNavigate()
   const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/")
    dispatch(clearCart());
    Swal.fire({
        title: "Your Order Successfully Confirm",
        icon: "success",
        draggable: true,
      });
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return 4; 
  };

  const calculateShipping = () => {
    return 12; 
  };

  const calculateTotal = (subtotal, tax, shipping) => {
    return subtotal + tax + shipping;
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax();
  const shipping = calculateShipping();
  const total = calculateTotal(subtotal, tax, shipping);

   const removeCart = (item) => {
      dispatch(RemoveProduct(item))
    }

  return (
    <>
      <Header />
      <Container className="my-5">
        <Row>
          <Col md={8} className="mx-auto">
            <Card>
              <Card.Body>
                <Card.Title as="h4" className="text-center mb-4">
                  Checkout Form
                </Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col sm={12} md={6}>
                      <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formAddress" className='mt-2'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Row>
                    <Col sm={12} md={6} className='mt-2'>
                      <Form.Group controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={6} className='mt-2'>
                      <Form.Group controlId="formZipCode">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your zip code"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formCountry" className='mt-2'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      as="select"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your country</option>
                      <option value="USA">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="India">India</option>
                      {/* Add more countries as needed */}
                    </Form.Control>
                  </Form.Group>

                  <hr />

                  <Card.Title as="h5" className="text-center mb-4">
                    Payment Information
                  </Card.Title>

                  <Form.Group controlId="formCardNumber">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your card number"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Row>
                    <Col sm={12} md={6} className='mt-2'>
                      <Form.Group controlId="formExpiryDate">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control
                          type="month"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={6}className='mt-2'>
                      <Form.Group controlId="formCvv">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter CVV"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

               
                <Button  type="submit" className="w-100 mt-4 custom-btn">
                    Complete Checkout
                  </Button>
              
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Product Details */}
          <Col md={4} className="mt-4 mt-md-0">
            <Card>
              <Card.Body>
                <Card.Title as="h5">Product Details : {cart.length}</Card.Title>
                {cart.map((item, index) => (
                  <div key={index} className="d-flex justify-content-between mb-1 mt-3 border-bottom">
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div className=' w-50'>
                      <p>{item.title}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <p>${item.price * item.quantity}</p>
                   <div style={
                    {cursor:"pointer",color:"red"}
                   }> <ion-icon onClick={()=>removeCart(item)} name="close-outline"></ion-icon></div>
                  </div>
                 
                ))}
               
                <div className="d-flex justify-content-between">
                  <strong>Subtotal :</strong>
                  <span>${subtotal}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <strong>Tax :</strong>
                  <span>${tax}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <strong>Shipping :</strong>
                  <span>${shipping}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <strong>Total :</strong>
                  <span>${total}</span>
                </div>
                <hr />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
      <style>{`
        a {
          text-decoration: none;
        }
            .custom-btn {
          background-color: #f8d7da; /* Light Pink */
          border-color: #f8d7da;     /* Light Pink */
        }

        .custom-btn:hover {
          background-color: #f5c6cb; /* Slightly darker light pink on hover */
          border-color: #f5c6cb;     /* Slightly darker border color */
        }
      `}</style>
    </>
  );
};

export default CheckoutForm;
