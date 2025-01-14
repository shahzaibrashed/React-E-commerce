import React from 'react'
import { Link } from 'react-router-dom'

const OfferBanner = () => {
  return (
    <> 
    <div className="shoping-section  text-center">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="shoping-inner">
          <div className="pattren-leyer">
            <img
              className="pattren-1"
              src="http://azim.commonsupport.com/Castro/assets/images/shape/shape-2.png"
              alt=""
            />
            <img
              className="pattren-2"
              src="http://azim.commonsupport.com/Castro/assets/images/shape/shape-3.png"
              alt=""
            />
          </div>
          <h2>End of Season Clearance Sale upto 50%</h2>
          <p>
            Welcome to the new range of shaving products from Anon. We
            have over three decades of experience in the male grooming industry
          </p>
          <div className="default-btn2">
            <Link className="button" to={"/"}>
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
export default OfferBanner