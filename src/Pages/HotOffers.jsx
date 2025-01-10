import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HotOffer from '../Components/HotOffers'
import TopCategory from '../Components/TopCategory'
import OfferBanner from '../Components/OfferBanner'
const HotOffers = () => {
    return (
        <>
            <Header />
            <OfferBanner />

            <div  className="product-container">
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