/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddCart} from '../../redux/cartSlice'
import { Deal } from '../../Data'
import { addWish, removeWish } from "../../redux/wishSystem";
import { Link } from 'react-router-dom';
const DealoftheDay = () => {
    const dispatch = useDispatch()

    const AddToCart = (item) => {
      dispatch(AddCart({ ...item }));
    };

    const addFav = (item) => {
      dispatch(addWish(item));
    };
  
  
    const wishlistItem = useSelector((state) => state.wishlist.wishlistItem);
    // console.log(wishlistItem, "hh");
  
  
    const removeFav = (item) => {
      dispatch(removeWish(item))
    }
  


  
  return (
    <>
     <div className="product-featured">
              <h2 className="title">Deal of the day</h2>
              <div className="showcase-wrapper has-scrollbar">

                {
                  Deal.map((item,index) => {
                    return (
                      <div key={index} className="showcase-container">
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
                            <Link href="#">
                              <h3 className="showcase-title">
                                {item.title}
                              </h3>
                            </Link>
                            <p className="showcase-desc">
                              {item.disc}
                            </p>
                            <div className="price-box">
                              <p className="price">${item.price}</p>
                              <del>${item.lastPrice}</del>
                            </div>
                            <div style={{ display: "flex", float: "right", gap: "10px", marginTop: "5px", alignItems: "center" }}>
                                  <button style={{color:"pink"}} onClick={() => AddToCart(item)}><ion-icon name="bag-add-outline" /></button>
                                  <button style={{color:"pink"}}>
                        {wishlistItem.some((wishlistItem) => wishlistItem.id === item.id && wishlistItem.isFavourite) ? (
                          <ion-icon  onClick={() => removeFav(item)} name="heart" />
                        ) : (
                          <ion-icon onClick={() => addFav(item)} name="heart-outline" />
                        )}
                      </button>
                                  <button style={{color:"pink"}}><ion-icon name="repeat-outline" /></button>
                                  <button style={{color:"pink"}}><ion-icon name="eye-outline" /></button>
                                </div>
                            <button onClick={() => AddToCart(item)} className="add-cart-btn">Add to Cart</button>
                            

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
                            <div className="countdown">
                          <div className="countdown-content">
                            <p className="display-number m-0">5</p>
                            <p className="display-text m-0">Days</p>
                          </div>
                          <div className="countdown-content">
                            <p className="display-number m-0 ">13</p>
                            <p className="display-text m-0">Hours</p>
                          </div>
                          <div className="countdown-content">
                            <p className="display-number m-0">55</p>
                            <p className="display-text  m-0">Min</p>
                          </div>
                          <div className="countdown-content">
                            <p className="display-number m-0">44</p>
                            <p className="display-text m-0">Sec</p>
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
    
    </>
  )
}

export default DealoftheDay