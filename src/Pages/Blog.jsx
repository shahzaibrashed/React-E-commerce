import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Blogs from '../Components/Blog'
import Banner from '../Components/Banner'
import { blogBanner } from '../Data'
const Blog = () => {
  return (
    <>
    <Header/>
    <Banner bannerData={blogBanner} />
      <div className="product-box">
          <div style={{color:"var(--salmon-pink)"}} className="container pt-5 ">
  <h3 className="display-4 display-md-3 display-lg-2">Annual Blogs</h3>
</div>
    <Blogs/>
    <div style={{color:"var(--salmon-pink)"}}  className="container pt-5 ">
  <h3 className="display-4 display-md-3 display-lg-2">Party Blogs</h3>
</div>
    <Blogs/>
    <div style={{color:"var(--salmon-pink)"}}  className="container pt-5 ">
  <h3 className="display-4 display-md-3 display-lg-2">Clothes Blogs</h3>
</div>
    <Blogs/>

          </div>
 
    <Footer/>
    <style>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

export default Blog