import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import { homeBanner } from '../Data'
import BlogSection from '../Components/BlogSection'
const Blog = () => {
  return (
    <>
    <Header/>
    <Banner bannerData={homeBanner} />
     <BlogSection/>
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