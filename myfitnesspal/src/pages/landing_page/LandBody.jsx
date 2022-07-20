import React from 'react'
import style from "./landbody.module.css";
import Search from './Search';

const LandBody = () => {
  return (
    <div>
        <div className={style.lbprt1}>
            <div className={style.lbp1t}>
                <h1>Fitness starts with what you eat.</h1>
                <p>Take control of your goals. Track calories, break down ingredients, and log activities with MyFitnessPal.</p>
                <button className={style.lbp1btn}>START FOR FREE</button>
                <p>Already have an Account? <span className={style.lbp1spn}>Login</span></p>
            </div>
        </div>
        <Search/>
    </div>
  )
}

export default LandBody