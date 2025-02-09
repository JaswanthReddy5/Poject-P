import React, { useEffect } from "react";
import { useState } from "react";
import img from "../Assesets/dbuglabs.jpg";
import img1 from "../Assesets/iot.png";
import img2 from "../Assesets/code.png";
import img3 from "../Assesets/codequast.png";

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

  const home=()=>{
    const [CERTIFICATE,setcertificate]=useState('CERTIFICATE');
  }

  const onhandleclick=()=>{
    setcertificate(img)
  }
  return (
    <div className="hexagon-container">
      <div className="pattern"></div>
      <div className="infinite-slider">
        <div className="slide1">
        
          <img
            src= {img}
            
            className="slide-image"
          />
          <button className="custom-btn btn-14"  >CERTIFICATE</button>
          {/* <a className="discc">Participating in CodeQuest held by ACM-W SRM</a> */}
        </div>
        <div className="slide2">
          <img
            src={img1}
            alt="Slide 2"
            className="slide-image"
          />
         <a className="discc">Participated in this event</a>
        </div>
        <div className="slide3">
          <img
            src={img2}
            alt="Slide 3"
            className="slide-image"
          />
          <p className="description">This is a description for Slide 3.</p>
        </div>
        <div className="slide4">
          <img
            src={img3}
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
