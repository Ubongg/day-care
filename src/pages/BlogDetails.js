import React from "react";
import Background from "../components/Background";
import { FaUserAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { RxHeart } from "react-icons/rx";
import { FaRegCalendarAlt } from "react-icons/fa";
import bdetails from "../assets/bdetails.jpeg";
import lpost1 from "../assets/lpost1.jpeg";
import lpost2 from "../assets/lpost2.jpeg";
import lpost3 from "../assets/lpost3.jpeg";
import scurly from "../assets/scurly.png";
import { NavLink } from "react-router-dom";
import "../styles/BlogDetails.css";
import Footer from "../components/Footer";

const BlogDetails = () => {
  return (
    <div className="blog-details">
      <Background header={"Blog Details"} page={"Blog"} />
      <div className="blog-details-cont">
        <div className="wrap">
          <div className="left-sec">
            <div className="imgBx">
              <img src={bdetails} alt="" />
            </div>
            <div className="textBx">
              <div className="icons">
                <span className="detail">
                  <span className="icon" style={{ marginTop: "2px" }}>
                    <FaUserAlt />
                  </span>
                  <span className="text">Love</span>
                </span>
                <span className="detail">
                  <span className="icon" style={{ marginTop: "2px" }}>
                    <FaComments />
                  </span>
                  <span className="text">Comments</span>
                </span>
                <span className="detail">
                  <span
                    className="icon"
                    style={{ fontSize: "0.9rem", marginTop: "4px" }}
                  >
                    <RxHeart />
                  </span>
                  <span className="text">2 Likes</span>
                </span>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release industry's standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. <br /> Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="right-sec">
            <div className="latest-posts">
              <div className="head">
                <h3>Latest Posts</h3>
                <img src={scurly} alt="" />
              </div>
              <div className="post">
                <div className="imgBx">
                  <img src={lpost1} alt="" />
                </div>
                <div className="textBx">
                  <NavLink to="/blog/1">
                    8 Ways Forever Your Heart Young
                  </NavLink>
                  <span className="date">
                    <span className="icon">
                      <FaRegCalendarAlt />
                    </span>
                    <span className="day">20th August</span>
                  </span>
                </div>
              </div>
              <div className="post">
                <div className="imgBx">
                  <img src={lpost2} alt="" />
                </div>
                <div className="textBx">
                  <NavLink to="/blog/1">
                    8 Ways Forever Your Heart Young
                  </NavLink>
                  <span className="date">
                    <span className="icon">
                      <FaRegCalendarAlt />
                    </span>
                    <span className="day">20th August</span>
                  </span>
                </div>
              </div>
              <div className="post">
                <div className="imgBx">
                  <img src={lpost3} alt="" />
                </div>
                <div className="textBx">
                  <NavLink to="/blog/1">
                    8 Ways Forever Your Heart Young
                  </NavLink>
                  <span className="date">
                    <span className="icon">
                      <FaRegCalendarAlt />
                    </span>
                    <span className="day">20th August</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="free-info">
              <h2>Free Call</h2>
              <p>For any information</p>
              <p style={{ fontSize: "1.3rem" }}>+2348038038030</p>
              <button>
                <NavLink to="/contact">Contact Us</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
