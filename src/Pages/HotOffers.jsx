import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HotOffer from '../Components/HotOffers'
import TopCategory from '../Components/TopCategory'
import OfferBanner from '../Components/OfferBanner'
const HotOffers = () => {
    const [toastActive,setToastActive] = useState(true)
    return (
        <>
            <div className={`notification-toast ${toastActive ? '' : 'closed'}`}  data-toast="">
                <button onClick={()=>setToastActive(false)} className="toast-close-btn" data-toast-close="">
                    <ion-icon name="close-outline" />
                </button>
                <div className="toast-banner">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/051/199/431/small/earbuds-mockup-resting-clean-surface-with-soft-lighting-ideal-for-showcasing-tech-products-photo.jpg"
                        alt="images"
                        width={80}
                        height={70}
                    />
                </div>
                <div className="toast-detail">
                    <p className="toast-message">Someone just bought this item</p>
                    <p className="toast-title">Wireless Bluetooth Earbuds</p>
                    <p className="toast-meta">
                        <time dateTime="PT2M">2 Minutes</time> ago
                    </p>
                </div>
            </div>
            <Header />
            <OfferBanner />

            <div className="product-container">
                <div className="container">
                    <div className="product-box">
                        <HotOffer />
                    </div>
                </div>
            </div>
            <TopCategory />
            <Footer />
            <style>{`
        a {
          text-decoration: none;
        }
      `}</style>
        </>
    )
}

export default HotOffers