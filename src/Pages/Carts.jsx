import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Footer from "../Components/Footer";



const Carts = () => {
  
  const { cart } = useSelector((state) => state.cartsItem);


  return (
   <>
   <Header/>

   
    <h3 className="container">Add To Cart Items</h3>
    
   {
    cart.length === 0 ? "Your Cart is Empty" : 
    (cart.map((item)=>{
      return(
        <div>
          <img src={item.imgUrl}  height="10%" width="10%" alt="" />
          <p key={item.id}>{item.title}</p>
          <p>{item.disc}</p>
          <p>{item.star}</p>

          <hr />
        </div>

      )
    }))
   }
   <Footer/>
  

   
   
   </>
  );
};

export default Carts;
