import React from "react";
import { Sliders } from "./Slider";
import Styles from "../../styling/MainPage.module.css";
import Feactured from "./Feactured";
import Marketplace from "./Marketplace";
import Categories from "./Categories";
const MainPage = () => {
  return (
    <>
      <div className={Styles.main}>
        <div>
          <Sliders />
          <div>
            <Feactured />
          </div>
          <div>
            <Marketplace />
          </div>
        </div>
        <div>
          <Categories/>
        </div>
      </div>
    </>
  );
};

export default MainPage;
