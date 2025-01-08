import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { RemoveProduct } from '../redux/cartSlice';
const CartPage = () => {

   const { cart } = useSelector((state) => state.cartsItem);
    console.log(cart,"ggg");
    const dispatch = useDispatch()
 
    const removeCart = (item) =>{
    dispatch(RemoveProduct(item))
    }
 

  return (
   <>
    <Header/>
    <div className="container mt-3">
      <div className="row ">
        {/* Product Listing Section */}
        <div className="col-lg-8">
          <h3>Your Shopping Cart</h3>

          {cart.map(item => (
            <div key={item.id} className="cart-item row mb-3 mt-3 border">
              <div className="col-md-4  h-25 w-25 m-auto">
                <img src={item.imgUrl} alt={item.title} className="img-fluid" />
              </div>
              <div className="col-md-6 pt-3 m-auto">
                <p style={{color:"orange"}}>{item.star}</p>
                <h5>{item.title}</h5>
                <p>{item.disc}</p>
                <p><strong>Price:</strong> {item.price}</p>
              </div>
              <div className="col-md-2 text-end m-auto">
                <button 
                  className="btn btn-danger btn-sm mt-2" 
                  onClick={()=>removeCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary Section */}
        <div className="col-lg-4 mt-2">
          <div className="card p-3">
            <h4>Cart Summary</h4>
            <hr />
            <p><strong>Items:</strong> {cart.length}</p>
            <p><strong>Total:</strong> 89</p>
            <button className="btn btn-success w-100">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    <style>{`
        a {
          text-decoration: none;
        }
      `}</style>
   </>
  );
};

export default CartPage;


