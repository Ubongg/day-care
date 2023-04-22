import React from "react";
import { NavLink } from "react-router-dom";
import hero from "../assets/hero3.webp";
import lf from "../assets/l&f.png";
import hm from "../assets/hm.png";
import et from "../assets/et.png";
import pa from "../assets/pa.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="heroText">
          <h1>A Warm Nursing Environment</h1>
          <p>
            We understand the importance of finding quality day care center for
            little ones.
          </p>
          <button>
            <NavLink to="/login">Join Us</NavLink>
          </button>
        </div>
        <div className="heroImg">
          <div className="heroImgBx">
            <img src={hero} alt="hero img" />
          </div>
        </div>
      </div>
      <div className="homeSec1">
        <div className="box">
          <div className="homeSec1ImgBx">
            <img src={lf} alt="" />
          </div>
          <h3>Learning & Fun</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="box">
          <div className="homeSec1ImgBx">
            <img src={hm} alt="" />
          </div>
          <h3>Healthy Meal</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="box">
          <div className="homeSec1ImgBx">
            <img src={et} alt="" />
          </div>
          <h3>Expert Teacher</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="box">
          <div className="homeSec1ImgBx">
            <img src={pa} alt="" />
          </div>
          <h3>Play Area</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
