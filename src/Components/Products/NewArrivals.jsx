/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddCart } from '../../redux/cartSlice';
import { newArrival } from '../../Data'
import { trending } from '../../Data'
import { addWish, removeWish } from "../../redux/wishSystem";
import { Link } from 'react-router-dom';
const NewArrivals = () => {

  const dispatch = useDispatch()

  const AddToCart = (item) => {
    dispatch(AddCart({ ...item }));
  };

  const addFav = (item) => {
    dispatch(addWish(item));
  };


  const wishlistItem = useSelector((state) => state.wishlist.wishlistItem);
  console.log(wishlistItem, "hh");


  const removeFav = (item) => {
    dispatch(removeWish(item))
  }


  return (
    <>

      <div className="product-showcase">
        <h2 className="title">New Arrivals</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">{
            newArrival.map((item) => {
              return (
                <div className="showcase">
                  <Link href="#" className="showcase-img-box">
                    <img
                      src={item.imgUrl}
                      alt="relaxed short full sleeve t-shirt"
                      className="showcase-img"
                      width={70}
                    />
                  </Link>
                  <div className="showcase-content">
                    <Link href="#">
                      <h4 className="showcase-title">
                        {item.disc}
                      </h4>
                    </Link>
                    <Link href="#" className="showcase-category">
                      {item.title}
                    </Link>
                    <div className="price-box">
                      <p className="price"> ${item.price}</p>
                      <del> ${item.lastPrice}</del>
                    </div>
                    <div style={{ display: "flex", float: "right", gap: "10px", marginTop: "5px", alignItems: "center" }}>
                      <button onClick={() => AddToCart(item)} style={{color:"pink"}}><ion-icon name="bag-add-outline" /></button>
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
                  <Link href="#" className="showcase-img-box">
                    <img
                      src={item.imgUrl}
                      alt="relaxed short full sleeve t-shirt"
                      className="showcase-img"
                      width={70}
                    />
                  </Link>
                  <div className="showcase-content">
                    <Link href="#">
                      <h4 className="showcase-title">
                        {item.disc}
                      </h4>
                    </Link>
                    <Link href="#" className="showcase-category">
                      {item.title}
                    </Link>
                    <div className="price-box">
                      <p className="price"> ${item.price}</p>
                      <del> ${item.lastPrice}</del>
                    </div>
                    <div style={{ display: "flex", float: "right", gap: "10px", marginTop: "5px", alignItems: "center" }}>
                      <button onClick={() => AddToCart(item)} style={{color:"pink"}}><ion-icon name="bag-add-outline" /></button>
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

export default NewArrivals