import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Category from '../Components/Products/Category';
import BestSeller from '../Components/Products/BestSeller'
import Banner from '../Components/Banner'
import { bestSeller, homeBanner } from '../Data';
import SearchProduct from "../Components/Products/SearchProduct";
const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation(); 
  const query = new URLSearchParams(location.search).get("q"); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (query) {
      fetchProducts();
    }
  }, [query]);

  return (
  <>
  <Header/>
<Banner bannerData={homeBanner} />

<div style={{marginTop:"20px"}} className="product-container">
        <div className="container">
          <div className="sidebar has-scrollbar " data-mobile-menu="">
            <Category />
            <BestSeller label={"Best Seller"} bestProduct={bestSeller} />
          </div>

          <div className="product-box">
          <SearchProduct SearchLabel={query} searchProductData={products} />

          </div>
        </div>
      </div>
<Footer/>
<style>{`
        a {
          text-decoration: none;
        }
`}</style>
  </>
  );
};

export default SearchResults;
