import React, { useState } from "react";
import "./index.css";
const data = [
  "https://wallhalla.com/thumbs/6",
  "https://wallhalla.com/thumbs/16",
  "https://wallhalla.com/thumbs/40",
  "https://wallhalla.com/thumbs/13",
];
const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handlePreviousClick = () => {
    if (activeImageIndex === 0) {
      setActiveImageIndex(data.length - 1);
    } else {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };
  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };
  return activeImageIndex !== undefined ? (
    <div className="main">
      <button className="btn1" onClick={handlePreviousClick}>
        Previous
      </button>
      <div>
        {data.map((url, index) => (
          <img
            className={`imgg ${
              index === activeImageIndex ? "display-block" : "display-none"
            }`}
            src={url}
            alt="Not able to download url"
          />
        ))}
      </div>
      <button className="btn2" onClick={handleNextClick}>
        Next
      </button>
    </div>
  ) : null;
};

export default ImageSlider;
