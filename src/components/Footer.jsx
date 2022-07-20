import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  height: 110px;
  width: 100%;
  margin-top: 20px;
  background: rgb(243, 239, 239);
`;
const TopDiv = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 14px;
    color: blue;
    margin-right: 12px;
  }
`;
const BottomDiv = styled.div`
  height: 50px;
  width: 100%;
  text-align: center;
  p {
    font-size: 13px;
  }
`;

const Footer = () => {
  return (
    <MainDiv>
      <TopDiv>
        <a href="">Calorie Counter</a>
        <a href="">Blog</a>
        <a href="">Terms</a>
        <a href="">Privacy</a>
        <a href="">Contact Us</a>
        <a href="">API</a>
        <a href="">Jobs</a>
        <a href="">Feedback</a>
        <a href="">Coomunity Guidelines</a>
        <a href="">Ad Choices</a>
        <a href="">Do Not Sell My Personal Information</a>
        <select name="" id="">
          <option value="">English</option>
          <option value="">Hindi</option>
          <option value="">Marathi</option>
          <option value="">Telgu</option>
          <option value="">Gujrati</option>
          <option value="">Tamil</option>
        </select>
      </TopDiv>
      <BottomDiv>
        <p>&#169;2022 MyFitnessPal, Inc.</p>
      </BottomDiv>
    </MainDiv>
  );
};

export default Footer;
