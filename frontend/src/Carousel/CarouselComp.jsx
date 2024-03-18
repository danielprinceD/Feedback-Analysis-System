import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import "./carousel.css";
import Slider from "react-slick";
import luffy from "../assets/toy.png";
import smartt from "../assets/smartt.png";
import sma from "../assets/sma.png";
import { NavLink } from "react-router-dom";
import ear from "../assets/ear.png";
import AOS from "aos";
import "aos/dist/aos.css";
export const CarouselComp = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="carousel-container">
      <div className="carousel-content-container" data-aos="fade-down">
        <p>
          Welcome to BTM Company, your one-stop destination for all your product
          needs! We are a leading online platform dedicated to providing you
          with a seamless shopping experience and a vast array of high-quality
          products at competitive prices
        </p>
        <div>
          <NavLink htmlFor to="/products">
            <button className="btn btn-primary"> Explore</button>
          </NavLink>
        </div>
      </div>
      <div className="slider-conatainer" data-aos="fade-down">
        <Slider {...settings} style={{ width: 400 }}>
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
          <div className="slides-container">
            <img src={luffy} alt="" />
            <h2>Toys</h2>
          </div>
        </Slider>
      </div>
    </div>
  );
};
