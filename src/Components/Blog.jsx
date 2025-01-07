/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import {blogCard} from '../Data'
import { Link } from 'react-router-dom'
const Blog = () => {
  return (
   <>
   <div className="blog">
  <div className="container">
    <div className="blog-container has-scrollbar">

     {
      blogCard.map((item)=>{
        return(
          <div key={item.id} className="blog-card">
        <Link href="#">
          <img
            src={item.imgUrl}
            alt={item.title}
            className="blog-banner"
            width={300}
          />
        </Link>
        <div className="blog-content">
          <Link href="#" className="blog-category">
           {item.title}
          </Link>
          <Link href="#">
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