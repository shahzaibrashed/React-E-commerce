import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { AddCart } from "../redux/cartSlice";
import { RemoveCompare } from "../redux/compareSlice";
import { FaTrash, FaShoppingCart, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const CompareTable = () => {
  const dispatch = useDispatch();
  const { compare } = useSelector((state) => state.compareItem);
  const [isLoading, setIsLoading] = useState(true);

  const removeCompare = (item) => {
    dispatch(RemoveCompare(item));
  };

  const AddToCart = (item) => {
    dispatch(AddCart({ ...item }));
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
      <div className="compare-page">
        <div className="compare-container">
          <header className="compare-header">
            <h2 className="compare-title">
              Compare Products
              <span className="compare-count">{compare.length}</span>
            </h2>
          </header>

          {isLoading ? (
            <div className="compare-skeleton">
              <table>
                <thead>
                  <tr>
                    <th className="sticky-col">Actions</th>
                    {Array(3).fill().map((_, index) => (
                      <th key={index}>
                        <div className="skeleton skeleton-header"></div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {["Image", "Rating", "Title", "Price", "Description", "Order"].map((label, i) => (
                    <tr key={i}>
                      <th className="sticky-col">{label}</th>
                      {Array(3).fill().map((_, index) => (
                        <td key={index}>
                          <div className="skeleton skeleton-cell"></div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : compare.length === 0 ? (
            <div className="empty-compare">
              <div className="empty-icon">
                <IoClose size={48} />
              </div>
              <h3>Your compare list is empty</h3>
              <p>You haven't added any products to compare</p>
              <a href="/shop" className="shop-btn">
                Browse Products
              </a>
            </div>
          ) : (
            <div className="compare-table-container">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th className="sticky-col">Actions</th>
                    {compare.map((item, index) => (
                      <th key={index}>
                        <button 
                          onClick={() => removeCompare(item)} 
                          className="remove-btn"
                          aria-label="Remove product"
                        >
                          <FaTrash className="trash-icon" />
                          Remove
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="sticky-col">Image</th>
                    {compare.map((item, index) => (
                      <td key={index}>
                        <div className="product-image">
                          <img
                            src={item.imgUrl}
                            alt={item.title}
                            className="zoom-image"
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="sticky-col">Rating</th>
                    {compare.map((item, index) => (
                      <td key={index}>
                        <div className="product-rating">
                          {Array(5).fill().map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={i < item.star ? "star filled" : "star"} 
                            />
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="sticky-col">Title</th>
                    {compare.map((item, index) => (
                      <td key={index}>
                        <h4 className="product-title">{item.title}</h4>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="sticky-col">Price</th>
                    {compare.map((item, index) => (
                      <td key={index}>
                        <div className="product-price">
                          <span className="current-price">${item.price}</span>
                          {item.lastPrice && (
                            <span className="old-price">${item.lastPrice}</span>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="sticky-col">Description</th>
                    {compare.map((item, index) => (
                      <td key={index}>
                        <p className="product-description">{item.disc}</p>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="sticky-col">Order</th>
                    {compare.map((item, index) => (
                      <td key={index}>
                        <button
                          className="add-to-cart-btn"
                          onClick={() => AddToCart(item)}
                        >
                          <FaShoppingCart className="cart-icon" />
                          Add to Cart
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .compare-page {
          background-color: #f9f9f9;
          min-height: calc(100vh - 120px);
          padding: 40px 0;
        }
        
        .compare-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .compare-header {
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        
        .compare-title {
          display: flex;
          align-items: center;
          font-size: 24px;
          color: #333;
          margin: 0;
        }
        
        .compare-count {
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
        
        .compare-table-container {
          width: 100%;
          overflow-x: auto;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          padding: 20px;
        }
        
        .compare-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 800px;
        }
        
        .compare-table th, 
        .compare-table td {
          padding: 15px;
          text-align: center;
          border-bottom: 1px solid #eee;
        }
        
        .compare-table th {
          font-weight: 600;
          color: #555;
          background-color: #fafafa;
        }
        
        .sticky-col {
          position: sticky;
          left: 0;
          background-color: white;
          z-index: 1;
          font-weight: 600;
          color: #555;
        }
        
        .remove-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: none;
          border: none;
          color: #ff6b6b;
          font-size: 14px;
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 4px;
          transition: all 0.3s ease;
          margin: 0 auto;
        }
        
        .remove-btn:hover {
          background-color: rgba(255, 107, 107, 0.1);
        }
        
        .trash-icon {
          font-size: 14px;
        }
        
        .product-image {
          width: 120px;
          height: 120px;
          margin: 0 auto;
          overflow: hidden;
        }
        
        .zoom-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        
        .zoom-image:hover {
          transform: scale(1.1);
        }
        
        .product-rating {
          display: flex;
          justify-content: center;
          gap: 4px;
        }
        
        .star {
                   color: #ffb800;

          font-size: 16px;
        }
        
        .star.filled {
          color: #ffb800;
        }
          a {
  text-decoration: none;
}

        .product-title {
          font-size: 16px;
          color: #333;
          margin: 0;
          font-weight: 600;
        }
        
        .product-price {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
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
        
        .product-description {
          color: #666;
          font-size: 14px;
          margin: 0;
          text-align: center;
        }
        
        .add-to-cart-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: var(--salmon-pink);
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 auto;
        }
        
        .add-to-cart-btn:hover {
          background-color: #ff6b6b;
          transform: translateY(-2px);
        }
        
        .cart-icon {
          font-size: 14px;
        }
        
        /* Empty State */
        .empty-compare {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .empty-icon {
          color: #ddd;
          margin-bottom: 20px;
        }
        
        .empty-compare h3 {
          color: #333;
          margin-bottom: 10px;
        }
        
        .empty-compare p {
          color: #777;
          margin-bottom: 25px;
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
        }
        
        .shop-btn:hover {
          background-color: #ff6b6b;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 119, 119, 0.2);
        }
        
        /* Skeleton Loading */
        .compare-skeleton {
          width: 100%;
          overflow-x: auto;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          padding: 20px;
        }
        
        .compare-skeleton table {
          width: 100%;
          border-collapse: collapse;
          min-width: 800px;
        }
        
        .compare-skeleton th, 
        .compare-skeleton td {
          padding: 15px;
          text-align: center;
          border-bottom: 1px solid #eee;
        }
        
        .skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
          border-radius: 4px;
          margin: 0 auto;
        }
        
        .skeleton-header {
          height: 20px;
          width: 80px;
        }
        
        .skeleton-cell {
          height: 40px;
          width: 80%;
        }
        
        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .compare-table th, 
          .compare-table td {
            padding: 12px 8px;
          }
          
          .product-image {
            width: 80px;
            height: 80px;
          }
          
          .product-title {
            font-size: 14px;
          }
          
          .current-price {
            font-size: 16px;
          }
          
          .add-to-cart-btn {
            padding: 8px 12px;
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default CompareTable;