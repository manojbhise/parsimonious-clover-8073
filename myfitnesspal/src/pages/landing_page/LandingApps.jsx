import React from "react";
import style from "./landingapps.module.css";
const LandingApps = () => {
  return (
    <div className={style.lappmain}>
      <div className={style.lapphp}>
        <h1>Connect with over 50 apps.</h1>
        <p>
          Easily link your MyFitnessPal account with apps that support your
          healthier lifestyle. It’s not just about calories. It’s about feeling
          better, looking better, and living better.
        </p>
      </div>
      <div className={style.lappimg}>
        <img
          src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75"
          alt=""
         
        />
      </div>
      <div className={style.lappps}>
        <img src="https://www.myfitnesspal.com/_next/static/media/conversion-apple-app-store-logo.751bc42c.svg" alt="" />
        <img src="https://www.myfitnesspal.com/_next/static/media/conversion-google-play-store-logo.1c6369a1.svg" alt="" />
      </div>
      
    </div>
  );
};

export default LandingApps;
