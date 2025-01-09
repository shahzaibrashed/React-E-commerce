/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import './Style.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from "react";

const Header = () => {

  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const validRoutes = ['men', 'women', 'perfume', 'blog', 'jewelyr', 'hot-offer'];
      const normalizedSearchTerm = searchTerm.toLowerCase();
      if (validRoutes.includes(normalizedSearchTerm)) {
        navigate(`/${normalizedSearchTerm}`);
      } else {
        navigate('/error');
      }
    }
  };
  
  const { cart } = useSelector((state) => state.cartsItem);
  const wishlistItem = useSelector((state) => state.wishlist.wishlistItem);

  const [isActive, setIsActive] = useState(false);

  const handleOpenButtonClick = () => {
    setIsActive(true);
  };
  const handleCloseButtonClick = () => {
    setIsActive(false);
  };


  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { 
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <ul className="header-social-container">
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-facebook" />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-instagram" />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-linkedin" />
                </Link>
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

        <div className={`header-main ${isScrolled ? "fixed-header" : ""}`}>
          <div className="container">
            <Link to={"/"} className="header-logo">
              <img
                src="https://i.postimg.cc/XYYNC3X8/logo.png"
                alt="logo"
                width={120}
                height={36}
              />
            </Link>
            <div className="header-search-container">
              <input
                type="search"
                name="search"
                className="search-field"
                placeholder="Enter your product name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={handleSearch} className="search-btn">
                <ion-icon name="search-outline" />
              </button>
            </div>
            
            <div className="header-user-actions">

              <Link to={"/wishlist"}>
                <button className={`action-btn ${location.pathname === '/wishlist' ? 'active' : ''}`}>
                  <ion-icon name="heart-outline" />
                  <span className="count">{wishlistItem.length}</span>
                </button>
              </Link>
              <Link to={"/carts"}>
                <button className={`action-btn ${location.pathname === '/carts' ? 'active' : ''}`}>
                  <ion-icon name="bag-handle-outline" />
                  <span className="count">{cart.length}</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <nav className={`desktop-navigation-menu ${isScrolled ? "fixed-header" : ""}`}>
          <div className="container">
            <ul className="desktop-menu-category-list">
              <li className={`menu-category ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/" className="menu-title">
                  Home
                </Link>
              </li>
              <li className="menu-category">
                <Link href="#" className="menu-title">
                  Categories
                </Link>
                <div className="dropdown-panel">
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <Link href="#">Electronics</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Desktop</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Laptop</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Camera</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Camera</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Headphone</Link>
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
                      <Link href="#">Men's</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Formal</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Casual</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Sports</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Jacket</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Sunglasses</Link>
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
                      <Link href="#">Women's</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Formal</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Casual</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Perfume</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Cosmetics</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Bags</Link>
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
                      <Link href="#">Electronics</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Smart Watch</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Smart TV</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Keyboard</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Mouse</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Microphone</Link>
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
              <li className={`menu-category ${location.pathname === '/men' ? 'active' : ''}`}>
                <Link to={"/men"} className="menu-title">
                  Men's
                </Link>
                {/* <ul className="dropdown-list">
            <li className="dropdown-item">
              <Link href="#">Shirt</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Shorts &amp; Jeans</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Safety Shoes</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Wallet</Link>
            </li>
          </ul> */}
              </li>
              <li className={`menu-category ${location.pathname === '/women' ? 'active' : ''}`}>
                <Link to={"/women"} className="menu-title">
                  Women's
                </Link>
                {/* <ul className="dropdown-list">
            <li className="dropdown-item">
              <Link href="#">Dress &amp; Frock</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Earrings</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Necklace</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Makeup Kit</Link>
            </li>
          </ul> */}
              </li>
              <li className={`menu-category ${location.pathname === '/jewelyr' ? 'active' : ''}`}>
                <Link to={"/jewelyr"} className="menu-title">
                  Jewelyr
                </Link>
                {/* <ul className="dropdown-list">
            <li className="dropdown-item">
              <Link href="#">Earrings</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Couple Rings</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Necklace</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Bracelets</Link>
            </li>
          </ul> */}
              </li>
              <li className={`menu-category ${location.pathname === '/perfume' ? 'active' : ''}`}>
                <Link to={"/perfume"} className="menu-title">
                  Perfume
                </Link>
                {/* <ul className="dropdown-list">
            <li className="dropdown-item">
              <Link href="#">Clothes Perfume</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Deodorant</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Flower Fragrance</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Air Freshener</Link>
            </li>
          </ul> */}
              </li>
              <li className={`menu-category ${location.pathname === '/blog' ? 'active' : ''}`}>
                <Link to="/blog" className="menu-title">
                  Blog
                </Link>
              </li>
              <li className={`menu-category ${location.pathname === '/hot-offer' ? 'active' : ''}`}>
                <Link to={"/hot-offer"} className="menu-title">
                  Hot Offers
                </Link>
              </li>
            </ul>
          </div>
        </nav>


        <div className="mobile-bottom-navigation">
          <Link to={"/"}>
            <button className={`action-btn ${location.pathname === '/' ? 'active' : ''}`}>
              <ion-icon name="home-outline" />
            </button>
          </Link>

          <Link to={"/carts"}>
            <button className={`action-btn ${location.pathname === '/carts' ? 'active' : ''}`}>
              <ion-icon name="bag-handle-outline" />
              <span className="count">{cart.length}</span>
            </button>
          </Link>

          <Link to={"/wishlist"}>
            <button className={`action-btn ${location.pathname === '/wishlist' ? 'active' : ''}`}>
              <ion-icon name="heart-outline" />
              <span className="count">{wishlistItem.length}</span>
            </button>
          </Link>
          <button onClick={handleOpenButtonClick} className='action-btn' data-mobile-menu-open-btn="">
            <ion-icon name="menu-outline" />
          </button>

        </div>

        <nav className={`mobile-navigation-menu ${isActive ? "active" : ""} has-scrollbar`} data-mobile-menu="">
          <div className="menu-top">
            <h2 style={{ color: "black" }} className="menu-title">Menu</h2>
            <button onClick={handleCloseButtonClick} className="menu-close-btn" data-mobile-menu-close-btn="">
              <ion-icon name="close-outline" />
            </button>
          </div>
          <ul className="mobile-menu-category-list">
            <li className={`menu-category ${location.pathname === '/' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/"} className="menu-title">
                Home
              </Link>
            </li>
            <li className={`menu-category ${location.pathname === '/men' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/men"} className="menu-title">
                Men's
              </Link>
            </li>
            <li className={`menu-category ${location.pathname === '/women' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/women"} className="menu-title">
                Women's
              </Link>
            </li>

            <li className={`menu-category ${location.pathname === '/jewelyr' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/jewelyr"} className="menu-title">
                Jewelyr
              </Link>

            </li>
            <li className={`menu-category ${location.pathname === '/perfume' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/perfume"} className="menu-title">
                Perfume
              </Link>
            </li>
            <li className={`menu-category ${location.pathname === '/blog' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/blog"} className="menu-title">
                Blog
              </Link>
            </li>
            <li className={`menu-category ${location.pathname === '/hot-offer' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/hot-offer"} className="menu-title">
                Hot Offers
              </Link>
            </li>
          </ul>
          <div className="menu-bottom">

            <ul className="menu-social-container">
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-facebook" />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-instagram" />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-linkedin" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

    </>
  )
}

export default Header