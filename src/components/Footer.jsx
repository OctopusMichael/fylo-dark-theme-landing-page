import React, { useState } from "react";
import logo from "../images/logo.svg";
import direction from "../images/icon-location.svg";
import mobile from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import { validateEmail } from "./function";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

const Footer = () => {
  const [error, setError] = useState("");
  const [inputEmail, setInputEmail] = useState("");




 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputEmail.trim() === "" ) {
      setError("This input can't be blank");
      return;
    }else{
      setError("")
    }
    
    if(validateEmail(inputEmail) === false){
      setError("Please enter a valid email address");
    }
  };

  const handleChange = (e) => {
    setInputEmail(e.target.value);
    
  };

  return (
    <footer>
      <div className="box-contact">
        <form onSubmit={handleSubmit}>
          <h1>Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className="box-input">
            <input
              onChange={handleChange}
              value={inputEmail}
              type="text"
              placeholder="example@gmail.com"
            />
            <button> Get Started for Free</button>
            {error && <div className="error"> <p>{error}</p> </div>}
          </div>
        </form>
      </div>
      <div className="logo-footer">
        <a href="#">
          {" "}
          <img src={logo} alt="logo-footer" />{" "}
        </a>
      </div>
      <div className="menu-footer">
        <div className="direction">
          <img src={direction} alt="direction" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="contact">
          <ul>
            <li>
              {" "}
              <img src={mobile} alt="number-mobile" /> +1-543-123-4567
            </li>
            <li>
              {" "}
              <img src={email} alt="email" /> example@fylo.com
            </li>
          </ul>
        </div>
        <div className="about-us">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
          <h1></h1>
        </div>
        <div className="social-networks">
          <a href="#">
            {" "}
            <IoLogoFacebook />{" "}
          </a>
          <a href="#">
            {" "}
            <IoLogoTwitter />{" "}
          </a>
          <a href="#">
            {" "}
            <IoLogoInstagram />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
