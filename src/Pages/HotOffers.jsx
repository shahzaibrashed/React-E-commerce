import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HotOffer from '../Components/HotOffers'
import Banner from '../Components/Banner'
import { offerBanner } from '../Data'
const HotOffers = () => {
    return (
        <>
            <Header />
            <Banner bannerData={offerBanner} />
            <div style={{ marginTop: "20px" }} className="product-container">
                <div className="container">
                    <div className="product-box">
                        <HotOffer />
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

export default HotOffers