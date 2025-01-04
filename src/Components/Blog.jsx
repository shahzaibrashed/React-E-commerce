/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
const Blog = () => {
  return (
   <>
   <div className="blog">
  <div className="container">
    <div className="blog-container has-scrollbar">
      <div className="blog-card">
        <a href="#">
          <img
            src="https://i.postimg.cc/2886v00v/blog-1.jpg"
            alt="Clothes Retail KPIs 2023 Guide for Clothes Executives"
            className="blog-banner"
            width={300}
          />
        </a>
        <div className="blog-content">
          <a href="#" className="blog-category">
            Fashion
          </a>
          <a href="#">
            <h3 className="blog-title">
              Clothes Retail KPIs 2023 Guide for Clothes Executives
            </h3>
          </a>
          <p className="blog-meta">
            By <cite>Mr Admin</cite> /{" "}
            <time dateTime="2024-04-06">Apr 06, 2024</time>
          </p>
        </div>
      </div>
      <div className="blog-card">
        <a href="#">
          <img
            src="https://i.postimg.cc/cJWPgbmG/blog-2.jpg"
            alt="Curbside fashion Trends: How to Win the Pickup Battle"
            className="blog-banner"
            width={300}
          />
        </a>
        <div className="blog-content">
          <a href="#" className="blog-category">
            Clothes
          </a>
          <a href="#">
            <h3 className="blog-title">
              Curbside fashion Trends: How to Win the Pickup Battle
            </h3>
          </a>
          <p className="blog-meta">
            By <cite>Mr Robin</cite> /{" "}
            <time dateTime="2024-01-18">Jan 18, 2024</time>
          </p>
        </div>
      </div>
      <div className="blog-card">
        <a href="#">
          <img
            src="https://i.postimg.cc/BQkj0xCK/blog-3.jpg"
            alt="EBT vendors: Claim Your Share of SNAP Online Revenue"
            className="blog-banner"
            width={300}
          />
        </a>
        <div className="blog-content">
          <a href="#" className="blog-category">
            Shoes
          </a>
          <a href="#">
            <h3 className="blog-title">
              EBT vendors: Claim Your Share of SNAP Online Revenue
            </h3>
          </a>
          <p className="blog-meta">
            By <cite>Mr Selsa</cite> /{" "}
            <time dateTime="2023-02-23">Feb 23, 2023</time>
          </p>
        </div>
      </div>
      <div className="blog-card">
        <a href="#">
          <img
            src="https://i.postimg.cc/43Jskdjc/blog-4.jpg"
            alt="Curbside fashion Trends: How to Win the Pickup Battle"
            className="blog-banner"
            width={300}
          />
        </a>
        <div className="blog-content">
          <a href="#" className="blog-category">
            Electronics
          </a>
          <a href="#">
            <h3 className="blog-title">
              Curbside fashion Trends: How to Win the Pickup Battle
            </h3>
          </a>
          <p className="blog-meta">
            By <cite>Mr Pawar</cite> /{" "}
            <time dateTime="2023-02-02">Feb 02, 2023</time>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

   
   </>
  )
}

export default Blog