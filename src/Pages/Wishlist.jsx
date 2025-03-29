/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { clearWishlist, removeWish } from "../redux/wishSystem";
import { FaTrash, FaRegHeart, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

// Skeleton Loader Component
const WishlistSkeleton = () => {
  return (
    <div className="wishlist-item skeleton-item">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-rating"></div>
        <div className="skeleton-text short"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-price">
          <div className="skeleton-current"></div>
          <div className="skeleton-old"></div>
        </div>
      </div>
      <div className="skeleton-remove"></div>
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
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className="wishlist-page">
        <div className="wishlist-container">
          <div className="wishlist-header">
            <h2 className="wishlist-title">
              My Wishlist
              <span className="wishlist-count">{wishlistItem.length}</span>
            </h2>
            {wishlistItem.length > 0 && (
              <button onClick={clearAll} className="clear-all-btn">
                <FaTrash className="trash-icon" />
                <span className="btn-text">Clear All</span>
              </button>
            )}
          </div>

          <div className="wishlist-content">
            {isLoading ? (
              Array(4).fill().map((_, i) => <WishlistSkeleton key={i} />)
            ) : wishlistItem.length === 0 ? (
              <div className="empty-wishlist">
                <div className="empty-icon">
                  <FaRegHeart />
                </div>
                <h3>Your wishlist is empty</h3>
                <p>You haven't added any items to your wishlist yet</p>
                <Link to="/" className="shop-btn mt-3">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="wishlist-items">
                {wishlistItem.map((item, index) => (
                  <div key={index} className="wishlist-item">
                    <Link to={`/product/${item.id}`} className="item-image">
                      <img src={item.imgUrl} alt={item.title} />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          removeFav(item);
                        }}
                        className="remove-btn-mobile"
                        aria-label="Remove item"
                      >
                        <IoClose />
                      </button>
                    </Link>
                    <div className="item-details">
                      <div className="item-rating">
                        {Array(5).fill().map((_, i) => (
                          <span key={i} className={i < item.star ? "star filled" : "star"}>
                            ★
                          </span>
                        ))}
                      </div>
                      <Link to={`/product/${item.id}`} className="item-description">
                        {item.disc}
                      </Link>
                      <Link to={`/product/${item.id}`} className="item-title">
                        {item.title}
                      </Link>
                      <div className="item-price">
                        <span className="current-price">${item.price}</span>
                        {item.lastPrice && (
                          <span className="old-price">${item.lastPrice}</span>
                        )}
                      </div>
                      <div className="item-actions">
                        <button className="add-to-cart-btn">
                          <FaShoppingCart className="cart-icon" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFav(item)}
                      className="remove-btn"
                      aria-label="Remove item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .wishlist-page {
          background-color: #f9f9f9;
          min-height: calc(100vh - 120px);
          padding: 30px 0;
        }
        
        .wishlist-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        .wishlist-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        
        .wishlist-title {
          display: flex;
          align-items: center;
          font-size: 22px;
          color: #333;
          margin: 0;
          font-weight: 600;
        }
        
        .wishlist-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: var(--salmon-pink);
          color: white;
          font-size: 14px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          margin-left: 10px;
        }
        
        .clear-all-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #666;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 8px 12px;
          border-radius: 4px;
        }
        
        .clear-all-btn:hover {
          color: var(--salmon-pink);
          background-color: rgba(255, 119, 119, 0.1);
        }
        
        .trash-icon {
          font-size: 14px;
        }
        
        .empty-wishlist {
          text-align: center;
          padding: 40px 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .empty-icon {
          font-size: 48px;
          color: #ddd;
          margin-bottom: 20px;
        }
        
        .empty-wishlist h3 {
          color: #333;
          margin-bottom: 10px;
          font-size: 20px;
        }
        
        .empty-wishlist p {
          color: #777;
          margin-bottom: 25px;
          font-size: 15px;
        }
        
        .shop-btn {
          display: inline-block;
          padding: 12px 30px;
          background-color: var(--salmon-pink);
          color: white;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          font-size: 15px;
        }
        
        .shop-btn:hover {
          background-color: #ff6b6b;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 119, 119, 0.2);
        }
        
        .wishlist-items {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .wishlist-item {
          display: flex;
          align-items: flex-start;
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
        }
        
        .wishlist-item:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }
        
        .item-image {
          width: 120px;
          height: 120px;
          margin-right: 20px;
          position: relative;
          display: block;
          flex-shrink: 0;
        }
        
        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 4px;
        }
        
        .remove-btn-mobile {
          display: none;
          position: absolute;
          top: -8px;
          right: -8px;
          background: white;
          border: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          color: #ff6b6b;
          cursor: pointer;
          z-index: 2;
        }
        
        .item-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .item-rating {
          margin-bottom: 8px;
        }
        
        .star {
          color: #ddd;
          font-size: 14px;
        }
        
        .star.filled {
          color: #ffb800;
        }
        
        .item-description {
          color: #777;
          font-size: 14px;
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-decoration: none;
        }
        
        .item-title {
          font-size: 16px;
          color: #333;
          margin-bottom: 10px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .item-title:hover {
          color: var(--salmon-pink);
        }
        
        .item-price {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }
        
        .current-price {
          color: var(--salmon-pink);
          font-weight: 600;
          font-size: 18px;
        }
        
        .old-price {
          color: #999;
          text-decoration: line-through;
          font-size: 14px;
        }
        
        .item-actions {
          margin-top: auto;
        }
        
        .add-to-cart-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--salmon-pink);
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .add-to-cart-btn:hover {
          background-color: #ff6b6b;
          transform: translateY(-2px);
        }
        
        .cart-icon {
          font-size: 14px;
        }
        
        .remove-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: #ccc;
          font-size: 18px;
          cursor: pointer;
          padding: 8px;
          transition: all 0.3s ease;
        }
        
        .remove-btn:hover {
          color: var(--salmon-pink);
        }
        
        /* Skeleton Styles */
        .skeleton-item {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          margin-bottom: 15px;
        }
        
        .skeleton-image {
          width: 120px;
          height: 120px;
          margin-right: 20px;
          background: #f0f0f0;
          border-radius: 4px;
          animation: pulse 1.5s infinite ease-in-out;
          flex-shrink: 0;
        }
        
        .skeleton-content {
          flex: 1;
        }
        
        .skeleton-rating {
          width: 80px;
          height: 14px;
          background: #f0f0f0;
          margin-bottom: 10px;
          border-radius: 4px;
          animation: pulse 1.5s infinite ease-in-out;
        }
        
        .skeleton-text {
          height: 12px;
          background: #f0f0f0;
          margin-bottom: 8px;
          border-radius: 4px;
          animation: pulse 1.5s infinite ease-in-out;
        }
        
        .skeleton-text.short {
          width: 60%;
        }
              a {
  text-decoration: none;
}
        
        .skeleton-title {
          width: 80%;
          height: 16px;
          background: #f0f0f0;
          margin-bottom: 12px;
          border-radius: 4px;
          animation: pulse 1.5s infinite ease-in-out;
        }
        
        .skeleton-price {
          display: flex;
          gap: 10px;
        }
        
        .skeleton-current {
          width: 40px;
          height: 18px;
          background: #f0f0f0;
          border-radius: 4px;
          animation: pulse 1.5s infinite ease-in-out;
        }
        
        .skeleton-old {
          width: 30px;
          height: 14px;
          background: #f0f0f0;
          border-radius: 4px;
          animation: pulse 1.5s infinite ease-in-out;
        }
        
        .skeleton-remove {
          width: 24px;
          height: 24px;
          background: #f0f0f0;
          border-radius: 50%;
          margin-left: 20px;
          animation: pulse 1.5s infinite ease-in-out;
        }
        
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 0.3; }
          100% { opacity: 0.6; }
        }
        
        /* Responsive Styles */
        @media (max-width: 992px) {
          .wishlist-item {
            padding: 15px;
          }
          
          .item-image {
            width: 100px;
            height: 100px;
            margin-right: 15px;
          }
        }
        
        @media (max-width: 768px) {
          .wishlist-container {
            padding: 0 10px;
          }
          
          .wishlist-title {
            font-size: 20px;
          }
          
          .clear-all-btn .btn-text {
            display: none;
          }
          
          .clear-all-btn {
            padding: 8px;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            justify-content: center;
          }
          
          .wishlist-item {
            flex-direction: column;
            align-items: stretch;
          }
          
          .item-image {
            width: 100%;
            height: 180px;
            margin-right: 0;
            margin-bottom: 15px;
          }
          
          .item-image img {
            object-fit: contain;
          }
          
          .remove-btn {
            display: none;
          }
          
          .remove-btn-mobile {
            display: flex;
          }
          
          .item-actions {
            margin-top: 15px;
          }
          
          .add-to-cart-btn {
            width: 100%;
            justify-content: center;
            padding: 12px;
          }
        }
        
        @media (max-width: 576px) {
          .wishlist-page {
            padding: 20px 0;
          }
          
          .wishlist-header {
            margin-bottom: 20px;
          }
          
          .empty-wishlist {
            padding: 30px 15px;
          }
          
          .empty-icon {
            font-size: 40px;
            margin-bottom: 15px;
          }
          
          .empty-wishlist h3 {
            font-size: 18px;
          }
          
          .empty-wishlist p {
            font-size: 14px;
          }
          
          .shop-btn {
            padding: 10px 20px;
            font-size: 14px;
          }
          
          .item-image {
            height: 150px;
          }
        }
        
        @media (max-width: 400px) {
          .item-image {
            height: 120px;
          }
          
          .current-price {
            font-size: 16px;
          }
          
          .old-price {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default Wishlist;