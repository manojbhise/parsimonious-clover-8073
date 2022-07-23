import React from "react";
import Styles from "../../styling/Cardiovascular.module.css";
const Cardiovascular = () => {
  return (
    <>
      <div>
        <div className={Styles.cardio}>
          <div className={Styles.cardios} >Cardiovascular</div>
          <div className={Styles.sidecardio}>
            <p className={Styles.minutes}>Minutes</p>
            <p className={Styles.burn}>Calories Burned</p>
          </div>
        </div>
        <div className={Styles.Secondpara}>
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
