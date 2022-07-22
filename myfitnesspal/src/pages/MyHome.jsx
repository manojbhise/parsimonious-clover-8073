import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { Progress } from "@chakra-ui/react";
import { BsFillBagCheckFill } from 'react-icons/bs';

const MainDiv = styled.div`
  width: 100%;
`;
const AdvDiv = styled.div`
  width: 75%;
  height: 280px;
  margin: auto;
  img {
    height: 100%;
    width: 100%;
  }
`;
const BodyDiv = styled.div`
  width: 75%;
  display: flex;
  margin: auto;
  margin-top: 20px;
  justify-content: space-between;
`;
const LeftDiv = styled.div`
  width: 65%;
  border: 1px solid black;
`;
const RightDiv = styled.div`
  width: 29%;
  border: 1px solid red;
  img {
    width: 100%;
  }
`;

const SummaryDiv = styled.div`
  width: 96%;
  height: 35px;
  background: rgb(109, 33, 156);
  display: flex;
  color: white;
  justify-content: space-between;
`;
const Div1 = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin-left: 13px;
`;
const Div2 = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin-left: 13px;
  width: 60px;
  margin-right: 13px;
  box-sizing: border-box;
  span {
    font-size: 30px;
    margin-right: 2px;
  }
  p {
    font-size: 13px;
    text-align: left;
  }
`;

const SummaryBodyUP = styled.div`
  width: 96%;
  height: 219px;
  // margin-top: 18px;
  display: flex;
  background: rgba(230, 233, 235, 0.724);
  justify-content: space-between;
  // margin-left: 18px;
`;
const LeftSummaryUP = styled.div`
  width: 23%;
  height: 140px;
  margin: 0;
  margin-top: 15px;
  margin-left: 15px;
  background: rgb(215, 213, 213);
  box-sizing: border-box;
  p {
    margin: 0;
    padding-top: 10px;
    font-size: 11px;
    text-align: center;
  }
  span {
    font-size: 11px;
    color: blue;
    margin-left: 20px;
    margin-top: 55px;
  }
`;
const DownSummaryUP = styled.div`
margin-top: 90px;
display: flex;
justify-content: space-between;
div{
  margin: 3px;
}
div:first-child{
// border: 1px solid black;

  h1{
    font-size: 20px;
    color: rgba(6, 169, 169, 0.724);
    span{
      margin-left: 3px;
    }
  }
  span{
    font-size: 12px;
    color: rgb(85, 86, 86);
  }
  span: last-child{
    // border:1px solid red;
  }
}
`
const RightSummaryUP = styled.div`
  width: 72%;
  display: grid;
  grid-template-columns: 39% 58%;
  grid-template-rows: 62px 62px 40px;
  gap: 10px;
  margin-top: 15px;

  div {
    // border: 1px solid black;
  }
  div:nth-child(1) > p:first-child {
    font-size: 12px;
    color: rgb(85, 86, 86);
    span {
      color: rgba(32, 62, 255, 0.724);
    }
  }
  div:nth-child(1) > p:last-child {
    font-size: 33px;
    font-weight: 750;
    color: rgba(6, 169, 169, 0.724);
  }
  div:nth-child(2) {
    display: flex;

    input {
      width: 110px;
      height: 30px;
      margin: 5px;
      margin-top: 24px;
      padding-left: 5px;
      border: 1px solid black;
    }

  }
  div:nth-child(4) {
    grid-area: 3/1/4/3;
  }
  div:nth-child(3) {
    font-size: 10px;
    display: flex;
    grid-area: 2/1/3/3;
    div:first-child{
      border-right: 1px solid rgb(85, 86, 86);
    }
    div:nth-child(3)>h5,div:nth-child(5)>h5{
      margin-top: 10px;
      text-align: center;
    }
    div:nth-child(3),div:nth-child(5){
      width: 40px;
    }
    div:nth-child(2),div:nth-child(6){
      width: 60px;
    }
    div{
      width: 80px;
      display: inline-block;
      // border: 1px solid brown;
      span{
        margin-left: 4px;
        color: rgba(26, 26, 26, 0.724);
        font-size: 24px;
        letter-spacing: .8px;
      }
      h5{
      margin-left: 4px;
      }
    }
    h5{
      font-size: 12px;
      font-weight: 500;
    color: rgb(85, 86, 86);
    }
  }
`;

const EmailDiv = styled.div`
width: 100%;
height: 130px;
margin-top: 20px;
background: rgba(223, 221, 220, 0.724);
border: 1px solid rgba(243, 119, 37, 0.724);
`

const MyHome = () => {
  const navigate = useNavigate();
  const userpresent = localStorage.getItem('fitnesspal')

  return (
    <MainDiv>
      <AdvDiv>
        <img src="https://wallpaperaccess.com/full/170249.jpg" alt="" />
      </AdvDiv>
      <BodyDiv>
        <LeftDiv>
          <SummaryDiv>
            <Div1>
              <p>Your Daily Summary</p>
            </Div1>
            <Div2>
              <span>2</span>
              <p>DAY STREAK</p>
            </Div2>
          </SummaryDiv>
          <SummaryBodyUP>
            <LeftSummaryUP>
              <p>No photo provided</p>
              <span>Upload photo</span>
              <DownSummaryUP>
                  <div>
                    <h1>0<span>kg</span></h1>
                    <span>LOST</span>
                  </div>
                  <div>
                    <BsFillBagCheckFill/>
                  </div>
              </DownSummaryUP>
            </LeftSummaryUP>
            <RightSummaryUP>
              <div>
                <p>
                  Calories Remaining <span>Change</span>
                </p>
                <p>2110</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Add Exercise"
                  onClick={() => navigate("exercise")}
                />
                <input
                  type="text"
                  placeholder="Add Food"
                  onClick={() => navigate("food")}
                />
              </div>
              <div>
                <div>
                  <span>2110</span>
                  <h5>GOAL</h5>
                </div>
                <div>
                  <span>0</span>
                  <h5>FOOD</h5>
                </div>
                <div>
                  <h5>-</h5>
                </div>
                <div>
                  <span>0</span>
                  <h5>EXERCISE</h5>
                </div>
                <div>
                  <h5>=</h5>
                </div>
                <div>
                  <span>0</span>
                  <h5>NET</h5>
                </div>
              </div>
              <div>
              {/* <Progress hasStripe value={64} /> */}
              </div>
            </RightSummaryUP>
          </SummaryBodyUP>
          <EmailDiv>
            <div>
              <h1>cnsjbdcjksan</h1>
            </div>
          </EmailDiv>
        </LeftDiv>
        <RightDiv>
          <div>
            <img
              src="https://images.adsttc.com/media/images/5b08/b87c/f197/ccb5/4900/00bd/medium_jpg/The_S_02_filter_edit2_06.jpg?1527298139"
              alt=""
            />
          </div>
        </RightDiv>
      </BodyDiv>
    </MainDiv>
  );
};

export default MyHome;
