import React from "react";
import Banner from "./Banner";
import Cardiovascular from "./Cardiovascular";
import Styles from "../../styling/dailyexercise.module.css";
import Strength from "./Strength";
import Tablecomp from "./tablecomp";
import Todayexercise from "./Todayexercise";
import Header from "../../components/Header";

const Dailyexercise = () => {
  return (
    <>
      <div className={Styles.maindiv}>
        <div className={Styles.diary}>
          <h2 className={Styles.h2}>Your Exercise Diary for:</h2>
          <input className={Styles.input} type={"datetime-local"} />
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
    </>
  );
};

export default Dailyexercise;
