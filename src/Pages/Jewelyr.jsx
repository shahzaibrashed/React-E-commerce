import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Category from '../Components/Products/Category'
import BestSeller from '../Components/Products/BestSeller'
import NewProduct from '../Components/Products/NewProduct'
import Banner from '../Components/Banner'
import { bestJewelry, jewelleryBanner, jewelry} from '../Data'

const Jewelyr = () => {
  return (
  <>  
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
    </>
  )
}

export default Jewelyr