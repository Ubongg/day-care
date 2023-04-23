import React from "react";
import { NavLink } from "react-router-dom";
import hero from "../assets/hero3.webp";
import lf from "../assets/l&f.png";
import hm from "../assets/hm.png";
import et from "../assets/et.png";
import pa from "../assets/pa.png";
import curly from "../assets/curlylines.png";
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
      <div className="home-about">
        <div className="home-about-col1">
          <h6>About Us</h6>
          <h3>Welcome To The Learning Leader Baby Care</h3>
          <div className="home-about-col1-imgBx">
            <img src={curly} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
        <div className="home-about-col2">
          <div className="home-about-col2-list">
            <li>Supporting the child Personality</li>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="home-about-col2-list">
            <li>Professional & Qualified Teacher</li>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="home-about-col2-list">
            <li>Indoor/Outdoor Games For Kids</li>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="home-about-col2-list">
            <li>Best learning School For Kids</li>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
        <button>
          <NavLink to="/login">Join Us</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Home;
