/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
const Banner = ({bannerData}) => {
  return (
   <>
   <div className="banner">
  <div className="container">
    <div className="slider-container has-scrollbar">
     
{
  bannerData?.map((item,index)=>{
    return(
<div key={index} className="slider-item">
       
       <img
          src={item.imgUrl}
          alt="images"
          className="banner-img"
          height="100%"
          width="100%"
        />
        <div className="banner-content">
          <p className="banner-subtitle">{item.bannerSubtitle}</p>
          <h2 className="banner-title">{item.bannerTitle}</h2>
          <p className="banner-text">
            Startting at $ <b>{item.price}</b>.00
          </p>
          <Link to={"/"} className="banner-btn">
            Shop Now
          </Link>
        </div>
      </div>
    )
  })
}
    </div>
  </div>
</div>

<style jsx="true">{`
  .banner-img {
    object-position: center;
  }

  @media (max-width: 768px) {
    .banner-img {
      object-position: unset;
    }
  }
`}</style>
   </>
  )
}

export default Banner