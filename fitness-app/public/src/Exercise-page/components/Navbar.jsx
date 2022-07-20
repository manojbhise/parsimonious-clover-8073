import React from 'react'
import {Link} from "react-router-dom";
import Styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <>
    <div className={Styles.navbar}>
        <ul className={Styles.ul}>
    <Link  className={Styles.link} to={"/exercisediary"}>Exercise Diary</Link>
    <Link  className={Styles.link}to={"/database"}>Datatbase</Link>
    <Link  className={Styles.link}to={"/myexercise"}>My Exercise</Link>
    <Link  className={Styles.link}to={"/setting"}>Settings</Link>
    </ul>
    </div>
    
    </>
  )
}

export default Navbar