import React from "react";
import Styles from "../../styling/tablecomp.module.css";
//import Styles from "./Cardiovascular.module.css";
const Tablecomp = () => {
  return (
    <>
      <div>
        <div className={Styles.cardio}>
          <div className={Styles.dialy}>
            Daily Total /<span className={Styles.span}>Goal</span>
          </div>
          <div className={Styles.side}>
            <p>
              0 /<span className={Styles.span}>0</span>{" "}
            </p>
            <p className={Styles.p}>
              0 /<span className={Styles.span}>0</span>{" "}
            </p>
          </div>
        </div>
        <div className={Styles.cardio1}>
          <div className={Styles.dialy}>
            Weekly Total /<span className={Styles.span}>Goal</span>
          </div>
          <div className={Styles.side}>
            <p>
              0 /<span className={Styles.span}>0</span>{" "}
            </p>
            <p className={Styles.p}>
              0 /<span className={Styles.span}>0</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tablecomp;
