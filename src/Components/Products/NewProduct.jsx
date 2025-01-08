/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCart } from '../../redux/cartSlice';
import { addWish, removeWish } from "../../redux/wishSystem";
import { Link } from 'react-router-dom';

const NewProduct = ({ productData, label }) => {
  const [hover, setHover] = useState('')
  console.log(hover, 'hoverhover')
  const dispatch = useDispatch();

  const AddToCart = (item) => {
    dispatch(AddCart({ ...item }));
  };

  const addFav = (item) => {
    dispatch(addWish(item));
  };

  const removeFav = (item) => {
    dispatch(removeWish(item));
  };

  const wishlistItem = useSelector((state) => state.wishlist.wishlistItem);

  return (
    <div className="product-main">
      <h2 className="title">{label}</h2>
      <div className="product-grid">
        {productData?.map((item, index) => (
          <div className="showcase" key={item.id}>
            <div className="showcase-banner">
              <div style={{ height: "200px", width: "200px" }}>
                <img
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover('')}
                  src={hover === index ? item.imgUrlH : item.imgUrl}
                  alt={item.title}
                  className="product-img hover"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="showcase-actions">
                <button className="btn-action">
                  {wishlistItem.some(
                    (wishlistItem) =>
                      wishlistItem.id === item.id && wishlistItem.isFavourite
                  ) ? (
                    <ion-icon onClick={() => removeFav(item)} name="heart" />
                  ) : (
                    <ion-icon onClick={() => addFav(item)} name="heart-outline" />
                  )}
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button
                  onClick={() => AddToCart(item)}
                  className="btn-action"
                >
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <Link to="#" className="showcase-category">
                {item.title}
              </Link>
              <Link to="#">
                <h3 className="showcase-title">{item.disc}</h3>
              </Link>
              <div className="showcase-rating">{item.star}</div>
              <div className="price-box">
                <p className="price">{item.price}</p>
                <del>{item.lastPrice}</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProduct;
