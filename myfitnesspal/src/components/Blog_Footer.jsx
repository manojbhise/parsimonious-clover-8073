import React from 'react'
import style from "../styling/BlogNavFooter.module.css"

const Blog_Footer = () => {
  return (
    <div className={style.blogFooterContainer}>
        <div className={style.FootlogoContainer}>
            <h1>myfitnesspal™</h1>
        </div>
        <div className={style.MiniFootlogoContainer}>
            <p>MyFitnessPal</p>
        </div>
        <div className={style.BlogFootlogoPara}>
            <p>is the leading app for tracking—and conquering—your nutrition and fitness goals. Log meals from a database of 14 million foods, track physical activity, and learn how to build healthy habits that stick. With more than 500 recipes, 150 workout routines, and a variety of expert-guided meal and workout plans, you’ll have the support you need for your entire health and fitness journey.</p>
        </div>
        <div className={style.lowerFootlogoContainer}>MyFitnessPal Blog</div>
        <div className={style.CopyRightFootlogoContainer}>
            <div >
                <span>© 2022MyFitnessPal™</span>
            </div>
            <hr />
            <div>
            <span>Privacy Policy</span>
            </div>
            <hr />
            <div>
            <span>Terms</span>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default Blog_Footer