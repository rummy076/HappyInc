import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css"; // Import the CSS file

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__logo">
          <Link className="nav__logo" to="/">Happy Inc.</Link>
        </div>
        <ul className="nav__links">
          <li className="nav__list">
            <NavLink to="/" exact activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li className="nav__list">
            <NavLink to="/about" activeClassName="active">
              ABOUT
            </NavLink>
          </li>
          <li className="nav__list">
            <NavLink to="/happyblog" activeClassName="active">
              HAPPYBLOG
            </NavLink>
          </li>
          <li className="nav__list">
            <NavLink to="/blog" activeClassName="active">
              BLOG
            </NavLink>
          </li>
          <li className="nav__list">
            <NavLink to="/contact" activeClassName="active">
              CONTACT
            </NavLink>
          </li>
          <li className="nav__list">
            <NavLink to="/book-a-session" activeClassName="active">
              BOOK A SESSION
            </NavLink>
          </li>
          <li className="nav__list">
            <NavLink to="/join-us" activeClassName="active">
              JOIN US
            </NavLink>
          </li>
          <li className="nav__list">
            <NavLink to="/how-to" activeClassName="active">
              HOW TO
            </NavLink>
          </li>
        </ul>
      </div>
   
    </nav>

  );
}

export default Nav;
