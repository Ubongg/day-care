import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Cont>
      <Columns>
        <About>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <Socials>
            <Icon>
              <TiSocialFacebook />
            </Icon>
            <Icon>
              <TiSocialTwitter />
            </Icon>
            <Icon>
              <TiSocialGooglePlus />
            </Icon>
            <Icon>
              <TiSocialLinkedin />
            </Icon>
          </Socials>
        </About>
        <Classes>
          <h3>Classes</h3>
          <p>Music</p>
          <p>Foreign Language</p>
          <p>Dance</p>
          <p>Drama</p>
          <p>Sports Skill</p>
          <p>Previous Reading</p>
        </Classes>
        <Links>
          <h3>Quick Links</h3>
          <LinksCont>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/team">Our Team</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </LinksCont>
        </Links>
        <News>
          <h3>Latest News</h3>
          <TextBox>
            <NavLink to="/blog">Image Slide Show Post</NavLink>
            <p>August 10, 2023</p>
          </TextBox>
          <TextBox>
            <NavLink to="/blog">Image Slide Show Post</NavLink>
            <p>August 10, 2023</p>
          </TextBox>
          <TextBox>
            <NavLink to="/blog">Image Slide Show Post</NavLink>
            <p className="last">August 10, 2023</p>
          </TextBox>
        </News>
      </Columns>
      <Bottom>
        <p>&copy; 2023 Love Day Care</p>
      </Bottom>
    </Cont>
  );
};

export default Footer;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--primaryColor);
  color: #ddd;
`;
const Columns = styled.div`
  display: flex;
  // justify-content: center;
  // align-items: center;
  flex-wrap: wrap;
  margin: 20px;
  padding-top: 30px;

  h2,
  h3 {
    color: white;
    font-family: "Fredoka One", cursive;
  }
  h3 {
    font-size: 1.35rem;
  }
  a {
    color: #ddd;
    font-size: 1.1rem;
  }

  @media screen and (min-width: 768px) {
    margin: 30px 3%;
  }
  @media screen and (min-width: 1024px) {
    // margin: 70px 3%;
    width: min(120ch, 100% - 4rem);
    margin-inline: auto;
    align-items: flex-start;
  }
  @media screen and (min-width: 1200px) {
    width: min(133ch, 100% - 4rem);
  }
`;
const About = styled.div`
  max-width: 540px;
  width: 100%;

  h2 {
    margin-bottom: 20px;
  }
  p {
    line-height: var(--line-height);
    padding-bottom: 30px;
    border-bottom: 1px solid var(--secColor);
  }

  @media screen and (min-width: 768px) {
    max-width: 100%;
    width: 50%;
    padding-right: 30px;
  }
  @media screen and (min-width: 1024px) {
    // width: 25%;
    // padding-right: 0;
    // flex: 0 0 auto;
    width: 33.33333333%;
  }
`;
const Socials = styled.div`
  display: flex;
  margin: 20px 0 30px 0;
`;
const Icon = styled.div`
  background: var(--secColor);
  margin-right: 20px;
  padding: 3px 6px 0;
  font-size: 1.6rem;
  cursor: pointer;
`;
const Classes = styled.div`
  max-width: 540px;
  width: 100%;
  margin: 10px 0 20px;

  h3 {
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    max-width: 100%;
    width: 50%;
    padding-left: 30px;
  }
  @media screen and (min-width: 1024px) {
    // width: 25%;
    // padding-left: 100px;
    // flex: 0 0 auto;
    width: 25%;
    margin: 0;
  }
`;
const Links = styled.div`
  max-width: 540px;
  width: 100%;
  margin-bottom: 20px;

  h3 {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    max-width: 100%;
    width: 50%;
    padding-right: 30px;
  }
  @media screen and (min-width: 1024px) {
    // width: 25%;
    // padding-right: 0;
    // padding-left: 80px;
    // flex: 0 0 auto;
    width: 16.66666667%;
    margin-bottom: 0;
  }
`;
const LinksCont = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 15px;
  }
`;
const News = styled.div`
  max-width: 540px;
  width: 100%;

  h3 {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    max-width: 100%;
    width: 50%;
    padding-left: 30px;
  }
  @media screen and (min-width: 1024px) {
    // width: 25%;
    // flex: 0 0 auto;
    width: 25%;
  }
`;
const TextBox = styled.div`
  margin-bottom: 15px;

  p {
    border-bottom: 1px solid var(--secColor);
    padding: 5px 0 15px 0;
  }
  .last {
    border: none;
  }
  a {
    color: rgb(205, 153, 119);
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(1, 37, 56);
  padding: 20px 0;

  p {
    font-size: 1rem;
  }
`;
