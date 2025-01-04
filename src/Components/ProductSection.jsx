/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
const ProductSection = () => {
  return (
    <>
    <div className="product-container">
  <div className="container">
    <div className="sidebar has-scrollbar " data-mobile-menu="">
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>
          <button className="sidebar-close-btn" data-mobile-menu-close-btn="">
            <ion-icon name="close-outline" />
          </button>
        </div>
        <ul className="sidebar-menu-category-list">
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn="">
              <div className="menu-title-flex">
                <img
                  src="https://i.postimg.cc/Xv9x15Q8/dress.png"
                  alt="clothes"
                  className="menu-title-img"
                  width={20}
                  height={20}
                />
                <p className="menu-title">Clothes</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion="">
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Shirt</p>
                  <data value={300} className="stock" title="Available Stock">
                    300
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Shorts &amp; Jeans</p>
                  <data value={60} className="stock" title="Available Stock">
                    60
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Jacket</p>
                  <data value={50} className="stock" title="Available Stock">
                    50
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Dress &amp; Frock</p>
                  <data value={87} className="stock" title="Available Stock">
                    87
                  </data>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn="">
              <div className="menu-title-flex">
                <img
                  src="https://i.postimg.cc/d3RBQZhB/shoes.png"
                  alt="footwear"
                  className="menu-title-img"
                  width={20}
                  height={20}
                />
                <p className="menu-title">Footwear</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion="">
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Sports</p>
                  <data value={45} className="stock" title="Available Stock">
                    45
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Formal</p>
                  <data value={75} className="stock" title="Available Stock">
                    75
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Casual</p>
                  <data value={35} className="stock" title="Available Stock">
                    35
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Safety Shoes</p>
                  <data value={26} className="stock" title="Available Stock">
                    26
                  </data>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn="">
              <div className="menu-title-flex">
                <img
                  src="https://i.postimg.cc/Y9HLrnY5/jewelry.png"
                  alt="jewelyr"
                  className="menu-title-img"
                  width={20}
                  height={20}
                />
                <p className="menu-title">Jewelyr</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion="">
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Earrings</p>
                  <data value={46} className="stock" title="Available Stock">
                    46
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Couple Rings</p>
                  <data value={73} className="stock" title="Available Stock">
                    73
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Necklace</p>
                  <data value={61} className="stock" title="Available Stock">
                    61
                  </data>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn="">
              <div className="menu-title-flex">
                <img
                  src="https://i.postimg.cc/6q67R8Hz/perfume.png"
                  alt="perfume"
                  className="menu-title-img"
                  width={20}
                  height={20}
                />
                <p className="menu-title">Perfume</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion="">
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Clothes Perfume</p>
                  <data value={12} className="stock" title="Available Stock">
                    12 pcs
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Deodorant</p>
                  <data value={60} className="stock" title="Available Stock">
                    60 pcs
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Jacket</p>
                  <data value={50} className="stock" title="Available Stock">
                    50 pcs
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Dress &amp; Frock</p>
                  <data value={87} className="stock" title="Available Stock">
                    87 pcs
                  </data>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn="">
              <div className="menu-title-flex">
                <img
                  src="https://i.postimg.cc/dQnZF91f/cosmetics.png"
                  alt="cosmetics"
                  className="menu-title-img"
                  width={20}
                  height={20}
                />
                <p className="menu-title">Cosmetics</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion="">
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Shampoo</p>
                  <data value={68} className="stock" title="Available Stock">
                    68
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Sunscreen</p>
                  <data value={46} className="stock" title="Available Stock">
                    46
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Body Wash</p>
                  <data value={79} className="stock" title="Available Stock">
                    79
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Makeup Kit</p>
                  <data value={23} className="stock" title="Available Stock">
                    23
                  </data>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn="">
              <div className="menu-title-flex">
                <img
                  src="https://i.postimg.cc/zBthxXZ7/glasses.png"
                  alt="glasses"
                  className="menu-title-img"
                  width={20}
                  height={20}
                />
                <p className="menu-title">Glasses</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion="">
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Sunglasses</p>
                  <data value={50} className="stock" title="Available Stock">
                    50
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Lenses</p>
                  <data value={48} className="stock" title="Available Stock">
                    48
                  </data>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn="">
              <div className="menu-title-flex">
                <img
                  src="https://i.postimg.cc/5yt0yZ0R/bag.png"
                  alt="bags"
                  className="menu-title-img"
                  width={20}
                  height={20}
                />
                <p className="menu-title">Bags</p>
              </div>
              <div>
                <ion-icon name="add-outline" className="add-icon" />
                <ion-icon name="remove-outline" className="remove-icon" />
              </div>
            </button>
            <ul className="sidebar-submenu-category-list" data-accordion="">
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Shopping Bag</p>
                  <data value={62} className="stock" title="Available Stock">
                    62
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Gym Backpack</p>
                  <data value={35} className="stock" title="Available Stock">
                    35
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Purse</p>
                  <data value={80} className="stock" title="Available Stock">
                    80
                  </data>
                </a>
              </li>
              <li className="sidebar-submenu-category">
                <a href="#" className="sidebar-submenu-title">
                  <p className="product-name">Wallet</p>
                  <data value={75} className="stock" title="Available Stock">
                    75
                  </data>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="product-showcase">
        <h3 className="showcase-heading">Best Sellers</h3>
        <div className="showcase-wrapper">
          <div className="showcase-container">
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="https://i.postimg.cc/kGZn4GL2/1.jpg"
                  alt="baby fabric shoes"
                  className="showcase-img"
                  width={75}
                  height={75}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Baby fabric shoes</h4>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <div className="price-box">
                  <del>$5.00</del>
                  <p className="price">$4.00</p>
                </div>
              </div>
            </div>
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="https://i.postimg.cc/fySG8Kgb/2.jpg"
                  alt="men's hoodies t-shirt"
                  className="showcase-img"
                  width={75}
                  height={75}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Men's hoodies t-shirt</h4>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <div className="price-box">
                  <del>$17.00</del>
                  <p className="price">$7.00</p>
                </div>
              </div>
            </div>
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="https://i.postimg.cc/14xL2qLr/3.jpg"
                  alt="girls t-shirt"
                  className="showcase-img"
                  width={75}
                  height={75}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Girls t-shirt</h4>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <div className="price-box">
                  <del>$5.00</del>
                  <p className="price">$3.00</p>
                </div>
              </div>
            </div>
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="https://i.postimg.cc/y6wxsrKv/4.jpg"
                  alt="woolen hat for men"
                  className="showcase-img"
                  width={75}
                  height={75}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Woolen hat for men</h4>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <div className="price-box">
                  <del>$15.00</del>
                  <p className="price">$12.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="product-box">
      <div className="product-minimal">
        <div className="product-showcase">
          <h2 className="title">New Arrivals</h2>
          <div className="showcase-wrapper has-scrollbar">
            <div className="showcase-container">
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/fyLNm09z/clothes-1.jpg"
                    alt="relaxed short full sleeve t-shirt"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Relaxed Short full sleeve t-shirt
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Clothes
                  </a>
                  <div className="price-box">
                    <p className="price">$45.00</p>
                    <del>$12.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/T3mXVxpD/clothes-2.jpg"
                    alt="girls pink embro design top"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Girls pink Embro design top
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Clothes
                  </a>
                  <div className="price-box">
                    <p className="price">$61.00</p>
                    <del>$9.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/DzgH6wF8/clothes-3.jpg"
                    alt="black floral wrap midi skirt"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Black Floral Wrap Midi Skirt
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Clothes
                  </a>
                  <div className="price-box">
                    <p className="price">$76.00</p>
                    <del>$25.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/02w43fPg/shirt-1.jpg"
                    alt="pure garment dyed cotton shirt"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Pure Garment Dyed Cotton Shirt
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Men's Fashion
                  </a>
                  <div className="price-box">
                    <p className="price">$68.00</p>
                    <del>$31.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="showcase-container">
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/DZ3QSqRG/jacket-5.jpg"
                    alt="relaxed short full sleeve t-shirt"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Relaxed Short full sleeve t-shirt
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Clothes
                  </a>
                  <div className="price-box">
                    <p className="price">$45.00</p>
                    <del>$12.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/9fnSKNRh/jacket-1.jpg"
                    alt="men yarn fleece full-zip jacket"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Men Yarn Fleece Full-zip Jacket
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Winter wear
                  </a>
                  <div className="price-box">
                    <p className="price">$61.00</p>
                    <del>$11.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/jdybNKWJ/jacket-3.jpg"
                    alt="mens winter leathers jackets"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Mens Winter Leathers Jackets
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Jackets
                  </a>
                  <div className="price-box">
                    <p className="price">$50.00</p>
                    <del>$25.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/7Lmt7tMz/shorts-1.jpg"
                    alt="better basics french terry sweatshorts"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Better Basics French Terry Sweatshorts
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Shorts
                  </a>
                  <div className="price-box">
                    <p className="price">$20.00</p>
                    <del>$10.00</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-showcase">
          <h2 className="title">Trending</h2>
          <div className="showcase-wrapper has-scrollbar">
            <div className="showcase-container">
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/pLWhzrLm/sports-1.jpg"
                    alt="running & trekking shoes - white"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Running &amp; Trekking Shoes - White
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Sports
                  </a>
                  <div className="price-box">
                    <p className="price">$49.00</p>
                    <del>$15.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/DfjFzzbv/sports-2.jpg"
                    alt="trekking & running shoes - black"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Trekking &amp; Running Shoes - Black
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Sports
                  </a>
                  <div className="price-box">
                    <p className="price">$78.00</p>
                    <del>$36.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/qRPjQYmZ/party-wear-1.jpg"
                    alt="womens party wear shoes"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">Womens Party Wear Shoes</h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Party Wear
                  </a>
                  <div className="price-box">
                    <p className="price">$94.00</p>
                    <del>$42.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/cH1M4Wv3/sports-3.jpg"
                    alt="sports claw women's shoes"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Sports Claw Women's Shoes
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Sports
                  </a>
                  <div className="price-box">
                    <p className="price">$54.00</p>
                    <del>$65.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="showcase-container">
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/JnczQTWc/sports-6.jpg"
                    alt="air tekking shoes - white"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Air Trekking Shoes - White
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Sports
                  </a>
                  <div className="price-box">
                    <p className="price">$52.00</p>
                    <del>$55.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/XvxVGrKQ/shoe-3.jpg"
                    alt="Boot With Suede Detail"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">Boot With Suede Detail</h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Boots
                  </a>
                  <div className="price-box">
                    <p className="price">$20.00</p>
                    <del>$30.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/JnMtkwB5/shoe-1.jpg"
                    alt="men's leather formal wear shoes"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Men's Leather Formal Wear Shoes
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Formal
                  </a>
                  <div className="price-box">
                    <p className="price">$56.00</p>
                    <del>$78.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/0yCHGD6R/shoe-2.jpg"
                    alt="casual men's brown shoes"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">Casual Men's Brown Shoes</h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Casual
                  </a>
                  <div className="price-box">
                    <p className="price">$50.00</p>
                    <del>$55.00</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-showcase">
          <h2 className="title">Top Rated</h2>
          <div className="showcase-wrapper has-scrollbar">
            <div className="showcase-container">
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/jq84QT45/watch-3.jpg"
                    alt="pocket watch leather pouch"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Pocket Watch Leather Pouch
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Watches
                  </a>
                  <div className="price-box">
                    <p className="price">$50.00</p>
                    <del>$34.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/MZmBYvv7/jewellery-3.jpg"
                    alt="silver deer heart necklace"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Silver Deer Heart Necklace
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Jewellery
                  </a>
                  <div className="price-box">
                    <p className="price">$84.00</p>
                    <del>$30.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/R0Kv9Jtq/perfume.jpg"
                    alt="titan 100 ml womens perfume"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Titan 100 Ml Womens Perfume
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Perfume
                  </a>
                  <div className="price-box">
                    <p className="price">$42.00</p>
                    <del>$10.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/jj4kzynp/belt.jpg"
                    alt="men's leather reversible belt"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Men's Leather Reversible Belt
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Belt
                  </a>
                  <div className="price-box">
                    <p className="price">$24.00</p>
                    <del>$10.00</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="showcase-container">
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/T24Nqdh3/jewellery-2.jpg"
                    alt="platinum zircon classic ring"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Platinum Zircon Classic Ring
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Jewellery
                  </a>
                  <div className="price-box">
                    <p className="price">$62.00</p>
                    <del>$65.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/rsk1gH6g/watch-1.jpg"
                    alt="smart watche vital plus"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">Smart Watch Vital Plus</h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Watches
                  </a>
                  <div className="price-box">
                    <p className="price">$56.00</p>
                    <del>$78.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/wjGDnM81/shampoo.jpg"
                    alt="shampoo conditioner packs"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Shampoo Conditioner Packs
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Cosmetics
                  </a>
                  <div className="price-box">
                    <p className="price">$20.00</p>
                    <del>$30.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="https://i.postimg.cc/6qd3mpCv/jewellery-1.jpg"
                    alt="rose gold peacock earrings"
                    className="showcase-img"
                    width={70}
                  />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Rose Gold Peacock Earrings
                    </h4>
                  </a>
                  <a href="#" className="showcase-category">
                    Jewellery
                  </a>
                  <div className="price-box">
                    <p className="price">$20.00</p>
                    <del>$30.00</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-featured">
        <h2 className="title">Deal of the day</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            <div className="showcase">
              <div className="showcase-banner">
                <img
                  src="https://i.postimg.cc/wjGDnM81/shampoo.jpg"
                  alt="shampoo, conditioner & facewash packs"
                  className="showcase-img"
                />
              </div>
              <div className="showcase-content">
                <div className="showcase-rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star-outline" />
                  <ion-icon name="star-outline" />
                </div>
                <a href="#">
                  <h3 className="showcase-title">
                    SHAMPOO, CONDITIONER &amp; FACEWASH PACKS
                  </h3>
                </a>
                <p className="showcase-desc">
                  Old Spice includes a variety of products designed for men's
                  grooming needs, such as deodorants and antiperspirants, body
                  washes, shaving creams, aftershaves and hair and beard care
                </p>
                <div className="price-box">
                  <p className="price">$150.00</p>
                  <del>$200.00</del>
                </div>
                <button className="add-cart-btn">Add to Cart</button>
                <div className="showcase-status">
                  <div className="wrapper">
                    <p>
                      Already Sold: <b>20</b>
                    </p>
                    <p>
                      Available: <b>40</b>
                    </p>
                  </div>
                  <div className="showcase-status-bar" />
                </div>
                <div className="countdown-box">
                  <p className="countdown-desc">Hurry up! Offer ends in: </p>
                  <div className="countdown">
                    <div className="countdown-content">
                      <p className="display-number">360</p>
                      <p className="display-text">Days</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">24</p>
                      <p className="display-text">Hours</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">59</p>
                      <p className="display-text">Min</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">00</p>
                      <p className="display-text">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase-container">
            <div className="showcase">
              <div className="showcase-banner">
                <img
                  src="https://i.postimg.cc/6qd3mpCv/jewellery-1.jpg"
                  alt="Rose Gold diamonds Earring"
                  className="showcase-img"
                />
              </div>
              <div className="showcase-content">
                <div className="showcase-rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star-outline" />
                  <ion-icon name="star-outline" />
                </div>
                <a href="#">
                  <h3 className="showcase-title">ROSE GOLD DIAMOND EARRINGS</h3>
                </a>
                <p className="showcase-desc">
                  It's a stylish piece of jewelry that combines the warm tones
                  of rose gold with the brilliance of diamonds. Enjoy a a
                  luxurious and elegant accessory, perfect for enhancing any
                  outfit while adding a touch of sophistication
                </p>
                <div className="price-box">
                  <p className="price">$1990.00</p>
                  <del>$2000.00</del>
                </div>
                <button className="add-cart-btn">Add to Cart</button>
                <div className="showcase-status">
                  <div className="wrapper">
                    <p>
                      Already Sold: <b>15</b>
                    </p>
                    <p>
                      Available: <b>40</b>
                    </p>
                  </div>
                  <div className="showcase-status-bar" />
                </div>
                <div className="countdown-box">
                  <p className="countdown-desc">Hurry up! Offer ends in: </p>
                  <div className="countdown">
                    <div className="countdown-content">
                      <p className="display-number">360</p>
                      <p className="display-text">Days</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">24</p>
                      <p className="display-text">Hours</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">59</p>
                      <p className="display-text">Min</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">00</p>
                      <p className="display-text">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-main">
        <h2 className="title">New Products</h2>
        <div className="product-grid">
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="https://i.postimg.cc/jdybNKWJ/jacket-3.jpg"
                alt="Mens Winter Leathers Jackets"
                className="product-img default"
                width={300}
              />
              <img
                src="https://i.postimg.cc/pr9cj4HT/jacket-4.jpg"
                alt="Mens Winter Leathers Jackets"
                className="product-img hover"
                width={300}
              />
              <p className="showcase-badge">15%</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                Jacket
              </a>
              <a href="#">
                <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">48.00</p>
                <del>$75.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="https://i.postimg.cc/02w43fPg/shirt-1.jpg"
                alt="Pure Garment Dyed Cotton Shirt"
                className="product-img default"
                width={300}
              />
              <img
                src="https://i.postimg.cc/dVbq6JMK/shirt-2.jpg"
                alt="Pure Garment Dyed Cotton Shirt"
                className="product-img hover"
                width={300}
              />
              <p className="showcase-badge angle black">Sale</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                SHIRT
              </a>
              <a href="#">
                <h3 className="showcase-title">
                  Pure Garment Dyed Cotton Shirt
                </h3>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">45.00</p>
                <del>$56.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="https://i.postimg.cc/DZ3QSqRG/jacket-5.jpg"
                alt="MEN Yarn Fleece Full-Zip Jacket"
                className="product-img default"
                width={300}
              />
              <img
                src="https://i.postimg.cc/RFnYQp6s/jacket-6.jpg"
                alt="MEN Yarn Fleece Full-Zip Jacket"
                className="product-img hover"
                width={300}
              />
              {/* <p class="showcase-badge angle black">Sale</p> */}
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                JACKET
              </a>
              <a href="#">
                <h3 className="showcase-title">
                  MEN Yarn Fleece Full-Zip Jacket
                </h3>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">58.00</p>
                <del>$65.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="https://i.postimg.cc/DzgH6wF8/clothes-3.jpg"
                alt="Black Floral Wrap Midi Skirt"
                className="product-img default"
                width={300}
              />
              <img
                src="https://i.postimg.cc/g01SJySv/clothes-4.jpg"
                alt="Black Floral Wrap Midi Skirt"
                className="product-img hover"
                width={300}
              />
              <p className="showcase-badge angle pink">NEW</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                SKIRT
              </a>
              <a href="#">
                <h3 className="showcase-title">Black Floral Wrap Midi Skirt</h3>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">25.00</p>
                <del>$35.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="https://i.postimg.cc/0yCHGD6R/shoe-2.jpg"
                alt="Casual Men's Brown shoes"
                className="product-img default"
                width={300}
              />
              <img
                src="https://i.postimg.cc/TY29THdz/shoe-2-1.jpg"
                alt="Casual Men's Brown shoes"
                className="product-img hover"
                width={300}
              />
              {/* <p class="showcase-badge angle black">Sale</p> */}
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                CASUAL
              </a>
              <a href="#">
                <h3 className="showcase-title">Casual Men's Brown shoes</h3>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">99.00</p>
                <del>$105.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="https://i.postimg.cc/jq84QT45/watch-3.jpg"
                alt="Pocket Watch Leather Pouch"
                className="product-img default"
                width={300}
              />
              <img
                src="https://i.postimg.cc/tRk3vt32/watch-4.jpg"
                alt="Pocket Watch Leather Pouch"
                className="product-img hover"
                width={300}
              />
              <p className="showcase-badge angle black">Sale</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                WATCHES
              </a>
              <a href="#">
                <h3 className="showcase-title">Pocket Watch Leather Pouch</h3>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">150.00</p>
                <del>$170.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="https://i.postimg.cc/rsk1gH6g/watch-1.jpg"
                alt="Smart watche Vital Plus"
                className="product-img default"
                width={300}
              />
              <img
                src="https://i.postimg.cc/hjgmpfhk/watch-2.jpg"
                alt="Smart watche Vital Plus"
                className="product-img hover"
                width={300}
              />
              {/* <p class="showcase-badge angle black">Sale</p> */}
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                WATCHES
              </a>
              <a href="#">
                <h3 className="showcase-title">Smart watche Vital Plus</h3>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">100.00</p>
                <del>$120.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="https://i.postimg.cc/qRPjQYmZ/party-wear-1.jpg"
                alt="Womens Party Wear Shoes"
                className="product-img default"
                width={300}
              />
              <img
                src="https://i.postimg.cc/FKhF6cgV/party-wear-2.jpg"
                alt="Womens Party Wear Shoes"
                className="product-img hover"
                width={300}
              />
              <p className="showcase-badge angle black">Sale</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                PARTY WEAR
              </a>
              <a href="#">
                <h3 className="showcase-title">Womens Party Wear Shoes</h3>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">25.00</p>
                <del>$30.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="https://i.postimg.cc/9fnSKNRh/jacket-1.jpg"
                alt="Mens Winter Leathers Jackets"
                className="product-img default"
                width={300}
              />
              <img
                src="https://i.postimg.cc/T36WRKJp/jacket-2.jpg"
                alt="Mens Winter Leathers Jackets"
                className="product-img hover"
                width={300}
              />
              {/* <p class="showcase-badge angle black">Sale</p> */}
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                JACKET
              </a>
              <a href="#">
                <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">32.00</p>
                <del>$45.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="https://i.postimg.cc/DfjFzzbv/sports-2.jpg"
                alt="Trekking & Running Shoes - black"
                className="product-img default"
                width={300}
              />
              <img
                src="https://i.postimg.cc/BbFX338T/sports-4.jpg"
                alt="Trekking & Running Shoes - black"
                className="product-img hover"
                width={300}
              />
              <p className="showcase-badge angle black">Sale</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                SPORTS
              </a>
              <a href="#">
                <h3 className="showcase-title">
                  Trekking &amp; Running Shoes - black
                </h3>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">58.00</p>
                <del>$64.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="https://i.postimg.cc/JnMtkwB5/shoe-1.jpg"
                alt="Men's Leather Formal Wear shoes"
                className="product-img default"
                width={300}
              />
              <img
                src="https://i.postimg.cc/BnLwGwNq/shoe-1-1.jpg"
                alt="Men's Leather Formal Wear shoes"
                className="product-img hover"
                width={300}
              />
              {/* <p class="showcase-badge angle black">Sale</p> */}
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                FORMAL
              </a>
              <a href="#">
                <h3 className="showcase-title">
                  Men's Leather Formal Wear shoes
                </h3>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">50.00</p>
                <del>$65.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="https://i.postimg.cc/7Lmt7tMz/shorts-1.jpg"
                alt="Better Basics French Terry Sweatshorts"
                className="product-img default"
                width={300}
              />
              <img
                src="https://i.postimg.cc/cLBTZywG/shorts-2.jpg"
                alt="Better Basics French Terry Sweatshorts"
                className="product-img hover"
                width={300}
              />
              <p className="showcase-badge angle black">Sale</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                SHORTS
              </a>
              <a href="#">
                <h3 className="showcase-title">
                  Better Basics French Terry Sweatshorts
                </h3>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">78.00</p>
                <del>$85.00</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ProductSection