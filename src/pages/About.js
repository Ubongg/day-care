import React from "react";
import Background from "../components/Background";
import "../styles/Home.css";
import "../styles/About.css";
import curly from "../assets/curlylines.png";
import bsit from "../assets/bsit.png";
import bs from "../assets/bs.png";
import ftn from "../assets/ftn.png";
import { NavLink } from "react-router-dom";
import about from "../assets/landlead.png";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="about">
      <Background header={"About Us"} page={"About Us"} />
      <div className="home-about">
        <div className="home-about-cont">
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
        <div className="img-cont">
          <div className="imgBx">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
      <div className="about-services">
        <div className="home-about-col1">
          <h6>Service</h6>
          <h3>Our Services</h3>
          <div className="home-about-col1-imgBx">
            <img src={curly} alt="" />
          </div>
        </div>
        <div className="services">
          <div className="service">
            <div className="imgBx">
              <div className="imgBg1"></div>
              <div className="imgBg2"></div>
              <Fade left>
                <img src={bsit} alt="" />
              </Fade>
            </div>
            <div className="textBx">
              <h3>Baby Sitting</h3>
              <p>It is so easy to find a babysitter who suits you best.</p>
            </div>
          </div>
          <div className="service">
            <div className="imgBx">
              <div
                className="imgBg1"
                style={{ backgroundColor: "#e84661" }}
              ></div>
              <div
                className="imgBg2"
                style={{ backgroundColor: "#e8aeb7" }}
              ></div>
              <Fade left>
                <img src={bs} alt="" />
              </Fade>
            </div>
            <div className="textBx">
              <h3 style={{ color: "#e84661" }}>Baby Shower</h3>
              <p>It is so easy to find a babysitter who suits you best.</p>
            </div>
          </div>
          <div className="service">
            <div className="imgBx">
              <div
                className="imgBg1"
                style={{ backgroundColor: "#a393e5" }}
              ></div>
              <div
                className="imgBg2"
                style={{ backgroundColor: "#cbc6e1" }}
              ></div>
              <Fade left>
                <img src={ftn} alt="" />
              </Fade>
            </div>
            <div className="textBx">
              <h3 style={{ color: "#a393e5" }}>Full Time Nanny</h3>
              <p>It is so easy to find a babysitter who suits you best.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
