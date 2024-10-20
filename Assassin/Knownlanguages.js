import React, { useEffect, useState } from "react";

const Knownlanguages = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  // Hexagon background generation (kept as is)
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

  // Trigger progress bar animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".experience-section");
      if (element.getBoundingClientRect().top < window.innerHeight && !animationTriggered) {
        setAnimationTriggered(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationTriggered]);

  // Define languages and their corresponding percentages
  const languages = [
    { name: "C Language", percentage: 90 },
    { name: "HTML", percentage: 10 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 90 },
    { name: "Custom Progress", percentage: 75 },
  ];

  return (
    <div className="hexagon-container">
      <div className="pattern"></div>
      <div className="text-overlay">Known Languages</div>
      <div>
        <section className="experience-section">
          <div className="container12">
            <div className="text-overlay1">
              <div className="experience-items" style={{display:"flex"}}>
                {languages.map((language, index) => (
                  <div className="experience-item" key={index}>
                    <div className="experience-info">
                      <p>{language.name}</p>
                      <p>{language.percentage}%</p>
                    </div>
                    <div className="progress-line">
                      <span
                        className="progress-bar"
                        style={{
                          width: animationTriggered ? `${language.percentage}%` : "0%",
                          background: "#4caf50",  // Added background color for visibility
                          display: "block",
                          height: "100%",
                          transition: "width 1.5s ease-in-out",  // Smooth transition
                        }}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Knownlanguages;
