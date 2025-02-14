import React, { useState } from "react";
import "./Slideshow.css"; // Import the external CSS file
import codeImg from "../Assesets/codequast.png"; 
import img from "../Assesets/codequast.png";

const slides = [
  codeImg,
  "https://via.placeholder.com/500x300/E52E71/FFFFFF?text=Slide+2",
  "https://via.placeholder.com/500x300/4CAF50/FFFFFF?text=Slide+3",
  "https://via.placeholder.com/500x300/2196F3/FFFFFF?text=Slide+4",
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div style={styles.container}>
      <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((image, i) => (
          <div className="slide" key={i}>
            <img src={image} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;
      
      </button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "500px",
    height: "300px",
    overflow: "hidden",
    margin: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default Slideshow;