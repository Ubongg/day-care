import React from "react";
import Background from "../components/Background";
import styled from "styled-components";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.jpeg";
import blog3 from "../assets/blog3.jpeg";
import blog4 from "../assets/blog4.jpeg";
import blog5 from "../assets/blog5.jpeg";
import blog6 from "../assets/blog6.jpeg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="blog">
      <Background header={"Blog"} page={"Blog"} />
      <Blogs>
        <SingleBlog>
          <div className="imgBx">
            <img src={blog1} alt="" />
          </div>
          <div className="textBx">
            <h3>Indoor Activities for Everyone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
            </p>
            <NavLink to="/blog/1">
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
        </SingleBlog>
        <SingleBlog>
          <div className="imgBx">
            <img src={blog2} alt="" />
          </div>
          <div className="textBx">
            <h3>Indoor Activities for Everyone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
            </p>
            <NavLink to="/blog/2">
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
        </SingleBlog>
        <SingleBlog>
          <div className="imgBx">
            <img src={blog3} alt="" />
          </div>
          <div className="textBx">
            <h3>Indoor Activities for Everyone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
            </p>
            <NavLink to="/blog/3">
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
        </SingleBlog>
        <SingleBlog>
          <div className="imgBx">
            <img src={blog4} alt="" />
          </div>
          <div className="textBx">
            <h3>Indoor Activities for Everyone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
            </p>
            <NavLink to="/blog/4">
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
        </SingleBlog>
        <SingleBlog>
          <div className="imgBx">
            <img src={blog5} alt="" />
          </div>
          <div className="textBx">
            <h3>Indoor Activities for Everyone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
            </p>
            <NavLink to="/blog/5">
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
        </SingleBlog>
        <SingleBlog>
          <div className="imgBx">
            <img src={blog6} alt="" />
          </div>
          <div className="textBx">
            <h3>Indoor Activities for Everyone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
            </p>
            <NavLink to="/blog/6">
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
        </SingleBlog>
      </Blogs>
      <Footer />
    </div>
  );
};

export default Blog;

const Blogs = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 5px;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
  @media screen and (min-width: 1024px) {
    width: min(123.5ch, 100% - 2.5rem);
    margin-inline: auto;
    padding: 0;
  }
  @media screen and (min-width: 1200px) {
    width: min(137.5ch, 100% - 4rem);
  }
`;
const SingleBlog = styled.div`
  max-width: 540px;
  width: 100%;

  border: 0.5px solid rgb(224, 222, 222);
  margin: 15px;

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
    // @media screen and (min-width: 768px) {
    //   border-right: 1px solid rgb(224, 222, 222);
    //   border-left: 1px solid rgb(224, 222, 222);
    // }
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
    cursor: pointer;
  }
  .textBx a .icon {
    position: absolute;
    right: -30%;
    top: 10%;
  }
  .details {
    padding: 10px 20px;
    // @media screen and (min-width: 768px) {
    //   border-right: 1px solid rgb(224, 222, 222);
    //   border-left: 1px solid rgb(224, 222, 222);
    // }
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
    max-width: 340px;
    width: 45%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 100%;
    width: 30.6%;
    margin: 13px;
  }
`;
