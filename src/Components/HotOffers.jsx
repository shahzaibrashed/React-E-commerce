import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddCart } from '../redux/cartSlice';
import { addWish, removeWish } from '../redux/wishSystem';
import { hotOffer } from '../Data'
import { Link } from 'react-router-dom';
import Testimonial from './Testimonial';
import { AddCompre } from '../redux/compareSlice';
import { Button, Modal } from 'react-bootstrap';
const HotOffers = () => {

  const dispatch = useDispatch()
  const wishlistItem = useSelector((state) => state.wishlist.wishlistItem);
  const [modalItem, setModalItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(wishlistItem, "hh");

  const AddToCart = (item) => {
    dispatch(AddCart({ ...item }));
  };

  const addFav = (item) => {
    dispatch(addWish(item));
  };

  const removeFav = (item) => {
    dispatch(removeWish(item))
  }

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

 

  return (
    <>

      <div className="product-featured">
        <h2 className="title">Hot Offers</h2>
        <div className="showcase-wrapper has-scrollbar">

          {
            hotOffer.map((item, index) => {
              return (
                <div key={index} className="showcase-container">
                  <div className="showcase">
                    <div className="showcase-banner">
                      <img
                        src={item.imgUrl}
                        alt="shampoo, conditioner & facewash packs"
                        className="showcase-img"
                      />
                    </div>
                    <div className="showcase-content">
                      <div className="showcase-rating">
                        {item.star}
                      </div>
                      <Link href="#">
                        <h3 className="showcase-title">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="showcase-desc">
                        {item.disc}
                      </p>
                      <div className="price-box">
                        <p className="price">${item.price}</p>
                        <del>${item.lastPrice}</del>
                      </div>
                      <div style={{ display: "flex", float: "right", gap: "10px", marginTop: "5px", alignItems: "center" }}>
                       
                        <button style={{ color: "pink" }}>
                          {wishlistItem.some((wishlistItem) => wishlistItem.id === item.id && wishlistItem.isFavourite) ? (
                            <ion-icon onClick={() => removeFav(item)} name="heart" />
                          ) : (
                            <ion-icon onClick={() => addFav(item)} name="heart-outline" />
                          )}
                        </button>
                        <button style={{ color: "pink" }} onClick={()=> addCompare(item)}><ion-icon name="repeat-outline" /></button>
                        <button style={{ color: "pink" }}  onClick={() => modalOpen(item)}><ion-icon name="eye-outline" /></button>
                      </div>
                      <button onClick={() => AddToCart(item)} className="add-cart-btn">Add to Cart</button>


                      <div className="showcase-status">
                        <div className="wrapper">
                          <p>
                            Already Sold: <b>{item.sold}</b>
                          </p>
                          <p>
                            Available: <b>{item.avai}</b>
                          </p>
                        </div>

                        <div className="showcase-status-bar" />
                      </div>

                      <div className="countdown-box">
                        <p className="countdown-desc">Hurry up! Offer ends in: </p>
                        <div className="countdown">
                          <div className="countdown-content">
                            <p className="display-number m-0">{item.day}</p>
                            <p className="display-text m-0">Days</p>
                          </div>
                          <div className="countdown-content">
                            <p className="display-number m-0 ">{item.hour}</p>
                            <p className="display-text m-0">Hours</p>
                          </div>
                          <div className="countdown-content">
                            <p className="display-number m-0">{item.min}</p>
                            <p className="display-text  m-0">Min</p>
                          </div>
                          <div className="countdown-content">
                            <p className="display-number m-0">{item.sec}</p>
                            <p className="display-text m-0">Sec</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Testimonial />
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
    </>
  )
}

export default HotOffers