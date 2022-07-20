import React from 'react'
import TrendingArticles from '../components/TrendingArticles'
import style from "../Blog.module.css"
import LatestArticles from '../components/LatestArticles'
const BlogHomePage = () => {
  return (
    <div className={style.blogMainContainer}>
        <TrendingArticles/>
        <LatestArticles/>
    </div>
  )
}

export default BlogHomePage

/* 
please install these dependencies first
npm i swiper 
npm i node-sass 
*/