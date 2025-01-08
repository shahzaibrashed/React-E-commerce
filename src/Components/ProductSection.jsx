/* eslint-disable jsx-a11y/anchor-is-valid */
import './Style.css'
import BestSeller from './Products/BestSeller'
import Category from './Products/Category'
import NewArrivals from './Products/NewArrivals'
import Trending from './Products/Trending'
import DealoftheDay from './Products/DealoftheDay'
import NewProduct from './Products/NewProduct'
import { bestSeller, product } from '../Data'
const ProductSection = () => {

  return (
    <>
      <div className="product-container">
        <div className="container">
          <div className="sidebar has-scrollbar " data-mobile-menu="">
            <Category />
            <BestSeller bestProduct={bestSeller} />
          </div>

          <div className="product-box">
            <div className="product-minimal">
              <NewArrivals />
              <Trending />
            </div>

           <DealoftheDay/>
           <NewProduct label={"New Product"} productData={product}/>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductSection