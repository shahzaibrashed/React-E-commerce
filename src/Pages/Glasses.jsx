import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Category from '../Components/Products/Category';
import NewProduct from '../Components/Products/NewProduct';
import BestSeller from '../Components/Products/BestSeller'
import { bestSeller, Glass, homeBanner, } from '../Data';
import Banner from '../Components/Banner'

const Glasses = () => {
  return (
    <>
    <Header />
    <Banner bannerData={homeBanner} />
    <div style={{ marginTop: "20px" }} className="product-container">
        <div className="container">
            <div className="sidebar has-scrollbar " data-mobile-menu="">
                <Category />
                <BestSeller label={"Best Seller"} bestProduct={bestSeller} />
            </div>

            <div className="product-box">
                <NewProduct label={"Glasses"} productData={Glass} />
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

export default Glasses