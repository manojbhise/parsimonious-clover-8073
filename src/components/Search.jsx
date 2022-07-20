import React from 'react'
import style from "./search.module.css"

const Search = () => {
  return (
    <div className={style.srchcar}>
        <div>
            <div className={style.srchwhiteline}></div>
            <div className={style.sh1car}>
                <h1>Search over 11 million foods in our database.</h1>
            </div>
            <div className={style.spcar}>
                <p>What's in your food? Learn about calorie count, nutrition information and serving size.</p>
            </div>
            <div className={style.searchbarcar}>
                <input type="text" placeholder='Get the nutrition for any food, like an apple' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
           
        </div>
    </div>
  )
}

export default Search