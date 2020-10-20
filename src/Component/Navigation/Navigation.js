import React from "react";
import "./Navigation.css";
import Logo from "../../Image/Logo.png";
import { Link } from "react-router-dom";
const Navigation = ({ color }) => {
  const hamburger = () => {
    document
      .getElementsByClassName("navigation__right")[0]
      .classList.toggle("hamburger__active");
    document.getElementsByClassName("hamburger")[0].classList.toggle("toggle");
    document.querySelector("body").classList.toggle("no__scroll");
  };
  return (
    <div className="navigation">
      <div className="navigation__left" data-aos="zoom-in">
        <Link to="/" onClick={hamburger}>
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navigation__right" style={{ color: color }}>
        <Link to="/work" className={color === "black" ? "link2" : "link"} onClick={hamburger}>
          Work
        </Link>
        <Link to="/about" className={color === "black" ? "link2" : "link"} onClick={hamburger}>
          About
        </Link>
        <a className={color === "black" ? "link2" : "link"} to="/home/#contact" href="/home/#contact">Contact</a>
      </div>
      <div className="hamburger" onClick={hamburger}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Navigation;
