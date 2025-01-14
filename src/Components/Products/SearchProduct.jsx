import { useDispatch, useSelector } from 'react-redux';
import { AddCart } from '../../redux/cartSlice';
import { addWish, removeWish } from "../../redux/wishSystem";
import { Link } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners'; 
import { useState } from 'react';

const SearchProduct = ({ searchProductData, SearchLabel }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const AddToCart = (item) => {
    setLoading(true);
    const imgUrl = item.thumbnail;
    const disc = item.description;
    const star = "★ ★ ★ ★ ★";
    const updatedItem = { ...item, imgUrl, star, disc };
    dispatch(AddCart(updatedItem));
    setLoading(false);
  };

  const addFav = (item) => {
    setLoading(true);
    const imgUrl = item.thumbnail;
    const disc = item.description;
    const star = "★ ★ ★ ★ ★";
    const updatedItem = { ...item, imgUrl, star, disc };
    dispatch(addWish(updatedItem));
    setLoading(false);
  };

  const removeFav = (item) => {
    setLoading(true);
    const imgUrl = item.thumbnail;
    const disc = item.description;
    const star = "★ ★ ★ ★ ★";
    const updatedItem = { ...item, imgUrl, star, disc };
    dispatch(removeWish(updatedItem));
    setLoading(false);
  };

  const wishlistItem = useSelector((state) => state.wishlist.wishlistItem);

  return (
    <div className="product-main">
      <h2 className="title">{SearchLabel}</h2>
      
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <ScaleLoader color="var(--salmon-pink)" height={90} radius={8} width={6} />
        </div>
      ) : (
        <>
          {searchProductData?.length === 0 ? (
            <p className="not-found">Product Not Found</p>
          ) : (
            <div className="product-grid">
              {searchProductData?.map((item, index) => (
                <div className="showcase" key={index}>
                  <div className="showcase-banner">
                    <div className='img-mm'>
                      {item.availabilityStatus === "In Stock" ? 
                        <div className="sale-badge">Stock</div> :
                        <div className="sale-badge">Low</div>
                      }
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="product-img"
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
                    <Link>
                      <h3 className="showcase-title">
                        {item.description.split(" ").slice(0, 6).join(" ")}...
                      </h3>
                    </Link>
                    <div className="showcase-rating">★ ★ ★ ★ ★</div>
                    <div className="price-box">
                      <p className="price"> ${item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchProduct;
