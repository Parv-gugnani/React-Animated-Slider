import { useState } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverFlow, Pagination, Navigation } from "swiper";

import slider_image1 from "./assets/images/1.png";
import slider_image2 from "./assets/images/2.png";
import slider_image3 from "./assets/images/3.png";
import slider_image4 from "./assets/images/4.png";
import slider_image5 from "./assets/images/5.png";
import slider_image6 from "./assets/images/6.png";
import slider_image7 from "./assets/images/7.png";

function App() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifiers: 2.5,
        }}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slider_image1} alt="slide-image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image2} alt="slide-image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image3} alt="slide-image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image4} alt="slide-image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image5} alt="slide-image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image6} alt="slide-image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image7} alt="slide-image"></img>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
