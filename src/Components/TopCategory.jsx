import React from 'react'
import { Link } from 'react-router-dom'

const TopCategory = () => {
  return (
    <div className="catagory-section py-5  text-center">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="sec-title py-5">
          <h1>Top Category</h1>
          <p>
            Follow the most popular trends and get exclusive items from castro
            shop
          </p>
          <img
            src="http://azim.commonsupport.com/Castro/assets/images/icons/separator-1.png"
            alt=""
            className='m-auto'
          />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3">
        <div className="catagory-item">
          <div className="catagory-image">
            <img
              src="https://i.ibb.co/Vths0Jz/azim-commonsupport-com-959-category-1.png"
              alt=""
            />
          </div>
          <h5>
            <Link to={"/women"}>Women Collection</Link>
          </h5>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="catagory-item">
          <div className="catagory-image">
            <img
              src="https://i.ibb.co/kHCfzCP/azim-commonsupport-com-837-category-2.png"
              alt=""
            />
          </div>
          <h5>
            <Link to={""}>Kid Collections</Link>
          </h5>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="catagory-item">
          <div className="catagory-image">
            <img
              src="https://i.ibb.co/zFPJRRF/azim-commonsupport-com-700-category-3.png"
              alt=""
            />
          </div>
          <h5>
            <Link to={""}>Summer Collections</Link>
          </h5>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="catagory-item">
          <div className="catagory-image">
            <img
              src="https://i.ibb.co/RzX4fym/azim-commonsupport-com-51-category-4.png"
              alt=""
            />
          </div>
          <h5>
            <Link to={"/men"}>Men Collections</Link>
          </h5>
        </div>
      </div>
    </div>
  </div>
</div>

    
  )
}

export default TopCategory