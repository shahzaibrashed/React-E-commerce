/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import { blogCard } from '../Data'
import { Link } from 'react-router-dom'
const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="blog-container has-scrollbar">
            {
              blogCard.map((item,index) => {
                return (
                  <div key={index} className="blog-card">
                    <Link to="/blog">
                      <img
                        src={item.imgUrl}
                        alt={item.title}
                        className="blog-banner"
                        width={300}
                      />
                    </Link>
                    <div className="blog-content">
                      <Link to="/blog" className="blog-category">
                        {item.title}
                      </Link>
                      <Link to="/blog">
                        <h3 className="blog-title">
                          {item.disc}
                          
                        </h3>
                      </Link>
                      <p className="blog-meta">
                        By <cite>{item.name}</cite> /{" "}
                        <time dateTime="2024-04-06">{item.date}</time>
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default Blog