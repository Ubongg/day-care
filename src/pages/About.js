import React from "react";
import Background from "../components/Background";
import "../styles/Home.css";
import "../styles/About.css";
import curly from "../assets/curlylines.png";
import bsit from "../assets/bsit.png";
import bs from "../assets/bs.png";
import ftn from "../assets/ftn.png";
import srook from "../assets/srook.jpeg";
import mmerr from "../assets/mmerr.jpeg";
import sshe from "../assets/sshe.jpeg";
import { NavLink } from "react-router-dom";
import about from "../assets/about.png";
import Fade from "react-reveal/Fade";
import { TiTick } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import Footer from "../components/Footer";

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
      <div className="about-sec">
        <div className="img-col"></div>
        <div className="text-col">
          <h3>Daycare Is Great Kids Make It Special</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            incididunt labore et dolore magna aliqua..
          </p>
          <div className="ticks">
            <div className="tick">
              <span className="icon">
                <TiTick />
              </span>
              <span className="text">Our Job Is To Make Yur Life Easier.</span>
            </div>
            <div className="tick">
              <span className="icon">
                <TiTick />
              </span>
              <span className="text">
                Experience Childcare As It Should Be.
              </span>
            </div>
            <div className="tick">
              <span className="icon">
                <TiTick />
              </span>
              <span className="text">
                Daycare Is Great....Children Make It Special.
              </span>
            </div>
            <div className="tick">
              <span className="icon">
                <TiTick />
              </span>
              <span className="text">We Are Childcare Professional.</span>
            </div>
            <div className="tick">
              <span className="icon">
                <TiTick />
              </span>
              <span className="text">Your Childcare Wish Just Came True.</span>
            </div>
            <div className="tick">
              <span className="icon">
                <TiTick />
              </span>
              <span className="text">Experience Childcare As It Should Be</span>
            </div>
          </div>
          <button>
            <NavLink to="/blog">Discover More</NavLink>
          </button>
        </div>
      </div>
      <div className="about-babysitter">
        <div className="home-about-col1">
          <h6>Babysitter</h6>
          <h3>Our Babysitter</h3>
          <div className="home-about-col1-imgBx">
            <img src={curly} alt="" />
          </div>
        </div>
        <div className="babysitters">
          <div className="babysitter">
            <div className="imgBx">
              <img src={srook} alt="" />
            </div>
            <h3>Steven Rookery</h3>
            <div className="icons">
              <span className="icon1">
                <TiSocialFacebook />
              </span>
              <span className="icon2">
                <TiSocialTwitter />
              </span>
              <span className="icon3">
                <TiSocialLinkedin />
              </span>
            </div>
          </div>
          <div className="babysitter">
            <div className="imgBx">
              <img src={mmerr} alt="" />
            </div>
            <h3>Malisa Merry</h3>
            <div className="icons">
              <span className="icon1">
                <TiSocialFacebook />
              </span>
              <span className="icon2">
                <TiSocialTwitter />
              </span>
              <span className="icon3">
                <TiSocialLinkedin />
              </span>
            </div>
          </div>
          <div className="babysitter">
            <div className="imgBx">
              <img src={sshe} alt="" />
            </div>
            <h3>Stewart Shery</h3>
            <div className="icons">
              <span className="icon1">
                <TiSocialFacebook />
              </span>
              <span className="icon2">
                <TiSocialTwitter />
              </span>
              <span className="icon3">
                <TiSocialLinkedin />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
