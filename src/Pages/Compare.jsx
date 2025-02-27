import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { AddCart } from "../redux/cartSlice";
import { RemoveCompare } from "../redux/compareSlice";

const Table = () => {
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
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className="container" style={{ width: "100%", overflowX: "auto" }}>
        <header className="wishlist-header">
          <h1>Compare List</h1>
        </header>

        {isLoading ? (
          <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
            <table
              style={{ tableLayout: "fixed", minWidth: "800px" }}
              className="table border text-center"
            >
              <thead className="border">
                <tr>
                  <th
                    className="border"
                    style={{
                      position: "sticky",
                      left: -6,
                      background: "#fff",
                      color: "#343a40",
                      textAlign: "center",
                      padding: "10px",
                      width: "250px",
                    }}
                  >
                    Actions
                  </th>
                  {compare?.map((_, index) => (
                    <th key={index} className="border">
                      <div className="skeleton" style={{ height: "30px" }}></div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="border">
                {["Image", "Star", "Title", "Price", "Description", "Order"].map((label, i) => (
                  <tr key={i}>
                    <th
                      className="border"
                      style={{
                        position: "sticky",
                        left: -6,
                        background: "#fff",
                        color: "#343a40",
                        textAlign: "center",
                        padding: "10px",
                      }}
                    >
                      {label}
                    </th>
                    {compare?.map((_, index) => (
                      <td className="border" key={index}>
                        <div className="skeleton" style={{ height: "50px",}}></div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : compare.length === 0 ? (
          <div style={{ textAlign: "center", margin: "30px" }}>
            <p>Your compare list is empty!</p>
          </div>
        ) : (
          <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
            <table
              style={{ tableLayout: "fixed", minWidth: "800px" }}
              className="table border text-center"
            >
              <thead className="border">
                <tr>
                  <th
                    className="border"
                    style={{
                      position: "sticky",
                      left: -6,
                      background: "#fff",
                      color: "#343a40",
                      textAlign: "center",
                      padding: "10px",
                      width: "250px",
                    }}
                  >
                    Actions
                  </th>
                  {compare.map((item, index) => (
                    <th
                      onClick={() => removeCompare(item)}
                      className="border text-danger"
                      style={{ cursor: "pointer" }}
                      key={index}
                    >
                      Remove
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="border">
                <tr>
                  <th  style={{
                      position: "sticky",
                      left: -6,
                      background: "#fff",
                      color: "#343a40",
                      textAlign: "center",
                      padding: "10px",
                      width: "250px",
                    }} className="border">Image</th>
                  {compare.map((item, index) => (
                    <td className="border" key={index}>
                      <img
                        src={item.imgUrl}
                        alt={item.title}
                        className="zoom-image"
                        style={{
                          display: "block",
                          margin: "auto",
                          width: "100px",
                          height: "100px",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <th
                   style={{
                    position: "sticky",
                    left: -6,
                    background: "#fff",
                    color: "#343a40",
                    textAlign: "center",
                    padding: "10px",
                    width: "250px",
                  }}
                  className="border">Star</th>
                  {compare.map((item, index) => (
                    <td style={{ color: "orange" }} className="border" key={index}>
                      {item.star}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th
                   style={{
                    position: "sticky",
                    left: -6,
                    background: "#fff",
                    color: "#343a40",
                    textAlign: "center",
                    padding: "10px",
                    width: "250px",
                  }}
                  className="border">Title</th>
                  {compare.map((item, index) => (
                    <td className="border" key={index}>
                      {item.title}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th
                   style={{
                    position: "sticky",
                    left: -6,
                    background: "#fff",
                    color: "#343a40",
                    textAlign: "center",
                    padding: "10px",
                    width: "250px",
                  }}
                   className="border">Price</th>
                  {compare.map((item, index) => (
                    <td style={{ color: "var(--salmon-pink)" }} className="border" key={index}>
                      $ {item.price}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th
                   style={{
                    position: "sticky",
                    left: -6,
                    background: "#fff",
                    color: "#343a40",
                    textAlign: "center",
                    padding: "10px",
                    width: "250px",
                  }}
                  className="border">Description</th>
                  {compare.map((item, index) => (
                    <td className="border" key={index}>
                      {item.disc}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th
                   style={{
                    position: "sticky",
                    left: -6,
                    background: "#fff",
                    color: "#343a40",
                    textAlign: "center",
                    padding: "10px",
                    width: "250px",
                  }}
                  className="border">Order</th>
                  {compare.map((item, index) => (
                    <td className="border" key={index} style={{ textAlign: "center" }}>
                      <button
                        className="add-to-cart-button bg-danger"
                        style={{
                          padding: "8px 16px",
                          fontSize: "14px",
                          color: "#fff",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          margin: "auto",
                        }}
                        onClick={() => AddToCart(item)}
                      >
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
      <Footer />
      <style>{`
      a{
      text-decoration: none;
      }
        .skeleton {
          background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
          border-radius: 4px;
          height: 20px;
          width: 100%;
        }
        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .wishlist-header {
          text-align: center;
          margin-bottom: 20px;
        }
        th, td {
          max-width: 200px;
          overflow: hidden;
        }
        .zoom-image:hover {
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
};

export default Table;
