import React from "react";
import Background from "../components/Background";
import "../styles/Home.css";
import "../styles/About.css";
import curly from "../assets/curlylines.png";
import kc from "../assets/kc.png";
import fds from "../assets/fds.png";
import qt from "../assets/qt.png";
import pa2 from "../assets/pa2.png";
import lmr from "../assets/lmr.png";
import { NavLink } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <div className="pricing">
      <Background header={"Pricing Plans"} page={"Pricing"} />
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
              <NavLink to="/profile">Choose Plan</NavLink>
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
              <NavLink to="/profile">Choose Plan</NavLink>
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
              <NavLink to="/profile">Choose Plan</NavLink>
            </button>
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
      <div className="home-features" style={{ background: "none" }}>
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
      <Footer />
    </div>
  );
};

export default Pricing;
