import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav.css"; // Import the CSS file
import myImage from '../images/happyinclogo.jpg';

function Nav({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="nav">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logo--img"
            src={myImage}
            alt=""
          />
        </Link>
      </div>
      <div className="header__links">
        <Link to="/">Model S</Link>
        <Link to="/">Model 3</Link>
        <Link to="/">Model X</Link>
        <Link to="/">Model Y</Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Pannels</Link>
      </div>
      <div className="header__right">
        <Link to="/" className={isMenuOpen && "headr__link--hidden"}>Shop</Link>
        <Link to="/login" className={isMenuOpen && "headr__link--hidden"}>Tesla Account</Link>
      
      </div>
    </div>
  );
}

export default Nav;
