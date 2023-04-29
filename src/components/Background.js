import React from "react";
import { NavLink } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import styled from "styled-components";
import banner from "../assets/allbg.jpeg";

const Background = ({ header, page }) => {
  return (
    <Banner>
      <Header>
        <h2>{header}</h2>
      </Header>
      <PageCont>
        <HomeLink>
          <NavLink to="/">Home</NavLink>
          <Icon>
            <MdArrowRightAlt />
          </Icon>
        </HomeLink>
        <Page>
          <p>{page}</p>
        </Page>
      </PageCont>
    </Banner>
  );
};

export default Background;

const Banner = styled.div`
  width: 100vw;
  background-image: url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18% 0 22% 0;
  position relative;

  &:before {
    content: "";
    position: absolute;
    background-color: rgba(23, 25, 47, 0.9);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
const Header = styled.div`
  z-index: 1;
  margin-bottom: 15px;
  h2 {
    color: white;
    font-size: 2.2rem;
  }
`;
const PageCont = styled.div`
  z-index: 1;
  display: flex;
  flex-wrap: nowrap;
`;
const HomeLink = styled.div`
  z-index: 1;
  display: flex;
  flex-wrap: nowrap;
  a {
    color: var(--secColor);
    font-size: 1.1rem;
    margin-right: 5px;
  }
`;
const Icon = styled.div`
  z-index: 1;
  color: var(--secColor);
  font-size: 1.3rem;
`;
const Page = styled.div`
  z-index: 1;
  p {
    color: white;
    margin-left: 5px;
    font-size: 1.1rem;
  }
`;
