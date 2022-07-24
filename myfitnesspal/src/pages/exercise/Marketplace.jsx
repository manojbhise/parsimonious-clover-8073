import React, { useState } from "react";
import Styles from "../../styling/Marketplace.module.css";
import appdata from "./data.json";
const Marketplace = () => {
  const [getData, SetData] = useState(appdata.Apps1);
  //console.log(appdata.Apps)
  return (
    <>
      <div className={Styles.feacture}>
        <h2>App Marketplace</h2>
        <div className={Styles.Apps}>
          {getData.map((elem, index) => {
            return (
              <>
                <div key={elem.index} className={Styles.Apps1}>
                  <div>
                    <img className={Styles.logo} src={elem.img} alt={"icon"} />
                  </div>
                  <div className={Styles.right}>
                    <p className={Styles.rightpara1}>{elem.p1}</p>
                    <p className={Styles.rightpara2}>{elem.Category}</p>
                    <a
                      href="http://www.myfitnesspal.com/fitbit/authorize"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className={Styles.button}>GET</button>
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Marketplace;
