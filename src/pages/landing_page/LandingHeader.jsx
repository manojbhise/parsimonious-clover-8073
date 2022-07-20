import React from 'react'
import style from "./header.module.css";
import LandBody from './LandBody';
import Navbar from './Navbar';

const LandingHeader = () => {
    
  return (
    <div>
        <div className={style.headcar}>
            <img src="https://i.pinimg.com/originals/53/24/0a/53240a99b0159c5a16937e5ac479f78a.png" alt="" />
            <div className={style.lscar}>
                <a href='' className={style.headlog}>Log In</a>
                <a href=''>Sign Up</a>
            </div>
        </div>
        <Navbar/>
        <LandBody/>
    </div>
  )
}

export default LandingHeader