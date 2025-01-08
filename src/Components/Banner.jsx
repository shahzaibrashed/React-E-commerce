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
  bannerData?.map((item)=>{
    return(
<div className="slider-item">
       
       <img
          src={item.imgUrl}
          alt="new fashion summer sale"
          className="banner-img"
          height="100%"
          width="100%"
          style={{objectFit:"cover",overflow:"hidden",objectPosition:"center",opacity: 0.8,
            filter: "blur(1px)",}}
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

   
   </>
  )
}

export default Banner