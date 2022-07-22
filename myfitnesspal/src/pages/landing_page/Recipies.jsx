import React from 'react'
import style from "./recipies.module.css"
const Recipies = () => {
    let arr=[

        {src:"https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75",txt:"15 Make-Ahead Breakfasts Under 300 Calories",tag:"MyFitnessPal Blog"},
        {src:"https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75",txt:"The Problem With Cheat Days",tag:"MyFitnessPal Blog"},
        {src:"https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75",txt:"Essential Guide to Getting Moving",tag:"MyFitnessPal Blog"},

    ]
  return (
    <div className={style.rcpmain}>
        <div className={style.rcphp}>
            <h1>Recipes & Inspiration</h1>
            <p>Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts.</p>
        </div>
        <div className={style.rcpgrd}>
            {arr.map((e,i)=>(
                <div key={i} className={style.grdcon}>
                    <img src={e.src} alt="" />
                    <div className={style.rcptt}>
                        <h3>{e.txt}</h3>
                        <p>{e.tag}</p>
                    </div>
                    

                </div>
            ))}
        </div>

    </div>
  )
}

export default Recipies