import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Badge, Alert } from 'react-bootstrap';
import {
  FaTrash,
  FaShoppingBag,
  FaMapMarkerAlt,
  FaCreditCard,
  FaLock,
  FaTag,
  FaTruck,
  FaReceipt,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { HiOutlineGift } from 'react-icons/hi';
import { BsCheckCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, RemoveProduct } from '../redux/cartSlice';
import toast from 'react-hot-toast';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const CheckoutPage = () => {
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
    saveInfo: false,
    promoCode: '',
    shippingMethod: 'standard'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const { cart } = useSelector((state) => state.cartsItem);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const formatCardNumber = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const validateShipping = () => {
    const { name, email, address, city, zipCode, country } = formData;
    if (!name || !email || !address || !city || !zipCode || !country) {
      toast.error('Please fill all shipping details');
      return false;
    }
    return true;
  };

  const validatePayment = () => {
    const { cardNumber, expiryDate, cvv } = formData;
    if (!cardNumber || cardNumber.replace(/\s/g, '').length !== 16) {
      toast.error('Please enter a valid 16-digit card number');
      return false;
    }
    if (!expiryDate) {
      toast.error('Please select expiration date');
      return false;
    }
    if (!cvv || cvv.length !== 3) {
      toast.error('Please enter a valid 3-digit CVV');
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (currentStep === 1 && !validateShipping()) return;
    if (currentStep === 2 && !validatePayment()) return;
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const removeFromCart = (item) => {
    dispatch(RemoveProduct(item));
    toast.success(`${item.title} removed from cart`);
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = formData.shippingMethod === 'express' ? 20 : 12;
  const tax = 4;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      toast.error("Your cart is empty. Please add items before checkout.");
      return;
    }

    const orderData = {
      orderId: `#${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString(),
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        imgUrl: item.imgUrl
      })),
      shippingInfo: {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        zipCode: formData.zipCode,
        country: formData.country,
        method: formData.shippingMethod
      },
      paymentInfo: {
        cardEnding: formData.cardNumber.slice(-4),
        total: total.toFixed(2)
      }
    };

    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          navigate('/payment-success', { state: { orderData } });
          setTimeout(() => dispatch(clearCart()), 3000);
        }, 1500);
      }),
      {
        loading: <div className="toast-loading">Processing your payment...</div>,
        success: <div className="toast-success">
          <BsCheckCircleFill className="me-2" /> Order confirmed!
        </div>,
        error: <div className="toast-error">Payment failed. Please try again.</div>,
      }
    );
  };

  const renderShippingStep = () => (
    <Card className="checkout-card mb-4 border-0 shadow-sm">
      <Card.Body className="p-4">
        <h4 className="mb-4 text-primary">
          <FaMapMarkerAlt className="me-2" /> Shipping Information
        </h4>

        <Row>
          <Col md={6} className="mb-3">
            <Form.Group>
              <Form.Label className="fw-bold">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="py-2"
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group>
              <Form.Label className="fw-bold">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="john@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="py-2"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Street Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="123 Main St"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="py-2"
          />
        </Form.Group>

        <Row>
          <Col md={6} className="mb-3">
            <Form.Group>
              <Form.Label className="fw-bold">City</Form.Label>
              <Form.Control
                type="text"
                placeholder="New York"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="py-2"
              />
            </Form.Group>
          </Col>
          <Col md={3} className="mb-3">
            <Form.Group>
              <Form.Label className="fw-bold">ZIP Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="10001"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="py-2"
              />
            </Form.Group>
          </Col>
          <Col md={3} className="mb-3">
            <Form.Group>
              <Form.Label className="fw-bold">Country</Form.Label>
              <Form.Select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="py-2"
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="IN">India</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <div className="mb-4">
          <h5 className="fw-bold mb-3">Shipping Method</h5>
          <div className="shipping-methods">
            <Card
              className={`mb-2 p-3 ${formData.shippingMethod === 'standard' ? 'border-primary bg-light' : 'border-light'}`}
              onClick={() => setFormData({ ...formData, shippingMethod: 'standard' })}
              style={{ cursor: 'pointer' }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1 fw-bold">Standard Shipping</h6>
                  <p className="mb-0 text-muted small">3-5 business days</p>
                </div>
                <div className="text-end">
                  <span className="fw-bold">$12.00</span>
                </div>
              </div>
            </Card>
            <Card
              className={`p-3 ${formData.shippingMethod === 'express' ? 'border-primary bg-light' : 'border-light'}`}
              onClick={() => setFormData({ ...formData, shippingMethod: 'express' })}
              style={{ cursor: 'pointer' }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1 fw-bold">Express Shipping</h6>
                  <p className="mb-0 text-muted small">1-2 business days</p>
                </div>
                <div className="text-end">
                  <span className="fw-bold">$20.00</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Form.Check
          type="checkbox"
          id="save-info"
          label="Save this information for next time"
          name="saveInfo"
          checked={formData.saveInfo}
          onChange={handleChange}
          className="mb-4"
        />

        <div className="d-flex justify-content-end">
          <Button
            variant="primary"
            size="lg"
            onClick={nextStep}
            disabled={!formData.name || !formData.email || !formData.address || !formData.city || !formData.zipCode || !formData.country}
            className="px-4 py-2"
          >
            Continue to Payment <FaChevronRight className="ms-2" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );

  const renderPaymentStep = () => (
    <Card className="checkout-card mb-4 border-0 shadow-sm">
      <Card.Body className="p-4">
        <h4 className="mb-4 text-primary">
          <FaCreditCard className="me-2" /> Payment Details
        </h4>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="1234 5678 9012 3456"
            name="cardNumber"
            value={formatCardNumber(formData.cardNumber)}
            onChange={(e) => {
              setFormData({
                ...formData,
                cardNumber: e.target.value
              });
            }}
            maxLength="19"
            required
            className="py-2"
          />
        </Form.Group>

        <Row>
          <Col md={6} className="mb-3">
            <Form.Group>
              <Form.Label className="fw-bold">Expiration Date</Form.Label>
              <Form.Control
                type="month"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
                className="py-2"
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group>
              <Form.Label className="fw-bold">CVV</Form.Label>
              <Form.Control
                type="text"
                placeholder="123"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                maxLength="3"
                required
                className="py-2"
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="security-badge mb-4 p-3 bg-light rounded">
          <FaLock className="me-2 text-primary" />
          <span className="text-muted">Your payment is secured with 256-bit SSL encryption</span>
        </div>

        <div className="d-flex justify-content-between">
          <Button
            variant="outline-secondary"
            onClick={prevStep}
            className="px-4 py-2"
          >
            <FaChevronLeft className="me-2" /> Back to Shipping
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={nextStep}
            disabled={!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length !== 16 || !formData.expiryDate || !formData.cvv || formData.cvv.length !== 3}
            className="px-4 py-2"
          >
            Review Order <FaChevronRight className="ms-2" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );

  const renderConfirmationStep = () => (
    <Card className="checkout-card mb-4 border-0 shadow-sm">
      <Card.Body className="p-4">
        <h4 className="mb-4 text-primary">
          <FaReceipt className="me-2" /> Order Review
        </h4>

        <div className="mb-4">
          <h5 className="fw-bold mb-3">Shipping Information</h5>
          <Card className="p-3 bg-light border-0">
            <p className="mb-1"><strong>{formData.name}</strong></p>
            <p className="mb-1">{formData.address}</p>
            <p className="mb-1">{formData.city}, {formData.zipCode}</p>
            <p className="mb-0">{formData.country}</p>
          </Card>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold mb-3">Payment Method</h5>
          <Card className="p-3 bg-light border-0">
            <p className="mb-1">
              <strong>Card ending in</strong> {formData.cardNumber.slice(-4)}
            </p>
            <p className="mb-0">
              <strong>Expires:</strong> {formData.expiryDate}
            </p>
          </Card>
        </div>

        <div className="d-flex justify-content-between mt-4">
          <Button
            variant="outline-secondary"
            onClick={prevStep}
            className="px-4 py-2"
          >
            <FaChevronLeft className="me-2" /> Back to Payment
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={handleSubmit}
            className="px-4 py-2"
          >
            Confirm Order <FaChevronRight className="ms-2" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );

  const OrderSummary = () => (
    <>
      <div className="cart-items mb-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {cart.map((item) => (
          <div key={item.id} className="cart-item mb-3">
            <div className="d-flex">
              <div className="product-image me-3">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="rounded-3"
                  style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                />
              </div>
              <div className="flex-grow-1">
                <h6 className="mb-1 fw-bold">{item.title}</h6>
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="text-muted me-2">Qty: {item.quantity}</span>
                    <Badge bg="light" text="dark" className="me-2">
                      <FaTag className="me-1" /> ${item.price}
                    </Badge>
                  </div>
                  <div className="fw-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
              {currentStep !== 3 && (
                <Button
                  variant="link"
                  className="remove-btn p-0 align-self-start"
                  onClick={() => removeFromCart(item)}
                >
                  <FaTrash className="text-danger" />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      <hr />

      <div className="order-totals">
        <div className="d-flex justify-content-between mb-2">
          <span className="text-muted">Subtotal ({cart.length} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span className="text-muted"><FaTruck className="me-1" /> Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span className="text-muted">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between fw-bold fs-5">
          <span>Total</span>
          <span className="text-primary">${total.toFixed(2)}</span>
        </div>
      </div>

      {currentStep === 1 && (
        <div className="mt-4">
          <Form.Group>
            <Form.Label className="fw-bold">
              <HiOutlineGift className="me-2" /> Promo Code
            </Form.Label>
            <div className="d-flex">
              <Form.Control
                type="text"
                placeholder="Enter promo code"
                name="promoCode"
                value={formData.promoCode}
                onChange={handleChange}
                className="py-2"
              />
              <Button variant="outline-secondary" className="ms-2 px-3">
                Apply
              </Button>
            </div>
          </Form.Group>
        </div>
      )}
    </>
  );

  return (
    <div className="checkout-page ">
      <Header />

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="checkout-header mb-4">
              <h2 className="fw-bold mb-3 text-center">Secure Checkout</h2>
              <div className="progress-steps d-flex justify-content-between align-items-center">
                <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                  <div className="step-circle">{currentStep >= 1 ? <BsCheckCircleFill /> : '1'}</div>
                  <span>Shipping</span>
                </div>
                <div className="step-divider"></div>
                <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                  <div className="step-circle">{currentStep >= 2 ? <BsCheckCircleFill /> : '2'}</div>
                  <span>Payment</span>
                </div>
                <div className="step-divider"></div>
                <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                  <div className="step-circle">{currentStep >= 3 ? <BsCheckCircleFill /> : '3'}</div>
                  <span>Confirmation</span>
                </div>
              </div>
            </div>

            {currentStep === 1 && renderShippingStep()}
            {currentStep === 2 && renderPaymentStep()}
            {currentStep === 3 && renderConfirmationStep()}
          </Col>

          <Col style={{ zIndex: "0" }} lg={4}>
            <Card className="order-summary-card border-0 shadow-sm sticky-top">
              <Card.Body className="p-4">
                <h4 className="mb-4">
                  <FaShoppingBag className="me-2 text-primary" /> Order Summary
                </h4>

                {cart.length === 0 ? (
                  <div className="empty-cart text-center py-4">
                    <img
                      src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png"
                      alt="Empty cart"
                      className="img-fluid mb-3"
                      style={{ maxWidth: '200px' }}
                    />
                    <h6>Your cart is empty</h6>
                    <Button
                      variant="outline-primary"
                      onClick={() => navigate('/')}
                      className="mt-3"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <OrderSummary />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />

      <style jsx global>{`
        .checkout-page {
          min-height: 100vh;
        }
        
        .progress-steps {
          position: relative;
          padding: 0 20px;
        }
        
        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        
        .step-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #6c757d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-bottom: 0.5rem;
          border: 2px solid #dee2e6;
        }
        
        .step.active .step-circle {
          background-color: #0d6efd;
          color: white;
          border-color: #0d6efd;
        }
          a {
  text-decoration: none;
}
        
        .step-divider {
          flex: 1;
          height: 2px;
          background-color: #dee2e6;
          position: relative;
          top: 20px;
        }
        
        .checkout-card {
          border-radius: 12px;
          background-color: white;
  min-height: unset !important;
        }
        
        .order-summary-card {
          top: 20px;
          border-radius: 12px;
          background-color: white;
        }
        
        .shipping-methods .card {
          transition: all 0.3s ease;
        }
        
        .shipping-methods .card:hover {
          border-color: #0d6efd !important;
        }
        
        .cart-items::-webkit-scrollbar {
          width: 5px;
        }
        
        .cart-items::-webkit-scrollbar-thumb {
          background-color: #0d6efd;
          border-radius: 10px;
        }
        
        .remove-btn:hover {
          transform: scale(1.1);
        }
        
        @media (max-width: 992px) {
          .order-summary-card {
            position: static;
            margin-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CheckoutPage;