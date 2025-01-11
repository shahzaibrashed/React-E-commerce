import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BestSeller from '../Components/Products/BestSeller'
import Category from '../Components/Products/Category'
import NewProduct from '../Components/Products/NewProduct'
import Banner from '../Components/Banner'
import {bestWomen,Women, womenBanner} from '../Data'
const Womens = () => {
  const [toastActive,setToastActive] = useState(true)
  return (
    <>
    <div className={`notification-toast ${toastActive ? '' : 'closed'}`}  data-toast="">
  <button onClick={()=>setToastActive(false)} className="toast-close-btn" data-toast-close="">
    <ion-icon name="close-outline" />
  </button>
  <div className="toast-banner">
    <img
      src="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="images"
      width={80}
      height={70}
    />
  </div>
  <div className="toast-detail">
    <p className="toast-message">Someone just bought this item</p>
    <p className="toast-title">Floral Summer Dress</p>
    <p className="toast-meta">
      <time dateTime="PT2M">2 Minutes</time> ago
    </p>
  </div>
</div>
   <Header/>
   <Banner bannerData={womenBanner} />
   <div style={{marginTop:"20px"}} className="product-container">
        <div className="container">
          <div className="sidebar has-scrollbar " data-mobile-menu="">
            <Category />
            <BestSeller label={"Best Seller"} bestProduct={bestWomen} />
          </div>

          <div className="product-box">
          <NewProduct label={"Women's Products"} productData={Women}/>
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
  )
}

export default Womens