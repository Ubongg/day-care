import React from "react";
import Background from "../components/Background";
import styled from "styled-components";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import cbrown from "../assets/cbrown.png";
import cbrown2 from "../assets/cbrown2.png";
import bcam from "../assets/bcam.png";
import bcam2 from "../assets/bcam2.png";
import lwat from "../assets/lwat.png";
import jbat from "../assets/jbat.png";
import osmith from "../assets/osmith.png";
import jdoe from "../assets/jdoe.png";
import seva from "../assets/seva.png";
import Footer from "../components/Footer";

const Team = () => {
  return (
    <Cont>
      <Background header={"Our Team"} page={"Our Team"} />
      <Members>
        <Member>
          <ImgBx>
            <img src={cbrown} alt="" />
          </ImgBx>
          <Name>Charlie Brown</Name>
          <Role>Deputy Head Teacher</Role>
          <Links>
            <Icon>
              <TiSocialFacebook />
            </Icon>
            <Icon>
              <TiSocialTwitter />
            </Icon>
            <Icon>
              <TiSocialLinkedin />
            </Icon>
            <Icon>
              <TiSocialGooglePlus />
            </Icon>
          </Links>
        </Member>
        <Member>
          <ImgBx>
            <img src={bcam} alt="" />
          </ImgBx>
          <Name>Charlie Brown</Name>
          <Role>Deputy Head Teacher</Role>
          <Links>
            <Icon>
              <TiSocialFacebook />
            </Icon>
            <Icon>
              <TiSocialTwitter />
            </Icon>
            <Icon>
              <TiSocialLinkedin />
            </Icon>
            <Icon>
              <TiSocialGooglePlus />
            </Icon>
          </Links>
        </Member>
        <Member>
          <ImgBx>
            <img src={lwat} alt="" />
          </ImgBx>
          <Name>Charlie Brown</Name>
          <Role>Deputy Head Teacher</Role>
          <Links>
            <Icon>
              <TiSocialFacebook />
            </Icon>
            <Icon>
              <TiSocialTwitter />
            </Icon>
            <Icon>
              <TiSocialLinkedin />
            </Icon>
            <Icon>
              <TiSocialGooglePlus />
            </Icon>
          </Links>
        </Member>
        <Member>
          <ImgBx>
            <img src={bcam2} alt="" />
          </ImgBx>
          <Name>Charlie Brown</Name>
          <Role>Deputy Head Teacher</Role>
          <Links>
            <Icon>
              <TiSocialFacebook />
            </Icon>
            <Icon>
              <TiSocialTwitter />
            </Icon>
            <Icon>
              <TiSocialLinkedin />
            </Icon>
            <Icon>
              <TiSocialGooglePlus />
            </Icon>
          </Links>
        </Member>
        <Member>
          <ImgBx>
            <img src={jbat} alt="" />
          </ImgBx>
          <Name>Charlie Brown</Name>
          <Role>Deputy Head Teacher</Role>
          <Links>
            <Icon>
              <TiSocialFacebook />
            </Icon>
            <Icon>
              <TiSocialTwitter />
            </Icon>
            <Icon>
              <TiSocialLinkedin />
            </Icon>
            <Icon>
              <TiSocialGooglePlus />
            </Icon>
          </Links>
        </Member>
        <Member>
          <ImgBx>
            <img src={jdoe} alt="" />
          </ImgBx>
          <Name>Charlie Brown</Name>
          <Role>Deputy Head Teacher</Role>
          <Links>
            <Icon>
              <TiSocialFacebook />
            </Icon>
            <Icon>
              <TiSocialTwitter />
            </Icon>
            <Icon>
              <TiSocialLinkedin />
            </Icon>
            <Icon>
              <TiSocialGooglePlus />
            </Icon>
          </Links>
        </Member>
        <Member>
          <ImgBx>
            <img src={seva} alt="" />
          </ImgBx>
          <Name>Charlie Brown</Name>
          <Role>Deputy Head Teacher</Role>
          <Links>
            <Icon>
              <TiSocialFacebook />
            </Icon>
            <Icon>
              <TiSocialTwitter />
            </Icon>
            <Icon>
              <TiSocialLinkedin />
            </Icon>
            <Icon>
              <TiSocialGooglePlus />
            </Icon>
          </Links>
        </Member>
        <Member>
          <ImgBx>
            <img src={cbrown2} alt="" />
          </ImgBx>
          <Name>Charlie Brown</Name>
          <Role>Deputy Head Teacher</Role>
          <Links>
            <Icon>
              <TiSocialFacebook />
            </Icon>
            <Icon>
              <TiSocialTwitter />
            </Icon>
            <Icon>
              <TiSocialLinkedin />
            </Icon>
            <Icon>
              <TiSocialGooglePlus />
            </Icon>
          </Links>
        </Member>
        <Member>
          <ImgBx>
            <img src={osmith} alt="" />
          </ImgBx>
          <Name>Olivia Smith</Name>
          <Role>Deputy Head Teacher</Role>
          <Links>
            <Icon>
              <TiSocialFacebook />
            </Icon>
            <Icon>
              <TiSocialTwitter />
            </Icon>
            <Icon>
              <TiSocialLinkedin />
            </Icon>
            <Icon>
              <TiSocialGooglePlus />
            </Icon>
          </Links>
        </Member>
      </Members>
      <Footer />
    </Cont>
  );
};

export default Team;

const Cont = styled.div``;
const Members = styled.div`
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 1024px) {
    width: min(124.2ch, 100% - 2.5rem);
    margin-inline: auto;
    padding: 50px 0;
  }
  @media screen and (min-width: 1200px) {
    width: min(138ch, 100% - 4rem);
  }
`;
const Member = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 540px;
  width: 100%;
  margin: 20px 0;
  padding: 0 0 30px 0;
  border-radius: 4px;
  box-shadow: -1px 5px 15px 0px #e6e6e6;

  @media screen and (min-width: 768px) {
    max-width: 340px;
    width: 45%;
    margin: 15px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 100%;
    width: 30.5%;
    margin: 13px;
  }
`;
const ImgBx = styled.div`
  max-width: 540px;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
const Name = styled.div`
  margin: 20px 0 15px 0;
  font-size: 1.4rem;
  color: var(--primaryColor);
`;
const Role = styled.div`
  color: var(--mainGrey);
  margin-bottom: 20px;
`;
const Links = styled.div`
  display: flex;
`;
const Icon = styled.div`
  padding: 7px 7px 0;
  border-radius: 50%;
  color: white;
  font-size: 1.4rem;
  margin-right: 13px;
  background: var(--primaryColor);
  cursor: pointer;
  transition: var(--mainTransition);

  &:hover {
    background: var(--secColor);
  }
`;
