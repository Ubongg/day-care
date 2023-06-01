import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import "../styles/Topbar.css";

const Topbar = () => {
  return (
    <nav className="topbar">
      <div className="topbar-wrap">
        <div className="info">
          <p>
            <span className="icon">
              <FaRegClock />
            </span>
            <span className="text">Mon-Fri 9.00-17.00</span>
          </p>
          <p>
            <span className="icon">
              <FaPhoneAlt />
            </span>
            <span className="text">+2348038038030</span>{" "}
          </p>
          <p>
            <span className="icon">
              <HiMail />
            </span>
            <span className="text">info@gmail.com</span>
          </p>
        </div>
        <div className="topLinks">
          {/* <span className="icon">
          <FaFacebookF />
        </span>
        <span className="icon">
          <FaTwitter />
        </span>
        <span className="icon">
          <FaInstagramSquare />
        </span>
        <span className="icon">
          <FaLinkedinIn />
        </span> */}
          <span className="login">
            <NavLink to="/profile">Profile</NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
