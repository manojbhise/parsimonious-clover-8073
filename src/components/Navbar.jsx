import React from 'react'
import style from "./navbar.module.css";

const Navbar = () => {
    let arr=["ABOUT","FOOD","EXERCISE","APPS","COMMUNITY","BLOG","PREMIUM"]
  return (
    <div>
        <div className={style.navcar}>
            {arr.map((e,i)=>(
                <div>
                <h5 key={i}>{e}</h5>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Navbar