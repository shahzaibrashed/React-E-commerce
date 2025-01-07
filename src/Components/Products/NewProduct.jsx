/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddCart} from '../../redux/cartSlice'
import { product } from '../../Data'
import { addWish, removeWish } from "../../redux/wishSystem";
import { Link } from 'react-router-dom';
const NewProduct = () => {
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
                        {wishlistItem.some((wishlistItem) => wishlistItem.id === item.id && wishlistItem.isFavourite) ? (
                          <ion-icon  onClick={() => removeFav(item)} name="heart" />
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
                            <button onClick={() => AddToCart(item)} className="btn-action">
                              <ion-icon name="bag-add-outline" />
                            </button>
                          </div>
                        </div>
                        <div className="showcase-content">
                          <Link href="#" className="showcase-category">
                            {item.title}
                          </Link>
                          <Link href="#">
                            <h3 className="showcase-title">{item.disc}</h3>
                          </Link>
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
    </>
  )
}

export default NewProduct