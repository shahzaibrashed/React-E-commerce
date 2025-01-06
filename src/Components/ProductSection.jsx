/* eslint-disable jsx-a11y/anchor-is-valid */
import './Style.css'
import { useDispatch } from 'react-redux'
import { AddCart, RemoveProduct } from '../redux/cartSlice'
import { Deal } from '../Data'
import { product } from '../Data'
import { newArrival } from '../Data'
import { trending } from '../Data'
import { bestSeller } from '../Data'

const ProductSection = () => {
  const dispatch = useDispatch()

  const AddToCart = (item) => {
    dispatch(AddCart({ ...item }));
  };

  const RemoveToCart = (item) => {
    dispatch(RemoveProduct(item));
  };

  return (
    <>
      <div className="product-container">
        <div className="container">




          <div className="sidebar has-scrollbar " data-mobile-menu="">

            <div className="sidebar-category">
              <div className="sidebar-top">
                <h2 className="sidebar-title">Category</h2>
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
                </li>
              </ul>
            </div>

            <div className="product-showcase">
              <h3 className="showcase-heading">Best Sellers</h3>
              <div className="showcase-wrapper">
                <div className="showcase-container">
                  {
                    bestSeller.map((item) => {
                      return (
                        <div className="showcase">
                          <a href="#" className="showcase-img-box">
                            <img
                              src={item.imgUrl}
                              alt="baby fabric shoes"
                              className="showcase-img"
                              width={75}
                              height={75}
                            />
                          </a>
                          <div className="showcase-content">
                            <a href="#">
                              <h4 className="showcase-title">{item.title}</h4>
                            </a>
                            <div className="showcase-rating">
                              {item.star}
                            </div>
                            <div className="price-box">
                              <del>{item.lastPrice}</del>
                              <p className="price">{item.price}</p>
                            </div>
                            <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
                              <button className="btn-action">
                                <ion-icon name="bag-add-outline" />
                              </button>
                              <button className="btn-action">
                                <ion-icon name="heart-outline" />
                              </button>
                              <button className="btn-action">
                                <ion-icon name="eye-outline" />
                              </button>
                              <button className="btn-action">
                                <ion-icon name="repeat-outline" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>

          </div>

          <div className="product-box">
            <div className="product-minimal">

              <div className="product-showcase">
                <h2 className="title">New Arrivals</h2>
                <div className="showcase-wrapper has-scrollbar">
                  <div className="showcase-container">{
                    newArrival.map((item) => {
                      return (
                        <div className="showcase">
                          <a href="#" className="showcase-img-box">
                            <img
                              src={item.imgUrl}
                              alt="relaxed short full sleeve t-shirt"
                              className="showcase-img"
                              width={70}
                            />
                          </a>
                          <div className="showcase-content">
                            <a href="#">
                              <h4 className="showcase-title">
                                {item.disc}
                              </h4>
                            </a>
                            <a href="#" className="showcase-category">
                              {item.title}
                            </a>
                            <div className="price-box">
                              <p className="price">{item.price}</p>
                              <del>{item.lastPrice}</del>
                            </div>
                            <div style={{ display: "flex", float: "right", gap: "10px", marginTop: "5px", alignItems: "center" }}>
                              <button onClick={() => AddToCart(item)} className="btn-action"><ion-icon name="bag-add-outline" /></button>
                              <button className="btn-action"><ion-icon name="heart-outline" /></button>
                              <button className="btn-action"><ion-icon name="repeat-outline" /></button>
                              <button className="btn-action"><ion-icon name="eye-outline" /></button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                  </div>
                  <div className="showcase-container">{
                    trending.map((item) => {
                      return (
                        <div className="showcase">
                          <a href="#" className="showcase-img-box">
                            <img
                              src={item.imgUrl}
                              alt="relaxed short full sleeve t-shirt"
                              className="showcase-img"
                              width={70}
                            />
                          </a>
                          <div className="showcase-content">
                            <a href="#">
                              <h4 className="showcase-title">
                                {item.disc}
                              </h4>
                            </a>
                            <a href="#" className="showcase-category">
                              {item.title}
                            </a>
                            <div className="price-box">
                              <p className="price">{item.price}</p>
                              <del>{item.lastPrice}</del>
                            </div>
                            <div style={{ display: "flex", float: "right", gap: "10px", marginTop: "5px", alignItems: "center" }}>
                              <button onClick={() => AddToCart(item)} className="btn-action"><ion-icon name="bag-add-outline" /></button>
                              <button className="btn-action"><ion-icon name="heart-outline" /></button>
                              <button className="btn-action"><ion-icon name="repeat-outline" /></button>
                              <button className="btn-action"><ion-icon name="eye-outline" /></button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                  </div>
                </div>
              </div>

              <div className="product-showcase">
                <h2 className="title">Trending</h2>
                <div className="showcase-wrapper has-scrollbar">
                  <div className="showcase-container">{
                    trending.map((item) => {
                      return (
                        <div className="showcase">
                          <a href="#" className="showcase-img-box">
                            <img
                              src={item.imgUrl}
                              alt="relaxed short full sleeve t-shirt"
                              className="showcase-img"
                              width={70}
                            />
                          </a>
                          <div className="showcase-content">
                            <a href="#">
                              <h4 className="showcase-title">
                                {item.disc}
                              </h4>
                            </a>
                            <a href="#" className="showcase-category">
                              {item.title}
                            </a>
                            <div className="price-box">
                              <p className="price">{item.price}</p>
                              <del>{item.lastPrice}</del>
                            </div>
                            <div style={{ display: "flex", float: "right", gap: "10px", marginTop: "5px", alignItems: "center" }}>
                              <button onClick={() => AddToCart(item)} className="btn-action"><ion-icon name="bag-add-outline" /></button>
                              <button className="btn-action"><ion-icon name="heart-outline" /></button>
                              <button className="btn-action"><ion-icon name="repeat-outline" /></button>
                              <button className="btn-action"><ion-icon name="eye-outline" /></button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                  </div>
                  <div className="showcase-container">{
                    newArrival.map((item) => {
                      return (
                        <div className="showcase">
                          <a href="#" className="showcase-img-box">
                            <img
                              src={item.imgUrl}
                              alt="relaxed short full sleeve t-shirt"
                              className="showcase-img"
                              width={70}
                            />
                          </a>
                          <div className="showcase-content">
                            <a href="#">
                              <h4 className="showcase-title">
                                {item.disc}
                              </h4>
                            </a>
                            <a href="#" className="showcase-category">
                              {item.title}
                            </a>
                            <div className="price-box">
                              <p className="price">{item.price}</p>
                              <del>{item.lastPrice}</del>
                            </div>
                            <div style={{ display: "flex", float: "right", gap: "10px", marginTop: "5px", alignItems: "center" }}>
                              <button onClick={() => AddToCart(item)} className="btn-action"><ion-icon name="bag-add-outline" /></button>
                              <button className="btn-action"><ion-icon name="heart-outline" /></button>
                              <button className="btn-action"><ion-icon name="repeat-outline" /></button>
                              <button className="btn-action"><ion-icon name="eye-outline" /></button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                  </div>
                </div>
              </div>

            </div>

            <div className="product-featured">
              <h2 className="title">Deal of the day</h2>
              <div className="showcase-wrapper has-scrollbar">

                {
                  Deal.map((item) => {
                    return (
                      <div key={item.id} className="showcase-container">
                        <div className="showcase">
                          <div className="showcase-banner">
                            <img
                              src={item.imgUrl}
                              alt="shampoo, conditioner & facewash packs"
                              className="showcase-img"
                            />
                          </div>
                          <div className="showcase-content">
                            <div className="showcase-rating">
                              {item.star}
                            </div>
                            <a href="#">
                              <h3 className="showcase-title">
                                {item.title}
                              </h3>
                            </a>
                            <p className="showcase-desc">
                              {item.disc}
                            </p>
                            <div className="price-box">
                              <p className="price">{item.price}</p>
                              <del>{item.lastPrice}</del>
                            </div>
                            <button onClick={() => AddToCart(item)} className="add-cart-btn">Add to Cart</button>
                            <button onClick={() => RemoveToCart(item)} className="add-cart-btn">Remove to Cart</button>

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
                    )
                  })
                }
              </div>
            </div>

            <div className="product-main">
              <h2 className="title">New Products</h2>
              <div className="product-grid">
                {
                  product.map((item) => {
                    return (
                      <div className="showcase">
                        <div className="showcase-banner">
                          <img
                            src={item.imgUrl}
                            alt="Casual Men's Brown shoes"
                            className="product-img default"
                            width={300}
                          />
                          <img
                            src={item.imgUrlH}
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
                            <button onClick={() => AddToCart(item)} className="btn-action">
                              <ion-icon name="bag-add-outline" />
                            </button>
                          </div>
                        </div>
                        <div className="showcase-content">
                          <a href="#" className="showcase-category">
                            {item.title}
                          </a>
                          <a href="#">
                            <h3 className="showcase-title">{item.disc}</h3>
                          </a>
                          <div className="showcase-rating">
                            {item.star}
                          </div>
                          <div className="price-box">
                            <p className="price">{item.price}</p>
                            <del>{item.lastPrice}</del>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductSection