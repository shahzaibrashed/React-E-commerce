/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddCart } from '../../redux/cartSlice'
import { addWish, removeWish } from "../../redux/wishSystem";
import { Link } from 'react-router-dom';

const BestSeller = ({bestProduct,label}) => {
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

      <div className="product-showcase" style={{ border: "1px solid var(--cultured)", borderRadius: "5px", padding: "3px" }}>
        <h3 className="showcase-heading">{label}</h3>
        <div className="showcase-wrapper">
          <div className="showcase-container">
            {
              bestProduct?.map((item) => {
                return (
                  <div className="showcase">
                    <Link href="#" className="showcase-img-box">
                      <img
                        src={item.imgUrl}
                        alt="baby fabric shoes"
                        className="showcase-img"
                        width={75}
                        height={75}
                      />
                    </Link>
                    <div className="showcase-content">
                      <Link href="#">
                        <h4 className="showcase-title">{item.title}</h4>
                      </Link>
                      <div className="showcase-rating">
                        {item.star}
                      </div>
                      <div className="price-box">
                        <del>{item.lastPrice}</del>
                        <p className="price">{item.price}</p>
                      </div>
                      <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
                        <button onClick={() => AddToCart(item)} style={{color:"pink"}}>
                          <ion-icon name="bag-add-outline" />
                        </button>
                        <button style={{color:"pink"}}>
                          {wishlistItem.some((wishlistItem) => wishlistItem.id === item.id && wishlistItem.isFavourite) ? (
                            <ion-icon onClick={() => removeFav(item)} name="heart" />
                          ) : (
                            <ion-icon onClick={() => addFav(item)} name="heart-outline" />
                          )}
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

    </>
  )
}

export default BestSeller