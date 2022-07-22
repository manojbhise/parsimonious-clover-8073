import React from 'react'
import Slider from './Slider';
import ToolForGoal from './ToolForGoal';
import Recipies from "./Recipies"
import LandingApps from "./LandingApps"
import style from "./landbody.module.css";
import Search from './Search';
import { Link } from 'react-router-dom';

const LandBody = () => {
  return (
    <div>
        <div className={style.lbprt1}>
            <div className={style.lbp1t}>
                <h1>Fitness starts with what you eat.</h1>
                <p>Take control of your goals. Track calories, break down ingredients, and log activities with MyFitnessPal.</p>
                <Link to="/"><button className={style.lbp1btn}>START FOR FREE</button></Link>
                <p>Already have an Account? <Link to="/login"  className={style.lbp1spn}>Login</Link></p>
            </div>
        </div>
        <Search/>
        <ToolForGoal/>
        <Slider/>
        <Recipies/>
        <LandingApps/>
    </div>
  )
}

export default LandBody