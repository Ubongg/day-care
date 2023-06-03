import React from "react";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.jpeg";
import blog3 from "../assets/blog3.jpeg";
import blog4 from "../assets/blog4.jpeg";
import blog5 from "../assets/blog5.jpeg";
import blog6 from "../assets/blog6.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";

const BlogSlider = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Carousel {...settings}>
        <Wrap>
          <div className="imgBx">
            <img src={blog1} alt="" />
          </div>
          <div className="textBx">
            <h3>Indoor Activities for Everyone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
            </p>
            <NavLink to="/blog">
              <span className="read">Read More </span>
              <span className="icon">
                <MdArrowRightAlt />
              </span>
            </NavLink>
          </div>
          <div className="details">
            <span className="detail">
              <span className="icon1">
                <FaRegCalendarAlt />
              </span>
              <span className="text">26 April, 2023</span>
            </span>
            <span className="detail">
              <span className="icon2">
                <FaRegComments />
              </span>
              <span className="text">3 comments</span>
            </span>
          </div>
        </Wrap>
        <Wrap>
          <div className="imgBx">
            <img src={blog2} alt="" />
          </div>
          <div className="textBx">
            <h3>Indoor Activities for Everyone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
            </p>
            <NavLink to="/blog">
              <span className="read">Read More </span>
              <span className="icon">
                <MdArrowRightAlt />
              </span>
            </NavLink>
          </div>
          <div className="details">
            <span className="detail">
              <span className="icon1">
                <FaRegCalendarAlt />
              </span>
              <span className="text">26 April, 2023</span>
            </span>
            <span className="detail">
              <span className="icon2">
                <FaRegComments />
              </span>
              <span className="text">3 comments</span>
            </span>
          </div>
        </Wrap>
        <Wrap>
          <div className="imgBx">
            <img src={blog3} alt="" />
          </div>
          <div className="textBx">
            <h3>Indoor Activities for Everyone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
            </p>
            <NavLink to="/blog">
              <span className="read">Read More </span>
              <span className="icon">
                <MdArrowRightAlt />
              </span>
            </NavLink>
          </div>
          <div className="details">
            <span className="detail">
              <span className="icon1">
                <FaRegCalendarAlt />
              </span>
              <span className="text">26 April, 2023</span>
            </span>
            <span className="detail">
              <span className="icon2">
                <FaRegComments />
              </span>
              <span className="text">3 comments</span>
            </span>
          </div>
        </Wrap>
        <Wrap>
          <div className="imgBx">
            <img src={blog4} alt="" />
          </div>
          <div className="textBx">
            <h3>Indoor Activities for Everyone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
            </p>
            <NavLink to="/blog">
              <span className="read">Read More </span>
              <span className="icon">
                <MdArrowRightAlt />
              </span>
            </NavLink>
          </div>
          <div className="details">
            <span className="detail">
              <span className="icon1">
                <FaRegCalendarAlt />
              </span>
              <span className="text">26 April, 2023</span>
            </span>
            <span className="detail">
              <span className="icon2">
                <FaRegComments />
              </span>
              <span className="text">3 comments</span>
            </span>
          </div>
        </Wrap>
        <Wrap>
          <div className="imgBx">
            <img src={blog5} alt="" />
          </div>
          <div className="textBx">
            <h3>Indoor Activities for Everyone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
            </p>
            <NavLink to="/blog">
              <span className="read">Read More </span>
              <span className="icon">
                <MdArrowRightAlt />
              </span>
            </NavLink>
          </div>
          <div className="details">
            <span className="detail">
              <span className="icon1">
                <FaRegCalendarAlt />
              </span>
              <span className="text">26 April, 2023</span>
            </span>
            <span className="detail">
              <span className="icon2">
                <FaRegComments />
              </span>
              <span className="text">3 comments</span>
            </span>
          </div>
        </Wrap>
        <Wrap>
          <div className="imgBx">
            <img src={blog6} alt="" />
          </div>
          <div className="textBx">
            <h3>Indoor Activities for Everyone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
            </p>
            <NavLink to="/blog">
              <span className="read">Read More </span>
              <span className="icon">
                <MdArrowRightAlt />
              </span>
            </NavLink>
          </div>
          <div className="details">
            <span className="detail">
              <span className="icon1">
                <FaRegCalendarAlt />
              </span>
              <span className="text">26 April, 2023</span>
            </span>
            <span className="detail">
              <span className="icon2">
                <FaRegComments />
              </span>
              <span className="text">3 comments</span>
            </span>
          </div>
        </Wrap>
      </Carousel>
    </div>
  );
};

export default BlogSlider;

const Carousel = styled(Slider)`
  margin: 20px;

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

  border: 0.5px solid rgb(224, 222, 222);

  &:hover {
    .textBx h3 {
      color: var(--secColor);
      transition: var(--mainTransition);
    }
    .textBx a {
      color: var(--secColor);
      transition: var(--mainTransition);
    }
  }

  img {
    // border: 4px solid transparent;
    // border-radius: 4px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    // box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    //   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
  }
  .textBx {
    padding: 30px 20px;
    border-bottom: 0.5px solid rgb(224, 222, 222);
    @media screen and (min-width: 768px) {
      border-right: 0.5px solid rgb(224, 222, 222);
      border-left: 0.5px solid rgb(224, 222, 222);
    }
  }
  .textBx h3 {
    padding-bottom: 20px;
    color: var(--primaryColor);
    font-size: 1.2rem;
  }
  .textBx p {
    line-height: var(--line-height);
    padding-bottom: 20px;
    color: var(--mainGrey);
  }
  .textBx a {
    color: var(--primaryColor);
    font-size: 1.05rem;
    position: relative;
    font-weight: 600;
  }
  .textBx a .icon {
    position: absolute;
    right: -30%;
    top: 10%;
  }
  .details {
    padding: 10px 20px;
    @media screen and (min-width: 768px) {
      border-right: 0.5px solid rgb(224, 222, 222);
      border-left: 0.5px solid rgb(224, 222, 222);
    }
  }
  .details span {
    padding-right: 10px;
    font-size: 0.9rem;
  }
  .detail {
    position: relative;
  }
  .detail .text {
    margin-left: 20px;
  }
  .icon1,
  .icon2 {
    color: var(--secColor);
  }
  .icon1 {
    position: absolute;
    top: 2%;
    left: 0;
  }
  .icon2 {
    position: absolute;
    top: 8%;
    left: 0%;
  }
  @media screen and (min-width: 768px) {
    border-right: 10px solid white;
    border-left: 10px solid white;
  }
  @media screen and (min-width: 1160px) {
    border-right: 20px solid white;
    border-left: 20px solid white;
  }
`;
