import React, { useState } from "react";
import "./Slider.css";

const images = ["1.jpg", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];

function Slider() {
  const [currentIndex, setcurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setcurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setcurrentIndex(newIndex);
  };
}

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

export default Slider;
