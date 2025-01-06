/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
const navigate = useNavigate()

 const goToCart = ()=>{
  navigate("/carts")
 }
 const goToWishlist = ()=>{
  navigate("/wishlist")
 }

  const { cart } = useSelector((state) => state.cartsItem);

 


  return (
 <>
 <header>
  <div className="header-top">
    <div className="container">
      <ul className="header-social-container">
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-facebook" />
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-twitter" />
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-instagram" />
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
      </ul>
      <div className="header-alert-news">
        <p>
          <b>Free Shipping</b> This week Order Over - $55
        </p>
      </div>
      <div className="header-top-actions">
        <select name="currency">
          <option value="usd">USD $</option>
          <option value="eur">EUR €</option>
        </select>
        <select name="language">
          <option value="en-US">English</option>
          <option value="es-ES">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </div>
  </div>
  <div className="header-main">
    <div className="container">
      <a href="#" className="header-logo">
        <img
          src="https://i.postimg.cc/XYYNC3X8/logo.png"
          alt="logo"
          width={120}
          height={36}
        />
      </a>
      <div className="header-search-container">
        <input
          type="search"
          name="search"
          className="search-field"
          placeholder="Enter your product name"
        />
        <button className="search-btn">
          <ion-icon name="search-outline" />
        </button>
      </div>
      <div className="header-user-actions">
        <button className="action-btn">
          <ion-icon name="person-outline" />
        </button>
        <button onClick={goToWishlist} className="action-btn">
          <ion-icon name="heart-outline" />
          <span className="count">5</span>
        </button>
        <button onClick={goToCart} className="action-btn">
          <ion-icon name="bag-handle-outline" />
          <span className="count">{cart.length === 0 ? "0" : cart.length}</span>
        </button>
      </div>
    </div>
  </div>
  <nav className="desktop-navigation-menu">
    <div className="container">
      <ul className="desktop-menu-category-list">
        <li className="menu-category">
          <Link to="/" className="menu-title">
            Home
          </Link>
        </li>
        <li className="menu-category">
          <a href="#" className="menu-title">
            Categories
          </a>
          <div className="dropdown-panel">
            <ul className="dropdown-panel-list">
              <li className="menu-title">
                <a href="#">Electronics</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Desktop</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Laptop</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Camera</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Camera</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Headphone</a>
              </li>
              <li className="panel-list-item">
                <img
                  src="https://i.postimg.cc/MT2mT9ty/electronics-banner-1.jpg"
                  alt="image"
                  width={250}
                  height={119}
                />
              </li>
            </ul>
            <ul className="dropdown-panel-list">
              <li className="menu-title">
                <a href="#">Men's</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Formal</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Casual</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Sports</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Jacket</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Sunglasses</a>
              </li>
              <li className="panel-list-item">
                <img
                  src="https://i.postimg.cc/nVs954kx/mens-banner.jpg"
                  alt="image"
                  width={250}
                  height={119}
                />
              </li>
            </ul>
            <ul className="dropdown-panel-list">
              <li className="menu-title">
                <a href="#">Women's</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Formal</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Casual</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Perfume</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Cosmetics</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Bags</a>
              </li>
              <li className="panel-list-item">
                <img
                  src="https://i.postimg.cc/vT9Bmvq6/womens-banner.jpg"
                  alt="image"
                  width={250}
                  height={119}
                />
              </li>
            </ul>
            <ul className="dropdown-panel-list">
              <li className="menu-title">
                <a href="#">Electronics</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Smart Watch</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Smart TV</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Keyboard</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Mouse</a>
              </li>
              <li className="panel-list-item">
                <a href="#">Microphone</a>
              </li>
              <li className="panel-list-item">
                <img
                  src="https://i.postimg.cc/htMGhvrM/electronics-banner-2.jpg"
                  alt="image"
                  width={250}
                  height={119}
                />
              </li>
            </ul>
          </div>
        </li>
        <li className="menu-category">
          <a href="#" className="menu-title">
            Men's
          </a>
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <a href="#">Shirt</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Shorts &amp; Jeans</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Safety Shoes</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Wallet</a>
            </li>
          </ul>
        </li>
        <li className="menu-category">
          <a href="#" className="menu-title">
            Women's
          </a>
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <a href="#">Dress &amp; Frock</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Earrings</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Necklace</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Makeup Kit</a>
            </li>
          </ul>
        </li>
        <li className="menu-category">
          <a href="#" className="menu-title">
            Jewelyr
          </a>
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <a href="#">Earrings</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Couple Rings</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Necklace</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Bracelets</a>
            </li>
          </ul>
        </li>
        <li className="menu-category">
          <a href="#" className="menu-title">
            Perfume
          </a>
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <a href="#">Clothes Perfume</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Deodorant</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Flower Fragrance</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Air Freshener</a>
            </li>
          </ul>
        </li>
        <li className="menu-category">
          <a href="#" className="menu-title">
            Blog
          </a>
        </li>
        <li className="menu-category">
          <a href="#" className="menu-title">
            Hot Offers
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="mobile-bottom-navigation">
    <button className="action-btn" data-mobile-menu-open-btn="">
      <ion-icon name="menu-outline" />
    </button>
    <button className="action-btn">
      <ion-icon name="bag-handle-outline" />
      <span className="count">4</span>
    </button>
    <button className="action-btn">
      <ion-icon name="home-outline" />
    </button>
    <button className="action-btn">
      <ion-icon name="heart-outline" />
      <span className="count">7</span>
    </button>
    <button className="action-btn" data-mobile-menu-open-btn="">
      <ion-icon name="grid-outline" />
    </button>
  </div>
  <nav className="mobile-navigation-menu has-scrollbar " data-mobile-menu="">
    <div className="menu-top">
      <h2 className="menu-title">Menu</h2>
      <button className="menu-close-btn" data-mobile-menu-close-btn="">
        <ion-icon name="close-outline" />
      </button>
    </div>
    <ul className="mobile-menu-category-list">
      <li className="menu-category">
        <a href="#" className="menu-title">
          Home
        </a>
      </li>
      <li className="menu-category">
        <button className="accordion-menu" data-accordion-btn="">
          <p className="menu-title">Men's</p>
          <div>
            <ion-icon name="add-outline" className="add-icon" />
            <ion-icon name="remove-outline" className="remove-icon" />
          </div>
        </button>
        <ul className="submenu-category-list " data-accordion="">
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Shirt
            </a>
          </li>
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Short &amp; Jeans
            </a>
          </li>
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Safety Shoes
            </a>
          </li>
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Wallet
            </a>
          </li>
        </ul>
      </li>
      <li className="menu-category">
        <button className="accordion-menu" data-accordion-btn="">
          <p className="menu-title">Women's</p>
          <div>
            <ion-icon name="add-outline" className="add-icon" />
            <ion-icon name="remove-outline" className="remove-icon" />
          </div>
        </button>
        <ul className="submenu-category-list" data-accordion="">
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Dress &amp; Frock
            </a>
          </li>
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Earrings
            </a>
          </li>
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Necklace
            </a>
          </li>
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Makeup Kit
            </a>
          </li>
        </ul>
      </li>
      <li className="menu-category">
        <button className="accordion-menu" data-accordion-btn="">
          <p className="menu-title">Jewelyr</p>
          <div>
            <ion-icon name="add-outline" className="add-icon" />
            <ion-icon name="remove-outline" className="remove-icon" />
          </div>
        </button>
        <ul className="submenu-category-list" data-accordion="">
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Earrings
            </a>
          </li>
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Couple Rings
            </a>
          </li>
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Necklace
            </a>
          </li>
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Bracelets
            </a>
          </li>
        </ul>
      </li>
      <li className="menu-category">
        <button className="accordion-menu" data-accordion-btn="">
          <p className="menu-title">Perfume</p>
          <div>
            <ion-icon name="add-outline" className="add-icon" />
            <ion-icon name="remove-outline" className="remove-icon" />
          </div>
        </button>
        <ul className="submenu-category-list" data-accordion="">
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Clothes Perfume
            </a>
          </li>
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Deodorant
            </a>
          </li>
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Flower Fragrance
            </a>
          </li>
          <li className="submenu-category">
            <a href="#" className="submenu-title">
              Air Freshener
            </a>
          </li>
        </ul>
      </li>
      <li className="menu-category">
        <a href="#" className="menu-title">
          Blog
        </a>
      </li>
      <li className="menu-category">
        <a href="#" className="menu-title">
          Hot Offers
        </a>
      </li>
    </ul>
    <div className="menu-bottom">
      <ul className="menu-category-list">
        <li className="menu-category">
          <button className="accordion-menu " data-accordion-btn="">
            <p className="menu-title">Language</p>
            <ion-icon name="caret-back-outline" className="caret-back" />
          </button>
          <ul className="submenu-category-list " data-accordion="">
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                English
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Español
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                French
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-category">
          <button className="accordion-menu" data-accordion-btn="">
            <p className="menu-title">Currency</p>
            <ion-icon name="caret-back-outline" className="caret-back" />
          </button>
          <ul className="submenu-category-list" data-accordion="">
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                USD $
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                EUR €
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="menu-social-container">
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-facebook" />
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-twitter" />
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-instagram" />
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>

 </>
  )
}

export default Header