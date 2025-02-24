import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
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
    if (cart.length === 0) {
      toast.error("Your order not success beasuse your cart is empty");
      return
    } else {
      console.log(formData);
      navigate("/")
      dispatch(clearCart());
      toast.success("Your Order Successfully Confirm");
    }
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
  const roundedsubtotal = Math.round(subtotal);
  const tax = calculateTax();
  const shipping = calculateShipping();
  const total = calculateTotal(subtotal, tax, shipping);
  const roundedTotal = Math.round(total);

  const removeCart = (item) => {
    dispatch(RemoveProduct(item))
  }

  return (
    <>
      <Header />
      <Container className="my-5">
        <Row>
          <Col lg={8} className="mx-auto">
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
                        <Form.Label >Email</Form.Label>
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
                  <Form.Group controlId="formAddress" className='mt-3'>
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
                    <Col sm={12} md={6} className='mt-3'>
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
                    <Col sm={12} md={6} className='mt-3'>
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
                  <Form.Group controlId="formCountry" className='mt-3'>
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
                    <Col sm={12} md={6} className='mt-2'>
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
                  <Button type="submit" className="w-100 mt-4 custom-btn">
                    Complete Checkout
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {/* Product Details */}
          <Col lg={4} className="mt-4 mt-md-0">
            <Card>
              <Card.Body>
                <Card.Title as="h5">Product Details : {cart.length}</Card.Title>
                <div className='cc' style={{ height: "300px", overflowY: "auto" }}>
                  {
                    cart.length === 0 ?
                      (<div className="text-center m-3 mt-5 mb-0">
                        <h4>Your Product is empty</h4>
                        <p onClick={()=>navigate("/")} style={{ cursor: "pointer" }}>Add some products to see them here!</p>
                      </div>)
                      : cart.map((item, index) => (
                        <div
                          key={index}
                          className="d-flex justify-content-between align-items-center p-3 mb-3 border rounded shadow-sm"
                        >
                          <img
                            src={item.imgUrl}
                            alt={item.title}
                            className="rounded"
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                            }}
                          />
                          <div className="ms-3 flex-grow-1">
                            <p className="mb-1 fw-bold">{item.title}</p>
                            <p className="mb-1 text-muted">Quantity: {item.quantity}</p>
                            <p className="mb-0 text-success fw-semibold">${item.price * item.quantity}</p>
                          </div>
                          <div
                            style={{ cursor: "pointer", color: "red", fontSize: "20px" }}
                            onClick={() => removeCart(item)}
                          >
                            <ion-icon name="close-outline"></ion-icon>
                          </div>
                        </div>
                      ))}
                </div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <strong className="">Subtotal :</strong>
                  <span>${roundedsubtotal}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <strong>Tax :</strong>
                  <span>${tax}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <strong>Shipping :</strong>
                  <span>${shipping}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <strong>Total :</strong>
                  <span>${roundedTotal}</span>
                </div>
                <hr />
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
      <Footer />
      <style>{`
      .cc::-webkit-scrollbar {
  width: 4px;
}

.cc::-webkit-scrollbar-thumb {
  background-color: grey; 
  border-radius: 10px;
}
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
