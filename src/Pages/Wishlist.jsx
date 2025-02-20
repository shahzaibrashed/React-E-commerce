/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { clearWishlist, removeWish } from "../redux/wishSystem";

const Wishlist = () => {
  const dispatch = useDispatch()
  const wishlistItem = useSelector((state) => state.wishlist.wishlistItem);

  const removeFav = (item) => {
    dispatch(removeWish(item))
  }
   const  clearAll = ()=>{
      dispatch(clearWishlist());
    }

  return (
    <>
      <Header />
      <div className="wishlist-container">
        <header className="wishlist-header flex justify-content-space-between">
          <h1>My Wishlist {wishlistItem.length}</h1>
      {wishlistItem.length === 0 ? "": <h1 onClick={clearAll} style={{cursor:"pointer"}}>Clear All</h1>}    
        </header>

        {wishlistItem.length === 0 ? (
          <div className='m-5'>
            <p style={{ textAlign: "center" }}>
              Your wishlist is empty!
            </p>
          
          </div>
        ) : (
          <ul className="wishlist-list">
            {wishlistItem.map((item,index) => (
              <li key={index} className="wishlist-item">
                <img src={item.imgUrl} alt={item.title} className="item-image" />
                <div className="item-details">
                  <p style={{ color: "orange" }}>{item.star}</p>
                  <p>{item.disc}</p>
                  <h3 className="item-title">{item.title}</h3>
                  <div className="p-box">
                    <p style={{ color: "var(--salmon-pink)" }} className="price">${item.price}</p>
                    <del>{item.lastPrice}</del>
                  </div>
                </div>

                <button onClick={() => removeFav(item)} className="remove-button">Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Footer />
      <style>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

export default Wishlist
