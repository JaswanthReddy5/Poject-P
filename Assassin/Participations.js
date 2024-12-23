import React, { useEffect } from "react";

const Participations = () => {
  useEffect(() => {
    const patternElement = document.getElementsByClassName("pattern");
    const hexagonWidth = 100;
    const hexagonHeight = 100;
    const rows = Math.ceil(window.innerHeight / (hexagonHeight * 0.865)) + 1;
    const cols = Math.ceil(window.innerWidth / hexagonWidth) + 1;

    for (let k = 0; k < patternElement.length; k++) {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const hexagon = document.createElement("div");
          hexagon.className = "hexagon";
          hexagon.style = `
            top: ${i * hexagonHeight * 0.865}px;
            left: ${j * hexagonWidth + (i % 2 === 0 ? 0 : hexagonWidth / 2)}px;
          `;
          patternElement[k].appendChild(hexagon);
        }
      }
    }
  }, []);

  return (
    <div className="hexagon-container">
      <div className="pattern"></div>
      <div className="infinite-slider">
        <div className="slide1">
          <img
            src="Cat03.jpg"
            alt="Slide 1"
            className="slide-image"
          />
          <p className="description">This is a description for Slide 1.jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
        </div>
        <div className="slide2">
          <img
            src="Cat04.jpg"
            alt="Slide 2"
            className="slide-image"
          />
          <p className="description">This is a description for Slide 2.</p>
        </div>
        <div className="slide3">
          <img
            src="Cat05.jpg"
            alt="Slide 3"
            className="slide-image"
          />
          <p className="description">This is a description for Slide 3.</p>
        </div>
        <div className="slide4">
          <img
            src="Cat06.jpg"
            alt="Slide 4"
            className="slide-image"
          />
          <p className="description">This is a description for Slide 4.</p>
        </div>
      </div>
    </div>
  );
};

export default Participations;
