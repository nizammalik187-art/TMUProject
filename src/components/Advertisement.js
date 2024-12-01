import React from "react";
import Marquee from "react-fast-marquee";

function Advertisement() {
  return (
    <div className="ad-container">
      <Marquee 
        gradient={false} 
        speed={60} 
        pauseOnHover={true} 
        className="ad-marquee"
      >
        <span className="ad-text">
          🚴‍♂️ Rent the Best Bikes From here and get Flat 100% Off Restaurant Sky High 🚴‍♀️
        </span>
      </Marquee>
    </div>
  );
}

export default Advertisement;
