/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
   <>
   <div className="banner">
  <div className="container">
    <div className="slider-container has-scrollbar">
      <div className="slider-item">
        <img
          src="https://i.postimg.cc/V6Rrdsk1/banner-1.jpg"
          alt="women's latest fashion sale"
          className="banner-img"
        />
        <div className="banner-content">
          <p className="banner-subtitle">Trending Item</p>
          <h2 className="banner-title">Women's latest fashion sale</h2>
          <p className="banner-text">
            Startting at $ <b>20</b>.00
          </p>
          <Link href="#" className="banner-btn">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="slider-item">
        <img
          src="https://i.postimg.cc/RFXhvPgZ/banner-2.jpg"
          alt="modern sunglasses"
          className="banner-img"
        />
        <div className="banner-content">
          <p className="banner-subtitle">Trending Accessories</p>
          <h2 className="banner-title">Modern Sunglasses</h2>
          <p className="banner-text">
            Startting at $ <b>15</b>.00
          </p>
          <Link href="#" className="banner-btn">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="slider-item">
        <img
          src="https://i.postimg.cc/MTKZ37z2/banner-3.jpg"
          alt="new fashion summer sale"
          className="banner-img"
        />
        <div className="banner-content">
          <p className="banner-subtitle">Sale Offer</p>
          <h2 className="banner-title">New Fashion Summer Sale</h2>
          <p className="banner-text">
            Startting at $ <b>29</b>.99
          </p>
          <Link href="#" className="banner-btn">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

   
   </>
  )
}

export default Banner