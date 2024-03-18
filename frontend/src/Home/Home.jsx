import React, { useEffect } from "react";
import "./home.css";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import e1 from "../assets/electronics/1.avif";
import e2 from "../assets/electronics/2.jpg";
import e3 from "../assets/electronics/3.jpg";
import f1 from "../assets/fashion/1.jpg";
import f2 from "../assets/fashion/2.webp";
import f3 from "../assets/fashion/3.jpg";
import ho1 from "../assets/home/1.jpg";
import ho2 from "../assets/home/2.jpg";
import ho3 from "../assets/home/3.jpg";
import he1 from "../assets/health/1.jpg";
import he2 from "../assets/health/2.jpeg";
import he3 from "../assets/health/3.jpg";
import AOS from "aos";
import { CarouselComp } from "../Carousel/CarouselComp";
export const Home = () => {
  return (
    <div className="home-container">
      <div>
        <CarouselComp></CarouselComp>
      </div>
      <div className="why-container">
        <h2 className="text-primary" data-aos="fade-down">
          Why Choose Us?
        </h2>
        <ul className="why-list-container" data-aos="fade-in">
          <li>
            <span> Extensive Product Range:</span> From electronics and fashion
            to home decor and wellness products, we have everything you need
            under one roof.
          </li>
          <li>
            <span> Quality Assurance:</span> We source our products from trusted
            suppliers to ensure that you receive only the best quality items.
          </li>
          <li>
            <span>Easy Navigation:</span> Our user-friendly website interface
            makes it simple for you to browse, compare, and purchase products
            effortlessly.
          </li>
          <li>
            <span>Secure Payment Options:</span> We offer multiple secure
            payment methods to ensure a safe and hassle-free checkout process.
          </li>
          <li>
            <span>Fast Shipping: </span> We strive to deliver your orders
            quickly and efficiently, so you can enjoy your purchases without
            delay.
          </li>
        </ul>
      </div>
      <div className="category-container">
        <h3 className="text-primary">Explore Our Categories: </h3>
        <br />
        <br />
        <ul className="d-flex flex-column align-items-center">
          <li className="d-flex align-items-center flex-column gap-5">
            <h5>
              Electronics: Discover the latest gadgets and tech accessories to
              enhance your digital lifestyle.
            </h5>
            <div style={{ width: 500 }} data-aos="flip-up">
              <Carousel>
                <div className="home-slider-container">
                  <img src={e1} style={{ borderRadius: 20 }} />
                </div>
                <div>
                  <img src={e2} style={{ borderRadius: 20 }} />
                </div>
                <div>
                  <img src={e3} style={{ borderRadius: 20 }} />
                </div>
              </Carousel>
            </div>
          </li>
          <li className="d-flex align-items-center flex-column gap-5">
            <h5>
              Fashion: Stay stylish with our trendy clothing, footwear, and
              accessories for all occasions.
            </h5>
            <div style={{ width: 500 }} data-aos="flip-up">
              <Carousel>
                <div className="home-slider-container">
                  <img src={f1} style={{ borderRadius: 20 }} />
                </div>
                <div>
                  <img src={f2} style={{ borderRadius: 20 }} />
                </div>
                <div>
                  <img src={f3} style={{ borderRadius: 20 }} />
                </div>
              </Carousel>
            </div>
          </li>
          <li className="d-flex align-items-center flex-column gap-5">
            <h5>
              Home & Living: Beautify your space with our collection of home
              decor, furniture, and kitchen essentials.
            </h5>
            <div style={{ width: 500 }} data-aos="flip-up">
              <Carousel>
                <div>
                  <img src={ho1} style={{ borderRadius: 20 }} />
                </div>
                <div>
                  <img src={ho2} style={{ borderRadius: 20 }} />
                </div>
                <div>
                  <img src={ho3} style={{ borderRadius: 20 }} />
                </div>
              </Carousel>
            </div>
          </li>
          <li className="d-flex align-items-center flex-column gap-5">
            <h5>
              Health & Wellness: Take care of yourself with our range of
              wellness products, fitness equipment, and nutritional supplements.
            </h5>
            <div style={{ width: 500 }} data-aos="flip-up">
              <Carousel>
                <div>
                  <img src={he1} style={{ borderRadius: 20 }} />
                </div>
                <div>
                  <img src={he2} style={{ borderRadius: 20 }} />
                </div>
                <div>
                  <img src={he3} style={{ borderRadius: 20 }} />
                </div>
              </Carousel>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
