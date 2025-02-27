/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { clearWishlist, removeWish } from "../redux/wishSystem";
import { Placeholder  } from "react-bootstrap";

// Skeleton Loader Component
const WishlistSkeleton = () => {
  return (
    <div className="wishlist-item d-flex align-items-center p-3 mb-2 border rounded">
      {/* Image Skeleton */}
      <Placeholder as="div" animation="wave" className="rounded" style={{ width: "80px", height: "80px", background: "#e0e0e0" }} />

      {/* Content Skeleton */}
      <div className="flex-grow-1 mx-3">
          <Placeholder  style={{background: "#e0e0e0" }} xs={2}className="rounded"  />
        <Placeholder as="p"  animation="wave" className="mb-2">
          <Placeholder xs={8} style={{background: "#e0e0e0" }} className="rounded" /> 
          <Placeholder xs={6} style={{background: "#e0e0e0" }} className="rounded"/>
        </Placeholder>
        <Placeholder  as="h3" animation="wave" className="fw-bold mb-2">
          <Placeholder style={{background: "#e0e0e0" }} className="rounded" xs={4} />
        </Placeholder>
        <div className="d-flex align-items-center">
          <Placeholder as="p" animation="wave" className="text-danger fw-bold">
            <Placeholder xs={2} />
          </Placeholder>
          <Placeholder as="del" animation="wave" className="ms-2">
            <Placeholder xs={2} />
          </Placeholder>
        </div>
      </div>

  
     
    </div>
  );
};

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItem = useSelector((state) => state.wishlist.wishlistItem);
  const [isLoading, setIsLoading] = useState(true);

  const removeFav = (item) => {
    dispatch(removeWish(item));
  };

  const clearAll = () => {
    dispatch(clearWishlist());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className="wishlist-container">
        <header className="wishlist-header d-flex justify-content-between align-items-center">
          <h1>My Wishlist {wishlistItem.length}</h1>
          {wishlistItem.length === 0 ? "" : (
            <h1 onClick={clearAll} style={{ cursor: "pointer" }}>
              Clear All
            </h1>
          )}
        </header>

        {isLoading ? (
          wishlistItem?.map((_, i) => <WishlistSkeleton key={i} />)
        ) : wishlistItem.length === 0 ? (
          <div className="m-5">
            <p style={{ textAlign: "center" }}>Your wishlist is empty!</p>
          </div>
        ) : (
          <ul className="wishlist-list">
            {wishlistItem.map((item, index) => (
              <li key={index} className="wishlist-item d-flex align-items-center p-3 mb-2 border rounded">
                <img src={item.imgUrl} alt={item.title} className="item-image rounded" style={{ width: "80px", height: "80px" }} />
                <div className="item-details flex-grow-1 mx-3">
                  <p style={{ color: "orange" }}>{item.star}</p>
                  <p>{item.disc}</p>
                  <h3 className="item-title fw-bold">{item.title}</h3>
                  <div className="p-box d-flex align-items-center">
                    <p style={{ color: "var(--salmon-pink)" }} className="price fw-bold">
                      ${item.price}
                    </p>
                    <del className="ms-2">{item.lastPrice}</del>
                  </div>
                </div>
                <button onClick={() => removeFav(item)} className="remove-button btn btn-danger">
                  Remove
                </button>
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
        .wishlist-container {
          padding: 20px;
        }
        .wishlist-item {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 8px;
        }
        .skeleton-remove-btn {
          width: 70px;
          height: 30px;
        }
      `}</style>
    </>
  );
};

export default Wishlist;
