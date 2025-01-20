import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCart } from '../../redux/cartSlice';
import { addWish, removeWish } from "../../redux/wishSystem";
import { Link } from 'react-router-dom';
import { AddCompre } from '../../redux/compareSlice';
import { Button, Modal } from 'react-bootstrap';

const NewProduct = ({ productData, label }) => {

  const [hover, setHover] = useState('')
  const [modalItem, setModalItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const addCompare = (item)=>{
    dispatch(AddCompre(item))
  }

  const modalOpen = (item) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  const wishlistItem = useSelector((state) => state.wishlist.wishlistItem);

  return (
    <div className="product-main">
      <h2 className="title">{label}</h2>
      <div className="product-grid">
        {productData?.map((item, index) => (
          <div className="showcase" key={index}>
            <div className="showcase-banner">
              <div className='img-mm'>
              {item.isOnSale && (
            <div className="sale-badge">Sale</div>
              )}
                <img
                  onMouseOver={() => setHover(index)}
                  onMouseLeave={() => setHover('')}
                  src={hover === index ? item.imgUrlH : item.imgUrl}
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
                <button  onClick={() => modalOpen(item)} className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button  className="btn-action">
                  <ion-icon onClick={()=> addCompare(item)} name="repeat-outline" />
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
                <p className="price"> ${item.price}</p>
                <del> ${item.lastPrice}</del>
              </div>
            </div>
          </div>
        ))}
      </div>
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

      {/* Left Side - Image */}
      <div className="modal-image-container m-auto w-50">
        <img src={modalItem?.imgUrl} alt="product" className="img-fluid rounded mb-3 mb-md-0" />
      </div>

      {/* Right Side - Details & Buttons */}
      <div className="modal-details-container p-4">

        {/* Close Button Position */}
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

export default NewProduct;
