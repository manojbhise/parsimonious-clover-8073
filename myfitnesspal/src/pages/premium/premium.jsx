import React from "react";
import Styles from "../../styling/Premium.module.css";
import { TiTick } from "react-icons/ti";
import Tablepremium from "./Tablepremium";
import Middlepre from "./Middlepre";
import Victory from "./Victory";
const Premium = () => {
  return (
    <>
      <div className={Styles.premium}>
        <div className={Styles.main}>
          <div className={Styles.inner}>
            <div className={Styles.innermost}>
              <div className={Styles.first}>
                <div>
                  <div className={Styles.firsthead}>Premium</div>
                </div>
                <div>
                  <h1 className={Styles.htrial}>Start Your Free Trial Today</h1>
                </div>
                <div>
                  <p className={Styles.p1}>
                    Premium members are 65% more likely to reach their weight
                    loss goal.
                  </p>
                </div>
                <div className={Styles.button}>
                  <button className={Styles.but}>
                    Start free 1-month trial
                  </button>
                </div>
              </div>
              <div className={Styles.second}>
                <img
                  src={
                    "	https://www.myfitnesspal.com/react-static/e4537e1d014a66cb6083eb6025813bb6.png"
                  }
                  alt={"side"}
                />
              </div>
            </div>
            <div className={Styles.middle}>
              <Middlepre />
            </div>
            <div className={Styles.multiContainer}>
              <div>
                <header className={Styles.header}>
                  <h2>Your Goals, Your Way</h2>
                  <p>
                    Advanced tools and in-depth analysis to help you build
                    lifelong healthy habits.
                  </p>
                </header>
                <div className={Styles.head1}>
                  <div className={Styles.head2}></div>
                  <div className={Styles.head3}>
                    <div></div>
                    <div className={Styles.Free}>Free</div>
                    <div className={Styles.Premium}>Premium</div>
                  </div>
                  <div className={Styles.Tables}>
                    <Tablepremium />
                  </div>
                </div>
              </div>
            </div>

            <div className={Styles.sliderhead}>
              <div className={Styles.sliderhead1}>
                <h2 className={Styles.sliderh2}>Victory Stories</h2>
                <p>
                  Your victories are our victories and we want to share them
                  with the world.
                </p>
              </div>
            </div>
            <div className={Styles.Sliders}>
              <Victory />
            </div>
            {/* <div className={Styles.faq}>
              <div>
                <div className={Styles.firsthead1}>Premium</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Premium;
