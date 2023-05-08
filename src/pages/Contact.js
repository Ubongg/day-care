import React from "react";
import Background from "../components/Background";
import curly from "../assets/curlylines.png";
import "../styles/Contact.css";
import Fade from "react-reveal/Fade";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact">
      <Background header={"Contact"} page={"Contact"} />
      <div className="inquire">
        <div className="home-about-col1">
          <h3>Quick Inquire</h3>
          <div className="home-about-col1-imgBx">
            <img src={curly} alt="" />
          </div>
        </div>
        <form action="">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
          ></textarea>
          <button type="submit">Submit Now</button>
        </form>
      </div>
      <div className="our-info">
        <div className="home-about-col1">
          <h3>Get In Touch</h3>
          <div className="home-about-col1-imgBx">
            <img src={curly} alt="" />
          </div>
        </div>
        <div className="infos">
          <Fade left>
            <div className="info">
              <div className="iconBx" style={{ background: "#ffde76" }}>
                <FaPhoneAlt />
              </div>
              <h3>Phone</h3>
              <p>+2348038038030</p>
            </div>
          </Fade>
          <Fade right>
            <div className="info">
              <div className="iconBx" style={{ background: "#f08aa2" }}>
                <MdEmail />
              </div>
              <h3>Email</h3>
              <p>lovedaycare@gmail.com</p>
            </div>
          </Fade>
          <Fade left>
            <div className="info">
              <div className="iconBx" style={{ background: "#b97eba" }}>
                <MdLocationOn />
              </div>
              <h3>Address</h3>
              <p>Osongama Estate, Uyo</p>
            </div>
          </Fade>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
