import React from "react";
import style from "./toolforgoal.module.css";

const ToolForGoal = () => {
  let arr = [
    {
      src: "https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg",
      bold: "Learn. Track. Improve.",
      txt: "Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.",
    },
    {
      src: "https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg",
      bold: "Logging Simplified",
      txt: "Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.",
    },
    {
      src: "https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg",
      bold: "Stay Motivated",
      txt: "Join the World’s Largest Fitness Community for advice, tips, and support 24/7.",
    },
  ];
  return (
    <div className={style.tfgcar}>
      <div className={style.tfghpcar}>
        <h1 className={style.tfgh1}>The Tools for Your Goals</h1>
        <p>
          Trying to lose weight, tone up, lower your BMI, or invest in your
          overall health? We give you the right features to hit your goals.
        </p>
      </div>
      
      <div className={style.tfggrid}>
        {arr.map((e, i) => (
          <div key={i}>
            <img src={e.src} alt="" />
            <h5>{e.bold}</h5>
            <p>{e.txt}</p>
          </div>
        ))}
      </div>
      <button className={style.tfgbtn}>START YOUR JOURNEY TODAY</button>
    </div>
  );
};

export default ToolForGoal;
