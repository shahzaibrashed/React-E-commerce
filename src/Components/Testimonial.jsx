/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
const Testimonial = () => {
  return (
   <>
   <div>
  <div className="container">
    <div className="testimonials-box">
      <div className="testimonial">
        <h2 className="title">Testimonial</h2>
        <div className="testimonial-card">
          <img
            src="https://i.postimg.cc/g27jxrvV/testimonial-1.jpg"
            alt="alan doe"
            className="testimonial-banner"
            width={80}
            height={80}
          />
          <p className="testimonial-name">Alan Doe</p>
          <p className="testimonial-title">CEO &amp; Founder Invision</p>
          <img
            src="https://i.postimg.cc/QCSxhM8W/quotes.png"
            alt="quotation"
            className="quotation-img"
            width={26}
          />
          <p className="testimonial-desc">
            We put our trust in Anon and they delivered, making sure our needs
            were met
          </p>
        </div>
      </div>
      <div className="cta-container">
        <img
          src="https://i.postimg.cc/43Jskdjc/blog-4.jpg"
          alt="summer collection"
          className="cta-banner"
        />
        <Link href="#" className="cta-content">
          <p className="discount">25% Discount</p>
          <h2 className="cta-title">Summer Collection</h2>
          <p className="cta-text">Starting @ $10</p>
          <button className="cta-btn">Shop Now</button>
        </Link>
      </div>
      <div className="service">
        <h2 className="title">Our Services</h2>
        <div className="service-container">
          <Link href="#" className="service-item">
            <div className="service-icon">
              <ion-icon name="boat-outline" />
            </div>
            <div className="service-content">
              <h3 className="service-title">Worldwide Delivery</h3>
              <p className="service-desc">For Order Over $100</p>
            </div>
          </Link>
          <Link href="#" className="service-item">
            <div className="service-icon">
              <ion-icon name="rocket-outline" />
            </div>
            <div className="service-content">
              <h3 className="service-title">Next Day Delivery</h3>
              <p className="service-desc">UK Orders Only</p>
            </div>
          </Link>
          <Link href="#" className="service-item">
            <div className="service-icon">
              <ion-icon name="call-outline" />
            </div>
            <div className="service-content">
              <h3 className="service-title">Best Online Support</h3>
              <p className="service-desc">Hours: 8AM - 11PM</p>
            </div>
          </Link>
          <Link href="#" className="service-item">
            <div className="service-icon">
              <ion-icon name="arrow-undo-outline" />
            </div>
            <div className="service-content">
              <h3 className="service-title">Return Policy</h3>
              <p className="service-desc">Easy &amp; Free Return</p>
            </div>
          </Link>
          <Link href="#" className="service-item">
            <div className="service-icon">
              <ion-icon name="ticket-outline" />
            </div>
            <div className="service-content">
              <h3 className="service-title">30% Money Back</h3>
              <p className="service-desc">For Order Over $100</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Testimonial