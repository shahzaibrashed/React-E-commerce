import { useDispatch, useSelector } from 'react-redux';
import { AddCart } from '../../redux/cartSlice';
import { addWish, removeWish } from "../../redux/wishSystem";
import { Link } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { useState } from 'react';
import { AddCompre } from '../../redux/compareSlice';
import { Button, Modal } from 'react-bootstrap';

const SearchProduct = ({ searchProductData, SearchLabel }) => {
  const dispatch = useDispatch();
  const [modalItem, setModalItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const AddToCart = (item) => {
    const imgUrl = item.thumbnail;
    const disc = item.description;
    const star = "★ ★ ★ ★ ★";
    const updatedItem = { ...item, imgUrl, star, disc };
    dispatch(AddCart(updatedItem));

  };

  const addFav = (item) => {
    const imgUrl = item.thumbnail;
    const disc = item.description;
    const star = "★ ★ ★ ★ ★";
    const updatedItem = { ...item, imgUrl, star, disc };
    dispatch(addWish(updatedItem));

  };

  const removeFav = (item) => {
    const imgUrl = item.thumbnail;
    const disc = item.description;
    const star = "★ ★ ★ ★ ★";
    const updatedItem = { ...item, imgUrl, star, disc };
    dispatch(removeWish(updatedItem));

  };

  const addCompare = (item) => {
    const imgUrl = item.thumbnail;
    const disc = item.description;
    const star = "★ ★ ★ ★ ★";
    const updatedItem = { ...item, imgUrl, star, disc };
    dispatch(AddCompre(updatedItem))
  }

  const wishlistItem = useSelector((state) => state.wishlist.wishlistItem);

  const modalOpen = (item) => {
    const imgUrl = item.thumbnail;
    const disc = item.description;
    const star = "★ ★ ★ ★ ★";
    const updatedItem = { ...item, imgUrl, star, disc };
    setModalItem(updatedItem);
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

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
                      <button onClick={() => modalOpen(item)} className="btn-action">
                        <ion-icon name="eye-outline" />
                      </button>
                      <button onClick={() => addCompare(item)} className="btn-action">
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
      {/* Bootstrap Modal */}
      <Modal
        show={isModalOpen}
        onHide={modalClose}
        size="lg"
        centered
        animation={false}
        backdrop="static"
        keyboard={false}
        className="modal-custom"
      >
        <Modal.Body>
          <div className="d-flex flex-column flex-md-row">


            <div className="modal-image-container m-auto w-50">
              <img src={modalItem?.imgUrl} alt="product" className="img-fluid rounded mb-3 mb-md-0" />
            </div>


            <div className="modal-details-container p-4">


              <button type="button" className="btn-close outline-none border-none position-absolute top-0 end-0 m-3" onClick={modalClose}></button>

              <div className="d-flex justify-content-between align-items-center">
                <h5 className="modal-title">{modalItem?.title}</h5>
              </div>
              <p className="text-muted mt-2">{modalItem?.disc}</p>
              <p className="text-warning mt-2">{modalItem?.star}</p>

              <div className="d-flex gap-2 mt-3">
                <div>
                  <p className="price">${modalItem?.price}</p>
                </div>
                <div>
                  <del>${modalItem?.lastPrice}</del>
                </div>
              </div>

              <div className="d-flex justify-content-end gap-2 mt-4">
                <Button onClick={() => AddToCart(modalItem)} variant="dark">
                  Add to Cart
                </Button>
                <Button onClick={() => addFav(modalItem)} variant="secondary">
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>

  );
};

export default SearchProduct;
