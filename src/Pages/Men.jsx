import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BestSeller from '../Components/Products/BestSeller'
import Category from '../Components/Products/Category'
import NewProduct from '../Components/Products/NewProduct'
import Banner from '../Components/Banner'
import { bestMens, menBanner, Mens, } from '../Data'
const Men = () => {
  const [toastActive,setToastActive] = useState(true)
  return (
    <>
    <div className={`notification-toast ${toastActive ? '' : 'closed'}`}  data-toast="">
  <button onClick={()=>setToastActive(false)} className="toast-close-btn" data-toast-close="">
    <ion-icon name="close-outline" />
  </button>
  <div className="toast-banner">
    <img
      src="https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="images"
      width={80}
      height={70}
    />
  </div>
  <div className="toast-detail">
    <p className="toast-message">Someone just bought this item</p>
    <p className="toast-title">Stylish sneakers for everyday comfort.</p>
    <p className="toast-meta">
      <time dateTime="PT2M">2 Minutes</time> ago
    </p>
  </div>
</div>
      <Header />
      <Banner bannerData={menBanner} />
      <div style={{ marginTop: "20px" }} className="product-container">
        <div className="container">
          <div className="sidebar has-scrollbar " data-mobile-menu="">
            <Category />
            <BestSeller label={"Best Seller"} bestProduct={bestMens} />
          </div>

          <div className="product-box">
            <NewProduct label={"Men's Products"} productData={Mens} />
          </div>
        </div>
      </div>
      <Footer />
      <style>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

export default Men