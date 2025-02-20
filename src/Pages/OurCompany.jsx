import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";

const OurCompany = () => {
  return (
    <>
      <Header />

      <div className="container py-5">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6 d-flex flex-column ">
            <h6 style={{ color: "var(--salmon-pink)" }} className=" font-bold">Why Shop With Us?</h6>
            <h2 className="fw-bold">Your Ultimate Shopping Destination</h2>
            <p className="text-muted">
              Welcome to Aanon, your go-to shopping platform for the best deals and quality products.
              Our mission is to provide a seamless and enjoyable shopping experience, offering a wide range
              of products at unbeatable prices. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, hic alias, impedit provident modi cupiditate magni suscipit ut assumenda maiores eveniet veritatis incidunt, dolorem excepturi sunt quas tempore omnis quaerat!
              Incidunt, quo amet. Incidunt, velit, cupiditate doloremque modi recusandae et alias fuga sint quam dolore veniam soluta asperiores dolorum omnis quibusdam totam architecto ullam obcaecati nobis, perferendis placeat earum magnam  Our mission is to provide a seamless and enjoyable shopping experience.
            </p>
          </div>

          {/* Right Section */}
          <div className="col-md-6 text-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/011/307/157/small_2x/happy-young-couple-in-shopping-photo.jpg"
              alt="Shopping experience"
              className="img-fluid rounded shadow"
            />

            {/* Stats Section */}
            <div className="row mt-4 gap-2 d-flex justify-content-center container  ">
              <div style={{ background: "lightgray" }} className="col-6 col-md-5 mt-3  text-center py-2 rounded">
                <h4 className="fw-bold">500K+</h4>
                <p className="text-muted">Happy Customers</p>
              </div>

              <div style={{ background: "lightgray" }}  className="col-6 ml-5 col-md-5 mt-3  rounded text-center py-2">
                <h4 className="fw-bold">1M+</h4>
                <p className="text-muted">Products Sold</p>
              </div>
              <div style={{ background: "lightgray" }}  className="col-6 col-md-5 mt-3  rounded text-center py-2">
                <h4 className="fw-bold">24/7</h4>
                <p className="text-muted">Customer Support</p>
              </div>
              <div style={{ background: "lightgray" }}  className="col-6 col-md-5 mt-3  rounded text-center py-2">
                <h4 className="fw-bold">99%</h4>
                <p className="text-muted">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <style>{`
        a {
          text-decoration: none;
        }
        ul {
          padding-left: 1.5rem;
        }
        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  );
};

export default OurCompany;
