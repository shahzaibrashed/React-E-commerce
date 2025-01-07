/* eslint-disable jsx-a11y/anchor-is-valid */
import './Style.css'
import BestSeller from './Products/BestSeller'
import Category from './Products/Category'
import NewArrivals from './Products/NewArrivals'
import Trending from './Products/Trending'
import DealoftheDay from './Products/DealoftheDay'
import NewProduct from './Products/NewProduct'

const ProductSection = () => {

  return (
    <>
      <div className="product-container">
        <div className="container">
          <div className="sidebar has-scrollbar " data-mobile-menu="">
            <Category />
            <BestSeller />
          </div>

          <div className="product-box">
            <div className="product-minimal">
              <NewArrivals />
              <Trending />
            </div>

           <DealoftheDay/>
           <NewProduct/>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductSection