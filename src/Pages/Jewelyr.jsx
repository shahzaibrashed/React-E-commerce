import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Category from '../Components/Products/Category'
import BestSeller from '../Components/Products/BestSeller'
import NewProduct from '../Components/Products/NewProduct'
import Banner from '../Components/Banner'
import { bestJewelry, jewelleryBanner, jewelry} from '../Data'

const Jewelyr = () => {
  const [toastActive,setToastActive] = useState(true)
  return (
  <>  
   <div className={`notification-toast ${toastActive ? '' : 'closed'}`}data-toast="">
  <button onClick={()=>setToastActive(false)} className="toast-close-btn" data-toast-close="">
    <ion-icon name="close-outline" />
  </button>
  <div className="toast-banner">
    <img
      src="https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Ocean Golden Tear Earrings"
      width={80}
      height={70}
    />
  </div>
  <div className="toast-detail">
    <p className="toast-message">Someone just bought this item</p>
    <p className="toast-title">A stunning necklace with a modern design.</p>
    <p className="toast-meta">
      <time dateTime="PT2M">2 Minutes</time> ago
    </p>
  </div>
</div>
    <Header/>
    <Banner bannerData={jewelleryBanner} />
    <div style={{marginTop:"20px"}} className="product-container">
        <div className="container">
          <div className="sidebar has-scrollbar " data-mobile-menu="">
            <Category />
            <BestSeller label={"Best Seller"} bestProduct={bestJewelry} />
          </div>

          <div className="product-box">
          <NewProduct label={"Jewelry"} productData={jewelry}/>

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

export default Jewelyr