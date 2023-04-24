import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import hero from "../assets/hero3.webp";
import lf from "../assets/l&f.png";
import hm from "../assets/hm.png";
import et from "../assets/et.png";
import pa from "../assets/pa.png";
import curly from "../assets/curlylines.png";
import kc from "../assets/kc.png";
import fds from "../assets/fds.png";
import qt from "../assets/qt.png";
import pa2 from "../assets/pa2.png";
import lmr from "../assets/lmr.png";
import nm from "../assets/nm.png";
import nur from "../assets/nur.png";
import ppa from "../assets/ppa.png";
import "../styles/Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { FaRegClock } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Home = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const slider = useRef(Slider);

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
      <div className="home-features">
        <div className="home-about-col1">
          <h6>Features</h6>
          <h3>Why Choose Us</h3>
          <div className="home-about-col1-imgBx">
            <img src={curly} alt="" />
          </div>
        </div>
        <div className="home-features-reasons">
          <div className="home-features-reason">
            <div className="imgBx one">
              <img src={kc} alt="" />
            </div>
            <h3>Knowledge Classes</h3>
          </div>
          <div className="home-features-reason">
            <div className="imgBx two">
              <img src={fds} alt="" />
            </div>
            <h3>Full Day Session</h3>
          </div>
          <div className="home-features-reason">
            <div className="imgBx three">
              <img src={qt} alt="" />
            </div>
            <h3>Qualified Teacher</h3>
          </div>
          <div className="home-features-reason">
            <div className="imgBx four">
              <img src={pa2} alt="" />
            </div>
            <h3>Play Area</h3>
          </div>
          <div className="home-features-reason">
            <div className="imgBx five">
              <img src={lmr} alt="" />
            </div>
            <h3>Last Minute Request</h3>
          </div>
        </div>
      </div>
      <div className="home-program">
        <div className="home-about-col1">
          <h6>Program</h6>
          <h3>Our Class Programs</h3>
          <div className="home-about-col1-imgBx">
            <img src={curly} alt="" />
          </div>
        </div>
        <Carousel {...settings}>
          <Wrap>
            <div className="imgBx">
              <img src={nur} alt="" />
            </div>
            <div className="textBx">
              <h3>Nursery</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione modi nisi consequatur.
              </p>
            </div>
            <div className="details">
              <span>
                <strong>Age:</strong>2-4 years
              </span>
              <span>
                <strong>Time:</strong>9:00-11:00
              </span>
              <span>
                <strong>Price:</strong>$20
              </span>
            </div>
          </Wrap>
          <Wrap>
            <div className="imgBx">
              <img src={nm} alt="" />
            </div>
            <div className="textBx">
              <h3>Numbers Matching</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione modi nisi consequatur.
              </p>
            </div>
            <div className="details">
              <span>
                <strong>Age:</strong>2-4 years
              </span>
              <span>
                <strong>Time:</strong>9:00-11:00
              </span>
              <span>
                <strong>Price:</strong>$20
              </span>
            </div>
          </Wrap>
          <Wrap>
            <div className="imgBx">
              <img src={ppa} alt="" />
            </div>
            <div className="textBx">
              <h3>Paper Plates Art</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione modi nisi consequatur.
              </p>
            </div>
            <div className="details">
              <span>
                <strong>Age:</strong>2-4 years
              </span>
              <span>
                <strong>Time:</strong>9:00-11:00
              </span>
              <span>
                <strong>Price:</strong>$20
              </span>
            </div>
          </Wrap>
        </Carousel>
        <button>
          <NavLink to="/about">View Details</NavLink>
        </button>
      </div>
      <div className="home-event">
        <div className="home-about-col1">
          <h6>Event</h6>
          <h3>Upcoming Events</h3>
          <div className="home-about-col1-imgBx">
            <img src={curly} alt="" />
          </div>
        </div>
        <div className="home-eventBx">
          <div className="time">
            <span className="icon">
              <FaRegClock />
            </span>
            <span>11.00am</span>
          </div>
          <div className="textBx">
            <h3>Math Classes</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <NavLink to="/about">
              <span>Read More</span>
              <span className="icon">
                <FiChevronRight />
              </span>
            </NavLink>
          </div>
        </div>
        <div className="home-eventBx">
          <div className="time">
            <span className="icon">
              <FaRegClock />
            </span>
            <span>11.30am</span>
          </div>
          <div className="textBx">
            <h3>Imagination Classes</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <NavLink to="/about">
              <span>Read More</span>
              <span className="icon">
                <FiChevronRight />
              </span>
            </NavLink>
          </div>
        </div>
        <div className="home-eventBx">
          <div className="time">
            <span className="icon">
              <FaRegClock />
            </span>
            <span>12.00am</span>
          </div>
          <div className="textBx">
            <h3>Happiness is Joy of Learning</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <NavLink to="/about">
              <span>Read More</span>
              <span className="icon">
                <FiChevronRight />
              </span>
            </NavLink>
          </div>
        </div>
        <div className="home-eventBx">
          <div className="time">
            <span className="icon">
              <FaRegClock />
            </span>
            <span>12.30am</span>
          </div>
          <div className="textBx">
            <h3>E-Learning Media</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <NavLink to="/about">
              <span>Read More</span>
              <span className="icon">
                <FiChevronRight />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="home-plan">
        <div className="home-about-col1">
          <h6>Plan</h6>
          <h3>Our Daycare Plans</h3>
          <div className="home-about-col1-imgBx">
            <img src={curly} alt="" />
          </div>
        </div>
        <div className="textBx one">
          <h3>Monthly Plan</h3>
          <h2>$35</h2>
          <p>9am - 3pm care</p>
          <p>3 meals a day</p>
          <p>Science Classes</p>
          <p>2 Educators</p>
          <button>
            <NavLink to="/pricing">Choose Plan</NavLink>
          </button>
        </div>
        <div className="textBx two">
          <h3>Weekly Plan</h3>
          <h2>$55</h2>
          <p>9am - 3pm care</p>
          <p>3 meals a day</p>
          <p>Science Classes</p>
          <p>2 Educators</p>
          <button>
            <NavLink to="/pricing">Choose Plan</NavLink>
          </button>
        </div>
        <div className="textBx three">
          <h3>Daily Plan</h3>
          <h2>$65</h2>
          <p>9am - 3pm care</p>
          <p>3 meals a day</p>
          <p>Science Classes</p>
          <p>2 Educators</p>
          <button>
            <NavLink to="/pricing">Choose Plan</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

const Carousel = styled(Slider)`
  margin: 20px;

  ul li button {
    &:before {
      display: none;
    }
  }

  li.slick-active button::before {
    color: #fff;
  }

  .slick-list {
    overflow: none;
  }

  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;

  border: 1px solid rgb(224, 222, 222);

  img {
    // border: 4px solid transparent;
    // border-radius: 4px;
    width: 100%;
    height: 100%;
    // box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    //   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
  }
  .textBx {
    padding: 20px 20px 30px 20px;
    border-bottom: 1px solid rgb(224, 222, 222);
  }
  .textBx h3 {
    padding-bottom: 10px;
    color: var(--primaryColor);
    font-size: 1.3rem;
  }
  .textBx p {
    line-height: var(--line-height);
  }
  .details {
    padding: 10px 20px;
  }
  .details span {
    padding: 0 10px 0 0;
    font-size: 0.9rem;
  }
  .details span strong {
    padding: 0 5px 0 0;
    color: var(--primaryColor);
  }
`;
