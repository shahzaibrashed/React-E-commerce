import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BestSeller from '../Components/Products/BestSeller'
import Category from '../Components/Products/Category'
import NewProduct from '../Components/Products/NewProduct'
import Banner from '../Components/Banner'
import { bestPerfume, perfume, perfumeBanner } from '../Data'
const Perfume = () => {
  return (
    <>
   <Header/>
   <Banner bannerData={perfumeBanner}/>
   <div style={{marginTop:"20px"}} className="product-container">
        <div className="container">
          <div className="sidebar has-scrollbar " data-mobile-menu="">
            <Category />
            <BestSeller label={"Best Seller"} bestProduct={bestPerfume} />
          </div>

          <div className="product-box">
          <NewProduct label={"Men's Perfumes"} productData={perfume}/>
          <NewProduct label={"Women's Perfumes"} productData={perfume}/>

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

export default Perfume