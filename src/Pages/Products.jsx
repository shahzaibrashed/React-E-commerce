import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { AddCart } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addWish, removeWish } from '../redux/wishSystem';

const products = [
  {
    id:"666",
    star: "★ ★ ★ ★ ★",
    category: 'Fashion',
    title: 'Stylish Jacket',
    disc: 'Stay trendy with this comfortable and stylish jacket.',
    imgUrl: 'https://static.vecteezy.com/system/resources/thumbnails/054/771/069/small/men-s-winter-jacket-on-a-beige-background-3d-rendering-photo.jpeg',
    price: 49.99,
  },
  {
    id:"667",
    star: "★ ★ ★ ★",
    category: 'Electronic',
    title: 'Wireless Earbuds',
    disc: 'Experience true wireless sound with long battery life.',
    imgUrl: 'https://static.vecteezy.com/system/resources/thumbnails/051/199/497/small/protective-headphone-case-mockup-open-desk-perfect-for-tech-accessory-and-gadget-storage-display-photo.jpg',
    price: 89.99,
  },
  {
    id:"686",
    star: "★ ★ ★ ★ ★",
    category: 'Cosmetic',
    title: 'Matte Lipstick',
    disc: 'Long-lasting matte finish is that for a bold look.',
    imgUrl: 'https://static.vecteezy.com/system/resources/thumbnails/037/386/167/small/red-lipstick-with-water-drops-on-a-dark-background-photo.jpg',
    price: 19.99,
  },
  {
    id:"669",
    star: "★ ★ ★",
    category: 'Health',
    title: 'Fitness Tracker',
    disc: 'Track your steps, heart rate, and sleep patterns.',
    imgUrl: 'https://static.vecteezy.com/system/resources/thumbnails/024/351/404/small/fitness-tracker-on-a-wooden-table-next-to-a-notebook-photo.jpg',
    price: 59.99,
  },
  {
    id:"670",
    star: "★ ★ ★ ★ ★",
    category: 'Watches',
    title: 'Smartwatch',
    disc: 'Stylish smartwatch with multiple health-tracking features.',
    imgUrl: 'https://static.vecteezy.com/system/resources/thumbnails/036/782/085/small/ai-generated-innovative-smart-watch-mockup-for-tech-marketing-ai-generated-photo.jpg',
    price: 129.99,
  },
];

const Products = () => {
  const dispatch = useDispatch();
  const wishlistItem = useSelector((state) => state.wishlist.wishlistItem) || [];

  const AddToCart = (item) => {
    dispatch(AddCart(item));
  };

  const addFav = (item) => {
    dispatch(addWish(item));
  };

  const removeFav = (item) => {
    dispatch(removeWish(item));
  };

  return (
    <>
      <Header />
      <Container className="my-5">
        <h1 className="text-center mb-4">Our Featured Products</h1>
        <Row className="g-4 d-flex justify-content-center">
          {products.map((item, index) => (
            <Col key={index} md={6} lg={4} className="d-flex justify-content-center">
              <Card className="h-100 shadow-sm" style={{ width: '100%', maxWidth: '520px' }}>
                <Card.Img
                  variant="top"
                  src={item.imgUrl}
                  alt={item.title}
                  style={{ height: '200px', objectFit: 'cover', borderBottom: '1px solid #ddd' }}
                />
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
                  <p style={{ color: 'orange' }}>{item.star}</p>
                  <Card.Title className="mb-2">{item.title}</Card.Title>
                  <Card.Text>{item.disc}</Card.Text>
                  <h5 className="text-success">$ {item.price}</h5>
                  <div className="d-flex justify-content-between mt-3">
                    <Button onClick={() => AddToCart(item)} variant="outline-primary" className="me-2" style={{ flex: 1 }}>
                      Add to Cart
                    </Button>
                    {wishlistItem.some((wishlist) => wishlist.title === item.title) ? (
                      <Button onClick={() => removeFav(item)} variant="outline-danger" style={{ flex: 1 }}>
                        Remove Wishlist
                      </Button>
                    ) : (
                      <Button onClick={() => addFav(item)} variant="outline-secondary" style={{ flex: 1 }}>
                        Add to Wishlist
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
      <style>{`
        a {
          text-decoration: none;
        }
        h1 {
          font-weight: 700;
        }
      `}</style>
    </>
  );
};

export default Products;
