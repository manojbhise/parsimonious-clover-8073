import React from "react";
import Styles from "../../styling/Strength.module.css";
const Strength = () => {
  return (
    <>
      <div>
        <div className={Styles.cardio}>
          <div>Strength Training</div>
          <div className={Styles.side}>
            <p>Sets</p>
            <p className={Styles.p}>Reps/Set</p>
            <p className={Styles.p}>Weight/Set</p>
          </div>
        </div>
        <div className={Styles.Second}>
          <div>
            <p>Add Exercise </p>
            <p className={Styles.para1}>|</p>
            <p className={Styles.para}> Quick Tools </p>
          </div>
          <div className={Styles.diva}></div>
          <div className={Styles.diva}></div>
        </div>
      </div>
    </>
  );
};

export default Strength;
