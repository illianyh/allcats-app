import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Allcats_logo.svg";
import { ReactComponent as HomeLogo } from "../assets/Allcats_home.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/cat-delivery">Cat delivery</Link>
            </li>
            <li>
              <Link to="/book-visit">Book a visit</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/">
                <HomeLogo />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
