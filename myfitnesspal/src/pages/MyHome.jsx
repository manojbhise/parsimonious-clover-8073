import React from 'react'
import styled from "styled-components"

const MainDiv = styled.div`
width: 100%;
`
const AdvDiv = styled.div`
width: 73%;
height: 280px;
margin: auto;
img{
  height: 100%;
  width: 100%;
}
`
const BodyDiv = styled.div`
width: 73%;
display: flex;
margin: auto;
margin-top: 20px;
justify-content: space-between;
`
const LeftDiv = styled.div`
width: 65%;
border: 1px solid black;
`
const RightDiv = styled.div`
width: 29%;
border: 1px solid red;
img{
  width: 100%;
}
`

const SummaryDiv = styled.div`
width: 92%;
height: 35px;
background: rgb(109, 33, 156);
display: flex;
color: white;
justify-content: space-between;
`
const Div1 = styled.div`
text-align: center;
display: flex;
align-items: center;
margin-left: 13px;
`
const Div2 = styled.div`
text-align: center;
display: flex;
align-items: center;
margin-left: 13px;
width: 60px;
margin-right: 13px;
box-sizing: border-box;
span{
  font-size: 30px;
  margin-right: 2px;
}
p{
  font-size: 13px;
  text-align: left;
}
`

const SummaryBodyUP = styled.div`
width: 80%;
height: 120px;
margin-top: 18px;
margin-left: 18px;
border: 1px solid black;
`
const LeftSummaryUP = styled.div`
width: 25%;
height: 100%;
margin: 0;
background: rgb(215, 213, 213);
box-sizing: border-box;
p{
  margin: 0;
  padding-top: 10px;
  font-size: 11px;
  text-align: center;
}
span{
  font-size: 11px;
  color: blue;
  margin-left: 20px;
  margin-top: 55px;
}
`
const RightSummaryUP = styled.div`
`


const MyHome = () => {
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
            </LeftSummaryUP>
          </SummaryBodyUP>
        </LeftDiv>
        <RightDiv>
          <div>
            <img src="https://images.adsttc.com/media/images/5b08/b87c/f197/ccb5/4900/00bd/medium_jpg/The_S_02_filter_edit2_06.jpg?1527298139" alt="" />
          </div>
        </RightDiv>
      </BodyDiv>
    </MainDiv>
  )
}

export default MyHome