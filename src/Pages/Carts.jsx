import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { DecrementQuantity, IncrementQuantity, RemoveProduct } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
const CartPage = () => {

  const { cart } = useSelector((state) => state.cartsItem);
  // console.log(cart, "ggg");
  const dispatch = useDispatch()

  const removeCart = (item) => {
    dispatch(RemoveProduct(item))
  }

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const totalPrice = calculateTotalPrice();

  const handleIncrement = (item) => {
    dispatch(IncrementQuantity({ id: item.id }));
  };

  const handleDecrement = (item) => {
    dispatch(DecrementQuantity({ id: item.id }));
  };

  const total = totalPrice + 12 + 4;

  return (
    <>
      <Header />
      <div className="container">
        {cart.length > 0 ? (
          <div className="row">
            <div className="cartlist-container p-0">
              <header className="cartlist-header">
                <h1>Shoping Cart {cart.length}</h1>
              </header>

              {cart.length === 0 ? (
                <p style={{ margin: "30px", textAlign: "center" }}>
                  Your wishlist is empty!
                </p>
              ) : (
                <ul className="cartlist-list ">
                  {cart.map((item) => (
                    <li key={item.id} className="cartlist-item mt-1 border-bottom ">
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
                          <button
                            style={{
                              width: '27px',
                              height: '27px',
                              borderRadius: '50%',
                              backgroundColor: 'green',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              cursor: 'pointer',
                              fontSize: '20px',
                              border: "none",
                              paddingBottom: "5px"
                            }}
                            onClick={() => handleIncrement(item)}
                          >
                            +
                          </button>
                          <div> {item.quantity}</div>
                          <button
                            style={{
                              width: '27px',
                              height: '27px',
                              borderRadius: '50%',
                              backgroundColor: 'red',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              cursor: 'pointer',
                              fontSize: '20px',
                              border: "none",
                              paddingBottom: "5px"
                            }}
                            onClick={() => handleDecrement(item)}
                          >
                            -
                          </button>
                        </div>
                        <div className="p-box">
                          <p style={{ color: "var(--salmon-pink)" }} className="price mt-2">Price : ${item.price}</p>
                        </div>
                      </div>

                      <button onClick={() => removeCart(item)} className="remove-button">Remove</button>
                     
                    </li>
                 
                  ))}
                </ul>
                
              )}
            </div>

            {/* Cart Summary Section */}
            <div className="col-lg-4 p-2 mt-2 mb-2">
              <div className="card p-2">
                <header className="cartlist-header">
                  <h1>Cart Summary</h1>
                </header>

                <p style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                  Total Product :
                   <span>{cart.length}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                  Subtotal :
                   <span> $ {totalPrice}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                  Tax :
                   <span>$ 04</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                  Shipping :
                   <span>$ 12</span>
                </p>

                <p style={{ display: "flex", justifyContent: "space-between" }}>
                  Total :
                   <span>$ {total} </span>
                </p>
                <Link to={"/checkout"}><button className="btn btn-success w-100">Proceed to Checkout</button></Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center mt-5">
            <h4>Your cart is empty</h4>
            <p>Add some products to see them here!</p>
          </div>
        )}
      </div>

      <Footer />
      <style>{`
        a {
          text-decoration: none;
        }
          .cartt{
          height: 500px;
          overflow-y: auto;
          }
          .img-s{
           height: 150px; 
      width: 150px;
          }
           .cart-img {
    max-width: 100%;
    height: auto;
  }

  .cartt::-webkit-scrollbar {
  width: 8px; 
}

.cartt::-webkit-scrollbar-thumb {
  background-color: grey; 
  border-radius: 10px;
}
   

  @media (max-width: 768px) {
    .cart-img {
      height: 200px; 
      width: 100%;  
      object-fit: cover; 
    }
  }
      `}</style>
    </>
  );
};

export default CartPage;


