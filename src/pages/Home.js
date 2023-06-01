import React from "react";
import { NavLink } from "react-router-dom";
import hero from "../assets/hero3.webp";
import lf from "../assets/l&f.png";
import hm from "../assets/hm.png";
import et from "../assets/et.png";
import pa from "../assets/pa.png";
import curly from "../assets/curlylines.png";
import curlyw from "../assets/curlyw.png";
import kc from "../assets/kc.png";
import fds from "../assets/fds.png";
import qt from "../assets/qt.png";
import pa2 from "../assets/pa2.png";
import lmr from "../assets/lmr.png";
import about from "../assets/landlead.png";
import parent1 from "../assets/parent1.png";
import parent2 from "../assets/parent2.png";
import parent3 from "../assets/parent3.png";
import st from "../assets/st.png";
import ht from "../assets/ht.png";
import at from "../assets/at.png";
import "../styles/Home.css";
import { FaRegClock } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import Imgslider from "../components/Imgslider";
import BlogSlider from "../components/BlogSlider";
import Footer from "../components/Footer";

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
        <div className="box lf">
          <div className="homeSec1ImgBx">
            <img src={lf} alt="" />
          </div>
          <h3>Learning & Fun</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="box hm">
          <div className="homeSec1ImgBx">
            <img src={hm} alt="" />
          </div>
          <h3>Healthy Meal</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="box et">
          <div className="homeSec1ImgBx">
            <img src={et} alt="" />
          </div>
          <h3>Expert Teacher</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="box pa">
          <div className="homeSec1ImgBx">
            <img src={pa} alt="" />
          </div>
          <h3>Play Area</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
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
        <Imgslider />
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
        <div className="home-eventBxs">
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
      </div>
      <div className="home-plan">
        <div className="home-about-col1">
          <h6>Plan</h6>
          <h3>Our Daycare Plans</h3>
          <div className="home-about-col1-imgBx">
            <img src={curly} alt="" />
          </div>
        </div>
        <div className="textBxs">
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
      <div className="home-testimonials">
        <div className="home-about-col1">
          <h6>Testimonials</h6>
          <h3>What Parents Say</h3>
          <div className="home-about-col1-imgBx">
            <img src={curlyw} alt="" />
          </div>
        </div>
        <div className="textBxs">
          <div className="textBx">
            <div className="imgBx">
              <img src={parent1} alt="" />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              dignissimos ea nam veritatis natus veniam amet reprehenderit non,
              aperiam modi!
            </p>
            <h3>John Doe</h3>
          </div>
          <div className="textBx">
            <div className="imgBx">
              <img src={parent2} alt="" />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              dignissimos ea nam veritatis natus veniam amet reprehenderit non,
              aperiam modi!
            </p>
            <h3>Josh Buttler</h3>
          </div>
          <div className="textBx">
            <div className="imgBx">
              <img src={parent3} alt="" />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              dignissimos ea nam veritatis natus veniam amet reprehenderit non,
              aperiam modi!
            </p>
            <h3>Mark Smith</h3>
          </div>
        </div>
      </div>
      <div className="home-member">
        <div className="home-about-col1">
          <h6>Member</h6>
          <h3>Our Staff</h3>
          <div className="home-about-col1-imgBx">
            <img src={curly} alt="" />
          </div>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="imgBx">
              <img src={st} alt="" />
            </div>
            <h3>Angelina Kapry</h3>
            <p>Senior Teacher</p>
            <div className="socials">
              <span>
                <TiSocialFacebook />
              </span>
              <span>
                <TiSocialTwitter />
              </span>
              <span>
                <TiSocialGooglePlus />
              </span>
              <span>
                <TiSocialLinkedin />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={ht} alt="" />
            </div>
            <h3>Martin Luther</h3>
            <p>Head Teacher</p>
            <div className="socials">
              <span>
                <TiSocialFacebook />
              </span>
              <span>
                <TiSocialTwitter />
              </span>
              <span>
                <TiSocialGooglePlus />
              </span>
              <span>
                <TiSocialLinkedin />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={at} alt="" />
            </div>
            <h3>Mrs Barbara</h3>
            <p>Assistant Teacher</p>
            <div className="socials">
              <span>
                <TiSocialFacebook />
              </span>
              <span>
                <TiSocialTwitter />
              </span>
              <span>
                <TiSocialGooglePlus />
              </span>
              <span>
                <TiSocialLinkedin />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-blog">
        <div className="home-about-col1">
          <h6>Latest News</h6>
          <h3>Latest Blog</h3>
          <div className="home-about-col1-imgBx">
            <img src={curly} alt="" />
          </div>
        </div>
        <BlogSlider />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
