import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import nm from "../assets/nm.png";
import nur from "../assets/nur.png";
import ppa from "../assets/ppa.png";

const Imgslider = () => {
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
    <div>
      <Carousel {...settings}>
        <Wrap>
          <div className="imgBx">
            <img src={nur} alt="" />
          </div>
          <div className="textBx">
            <h3>Nursery</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
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
            <img src={nur} alt="" />
          </div>
          <div className="textBx">
            <h3>Nursery</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              modi nisi consequatur.
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
    </div>
  );
};

export default Imgslider;

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
    max-height: 400px;
    width: 100%;
    height: 100%;
    // box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    //   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
  }
  .textBx {
    padding: 20px 20px 30px 20px;
    border-bottom: 1px solid rgb(224, 222, 222);
    @media screen and (min-width: 768px) {
      border-right: 1px solid rgb(224, 222, 222);
      border-left: 1px solid rgb(224, 222, 222);
    }
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
    @media screen and (min-width: 768px) {
      border-right: 1px solid rgb(224, 222, 222);
      border-left: 1px solid rgb(224, 222, 222);
    }
  }
  .details span {
    padding: 0 10px 0 0;
    font-size: 0.9rem;
  }
  .details span strong {
    padding: 0 5px 0 0;
    color: var(--primaryColor);
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
