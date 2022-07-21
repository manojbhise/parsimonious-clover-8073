import React, { useState } from "react";
//import "./home.css";
//import styles from "./home.module.css";
//import Carousel from "react-elastic-carousel"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderdata from "./db.json";
//className={styles.slider2}
//import data from "./data.json";
import { FaBookmark } from "react-icons/fa";

export const Sliders = () => {
  const [data, Setdata] = useState(sliderdata.data);
  
  console.log(sliderdata.data);

  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    indicators: true,
    slidesToScroll: 1,
   
  };

  return (
    <div>
      <div style={{width:"550px", height:'250px'}} >
        <Slider {...settings}>
          {data.map((el) => {
            return (
              <>
               <div >
                <img src={el.img} alt={"background"}/>
               </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
