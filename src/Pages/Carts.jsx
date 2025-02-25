import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { clearCart, DecrementQuantity, IncrementQuantity, RemoveProduct } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Placeholder } from "react-bootstrap";

// Skeleton Loader Component
const CartSkeleton = () => {
  return (
    <li className="cartlist-item mt-1 border-bottom d-flex align-items-center">
      <div className="item-image">
        <Placeholder animation="wave" className="rounded" style={{ width: "100px", height: "100px", background: "#e0e0e0" }} />
      </div>
      <div className="item-details flex-grow-1 mx-3">
        <Placeholder className="rounded" style={{background: "#e0e0e0" }} as="h3" animation="wave">
          <Placeholder style={{background: "#e0e0e0" }} xs={6} />
        </Placeholder>
        <Placeholder as="p" animation="wave">
          <Placeholder style={{background: "#e0e0e0" }} className="rounded" xs={8} /> 
        <Placeholder style={{background: "#e0e0e0" }} className="rounded" xs={6} />
        </Placeholder>

        <Placeholder as="p" animation="wave" className="price">
          <Placeholder style={{background: "#e0e0e0" }} className="rounded"
           xs={3} />
        </Placeholder>
        <div style={{ display: "flex", gap: "7px" }}>
          <Placeholder as="button" animation="wave" className="rounded-circle" style={{ width: "27px", height: "27px",background: "#e0e0e0" }} />
        
          <Placeholder as="button" animation="wave" className="rounded-circle" style={{ width: "27px", height: "27px",background: "#e0e0e0" }} />
        </div>
      </div>
   
    </li>
  );
};

const CartPage = () => {
  const { cart } = useSelector((state) => state.cartsItem);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const removeCart = (item) => {
    dispatch(RemoveProduct(item));
  };

  const handleIncrement = (item) => {
    dispatch(IncrementQuantity({ id: item.id }));
  };

  const handleDecrement = (item) => {
    dispatch(DecrementQuantity({ id: item.id }));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const totalPrice = calculateTotalPrice();
  const roundedTotalPrice = Math.round(totalPrice);
  const total = totalPrice + 12 + 4;
  const roundedTotal = Math.round(total);

  const clearAll = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Header />
      <div className="container">
        {cart.length > 0 ? (
          <div className="row">
            <div className="cartlist-container p-0">
              <header className="cartlist-header flex justify-content-space-between">
                <h1>Shopping Cart {cart.length}</h1>
                <h1 onClick={clearAll} style={{ cursor: "pointer" }}>Clear All</h1>
              </header>

              <ul className="cartlist-list">
                {isLoading
                  ? [...Array(3)].map((_, i) => <CartSkeleton key={i} />)
                  : cart.map((item) => (
                      <li key={item.id} className="cartlist-item mt-1 border-bottom d-flex align-items-center">
                        <img src={item.imgUrl} alt={item.title} className="item-image" />
                        <div className="item-details">
                          <p style={{ color: "orange" }}>{item.star}</p>
                          <h3 className="item-title">{item.title}</h3>
                          {item.disc && (
                            <p>
                              {item.disc.split(" ").slice(0, 10).join(" ")}
                              {item.disc.split(" ").length > 10 && "..."}
                            </p>
                          )}
                          <div style={{ display: "flex", gap: "7px" }}>
                            <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
                            <div>{item.quantity}</div>
                            <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
                          </div>
                          <p style={{ color: "var(--salmon-pink)" }} className="price mt-2">Price: ${item.price}</p>
                        </div>
                        <button onClick={() => removeCart(item)} className="remove-button">Remove</button>
                      </li>
                    ))}
              </ul>
            </div>

            <div className="col-lg-4 p-2 mb-2">
              <div className="card p-2">
                <header className="cartlist-header">
                  <h1>Cart Summary</h1>
                </header>
                <p className="d-flex justify-content-between mt-2">Total Products: <span>{cart.length}</span></p>
                <p className="d-flex justify-content-between">Subtotal: <span>${roundedTotalPrice}</span></p>
                <p className="d-flex justify-content-between">Tax: <span>$4</span></p>
                <p className="d-flex justify-content-between">Shipping: <span>$12</span></p>
                <p className="d-flex justify-content-between fw-bold">Total: <span>${roundedTotal}</span></p>
                <Link to={"/checkout"}>
                  <button className="btn btn-success w-100">Proceed to Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center m-5">
            <h4>Your cart is empty</h4>
            <Link to={"/"} style={{ color: "var(--salmon-pink)" }}><p>Add some products to see them here!</p></Link>
          </div>
        )}
      </div>
      <Footer />
      <style>{`
        a {
          text-decoration: none;
        }
        .cartlist-container {
          padding: 20px;
        }
        .cartlist-item {
          display: flex;
          align-items: center;
        }
        .item-image {
          width: 80px;
          height: 80px;
          object-fit: cover;
        }
        .quantity-btn {
          width: 27px;
          height: 27px;
          border-radius: 50%;
          background-color: gray;
          color: white;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
        }
        .remove-button {
          background-color: red;
          color: white;
          padding: 5px 10px;
          border: none;
          cursor: pointer;
        }
        .skeleton-remove-btn {
          width: 70px;
          height: 30px;
        }
      `}</style>
    </>
  );
};

export default CartPage;
