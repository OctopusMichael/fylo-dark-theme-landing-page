import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Sign In </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
