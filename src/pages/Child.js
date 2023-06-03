import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

const Child = () => {
  const [kid, setKid] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchKid = async () => {
      const docRef = doc(db, "kids", params.kidId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setKid(docSnap.data());
        setLoading(false);
      }
    };

    fetchKid();
  }, [navigate, params.kidId]);

  if (loading) {
    return <Spinner />;
  }

  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Cont>
        <Carousel {...settings}>
          {kid.imgUrls.map((url, index) => (
            <Wrap key={index}>
              <div
                style={{
                  background: `url(${kid.imgUrls[index]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="imgBx"
              ></div>
            </Wrap>
          ))}
        </Carousel>
        <Info>
          <h3>
            <span>Child Name:</span> {kid.kidName}
          </h3>
          <h3>
            <span>Child Gender:</span> {kid.kidGender}
          </h3>
          <h3>
            <span>Child Age:</span> {kid.kidAge} years
          </h3>
          <h3>
            <span>Parent Name:</span> {kid.parentName}
          </h3>
          <h3>
            <span>Parent Age:</span> {kid.parentAge} years
          </h3>
          <h3>
            <span>Parent Phone:</span> {kid.parentPhone}
          </h3>
          <h3>
            <span>Daycare Plan:</span> {kid.plan} Plan
          </h3>
          <h3>
            <span>Address:</span> {kid.address}
          </h3>
        </Info>
      </Cont>
      <Footer />
    </>
  );
};

export default Child;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 50px;
`;

const Carousel = styled(Slider)`
  margin-bottom: 30px;

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
  .imgBx {
    height: 300px;

    @media screen and (min-width: 768px) {
      height: 350px;
    }
    @media screen and (min-width: 1024px) {
      height: 400px;
    }
  }
`;
const Info = styled.div`
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 25px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
    width: min(120ch, 100% - 4rem);
    margin-inline: auto;
  }

  @media screen and (min-width: 1200px) {
    width: min(133ch, 100% - 4rem);
  }

  h3 {
    margin-bottom: 15px;
    color: var(--mainGrey);
    letter-spacing: 0.8px;
    text-transform: capitalize;
    font-family: "Fredoka One", cursive;
    font-size: 1.3rem;
    color: var(--secColor);

    span {
      color: var(--primaryColor);
    }
  }
`;
