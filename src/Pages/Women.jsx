import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BestSeller from '../Components/Products/BestSeller'
import Category from '../Components/Products/Category'
import NewProduct from '../Components/Products/NewProduct'
import Banner from '../Components/Banner'
import {bestWomen,Women, womenBanner} from '../Data'
const Womens = () => {
  return (
    <>
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