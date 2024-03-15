import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import "./carousel.css";
import Slider from "react-slick";
import luffy from "../assets/toy.png";
import smartt from "../assets/smartt.png";
import sma from "../assets/sma.png";
import ear from "../assets/ear.png";
export const CarouselComp = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="carousel-container">
      <div className="carousel-content-container">Hello</div>
      <div className="slider-conatainer">
        <Slider {...settings} style={{ width: 400 }}>
          <div className="slides-container">
            <img src={luffy} alt="" />
            <h2>Toys</h2>
          </div>
          <div className="slides-container">
            <img src={smartt} alt="" />
            <h2>Smart Watch</h2>
          </div>
          <div className="slides-container">
            <img src={sma} alt="" />
            <h2>Watch</h2>
          </div>
          <div className="slides-container">
            <img src={ear} alt="" />
            <h2>Headphone</h2>
          </div>
        </Slider>
      </div>
    </div>
  );
};
