import React from 'react';
import { Container, Button, Card, Badge } from 'react-bootstrap';
import {
  FaCheckCircle,
  FaShoppingBag,
  FaHome,
  FaEnvelope,
  FaBox,
  FaShippingFast,
  FaMapMarkerAlt,
  FaCreditCard
} from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Default data in case state is not passed
  const orderData = state?.orderData || {
    orderId: `#${Math.floor(100000 + Math.random() * 900000)}`,
    date: new Date().toLocaleDateString(),
    items: [],
    shippingInfo: {
      name: 'John Doe',
      email: 'john@example.com',
      address: '123 Main St',
      city: 'New York',
      zipCode: '10001',
      country: 'United States',
      method: 'standard'
    },
    paymentInfo: {
      cardEnding: '4242',
      total: '0.00'
    }
  };

  // Calculate values from items
  const itemCount = orderData.items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = orderData.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = orderData.shippingInfo.method === 'express' ? 20 : 12;
  const tax = 4;
  const total = subtotal + shipping + tax;

  return (
    <div className="payment-success-page">
      <Header />

      <Container className="py-5">
        <Card className="success-card shadow-sm border-0 rounded-lg overflow-hidden">
          <Card.Body className="p-4 p-md-5">
            <div className="text-center mb-4">
              <div className="success-icon">
                <FaCheckCircle size={80} className="text-success" />
              </div>
              <h1 className="mt-3 mb-2 fw-bold">Payment Successful!</h1>
              <p className="text-muted mb-4">
                Thank you for your purchase. Your order has been confirmed and will be processed shortly.
              </p>
              <div className="delivery-icon mb-4">
                <FaShippingFast size={60} className="text-primary" />
              </div>
            </div>

            {/* Order Summary */}
            <Card className="order-summary mb-4 border-0 shadow-sm">
              <Card.Body>
                <h5 className="d-flex align-items-center mb-3">
                  <FaShoppingBag className="me-2 text-primary" />
                  Order Summary
                </h5>

                <div className="order-details">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Order ID:</span>
                    <span className="fw-bold">{orderData.orderId}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Date:</span>
                    <span>{orderData.date}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Total Paid:</span>
                    <span className="fw-bold text-success">${orderData.paymentInfo.total}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Shipping Information */}
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body>
                <h5 className="d-flex align-items-center mb-3">
                  <FaMapMarkerAlt className="me-2 text-primary" />
                  Shipping Information
                </h5>
                <p className="mb-1"><strong>{orderData.shippingInfo.name}</strong></p>
                <p className="mb-1">{orderData.shippingInfo.address}</p>
                <p className="mb-1">{orderData.shippingInfo.city}, {orderData.shippingInfo.zipCode}</p>
                <p className="mb-0">{orderData.shippingInfo.country}</p>
                <p className="mt-2 mb-0">
                  <strong>Shipping Method:</strong> {orderData.shippingInfo.method === 'express' ? 'Express (1-2 days)' : 'Standard (3-5 days)'}
                </p>
              </Card.Body>
            </Card>

            {/* Payment Information */}
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body>
                <h5 className="d-flex align-items-center mb-3">
                  <FaCreditCard className="me-2 text-primary" />
                  Payment Information
                </h5>
                <p className="mb-1"><strong>Card ending in:</strong> {orderData.paymentInfo.cardEnding}</p>
                <p className="mb-0"><strong>Email:</strong> {orderData.shippingInfo.email}</p>
              </Card.Body>
            </Card>

            {/* Order Items */}
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body>
                <h5 className="mb-3">Order Items ({itemCount})</h5>
                <div className="cart-items">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="d-flex mb-3">
                      <img
                        src={item.imgUrl}
                        alt={item.title}
                        className="rounded me-3"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{item.title}</h6>
                        <div className="d-flex justify-content-between">
                          <span className="text-muted">Qty: {item.quantity}</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <hr />
                <div className="order-totals">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping:</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between fw-bold fs-5">
                    <span>Total:</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Next Steps */}
            {/* <div className="next-steps mb-4">
              <h5 className="mb-3">What's Next?</h5>
              <div className="step d-flex mb-3">
                <div className="step-icon me-3">
                  <FaBox size={24} className="text-primary" />
                </div>
                <div>
                  <h6 className="mb-1">Order Processing</h6>
                  <p className="text-muted mb-0">
                    Your order is being prepared for shipment. Expected delivery within {
                      orderData.shippingInfo.method === 'express' ? '1-2 business days' : '3-5 business days'
                    }.
                  </p>
                </div>
              </div>
              <div className="step d-flex">
                <div className="step-icon me-3">
                  <FaEnvelope size={24} className="text-primary" />
                </div>
                <div>
                  <h6 className="mb-1">Confirmation Email</h6>
                  <p className="text-muted mb-0">
                    We've sent a confirmation email with your order details to {orderData.shippingInfo.email}.
                  </p>
                </div>
              </div>
            </div> */}

            {/* Action Buttons */}
            <div className="d-grid gap-3 d-md-flex justify-content-md-center mt-4">
              {/* <Button
                variant="primary"
                size="lg"
                className="me-md-3"
                onClick={() => navigate('/orders')}
              >
                <FaShoppingBag className="me-2" />
                View Order History
              </Button> */}
              <Button
                variant="outline-primary"
                size="lg"
                onClick={() => navigate('/')}
              >
                <FaHome className="me-2" />
                Continue Shopping
              </Button>
            </div>
          </Card.Body>
        </Card>

        <div className="text-center mt-4">
          <p className="text-muted">
            Need help? <a href="/contact" className="text-decoration-none">Contact our support team</a>
          </p>
        </div>
      </Container>

      <Footer />

      <style jsx global>{`
        .payment-success-page {
          min-height: 100vh;
        }
        
        .success-card {
          max-width: 800px;
          margin: 0 auto;
          border: none;
          background-color: white;
        }
        
        .success-icon {
          margin: 0 auto;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(25, 135, 84, 0.1);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        .delivery-icon {
          animation: bounce 1s ease infinite;
        }
        
        .order-summary, .next-steps {
          background-color: #f8f9fa;
          border-radius: 10px;
        }
        
        .step-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(13, 110, 253, 0.1);
          border-radius: 50%;
        }
        
        .cart-items {
          max-height: 300px;
          overflow-y: auto;
          padding-right: 10px;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        a {
  text-decoration: none;
}
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default PaymentSuccess;