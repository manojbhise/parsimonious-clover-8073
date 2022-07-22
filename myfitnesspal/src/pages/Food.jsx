import React, { useState } from 'react'
import styled from 'styled-components'

const Adv = styled.div`
width: 50%;
height: 90px;
margin: auto;
img{
  width: 100%;
  height: 100%;
}
`;
const Para1 = styled.div`
margin-left: 10%;
margin-top: 20px;
border: 1px solid brown;
`

const Food = () => {

  const days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  let time = new Date();
  const [day, setDay] = useState(time.getDay());
  const [date, setDate] = useState(time.getDate());
  const [month, setMonth] = useState(time.getMonth());
  const [year, setYear] = useState(time.getFullYear());
  const [newDate, setNewDate] = useState();

  console.log(year, month, day, date)
  return (
    <div>
      <Adv>
        <img src="https://crcdn01.adnxs-simple.com/creative/p/8184/2022/6/16/36938850/406a8374-a6bb-4e9c-b174-a597d466188c.png" alt="" />
      </Adv>
      <Para1>
        <p>Your Food Diary For: </p>
        <div><p>{days[day-1]},{months[month+1]}{date},{year}</p></div>
        <input type="date" onChange={(e)=>setDate(e.target.value)}/>
      </Para1>
    </div>
  )
}

export default Food