import React, { useState } from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Category from '../Components/Category'
import ProductSection from '../Components/ProductSection'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
import Blog from '../Components/Blog'
import { homeBanner } from '../Data'
const Home = () => {
 const [toastActive,setToastActive] = useState(true)

  return (
    <>
<div className={`notification-toast ${toastActive ? '' : 'closed'}`} data-toast="">
  <button onClick={()=> setToastActive(false)} className="toast-close-btn" data-toast-close="">
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
  <Banner bannerData={homeBanner} />
  <Category/>
  <ProductSection />
  <Testimonial/>
  <Blog/>
  <Footer/>
  <style>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

export default Home