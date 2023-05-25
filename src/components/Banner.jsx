import React from "react";
import Bimg from "../images/illustration-stay-productive.png";
import arrow from "../images/icon-arrow.svg";

const Banner = () => {
  return (
    <div className="section-banner">
      <div className="banner-img">
        <img src={Bimg} alt="Banner" />
      </div>
      <div className="banner-text">
        <h1>Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="">
          See how Fylo works <img src={arrow} alt="Arrow" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
