/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
const Category = () => {
  return (
    <>
    <div className="category">
  <div className="container">
    <div className="category-item-container has-scrollbar">
      <div className="category-item">
        <div className="category-img-box">
          <img
            src="https://i.postimg.cc/Xv9x15Q8/dress.png"
            alt="dress & frock"
            width={30}
          />
        </div>
        <div className="category-content-box">
          <div className="category-content-flex">
            <h3 className="category-item-title">Dress &amp; Frock</h3>
            <p className="category-item-amount">(53)</p>
          </div>
          <Link href="#" className="category-btn">
            Show All
          </Link>
        </div>
      </div>
      <div className="category-item">
        <div className="category-img-box">
          <img
            src="https://i.postimg.cc/bNKxXJGF/coat.png"
            alt="winter wear"
            width={30}
          />
        </div>
        <div className="category-content-box">
          <div className="category-content-flex">
            <h3 className="category-item-title">Winter Wear</h3>
            <p className="category-item-amount">(58)</p>
          </div>
          <Link href="#" className="category-btn">
            Show All
          </Link>
        </div>
      </div>
      <div className="category-item">
        <div className="category-img-box">
          <img
            src="https://i.postimg.cc/zBthxXZ7/glasses.png"
            alt="glasses & lens"
            width={30}
          />
        </div>
        <div className="category-content-box">
          <div className="category-content-flex">
            <h3 className="category-item-title">Glasses &amp; Lens</h3>
            <p className="category-item-amount">(68)</p>
          </div>
          <Link href="#" className="category-btn">
            Show All
          </Link>
        </div>
      </div>
      <div className="category-item">
        <div className="category-img-box">
          <img
            src="https://i.postimg.cc/g04L0kJp/shorts.png"
            alt="shorts & jeans"
            width={30}
          />
        </div>
        <div className="category-content-box">
          <div className="category-content-flex">
            <h3 className="category-item-title">Shorts &amp; Jeans</h3>
            <p className="category-item-amount">(84)</p>
          </div>
          <Link href="#" className="category-btn">
            Show All
          </Link>
        </div>
      </div>
      <div className="category-item">
        <div className="category-img-box">
          <img
            src="https://i.postimg.cc/yddg34gZ/tee.png"
            alt="t-shirts"
            width={30}
          />
        </div>
        <div className="category-content-box">
          <div className="category-content-flex">
            <h3 className="category-item-title">T-Shirts</h3>
            <p className="category-item-amount">(35)</p>
          </div>
          <Link href="#" className="category-btn">
            Show All
          </Link>
        </div>
      </div>
      <div className="category-item">
        <div className="category-img-box">
          <img
            src="https://i.postimg.cc/W49mH700/jacket.png"
            alt="jacket"
            width={30}
          />
        </div>
        <div className="category-content-box">
          <div className="category-content-flex">
            <h3 className="category-item-title">Jacket</h3>
            <p className="category-item-amount">(16)</p>
          </div>
          <Link href="#" className="category-btn">
            Show All
          </Link>
        </div>
      </div>
      <div className="category-item">
        <div className="category-img-box">
          <img
            src="https://i.postimg.cc/zBVwZRk6/watch.png"
            alt="watch"
            width={30}
          />
        </div>
        <div className="category-content-box">
          <div className="category-content-flex">
            <h3 className="category-item-title">Watch</h3>
            <p className="category-item-amount">(27)</p>
          </div>
          <Link href="#" className="category-btn">
            Show All
          </Link>
        </div>
      </div>
      <div className="category-item">
        <div className="category-img-box">
          <img
            src="https://i.postimg.cc/y8j0DTQ2/hat.png"
            alt="hats & caps"
            width={30}
          />
        </div>
        <div className="category-content-box">
          <div className="category-content-flex">
            <h3 className="category-item-title">Hats &amp; Caps</h3>
            <p className="category-item-amount">(39)</p>
          </div>
          <Link href="#" className="category-btn">
            Show All
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Category