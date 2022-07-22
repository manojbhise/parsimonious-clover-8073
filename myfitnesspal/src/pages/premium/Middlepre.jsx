import React from 'react'
import Styles from "../../styling/Premium.module.css";
import { TiTick } from "react-icons/ti";
const Middlepre = () => {
  return (
    <>
    <div className={Styles.middle1}>
                <img
                  src={
                    "https://www.myfitnesspal.com/react-static/51b6c01dec78ddfb6d693b1ff8d23d44.png"
                  }
                  alt={"side"}
                />
                <h3>Meal Plans & Recipes</h3>
                <p>Gain insight into your nutrition</p>
              </div>
              <div className={Styles.middle1}>
                <img
                  src={
                    "https://www.myfitnesspal.com/react-static/c51db6a037b248c10816974faac845f9.png"
                  }
                  alt={"side"}
                />
                <h3>Personalized Goals</h3>
                <p>Get guidance & coaching tailored to you</p>
              </div>
              <div className={Styles.middle1}>
                <img
                  src={
                    "https://www.myfitnesspal.com/react-static/93c7966575adb77a179235b991596985.png"
                  }
                  alt={"side"}
                />
                <h3>Ad-Free Experience</h3>
                <p>Focus on your goals without distraction</p>
              </div>
    </>
  )
}

export default Middlepre