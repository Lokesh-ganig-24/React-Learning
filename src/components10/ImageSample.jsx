import React from "react";


function ImangeSample(){
  return (
    <div className="hero">

      <img 
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="background"
        
        className="hero-img"
      />

      <div className="hero-text">
        <h2>Creative Atmosphere</h2>

        <p>
          Build modern web applications using React.
          Create beautiful user interfaces easily.
        </p>

        <button>Learn More</button>
        <button>Get Started</button>
      </div>

    </div>
  );
}

export default ImangeSample;