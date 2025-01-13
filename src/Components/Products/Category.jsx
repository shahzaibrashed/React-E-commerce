import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Category = () => {

  const location = useLocation()
  const navigate = useNavigate();
  const [activcatMenIndex, setActivecatMenIndex] = useState(null);

  const toggleActiveClass = (index) => {
    setActivecatMenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const categories = [
    {
      title: "Clothes",
      imgUrl: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/dress.svg",
      items: [
        { name: "Casual Cotton Shirt", stock: 300 },
        { name: "Denim Jeans", stock: 60 },
        { name: "Fleece Jackets", stock: 50 },
        { name: "Summer Mexi Dress", stock: 87 },
      ],
    },
    {
      title: "Footwear",
      imgUrl: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/shoes.svg",
      items: [
        { name: " Casual Sneakers", stock: 150 },
        { name: "Running Shoes", stock: 70 },
        { name: "Flip Flop", stock: 90 },
        { name: "Slippers", stock: 40 },
      ],
    },
    {
      title: "Jewelry",
      imgUrl: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/jewelry.svg",
      items: [
        { name: "Elegent Necklace", stock: 35 },
        { name: "Gold Bracelets", stock: 50 },
        { name: "Pearl Earrings", stock: 80 },
        { name: "Luxury Watch", stock: 60 },
      ],
    },
    {
      title: "Perfume",
      imgUrl: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/perfume.svg",
      items: [
        { name: "Aqua Intense", stock: 100 },
        { name: "Urban Spice", stock: 50 },
        { name: "Citrus Burst", stock: 75 },
        { name: "Midnight Musk", stock: 40 },
      ],
    },
    {
      title: "Cosmetics",
      imgUrl: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/cosmetics.svg",
      items: [
        { name: "Matte Lipsticks", stock: 200 },
        { name: "Liquid Foundations", stock: 100 },
        { name: "Mascaras", stock: 80 },
        { name: "Blushes", stock: 60 },
      ],
    },
    {
      title: "Glasses",
      imgUrl: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/glasses.svg",
      items: [
        { name: "Aviator Sunglasses", stock: 120 },
        { name: "Cat Eye Sunglasses", stock: 80 },
        { name: "Blue Light Glasses", stock: 50 },
        { name: "Polorized Sports Glasses", stock: 70 },
      ],
    },
    {
      title: "Bags",
      imgUrl: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/bag.svg",
      items: [
        { name: "Crossbody Bag", stock: 90 },
        { name: "Canvas Backpack", stock: 60 },
        { name: "Laptop Bags", stock: 50 },
        { name: "Duffle Bag", stock: 40 },
      ],
    },
  ];


  const handleNavigation = (category, item) => {
    if (category.title === 'Clothes') {
      navigate('/clothes');
    } else if (category.title === 'Footwear') {
      navigate("/footwear");
    } else if (category.title === 'Jewelry') {
      navigate("/jewelyr");
    } else if (category.title === 'Perfume') {
      navigate("/perfume");
    } else if (category.title === 'Glasses') {
      navigate("/glasses");
    } else if (category.title === 'Bags') {
      navigate("/bags");
    } else if (category.title === 'Cosmetics') {
      navigate("/cosmetics");
    }
  };



  return (
    <div className="sidebar-category">
      <div className="sidebar-top">
        <h2 className="sidebar-title">Category</h2>
      </div>
      <ul className="sidebar-menu m-0 p-0">
        {categories.map((category, index) => (
          <li key={index} className="sidebar-menu-category">
            <button
              onClick={() => toggleActiveClass(index)}
              className="sidebar-accordion-menu"
              data-accordion-btn=""
            >
              <div className="menu-title-flex">
                <img
                  src={category.imgUrl}
                  alt={category.title}
                  width={20}
                  height={20}
                  className="menu-title-img"
                />
                <p
                  style={{
                    color:
                      (location.pathname === "/bags" && category.title.toLowerCase().includes("bags")) ? "pink" :
                        (location.pathname === "/cosmetics" && category.title.toLowerCase().includes("cosmetics")) ? "pink" :
                          (location.pathname === "/perfume" && category.title.toLowerCase().includes("perfume")) ? "pink" :
                            (location.pathname === "/jewelry" && category.title.toLowerCase().includes("jewelry")) ? "pink" :
                              (location.pathname === "/jewelyr" && category.title.toLowerCase().includes("jewelry")) ? "pink" :
                                (location.pathname === "/glasses" && category.title.toLowerCase().includes("glasses")) ? "pink" :
                                  (location.pathname === "/clothes" && category.title.toLowerCase().includes("clothes")) ? "pink" :
                                    (location.pathname === "/footwear" && category.title.toLowerCase().includes("footwear")) ? "pink" :
                                      "",
                  }} className="menu-title">{category.title}</p>
              </div>
              <div>
                {activcatMenIndex === index ? (
                  <ion-icon
                    style={{
                      color:
                        (location.pathname === "/bags" && category.title.toLowerCase().includes("bags")) ? "pink" :
                          (location.pathname === "/cosmetics" && category.title.toLowerCase().includes("cosmetics")) ? "pink" :
                            (location.pathname === "/perfume" && category.title.toLowerCase().includes("perfume")) ? "pink" :
                              (location.pathname === "/jewelry" && category.title.toLowerCase().includes("jewelry")) ? "pink" :
                                (location.pathname === "/jewelyr" && category.title.toLowerCase().includes("jewelry")) ? "pink" :
                                  (location.pathname === "/glasses" && category.title.toLowerCase().includes("glasses")) ? "pink" :
                                    (location.pathname === "/clothes" && category.title.toLowerCase().includes("clothes")) ? "pink" :
                                      (location.pathname === "/footwear" && category.title.toLowerCase().includes("footwear")) ? "pink" :
                                        "",
                    }}
                    name="remove-outline"
                    className="add-icon md hydrated"
                    role="img"
                    aria-label="add outline"
                  />
                ) : (
                  <ion-icon
                    style={{
                      color:
                        (location.pathname === "/bags" && category.title.toLowerCase().includes("bags")) ? "pink" :
                          (location.pathname === "/cosmetics" && category.title.toLowerCase().includes("cosmetics")) ? "pink" :
                            (location.pathname === "/perfume" && category.title.toLowerCase().includes("perfume")) ? "pink" :
                              (location.pathname === "/jewelry" && category.title.toLowerCase().includes("jewelry")) ? "pink" :
                                (location.pathname === "/jewelyr" && category.title.toLowerCase().includes("jewelry")) ? "pink" :
                                  (location.pathname === "/glasses" && category.title.toLowerCase().includes("glasses")) ? "pink" :
                                    (location.pathname === "/clothes" && category.title.toLowerCase().includes("clothes")) ? "pink" :
                                      (location.pathname === "/footwear" && category.title.toLowerCase().includes("footwear")) ? "pink" :
                                        "",
                    }}
                    name="add-outline"
                    className="add-icon md hydrated"
                    role="img"
                    aria-label="add outline"
                  />
                )}
              </div>
            </button>
            <ul
              className={`sidebar-submenu-category-list ${activcatMenIndex === index ? 'active' : ''
                }`}
              data-accordion=""
            >
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="sidebar-submenu-category">
                  <div
                    onClick={() => handleNavigation(category, item)}
                    className="sidebar-submenu-title"
                  >
                    <p
                      className="product-name">{item.name}</p>
                    <data
                      value={item.stock}
                      className="stock"
                      title="Available Stock"
                    >
                      {item.stock}
                    </data>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
