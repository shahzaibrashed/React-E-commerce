import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { clearCart, DecrementQuantity, IncrementQuantity, RemoveProduct } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Placeholder, Badge, Button } from 'react-bootstrap';
import { FaTrash, FaPlus, FaMinus, FaShoppingBasket } from 'react-icons/fa';

// Skeleton Loader Component
const CartSkeleton = () => {
  return (
    <div className="cart-item-skeleton mb-3 p-3 rounded">
      <div className="d-flex">
        <Placeholder animation="wave" className="rounded" style={{ width: "100px", height: "100px", background: "#f5f5f5" }} />
        <div className="flex-grow-1 ms-3">
          <Placeholder className="rounded mb-2" style={{ background: "#f5f5f5" }} as="h3" animation="wave">
            <Placeholder style={{ background: "#f5f5f5" }} xs={6} />
          </Placeholder>
          <Placeholder as="p" animation="wave" className="mb-1">
            <Placeholder style={{ background: "#f5f5f5" }} className="rounded" xs={8} />
          </Placeholder>
          <Placeholder as="p" animation="wave" className="mb-2">
            <Placeholder style={{ background: "#f5f5f5" }} className="rounded" xs={4} />
          </Placeholder>
          <div className="d-flex align-items-center">
            <Placeholder as="div" animation="wave" className="rounded me-2" style={{ width: "30px", height: "30px", background: "#f5f5f5" }} />
            <Placeholder as="div" animation="wave" className="rounded mx-2" style={{ width: "40px", height: "20px", background: "#f5f5f5" }} />
            <Placeholder as="div" animation="wave" className="rounded ms-2" style={{ width: "30px", height: "30px", background: "#f5f5f5" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  const { cart } = useSelector((state) => state.cartsItem);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const removeCart = (item) => {
    dispatch(RemoveProduct(item));
  };

  const handleIncrement = (item) => {
    dispatch(IncrementQuantity({ id: item.id }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(DecrementQuantity({ id: item.id }));
    } else {
      removeCart(item);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const totalPrice = calculateTotalPrice();
  const tax = 4;
  const shipping = cart.length > 0 ? 12 : 0;
  const total = totalPrice + shipping + tax;

  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
    }
  };

  return (
    <>
      <Header />
      <div className="container py-4">
        {cart.length > 0 ? (
          <div className="row">
            <div className="col-lg-8">
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
                  <h4 className="mb-0">
                    <FaShoppingBasket className="me-2 text-salmon-pink" />
                    Shopping Cart <Badge bg="salmon-pink" className="ms-2 text-white">{cart.length}</Badge>
                  </h4>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={clearAll}
                    disabled={isLoading}
                  >
                    <FaTrash className="me-1" /> Clear All
                  </Button>
                </div>
                <div className="card-body p-3">
                  {isLoading
                    ? Array(3).fill().map((_, i) => <CartSkeleton key={i} />)
                    : cart.map((item) => (
                      <div key={item.id} className="cart-item mb-3 p-3 rounded bg-light">
                        <div className="d-flex">
                          <img
                            src={item.imgUrl}
                            alt={item.title}
                            className="item-image rounded shadow-sm"
                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                          />
                          <div className="flex-grow-1 ms-3">
                            <div className="d-flex justify-content-between">
                              <h5 className="item-title mb-1">{item.title}</h5>
                              <Button
                                variant="link"
                                size="sm"
                                className="text-danger p-0"
                                onClick={() => removeCart(item)}
                              >
                                <FaTrash />
                              </Button>
                            </div>
                            {item.star && (
                              <div className="mb-2">
                                <div className="d-flex align-items-center">
                                  <Badge
                                    bg="light"
                                    text="dark"
                                    className="px-2 py-1 rounded-pill d-flex align-items-center shadow-sm"
                                    style={{
                                      backgroundColor: 'rgba(255, 193, 7, 0.2)',
                                      border: '1px solid rgba(255, 193, 7, 0.3)',
                                      backdropFilter: 'blur(2px)'
                                    }}
                                  >
                                    <span
                                      className="fw-bold me-1"
                                      style={{
                                        color: '#ff9800',
                                        textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                                      }}
                                    >
                                      {item.star}
                                    </span>
                                    <span
                                      className="d-flex align-items-center"
                                      style={{
                                        color: '#ffc107',
                                        fontSize: '1.1em',
                                        textShadow: '0 1px 3px rgba(0,0,0,0.2)'
                                      }}
                                    >
                                      ★
                                    </span>
                                  </Badge>
                                  <span className="ms-2 small text-muted">
                                    {parseFloat(item.star) >= 4.5 ? 'Excellent' :
                                      parseFloat(item.star) >= 4.0 ? 'Very Good' :
                                        parseFloat(item.star) >= 3.0 ? 'Good' : 'Average'}
                                  </span>
                                </div>
                              </div>
                            )}
                            {item.disc && (
                              <p className="text-muted small mb-2">
                                {item.disc.split(" ").slice(0, 15).join(" ")}
                                {item.disc.split(" ").length > 15 && "..."}
                              </p>
                            )}
                            <div className="d-flex align-items-center justify-content-between mt-2">
                              <div className="d-flex align-items-center">
                                <Button
                                  variant="outline-secondary"
                                  size="sm"
                                  className="p-0 d-flex align-items-center justify-content-center"
                                  style={{ width: "30px", height: "30px" }}
                                  onClick={() => handleDecrement(item)}
                                >
                                  <FaMinus size={12} />
                                </Button>
                                <span className="mx-2 fw-bold">{item.quantity}</span>
                                <Button
                                  variant="outline-secondary"
                                  size="sm"
                                  className="p-0 d-flex align-items-center justify-content-center"
                                  style={{ width: "30px", height: "30px" }}
                                  onClick={() => handleIncrement(item)}
                                >
                                  <FaPlus size={12} />
                                </Button>
                              </div>
                              <h5 className="mb-0 text-salmon-pink">
                                ${(item.price * item.quantity).toFixed(2)}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4 " style={{ zIndex: 0 }}>
              <div className="card shadow-sm sticky-top" style={{ top: "20px" }}>
                <div className="card-header bg-white py-3">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-muted">Subtotal ({cart.length} items)</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-muted">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-muted">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between fw-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <Link to={"/checkout"} className="text-decoration-none">
                    <Button variant="salmon-pink" className="w-100 py-2" size="lg">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Link to={"/"} className="text-decoration-none">
                    <Button variant="outline-secondary" className="w-100 mt-2">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-5 my-5">
            <div className="mb-4">
              <FaShoppingBasket size={48} className="text-muted" />
            </div>
            <h4 className="mb-3">Your cart is empty</h4>
            <p className="text-muted mb-4">Looks like you haven't added anything to your cart yet</p>
            <Link to={"/"}>
              <Button variant="salmon-pink" size="lg">
                Start Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
      <style>{`
        :root {
          --salmon-pink: #ff6b6b;
          --salmon-pink-light: #ff8e8e;
        }
        
        .bg-salmon-pink {
          background-color: var(--salmon-pink);
        }
          a{
          text-decoration: none;
          }

        .text-salmon-pink {
          color: var(--salmon-pink);
        }
        
        .btn-salmon-pink {
          background-color: var(--salmon-pink);
          border-color: var(--salmon-pink);
          color: white;
        }
        
        .btn-salmon-pink:hover {
          background-color: var(--salmon-pink-light);
          border-color: var(--salmon-pink-light);
          color: white;
        }
        
        .cart-item {
          transition: all 0.3s ease;
          background-color: #f9f9f9;
        }
        
        .cart-item:hover {
          background-color: #f0f0f0;
          transform: translateY(-2px);
        }
        
        .item-image {
          transition: transform 0.3s ease;
        }
        
        .item-image:hover {
          transform: scale(1.05);
        }
        
        .cart-item-skeleton {
          background-color: #f9f9f9;
        }
        
        .sticky-top {
          position: sticky;
        }
        
        @media (max-width: 992px) {
          .sticky-top {
            position: static;
          }
        }
      `}</style>
    </>
  );
};

export default CartPage;