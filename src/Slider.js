import React, { useState } from "react";
import "./Slider.css";

const images = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png",
  "images/7.png",
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="prev-button">
        &#10094;
      </button>
      <button onClick={nextSlide} className="next-button">
        &#10095;
      </button>
      <div className="slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
    </div>
  );
}

export default Slider;
