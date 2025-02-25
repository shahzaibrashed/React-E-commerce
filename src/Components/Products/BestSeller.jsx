/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCart } from '../../redux/cartSlice';
import { addWish, removeWish } from "../../redux/wishSystem";
import { Link } from 'react-router-dom';
import { AddCompre } from '../../redux/compareSlice';
import { Button, Modal, Placeholder } from 'react-bootstrap';

const BestSeller = ({ bestProduct, label }) => {
  const dispatch = useDispatch();
  const [modalItem, setModalItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); 
  const wishlistItem = useSelector((state) => state.wishlist.wishlistItem);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  const AddToCart = (item) => {
    dispatch(AddCart({ ...item }));
  };

  const addFav = (item) => {
    dispatch(addWish(item));
  };

  const removeFav = (item) => {
    dispatch(removeWish(item));
  };

  const addCompare = (item) => {
    dispatch(AddCompre(item));
  };

  const modalOpen = (item) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="product-showcase" style={{ borderRadius: "5px", padding: "3px" }}>
        <h3 className="showcase-heading">{label}</h3>
        <div className="showcase-wrapper">
          <div className="showcase-container">
            {loading ? (
              // Skeleton Loader
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index}  className="showcase border p-1 rounded">
                  <Placeholder as="div" animation="glow" className="showcase-img-box">
                    <Placeholder style={{ width: "75px", height: "75px", borderRadius: "5px", backgroundColor: "#e0e0e0" }} />
                  </Placeholder>
                  <div className="showcase-content">
                    <Placeholder  as="h4" animation="glow">
                      <Placeholder style={{ backgroundColor: "#e0e0e0"}} className="rounded" xs={6} />
                    </Placeholder>
                    <Placeholder as="div" animation="glow">
                      <Placeholder style={{ backgroundColor: "#e0e0e0"}} className="rounded" xs={5} />
                    </Placeholder>
                    <Placeholder as="div" animation="glow">
                      <Placeholder style={{ backgroundColor: "#e0e0e0",marginRight:"10px"}} className="rounded" xs={4} />
                      <Placeholder style={{ backgroundColor: "#e0e0e0"}} className="rounded" xs={5} />
                    </Placeholder>
                    <div className="d-flex gap-2 mt-2">
                      {Array(4)
                        .fill(0)
                        .map((_, i) => (
                          <Placeholder
                            key={i}
                            as="div"
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "5px",
                              backgroundColor: "#e0e0e0",
                            }}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Actual Data
              bestProduct?.map((item, index) => {
                return (
                  <div key={index} className="showcase">
                    <Link to="#" className="showcase-img-box">
                      <img
                        src={item.imgUrl}
                        alt={item.title}
                        className="showcase-img"
                        width={75}
                        height={75}
                      />
                    </Link>
                    <div className="showcase-content">
                      <Link to="#">
                        <h4 className="showcase-title">{item.title}</h4>
                      </Link>
                      <div className="showcase-rating">{item.star}</div>
                      <div className="price-box">
                        <del style={{ margin: "0%", padding: "0%" }}>${item.lastPrice}</del>
                        <p className="price"> ${item.price}</p>
                      </div>
                      <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
                        <button onClick={() => AddToCart(item)} style={{ color: "pink" }}>
                          <ion-icon name="bag-add-outline" />
                        </button>
                        <button style={{ color: "pink" }}>
                          {wishlistItem.some((wishlistItem) => wishlistItem.id === item.id && wishlistItem.isFavourite) ? (
                            <ion-icon onClick={() => removeFav(item)} name="heart" />
                          ) : (
                            <ion-icon onClick={() => addFav(item)} name="heart-outline" />
                          )}
                        </button>
                        <button onClick={() => addCompare(item)} style={{ color: "pink" }}>
                          <ion-icon name="repeat" />
                        </button>
                        <button onClick={() => modalOpen(item)} style={{ color: "pink" }}>
                          <ion-icon name="eye-outline" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
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
    </>
  );
};

export default BestSeller;
