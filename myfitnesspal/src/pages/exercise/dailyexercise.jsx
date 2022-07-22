import React from "react";
import Banner from "./Banner";
import Cardiovascular from "./Cardiovascular";
import Styles from "../../styling/dailyexercise.module.css";
import Strength from "./Strength";
import Tablecomp from "./tablecomp";
import Todayexercise from "./Todayexercise";
import Header from "../../components/Header";
import {BsCalendar2Month} from 'react-icons/bs';
import {GrCaretPrevious} from 'react-icons/gr';
import {GrCaretNext} from 'react-icons/gr';

const Dailyexercise = () => {
  return (
    <>
    <div className={Styles.body}>
   
      <div className={Styles.maindiv}>
      <div className={Styles.poster}>
    <img  className={Styles.poster}src={"https://influencermarketinghub.com/wp-content/uploads/2021/11/Amazon-Display-Ad-AWS-1024x267.jpg"} alt={"poster"}/>
   </div>
        <div className={Styles.diary}>
          <h2 className={Styles.h2}>Your Exercise Diary for:</h2>
         
          <input className={Styles.input} type={"datetime-local"}  />
          
        
          <BsCalendar2Month style={{fontSize:"20px", marginLeft:'5px'}}/>
        </div>
        <div>
          <Cardiovascular />
        </div>
        <div>
          <Tablecomp />
        </div>
        <div>
          <Strength />
        </div>
        <div>
          <Todayexercise />
        </div>
        
      </div>
      <div className={Styles.img}>
    <img src={"https://gourmetads.com/wp-content/uploads/2019/02/160x600-nespresso.jpg"} alt={"poster"}/>
   </div>
   </div>
    </>
  );
};

export default Dailyexercise;
