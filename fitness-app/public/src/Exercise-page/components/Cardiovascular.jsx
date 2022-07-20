import React from "react";
import Styles from "./Cardiovascular.module.css";
const Cardiovascular = () => {
  return (
    <>
      <div>
        <div className={Styles.cardio}>
          <div>Cardiovascular</div>
          <div className={Styles.side}>
            <p>Minutes</p>
            <p className={Styles.p}>Calories Burned</p>
          </div>
        </div>
        <div className={Styles.Second}>
            <div>
              <p>Add Exercise </p>  
              <p className={Styles.para1}>|</p>
              <p className={Styles.para}> Quick Tools </p>  
            </div>
            <div className={Styles.diva}></div>
        </div>
      </div>
    </>
  );
};

export default Cardiovascular;
