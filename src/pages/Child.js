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
    <Cont>
      <Carousel {...settings}>
        {kid.imgUrls.map((url, index) => (
          <Wrap key={index}>
            <div
              style={{
                background: `url(${kid.imgUrls[index]}) center no-repeat`,
                backgroundSize: "cover",
                height: "300px",
              }}
            ></div>
          </Wrap>
        ))}
      </Carousel>
      <Info>
        <h3>Child Name: {kid.kidName}</h3>
        <h3>Child Gender: {kid.kidGender}</h3>
        <h3>Child Age: {kid.kidAge}</h3>
        <h3>Parent Name: {kid.parentName}</h3>
        <h3>Parent Age: {kid.parentAge}</h3>
        <h3>Parent Phone: {kid.parentPhone}</h3>
        <h3>Daycare Plan: {kid.plan}</h3>
        <h3>Address: {kid.address}</h3>
      </Info>
      <Footer />
    </Cont>
  );
};

export default Child;

const Cont = styled.div``;

const Carousel = styled(Slider)`
  // margin: 20px;

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
const Wrap = styled.div``;
const Info = styled.div``;
