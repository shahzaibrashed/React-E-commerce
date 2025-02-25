import { useDispatch, useSelector } from 'react-redux';
import { AddCart } from '../../redux/cartSlice';
import { addWish, removeWish } from "../../redux/wishSystem";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AddCompre } from '../../redux/compareSlice';
import { Button, Card, Modal, Placeholder } from 'react-bootstrap';

const SearchProduct = ({ searchProductData, SearchLabel }) => {
  const dispatch = useDispatch();
  const [modalItem, setModalItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      return () => clearTimeout(timer);
    }, []);
  return (
    <div className="product-main">
   
 <>
          {searchProductData?.length === 0 ? (
            <img src="https://codesground.com/public/frontend/image/product_not_found2.png" height="70%" width="60%" className='m-auto' alt="" />
          ) : (
            <div className="product-grid">
              {
              isLoading ?
              Array.from({ length: searchProductData?.length || 4 }).map((_, index) => (
                <Card
                  key={index}
                  style={{
                    width: "13rem",
                    padding: "10px",
                    borderRadius: "10px",
                    flex: "1 1 calc(25% - 16px)",
                    minWidth: "200px",
                  }}
                >
                  <Placeholder as={Card.Img} variant="top" style={{ height: "250px", backgroundColor: "#e0e0e0" }} />
                  <Card.Body>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={4} />
                    </Placeholder>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={4} />
                    </Placeholder>
                  </Card.Body>
                </Card>
               
              ))
              : searchProductData?.map((item, index) => (
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
