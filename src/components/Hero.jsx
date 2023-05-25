import React from "react";
import hero from "../images/illustration-intro.png";

const Hero = () => {
  return (
    <div className="section-hero">
      <div className="hero-img">
        <img src={hero} alt="hero-img" />
      </div>
      <div className="hero-text">
        <h1> All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
