import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Category = () => {
  const location = useLocation();
  return (
    <>
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>
        </div>
        <ul className="sidebar-menu-category-list">
          <Link to={"/men"}>
            <li className="sidebar-menu-category ">
              <button className="sidebar-accordion-menu" data-accordion-btn="">
                <div className="menu-title-flex  ">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/024/183/525/small/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg"
                    alt="clothes"
                    className="menu-title-img"
                    width={40}
                    height={40}
                  />
                  <p style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    color: location.pathname === "/men" ? "var(--salmon-pink)" : "",
                  }} className="menu-title">Men's </p>
                </div>
                <div>
                  <ion-icon
                    name="arrow-forward"
                    className="add-icon"
                    style={{
                      textAlign: 'center',
                      marginTop: '10px',
                      color: location.pathname === "/men" ? "var(--salmon-pink)" : "",
                    }}
                  ></ion-icon>
                </div>
              </button>
            </li>
          </Link>

          <Link to={"/women"}>
            <li className="sidebar-menu-category">
              <button className="sidebar-accordion-menu" data-accordion-btn="">
                <div className="menu-title-flex">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg"
                    alt="footwear"
                    className="menu-title-img"
                    width={40}
                    height={40}
                  />
                  <p style={{
                    textAlign: 'center',
                    marginTop: '10px',
                    color: location.pathname === "/women" ? "var(--salmon-pink)" : "",
                  }} className="menu-title">Women's</p>
                </div>
                <div>
                  <ion-icon name="arrow-forward" className="add-icon" style={{
                    color: location.pathname === "/women" ? "var(--salmon-pink)" : "",
                  }}></ion-icon>
                </div>
              </button>
            </li>
          </Link>

          <Link to={"/jewelyr"}>
            <li className="sidebar-menu-category">
              <button className="sidebar-accordion-menu" data-accordion-btn="">
                <div className="menu-title-flex">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFM4U5YjtUnOL14n5J0-y6jDQSJkUkEUFRA&s"
                    alt="jewelyr"
                    className="menu-title-img"
                    width={40}
                    height={40}
                  />
                  <p style={{
                    textAlign: 'center',
                    marginTop: '10px',
                    color: location.pathname === "/jewelyr" ? "var(--salmon-pink)" : "",
                  }} className="menu-title">Jewelyr</p>
                </div>
                <div>
                  <ion-icon name="arrow-forward" style={{
                    color: location.pathname === "/jewelyr" ? "var(--salmon-pink)" : "",
                  }} className="add-icon"></ion-icon>
                </div>
              </button>
            </li>
          </Link>

          <Link to={"/perfume"}>
            <li className="sidebar-menu-category">
              <button className="sidebar-accordion-menu" data-accordion-btn="">
                <div className="menu-title-flex">
                  <img
                    src="https://i.postimg.cc/6q67R8Hz/perfume.png"
                    alt="perfume"
                    className="menu-title-img"
                    width={40}
                    height={40}
                  />
                  <p style={{
                    textAlign: 'center',
                    marginTop: '10px',
                    color: location.pathname === "/perfume" ? "var(--salmon-pink)" : "",
                  }} className="menu-title">Perfume</p>
                </div>
                <div>
                  <ion-icon name="arrow-forward" style={{
                    color: location.pathname === "/perfume" ? "var(--salmon-pink)" : "",
                  }} className="add-icon"></ion-icon>
                </div>
              </button>
            </li>
          </Link>

          <Link to={"/blog"}>
            <li className="sidebar-menu-category">
              <button className="sidebar-accordion-menu" data-accordion-btn="">
                <div className="menu-title-flex">
                  <img
                    src="https://png.pngtree.com/png-vector/20230304/ourmid/pngtree-colorful-blog-speech-bubble-vector-png-image_6633021.png"
                    alt="cosmetics"
                    className="menu-title-img"
                    width={40}
                    height={40}
                  />
                  <p style={{
                    textAlign: 'center',
                    marginTop: '10px',
                    color: location.pathname === "/blog" ? "var(--salmon-pink)" : "",
                  }} className="menu-title">Blogs</p>
                </div>
                <div>
                  <ion-icon name="arrow-forward" style={{
                    color: location.pathname === "/blog" ? "var(--salmon-pink)" : "",
                  }} className="add-icon"></ion-icon>
                </div>
              </button>
            </li>
          </Link>

          <Link to={"/hot-offer"}>
            <li className="sidebar-menu-category">
              <button className="sidebar-accordion-menu" data-accordion-btn="">
                <div className="menu-title-flex">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/026/232/360/non_2x/hot-offer-fire-icon-label-isolated-on-white-background-illustration-vector.jpg"
                    alt="glasses"
                    className="menu-title-img"
                    width={40}
                    height={40}
                  />
                  <p style={{
                    textAlign: 'center',
                    marginTop: '10px',
                    color: location.pathname === "/hot-offer" ? "var(--salmon-pink)" : "",
                  }} className="menu-title">Hot Offers</p>
                </div>
                <div>
                  <ion-icon name="arrow-forward" style={{
                    color: location.pathname === "/hot-offer" ? "var(--salmon-pink)" : "",
                  }} className="add-icon"></ion-icon>
                </div>
              </button>
            </li>
          </Link>

        </ul>
      </div>

    </>
  )
}

export default Category