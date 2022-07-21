import React from 'react'
import style from "./landingnavbar.module.css";

const LandingNavbar = () => {
    let arr=["ABOUT","FOOD","EXERCISE","APPS","COMMUNITY","BLOG","PREMIUM"]
  return (
    <div>
        <div className={style.navcar}>
            {arr.map((e,i)=>(
                <div key={i}>
                <h5 key={i}>{e}</h5>
                </div>
            ))}
        </div>
    </div>
  )
}

export default LandingNavbar