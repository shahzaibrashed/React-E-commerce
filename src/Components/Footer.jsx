/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    
    <footer>
  <div className="footer-category">
    <div className="container">
      <h2 className="footer-category-title">Brand Directory</h2>
      <div className="footer-category-box">
        <h3 className="category-box-title">Fashion :</h3>
        <Link href="#" className="footer-category-link">
          T-Shirt
        </Link>
        <Link href="#" className="footer-category-link">
          Shirts
        </Link>
        <Link href="#" className="footer-category-link">
          Shorts &amp; Jeans
        </Link>
        <Link href="#" className="footer-category-link">
          Jacket
        </Link>
        <Link href="#" className="footer-category-link">
          Dress &amp; Frock
        </Link>
        <Link href="#" className="footer-category-link">
          Innerwear
        </Link>
        <Link href="#" className="footer-category-link">
          Hosiery
        </Link>
      </div>
      <div className="footer-category-box">
        <h3 className="category-box-title">Footwear :</h3>
        <Link href="#" className="footer-category-link">
          Sport
        </Link>
        <Link href="#" className="footer-category-link">
          Formal
        </Link>
        <Link href="#" className="footer-category-link">
          Boots
        </Link>
        <Link href="#" className="footer-category-link">
          Casual
        </Link>
        <Link href="#" className="footer-category-link">
          Cowboy Shoes
        </Link>
        <Link href="#" className="footer-category-link">
          Safety Shoes
        </Link>
        <Link href="#" className="footer-category-link">
          Party Wear Shoes
        </Link>
        <Link href="#" className="footer-category-link">
          Branded
        </Link>
        <Link href="#" className="footer-category-link">
          Firstcopy
        </Link>
        <Link href="#" className="footer-category-link">
          Long Shoes
        </Link>
      </div>
      <div className="footer-category-box">
        <h3 className="category-box-title">Jewellery :</h3>
        <Link href="#" className="footer-category-link">
          Necklace
        </Link>
        <Link href="#" className="footer-category-link">
          Earrings
        </Link>
        <Link href="#" className="footer-category-link">
          Couple Rings
        </Link>
        <Link href="#" className="footer-category-link">
          Pendant
        </Link>
        <Link href="#" className="footer-category-link">
          Crystal
        </Link>
        <Link href="#" className="footer-category-link">
          Bangles
        </Link>
        <Link href="#" className="footer-category-link">
          Bracelets
        </Link>
        <Link href="#" className="footer-category-link">
          Nosepin
        </Link>
        <Link href="#" className="footer-category-link">
          Chain
        </Link>
      </div>
      <div className="footer-category-box">
        <h3 className="category-box-title">Cosmetics :</h3>
        <Link href="#" className="footer-category-link">
          Shampoo
        </Link>
        <Link href="#" className="footer-category-link">
          Bodywash
        </Link>
        <Link href="#" className="footer-category-link">
          Facewash
        </Link>
        <Link href="#" className="footer-category-link">
          Makeup Kit
        </Link>
        <Link href="#" className="footer-category-link">
          Liner
        </Link>
        <Link href="#" className="footer-category-link">
          Lipstick
        </Link>
        <Link href="#" className="footer-category-link">
          Perfume
        </Link>
        <Link href="#" className="footer-category-link">
          Body Soap
        </Link>
        <Link href="#" className="footer-category-link">
          Scrub
        </Link>
        <Link href="#" className="footer-category-link">
          Hair Gel
        </Link>
        <Link href="#" className="footer-category-link">
          Hair Colors
        </Link>
        <Link href="#" className="footer-category-link">
          Hair Dye
        </Link>
        <Link href="#" className="footer-category-link">
          Sunscreen
        </Link>
        <Link href="#" className="footer-category-link">
          Skin Loson
        </Link>
      </div>
    </div>
  </div>
  <div className="footer-nav">
    <div className="container">
      <ul className="footer-nav-list">
        <li className="footer-nav-item">
          <h2 className="nav-title">Popular Categories</h2>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Fashion
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Electronic
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Cosmetic
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Health
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Watches
          </Link>
        </li>
      </ul>
      <ul className="footer-nav-list">
        <li className="footer-nav-item">
          <Link to={"/products"}><h2 className="nav-title">Products</h2></Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Fashion
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Electronic
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Cosmetic
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Health
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Watches
          </Link>
        </li>
      </ul>
      <ul className="footer-nav-list">
        <li className="footer-nav-item">
          <Link to={"/our-company"}><h2 className="nav-title">Our Company</h2></Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Delivery
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Legal Notice
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Terms and Conditions
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            About us
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Secure Payment
          </Link>
        </li>
      </ul>
      <ul className="footer-nav-list">
        <li className="footer-nav-item">
         <Link to={"/service"}> <h2 className="nav-title">Services</h2></Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Prices Drop
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            New Products
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Best Sales
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Contact us
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link href="#" className="footer-nav-link">
            Sitemap
          </Link>
        </li>
      </ul>
      <ul className="footer-nav-list">
        <li className="footer-nav-item">
        <Link to={"/contact"}><h2 className="nav-title">Contact</h2></Link>  
        </li>
        <li className="footer-nav-item flex">
          <div className="icon-box">
            <ion-icon name="location-outline" />
          </div>
          <address className="content">
            419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
          </address>
        </li>
        <li className="footer-nav-item flex">
          <div className="icon-box">
            <ion-icon name="call-outline" />
          </div>
          <Link href="tel:+607936-8058" className="footer-nav-link">
            (607) 936-8058
          </Link>
        </li>
        <li className="footer-nav-item flex">
          <div className="icon-box">
            <ion-icon name="mail-outline" />
          </div>
          <Link href="mailto:example@gmail.com" className="footer-nav-link">
            anon@gmail.com
          </Link>
        </li>
      </ul>
      <ul className="footer-nav-list">
        <li className="footer-nav-item">
          <h2 className="nav-title">Follow Us</h2>
        </li>
        <li>
          <ul className="social-link">
            <li className="footer-nav-item">
              <Link href="#" className="footer-nav-link">
                <ion-icon name="logo-facebook" />
              </Link>
            </li>
            <li className="footer-nav-item">
              <Link href="#" className="footer-nav-link">
                <ion-icon name="logo-twitter" />
              </Link>
            </li>
            <li className="footer-nav-item">
              <Link href="#" className="footer-nav-link">
                <ion-icon name="logo-linkedin" />
              </Link>
            </li>
            <li className="footer-nav-item">
              <Link href="#" className="footer-nav-link">
                <ion-icon name="logo-instagram" />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <img
        src="https://i.postimg.cc/43GKnVFF/payment.png"
        alt="payment method"
        className="payment-img"
      />
      <p className="copyright">
        Copyright © <Link href="#">Anon</Link> all rights reserved
      </p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer