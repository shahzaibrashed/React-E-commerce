/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddCart } from '../../redux/cartSlice';
import { newArrival } from '../../Data'
import { trending } from '../../Data'
import { addWish, removeWish } from "../../redux/wishSystem";
import { Link } from 'react-router-dom';
import { AddCompre } from '../../redux/compareSlice';
import { Button, Modal } from 'react-bootstrap';
const Trending = () => {
  const dispatch = useDispatch()
    const [modalItem, setModalItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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


  const wishlistItem = useSelector((state) => state.wishlist.wishlistItem);
  // console.log(wishlistItem, "hh");

  const modalOpen = (item) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (

    <>
      <div className="product-showcase">
        <h2 className="title">Trending</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">{
            trending.map((item, index) => {
              return (
                <div key={index} className="showcase">
                  <Link href="#" className="showcase-img-box">
                    <img
                      src={item.imgUrl}
                      alt="relaxed short full sleeve t-shirt"
                      className="showcase-img"
                      width={70}
                    />
                  </Link>
                  <div className="showcase-content">
                    <Link href="#">
                      <h4 className="showcase-title">
                        {item.disc}
                      </h4>
                    </Link>
                    <Link href="#" className="showcase-category">
                      {item.title}
                    </Link>
                    <div className="price-box">
                      <p className="price"> ${item.price}</p>
                      <del> ${item.lastPrice}</del>
                    </div>
                    <div style={{ display: "flex", float: "right", gap: "10px", marginTop: "5px", alignItems: "center" }}>
                      <button onClick={() => AddToCart(item)} style={{ color: "pink" }}><ion-icon name="bag-add-outline" /></button>
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
                  </div>
                </div>
              )
            })
          }
          </div>
          <div className="showcase-container">{
            newArrival.map((item, index) => {
              return (
                <div key={index} className="showcase">
                  <Link href="#" className="showcase-img-box">
                    <img
                      src={item.imgUrl}
                      alt="relaxed short full sleeve t-shirt"
                      className="showcase-img"
                      width={70}
                    />
                  </Link>
                  <div className="showcase-content">
                    <Link href="#">
                      <h4 className="showcase-title">
                        {item.disc}
                      </h4>
                    </Link>
                    <Link href="#" className="showcase-category">
                      {item.title}
                    </Link>
                    <div className="price-box">
                      <p className="price">{item.price}</p>
                      <del>{item.lastPrice}</del>
                    </div>
                    <div style={{ display: "flex", float: "right", gap: "10px", marginTop: "5px", alignItems: "center" }}>
                      <button onClick={() => AddToCart(item)} style={{ color: "pink" }}><ion-icon name="bag-add-outline" /></button>
                      <button style={{ color: "pink" }}>
                        {wishlistItem.some((wishlistItem) => wishlistItem.id === item.id && wishlistItem.isFavourite) ? (
                          <ion-icon onClick={() => removeFav(item)} name="heart" />
                        ) : (
                          <ion-icon onClick={() => addFav(item)} name="heart-outline" />
                        )}
                      </button>
                      <button style={{ color: "pink" }}onClick={()=> addCompare(item)} ><ion-icon name="repeat-outline" /></button>
                      <button style={{ color: "pink" }} onClick={() => modalOpen(item)}><ion-icon name="eye-outline" /></button>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
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
    </>
  )
}

export default Trending