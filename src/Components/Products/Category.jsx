import React from 'react'


const Category = () => {
  return (
   <>
    <div className="sidebar-category">
              <div className="sidebar-top">
                <h2 className="sidebar-title">Category</h2>
              </div>
              <ul className="sidebar-menu-category-list">
                <li className="sidebar-menu-category">
                  <button className="sidebar-accordion-menu" data-accordion-btn="">
                    <div className="menu-title-flex">
                      <img
                        src="https://i.postimg.cc/Xv9x15Q8/dress.png"
                        alt="clothes"
                        className="menu-title-img"
                        width={20}
                        height={20}
                      />
                      <p className="menu-title">Clothes</p>
                    </div>
                    <div>
                      <ion-icon name="arrow-forward" className="add-icon"></ion-icon>
                    </div>
                  </button>
                </li>
                <li className="sidebar-menu-category">
                  <button className="sidebar-accordion-menu" data-accordion-btn="">
                    <div className="menu-title-flex">
                      <img
                        src="https://i.postimg.cc/d3RBQZhB/shoes.png"
                        alt="footwear"
                        className="menu-title-img"
                        width={20}
                        height={20}
                      />
                      <p className="menu-title">Footwear</p>
                    </div>
                    <div>
                    <ion-icon name="arrow-forward" className="add-icon"></ion-icon>
                    </div>
                  </button>
                </li>
                <li className="sidebar-menu-category">
                  <button className="sidebar-accordion-menu" data-accordion-btn="">
                    <div className="menu-title-flex">
                      <img
                        src="https://i.postimg.cc/Y9HLrnY5/jewelry.png"
                        alt="jewelyr"
                        className="menu-title-img"
                        width={20}
                        height={20}
                      />
                      <p className="menu-title">Jewelyr</p>
                    </div>
                    <div>
                    <ion-icon name="arrow-forward" className="add-icon"></ion-icon>
                    </div>
                  </button>
                </li>
                <li className="sidebar-menu-category">
                  <button className="sidebar-accordion-menu" data-accordion-btn="">
                    <div className="menu-title-flex">
                      <img
                        src="https://i.postimg.cc/6q67R8Hz/perfume.png"
                        alt="perfume"
                        className="menu-title-img"
                        width={20}
                        height={20}
                      />
                      <p className="menu-title">Perfume</p>
                    </div>
                    <div>
                    <ion-icon name="arrow-forward" className="add-icon"></ion-icon>
                    </div>
                  </button>
                </li>
                <li className="sidebar-menu-category">
                  <button className="sidebar-accordion-menu" data-accordion-btn="">
                    <div className="menu-title-flex">
                      <img
                        src="https://i.postimg.cc/dQnZF91f/cosmetics.png"
                        alt="cosmetics"
                        className="menu-title-img"
                        width={20}
                        height={20}
                      />
                      <p className="menu-title">Cosmetics</p>
                    </div>
                    <div>
                    <ion-icon name="arrow-forward" className="add-icon"></ion-icon>
                    </div>
                  </button>
                </li>
                <li className="sidebar-menu-category">
                  <button className="sidebar-accordion-menu" data-accordion-btn="">
                    <div className="menu-title-flex">
                      <img
                        src="https://i.postimg.cc/zBthxXZ7/glasses.png"
                        alt="glasses"
                        className="menu-title-img"
                        width={20}
                        height={20}
                      />
                      <p className="menu-title">Glasses</p>
                    </div>
                    <div>
                      <ion-icon name="arrow-forward" className="add-icon"></ion-icon>
                    </div>
                  </button>
                </li>
                <li className="sidebar-menu-category">
                  <button className="sidebar-accordion-menu" data-accordion-btn="">
                    <div className="menu-title-flex">
                      <img
                        src="https://i.postimg.cc/5yt0yZ0R/bag.png"
                        alt="bags"
                        className="menu-title-img"
                        width={20}
                        height={20}
                      />
                      <p className="menu-title">Bags</p>
                    </div>
                    <div>
                      <ion-icon name="arrow-forward" className="add-icon"></ion-icon>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
   
   </>
  )
}

export default Category