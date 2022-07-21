import React, { useEffect, useState } from "react";
import style from "./slider.module.css";

const Slider = () => {
  const [count, setcount] = useState(0);
  
  
  let arr = [
    {
      src: "https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-1.jpg&w=1920&q=75",
      bold: "Education helped her loose 30 pounds.",
      txt: "MyFitnessPal gave me a wakeup call to the way i was eating and made things clear what i needed to change.",
      name: " - Stephanie",
    },
    {
      src: "https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-2.jpg&w=1920&q=75",
      bold: "From fast-food addict to mindful eater.",
      txt: "I naturally fell into the concept of mindful eating... it takes 15-20 minutes for the food to hit your stomach, so I started eating slower",
      name: "- Eric",
    },
    {
      src: "https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-3.jpg&w=1920&q=75",
      bold: "She was eager to make a change.",
      txt: "Now, when I have friends starting to run and getting frustrated, I tell the to just stick with it, Eventually you will get faster",
      name: "- Lori",
    },
  ];

  useEffect(() => {
    let timer=setInterval(()=>{
     if(count<arr.length-1){
         setcount(count+1)
     }else{
         setcount(0)
     }
 
    },6000)
   
     return () => {
       clearInterval(timer)
     }
   }, [count])


  let obj=arr[count];


  return (
    <div>
      <div className={style.sldhp}>
        <h1>Victory Stories</h1>
        <p>
          When you reach your goals, our whole community celebrates with you.
          That’s over 200 million members sharing in your victory—using it to
          inspire their own journey.
        </p>
      </div>
     
      <div className={style.sldcar}>
       
          <i className="fa-solid fa-chevron-left" onClick={count<=0?()=>setcount(2):()=>setcount(count-1)}></i>
       
        <div className={style.slider}>
            <div>
              <img src={obj.src} alt="" />
              </div>
              <div className={style.rightofsld}>
                <h1 className={style.sldbold}>{obj.bold}</h1>
                <p className={style.sldtxt}>{obj.txt}</p>
                <div className={style.sldnamediv}>
                    <p>{obj.name}</p>
                </div>
            </div>
        </div>
        
          <i className="fa-solid fa-chevron-right" onClick={count>=2?()=>setcount(0):()=>setcount(count+1)}></i>
       
      </div>
      <div className={style.slddots}>
        <div className={count===0?style.bgblue:style.bggray}></div>
        <div className={count===1?style.bgblue:style.bggray}></div>
        <div className={count===2?style.bgblue:style.bggray}></div>
      </div>
    </div>
  );
};

export default Slider;
