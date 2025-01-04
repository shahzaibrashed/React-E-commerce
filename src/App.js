import Banner from './Components/Banner';
import Blog from './Components/Blog';
import Category from './Components/Category';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProductSection from './Components/ProductSection';
import Testimonial from './Components/Testimonial';

function App() {
  return (
   <>
   <div className="notification-toast " data-toast="">
  <button className="toast-close-btn" data-toast-close="">
    <ion-icon name="close-outline" />
  </button>
  <div className="toast-banner">
    <img
      src="https://i.postimg.cc/6qd3mpCv/jewellery-1.jpg"
      alt="Ocean Golden Tear Earrings"
      width={80}
      height={70}
    />
  </div>
  <div className="toast-detail">
    <p className="toast-message">Someone just bought this item</p>
    <p className="toast-title">Ocean Golden Drop Earrings</p>
    <p className="toast-meta">
      <time dateTime="PT2M">2 Minutes</time> ago
    </p>
  </div>
</div>
  <Header/>
  <Banner/>
  <Category/>
  <ProductSection/>
  <Testimonial/>
  <Blog/>
  <Footer/>
   
   </>
  );
}

export default App;
