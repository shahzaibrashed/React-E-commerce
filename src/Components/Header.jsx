/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import './Style.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { AddCart } from '../redux/cartSlice';
import { addWish, removeWish } from '../redux/wishSystem';
import { bestMens } from '../Data';

const Header = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const location = useLocation();

  const translations = {
    en: {
      home: "Home",
      mens: "Men's",
      womens: "Women's",
      jewelyr: "Jewelry",
      perfume: "Perfume",
      blog: "Blog",
      hotOffer: "Hot Offers",
      category: "Category",
      entername: "Enter your product name",
      shiping: "Free Shipping This week Order Over - $55",
    },
    fr: {
      home: "Accueil",
      mens: "Homme",
      womens: "Femme",
      jewelyr: "Bijoux",
      perfume: "Parfum",
      blog: "Blog",
      hotOffer: "Offres Chaudes",
      category: "Catégorie",
      entername: "Nom de votre produit",
      shiping: "Livraison gratuite cette semaine pour les commandes de plus de 55 $"
    }
    ,
    eg: {
      home: "الصفحة الرئيسية",
      mens: "رجالي",
      womens: "نسائي",
      jewelyr: "مجوهرات",
      perfume: "عطر",
      blog: "مدونة",
      hotOffer: "عروض ساخنة",
      category: "فئة",
      entername: "اسم المنتج الخاص بك",
      shiping: "شحن مجاني هذا الأسبوع على الطلبات التي تزيد عن 55 دولارًا"
    }
    ,
    rr: {
      home: "Дом",
      mens: "Мужчины",
      womens: "Женщины",
      jewelyr: "Ювелирные изделия",
      perfume: "Парфюм",
      blog: "Блог",
      hotOffer: "Горячие предложения",
      category: "Категория",
      entername: "Название вашего продукта",
      shiping: "Бесплатная доставка на этой неделе для заказов свыше 55 $"
    },
    sa: {
      home: "الصفحة الرئيسية",
      mens: "رجال",
      womens: "نساء",
      jewelyr: "المجوهرات",
      perfume: "عطور",
      blog: "مدونة",
      hotOffer: "عروض ساخنة",
      category: "فئة",
      entername: "اسم منتجك",
      shiping: "شحن مجاني هذا الأسبوع للطلبات فوق 55 دولارًا"
    }
  };


  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);


  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const validRoutes = ['men', 'women', 'perfume', 'blog', 'jewelyr', 'hot-offer','glasses','bags','cosmetics','footwear','clothes'];
      const normalizedSearchTerm = searchTerm.toLowerCase();
      if (validRoutes.includes(normalizedSearchTerm)) {
        navigate(`/${normalizedSearchTerm}`);
      } else {
        navigate('*');
      }
    }
  };

  const { cart } = useSelector((state) => state.cartsItem);
  const wishlistItem = useSelector((state) => state.wishlist.wishlistItem);

  const [isActive, setIsActive] = useState(false);
  const [isCatsActive, setIsCatsActive] = useState(false);


  const handleOpenButtonClick = () => {
    setIsActive(true);
  };

  const handleCloseButtonClick = () => {
    setIsActive(false);
  };

  const handleCatsMenuClose = () => {
    setIsCatsActive(false);
  };

  const handleCatsMenuOpen = () => {
    setIsCatsActive(true);
  };


  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dispatch = useDispatch()

  const AddToCart = (item) => {
    dispatch(AddCart({ ...item }));
  };
  const addFav = (item) => {
    dispatch(addWish(item));
  };
  const removeFav = (item) => {
    dispatch(removeWish(item))
  }

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
    setIsCatsActive(false);

  };

  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <ul className="header-social-container">
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-facebook" />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-instagram" />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-linkedin" />
                </Link>
              </li>
            </ul>
            <div className="header-alert-news">
              <p>
                {translations[language].shiping}
              </p>
            </div>
            <div className="header-top-actions">
              <select name="currency">
                <option value="usd">USD $</option>
                <option value="eur">EUR €</option>
              </select>
              <select value={language} onChange={handleLanguageChange} name="language">
                <option value="en">English</option>
                <option value="fr">France</option>
                <option value="eg">Egypt</option>
                <option value="rr">Russia</option>
                <option value="sa">Saudia  Arabia</option>
              </select>
            </div>
          </div>
        </div>

        <div className={`header-main ${isScrolled ? "fixed-header" : ""}`}>
          <div className="container">
            <Link to={"/"} className="header-logo">
              <img
                src="https://i.postimg.cc/XYYNC3X8/logo.png"
                alt="logo"
                width={120}
                height={36}
              />
            </Link>
            <div className="header-search-container">
              <input
                type="search"
                name="search"
                className="search-field"
                placeholder={translations[language].entername}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={handleSearch} className="search-btn">
                <ion-icon name="search-outline" />
              </button>
            </div>

            <div className="header-user-actions">
            <Link to={"/login"}>
                <button className={`action-btn ${location.pathname === '/login' ? 'active' : ''}`}>
                  <ion-icon name="person-outline" />
                </button>
              </Link>
              <Link to={"/wishlist"}>
                <button className={`action-btn ${location.pathname === '/wishlist' ? 'active' : ''}`}>
                  <ion-icon name="heart-outline" />
                  <span className="count">{wishlistItem.length}</span>
                </button>
              </Link>
              <Link to={"/carts"}>
                <button className={`action-btn ${location.pathname === '/carts' ? 'active' : ''}`}>
                  <ion-icon name="bag-handle-outline" />
                  <span className="count">{cart.length}</span>
                </button>
              </Link>

            </div>
          </div>
        </div>

        <nav className={`desktop-navigation-menu ${isScrolled ? "fixed-header" : ""}`}>
          <div className="container">
            <ul className="desktop-menu-category-list">
              <li className={`menu-category ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/" className="menu-title">
                  {translations[language].home}
                </Link>
              </li>
              <li className="menu-category">
                <Link href="#" className="menu-title">
                  {translations[language].category}
                </Link>
                <div className="dropdown-panel">
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <Link href="#">Electronics</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Desktop</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Laptop</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Camera</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Camera</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Headphone</Link>
                    </li>
                    <li className="panel-list-item">
                      <img
                        src="https://i.postimg.cc/MT2mT9ty/electronics-banner-1.jpg"
                        alt="image"
                        width={250}
                        height={119}
                      />
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <Link href="#">Men's</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Formal</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Casual</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Sports</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Jacket</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Sunglasses</Link>
                    </li>
                    <li className="panel-list-item">
                      <img
                        src="https://i.postimg.cc/nVs954kx/mens-banner.jpg"
                        alt="image"
                        width={250}
                        height={119}
                      />
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <Link href="#">Women's</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Formal</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Casual</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Perfume</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Cosmetics</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Bags</Link>
                    </li>
                    <li className="panel-list-item">
                      <img
                        src="https://i.postimg.cc/vT9Bmvq6/womens-banner.jpg"
                        alt="image"
                        width={250}
                        height={119}
                      />
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <Link href="#">Electronics</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Smart Watch</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Smart TV</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Keyboard</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Mouse</Link>
                    </li>
                    <li className="panel-list-item">
                      <Link href="#">Microphone</Link>
                    </li>
                    <li className="panel-list-item">
                      <img
                        src="https://i.postimg.cc/htMGhvrM/electronics-banner-2.jpg"
                        alt="image"
                        width={250}
                        height={119}
                      />
                    </li>
                  </ul>
                </div>
              </li>
              <li className={`menu-category ${location.pathname === '/men' ? 'active' : ''}`}>
                <Link to={"/men"} className="menu-title">
                  {translations[language].mens}

                </Link>
                {/* <ul className="dropdown-list">
            <li className="dropdown-item">
              <Link href="#">Shirt</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Shorts &amp; Jeans</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Safety Shoes</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Wallet</Link>
            </li>
          </ul> */}
              </li>
              <li className={`menu-category ${location.pathname === '/women' ? 'active' : ''}`}>
                <Link to={"/women"} className="menu-title">
                  {translations[language].womens}

                </Link>
                {/* <ul className="dropdown-list">
            <li className="dropdown-item">
              <Link href="#">Dress &amp; Frock</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Earrings</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Necklace</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Makeup Kit</Link>
            </li>
          </ul> */}
              </li>
              <li className={`menu-category ${location.pathname === '/jewelyr' ? 'active' : ''}`}>
                <Link to={"/jewelyr"} className="menu-title">
                  {translations[language].jewelyr}

                </Link>
                {/* <ul className="dropdown-list">
            <li className="dropdown-item">
              <Link href="#">Earrings</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Couple Rings</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Necklace</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Bracelets</Link>
            </li>
          </ul> */}
              </li>
              <li className={`menu-category ${location.pathname === '/perfume' ? 'active' : ''}`}>
                <Link to={"/perfume"} className="menu-title">
                  {translations[language].perfume}

                </Link>
                {/* <ul className="dropdown-list">
            <li className="dropdown-item">
              <Link href="#">Clothes Perfume</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Deodorant</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Flower Fragrance</Link>
            </li>
            <li className="dropdown-item">
              <Link href="#">Air Freshener</Link>
            </li>
          </ul> */}
              </li>
              <li className={`menu-category ${location.pathname === '/blog' ? 'active' : ''}`}>
                <Link to="/blog" className="menu-title">
                  {translations[language].blog}

                </Link>
              </li>
              <li className={`menu-category ${location.pathname === '/hot-offer' ? 'active' : ''}`}>
                <Link to={"/hot-offer"} className="menu-title">
                  {translations[language].hotOffer}

                </Link>
              </li>
            </ul>
          </div>
        </nav>


        <div className="mobile-bottom-navigation">
          <button onClick={handleOpenButtonClick} className='action-btn' data-mobile-menu-open-btn="">
            <ion-icon name="menu-outline" />
          </button>
          <Link to={"/carts"}>
            <button className={`action-btn ${location.pathname === '/carts' ? 'active' : ''}`}>
              <ion-icon name="bag-handle-outline" />
              <span className="count">{cart.length}</span>
            </button>
          </Link>
          <Link to={"/"}>
            <button className={`action-btn ${location.pathname === '/' ? 'active' : ''}`}>
              <ion-icon name="home-outline" />
            </button>
          </Link>
          <Link to={"/wishlist"}>
            <button className={`action-btn ${location.pathname === '/wishlist' ? 'active' : ''}`}>
              <ion-icon name="heart-outline" />
              <span className="count">{wishlistItem.length}</span>
            </button>
          </Link>
          <Link>
            <button onClick={handleCatsMenuOpen} className="action-btn" data-mobile-menu-open-btn="">
              <ion-icon name="grid-outline" role="img" class="md hydrated" aria-label="grid outline"></ion-icon>
            </button>
          </Link>
        </div>

        <nav className={`mobile-navigation-menu ${isActive ? "active" : ""} has-scrollbar`} data-mobile-menu="">
          <div className="menu-top">
            <h2 style={{ color: "black" }} className="menu-title">Menu</h2>
            <button onClick={handleCloseButtonClick} className="menu-close-btn" data-mobile-menu-close-btn="">
              <ion-icon name="close-outline" />
            </button>
          </div>
          <ul className="mobile-menu-category-list">
            <li className={`menu-category ${location.pathname === '/' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/"} className="menu-title">
                {translations[language].home}
              </Link>
            </li>
            <li className={`menu-category ${location.pathname === '/men' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/men"} className="menu-title">
                {translations[language].mens}
              </Link>
            </li>
            <li className={`menu-category ${location.pathname === '/women' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/women"} className="menu-title">
                {translations[language].womens}
              </Link>
            </li>

            <li className={`menu-category ${location.pathname === '/jewelyr' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/jewelyr"} className="menu-title">
                {translations[language].jewelyr}
              </Link>

            </li>
            <li className={`menu-category ${location.pathname === '/perfume' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/perfume"} className="menu-title">
                {translations[language].perfume}
              </Link>
            </li>
            <li className={`menu-category ${location.pathname === '/blog' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/blog"} className="menu-title">
                {translations[language].blog}
              </Link>
            </li>
            <li className={`menu-category ${location.pathname === '/hot-offer' ? 'active' : ''}`}>
              <Link onClick={handleCloseButtonClick} to={"/hot-offer"} className="menu-title">
                {translations[language].hotOffer}
              </Link>
            </li>
          </ul>
          <div className="menu-bottom">

            <ul className="menu-social-container">
              <li>
               
                <Link to={"/login"}>
                  <ion-icon style={{color:"black"}} name="person" />
              </Link>
             
              </li>
              <li>
              <Link href="#" className="social-link">
                  <ion-icon name="logo-facebook" />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-instagram" />
                </Link>
              </li>
              <li>
                <Link href="#" className="social-link">
                  <ion-icon name="logo-linkedin" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center" >
            <div className="d-flex gap-2">
              <select name="currency" className="form-select">
                <option value="usd">USD $</option>
                <option value="eur">EUR €</option>
              </select>
              <select value={language} onChange={handleLanguageChange} name="language" className="form-select">
                <option value="en">English</option>
                <option value="fr">France</option>
                <option value="eg">Egypt</option>
                <option value="rr">Russia</option>
                <option value="sa">Saudi Arabia</option>
              </select>
            </div>
          </div>
        </nav>

        <div className={`sidebar ${isCatsActive ? "active" : ""} catsmain has-scrollbar `} data-mobile-menu="">
          <div className="sidebar-category">

            <div className="sidebar-top">
              <h2 className="sidebar-title">Category</h2>
              <button onClick={handleCatsMenuClose} className="sidebar-close-btn" data-mobile-menu-close-btn="">
                <ion-icon
                  name="close-outline"
                  role="img"
                  className="md hydrated"
                  aria-label="close outline"
                />
              </button>
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
                    className={`sidebar-submenu-category-list ${activcatMenIndex === index ? "active" : ""
                      }`}
                    data-accordion=""
                  >
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="sidebar-submenu-category">
                        <div onClick={() => handleNavigation(category, item)} className="sidebar-submenu-title">
                          <p className="product-name">{item.name}</p>
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
          <div className="product-showcase" style={{ borderRadius: "5px", padding: "3px" }}>
            <h3 className="showcase-heading">Best Seller</h3>
            <div className="showcase-wrapper">
              <div className="showcase-container">
                {
                  bestMens?.map((item, index) => {
                    return (
                      <div key={index} className="showcase">
                        <Link href="#" className="showcase-img-box">
                          <img
                            src={item.imgUrl}
                            alt="baby fabric shoes"
                            className="showcase-img"
                            width={75}
                            height={75}
                          />
                        </Link>
                        <div className="showcase-content">
                          <Link href="#">
                            <h4 className="showcase-title">{item.title}</h4>
                          </Link>
                          <div className="showcase-rating">
                            {item.star}
                          </div>
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
                          </div>
                        </div>
                      </div>

                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>

      </header>

    </>
  )
}

export default Header



