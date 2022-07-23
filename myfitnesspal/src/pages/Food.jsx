import React, { useState } from "react";
import styled from "styled-components";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Adv = styled.div`
  width: 50%;
  height: 90px;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Para1 = styled.div`
  width: 60%;
  height: 50px;
  margin-left: 15%;
  margin-top: 20px;
  display: flex;
  border-bottom: 3px solid #e6e6e6;

  & > div:nth-child(1) {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: #0b5680;
      font-weight: 550;
      font-size: 15px;
    }
  }

  & > div:nth-child(2) {
    width: 300px;
    height: 40px;
    margin-left: 12px;
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      background: #00548f;
    }
    div:nth-child(1) {
      width: 10%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid white;
      border-radius: 7px 0 0 7px;
    }
    div:nth-child(2) {
      width: 75%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div:nth-child(3) {
      width: 10%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: 1px solid white;
      border-radius: 0 7px 7px 0;
    }
    p {
      color: white;
    }
  }
  & > div:nth-child(3) {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Para2 = styled.div`
  width: 60%;
  height: 70px;
  margin-left: 15%;
  margin-top: 20px;
  border-bottom: 2px solid #e6e6e6;
  // border: 1px solid brown;
  & > div:nth-child(1) {
    display: flex;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 20px;
        font-weight: 550;
        color: #00548f;
      }
    }
    & > div:nth-child(2) {
      width: 335px;
      height: 40px;
      display: flex;
      margin-left: 27%;
      div {
        background: #00548f;
        text-align: center;
        border-right: 1px solid white;
        p:nth-child(1) {
          margin-top: 5px;
        }
        p {
          color: white;
          font-size: 13px;
        }
      }
      div:nth-child(1) {
        width: 62px;
      }
      div:nth-child(2) {
        width: 50px;
      }
      div:nth-child(3) {
        width: 43px;
      }
      div:nth-child(4) {
        width: 60px;
      }
      div:nth-child(5) {
        width: 60px;
      }
      div:nth-child(6) {
        width: 50px;
      }
    }
  }
  & > div:nth-child(2) {
    display: flex;
    color: #0072bf;
    p {
      font-size: 15px;
      font-weight: 550;
      margin-right: 7px;
    }
    p:nth-child(2) {
      border: 2px solid #0072bf;
    }
  }
`;
const Para3 = styled.div`
  width: 60%;
  height: 60px;
  margin-left: 15%;
  margin-top: 20px;
  border-bottom: 2px solid #e6e6e6;

  &> div: nth-child(1) {
    height: 30px;
    h2 {
      font-size: 20px;
      font-weight: 550;
      color: #00548f;
    }
  }
  &> div: nth-child(2) {
    height: 19px;
    display: flex;
    color: #0072bf;
    p {
      font-size: 15px;
      font-weight: 550;
      margin-right: 7px;
    }
    p:nth-child(2) {
      border: 2px solid #0072bf;
    }
  }
`;

const Para4 = styled.div`
width: 60%;
height: 120px;
margin-left: 15%;
margin-top: 20px;
display: flex;
& > div:nth-child(1){
  text-align: right;
  margin-left: 30%;
  margin-right: 9px;
  p{
    font-size: 14px;
    margin-top: 6px;
  }
}
& > div:nth-child(2){
  width: 50%;
  display: grid;
  grid-template-columns: repeat(6,1fr);
  grid-template-rows: 25px 25px 25px 41px;
  background: #F6F6F6;
  text-align: center;
  color: black;

  div{
    border-right: 2px solid white;
    border-bottom: 2px solid white;
  }
  div:nth-child(19),div:nth-child(20),div:nth-child(21),div:nth-child(22),div:nth-child(23),div:nth-child(24){
    background: #00548f;
    color: white;
    font-size: 13px;
    p:nth-child(1){
      margin-top: 3px;
    }
  }
}
`;
const Para5 = styled.div`
width: 60%;
height: 90px;
margin-left: 15%;
margin-top: 20px;
text-align: center;
p{
  color: black;
  font-size: 14px;
  margin-top: 15px;
  font-weight: 550;
}
button{
  background: #52A552;
  font-size: 14px;
  margin-top: 15px;
  height: 30px;
  width: 150px;
  color: white;
  border-radius: 5px;
  border: 1px solid rgb(159, 159, 159);
}
`
const Para6 = styled.div`
width: 60%;
height: 250px;
margin-left: 15%;
margin-top: 20px;
text-align: center;
display: flex;
border: 1px solid rgb(159, 159, 159);
& > div:nth-child(1){}
& > div:nth-child(2){
  width: 40%;
  height: 80%;
  margin-top: 20px;
  border: 1px solid black;
  & > div:nth-child(1){
    display: flex;
    width: 80%;
    height: 10%;
    margin: auto;
    border: 1px solid black;
    p:nth-child(1){
      font-size: 15px;
    }
    p:nth-child(2){
      font-size: 13px;
    }
  }
  & > div:nth-child(2){
    width: 80%;
    height: 73%;
    margin: auto;
    background: #F6F6F6;
  }
}

`

const Food = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let time = new Date();
  const [day, setDay] = useState(time.getDay());
  const [date, setDate] = useState(time.getDate());
  const [month, setMonth] = useState(time.getMonth());
  const [year, setYear] = useState(time.getFullYear());
  const [newDate, setNewDate] = useState();

  console.log(year, month, day, date);
  return (
    <div>
      <Adv>
        <img
          src="https://crcdn01.adnxs-simple.com/creative/p/8184/2022/6/16/36938850/406a8374-a6bb-4e9c-b174-a597d466188c.png"
          alt=""
        />
      </Adv>
      <Para1>
        <div>
          <p>Your Food Diary For: </p>
        </div>
        <div>
          <div>
            <AiFillCaretLeft
              style={{ color: "white", fontSize: "25px", cursor: "pointer" }}
            />
          </div>
          <div>
            <p>
              {days[day - 1]}, {months[month + 1]} {date}, {year}
            </p>
          </div>
          <div>
            <AiFillCaretRight
              style={{ color: "white", fontSize: "25px", cursor: "pointer" }}
            />
          </div>
        </div>
        <div>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
        </div>
      </Para1>
      <Para2>
        <div>
          <div>
            <p>Breakfast</p>
          </div>
          <div>
            <div>
              <p>Calories</p>
              <p>kcal</p>
            </div>
            <div>
              <p>Carbs</p>
              <p>g</p>
            </div>
            <div>
              <p>Fat</p>
              <p>g</p>
            </div>
            <div>
              <p>Protein</p>
              <p>g</p>
            </div>
            <div>
              <p>Sodium</p>
              <p>mg</p>
            </div>
            <div>
              <p>Sugar</p>
              <p>g</p>
            </div>
          </div>
        </div>
        <div>
          <p>Add Food</p>
          <p></p>
          <p>Quick Tools</p>
        </div>
      </Para2>
      <Para3>
        <div>
          <h2>Lunch</h2>
        </div>
        <div>
          <p>Add Food</p>
          <p></p>
          <p>Quick Tools</p>
        </div>
      </Para3>
      <Para3>
        <div>
          <h2>Dinner</h2>
        </div>
        <div>
          <p>Add Food</p>
          <p></p>
          <p>Quick Tools</p>
        </div>
      </Para3>
      <Para3>
        <div>
          <h2>Snacks</h2>
        </div>
        <div>
          <p>Add Food</p>
          <p></p>
          <p>Quick Tools</p>
        </div>
      </Para3>
      <Para4>
        <div>
          <p>Totals</p>
          <p>Your Daily Goal</p>
          <p>Remaining</p>
        </div>
        <div>
          <div>0</div>
          <div>0</div>
          <div>0</div>
          <div>0</div>
          <div>0</div>
          <div>0</div>
          <div>23</div>
          <div>432</div>
          <div>434</div>
          <div>341</div>
          <div>21</div>
          <div>543</div>
          <div>234</div>
          <div>86</div>
          <div>334</div>
          <div>432</div>
          <div>4342</div>
          <div>43</div>
          <div>
              <p>Calories</p>
              <p>kcal</p>
            </div>
            <div>
              <p>Carbs</p>
              <p>g</p>
            </div>
            <div>
              <p>Fat</p>
              <p>g</p>
            </div>
            <div>
              <p>Protein</p>
              <p>g</p>
            </div>
            <div>
              <p>Sodium</p>
              <p>mg</p>
            </div>
            <div>
              <p>Sugar</p>
              <p>g</p>
            </div>
        </div>
      </Para4>
      <Para5>
        <p>When you're finished logging all foods and exercise for this day, click here:</p>
        <button>Complete This Entry</button>
      </Para5>
      <Para6>
        <div>
          <div><h1>Water Consumption</h1></div>
        </div>
        <div>
          <div>
            <p>Today's Food Notes</p>
            <p>Edit Note</p>
          </div>
          <div></div>
        </div>
      </Para6>
    </div>
  );
};

export default Food;
