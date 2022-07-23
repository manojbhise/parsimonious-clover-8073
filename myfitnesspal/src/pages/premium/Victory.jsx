import React, { useState } from "react";
import Slidedata from "./sliderdata.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "../../styling/Victory.module.css";
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';
const Victory = () => {
  const [getdata, Setdata] = useState(Slidedata.data);
  console.log(Slidedata.data);
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    indicators: true,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div  >
      
        <Slider {...settings}>
          {getdata.map((el, index) => {
            return (
              <div key={index} className={Styles.card1}>
                  <div key={index} className={Styles.card2}>
                <img
                  className={Styles.card1img}
                  src={el.img}
                  alt={"background"}
                />
                <div className={Styles.card1div}>
                  <h4 className={Styles.card1h4}>{el.h5}</h4>
                  <p className={Styles.card1p}>{el.p}</p>
                </div>
                </div>
              </div>
            );
          })}
        </Slider>
       
      </div>
     
    </div>
    
  );
};

export default Victory;
