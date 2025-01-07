import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Carts = () => {
  const { cart } = useSelector((state) => state.cartsItem);
  console.log(cart,"ggg");
  

  return (
    <>
      <Header />

      <h3 className="container">Add To Cart Items</h3>
{
  cart.map((item)=>{
    return(
      <div key={item.id}>
      
     <p>{item.title}</p>
      </div>

    )
  })
}


      
     

      <Footer />
    </>
  );
};

export default Carts;


