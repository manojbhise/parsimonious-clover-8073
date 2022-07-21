import React, { useState } from 'react'
 import {TbPencil} from 'react-icons/tb';
import Styles from "../../styling/Todayexercise.module.css"
const Todayexercise = () => {
  const [val,Setval]=useState("");
  const [newval,setnewval]=useState(true)
  const edittext=()=>{
    setnewval(!newval)
  }
  return (
   <>
   <div className={Styles.Today}>
<div className={Styles.exe}>
    <div className={Styles.cardios} >Today's Exercise Notes</div>
    <div style={{ color:"#00548f"}} onClick={edittext}>{newval===true? "SaveNote":"Edit Note"}<TbPencil/></div>
</div>
<div className={Styles.divided}>
  <p className={Styles.dividedpara}>
  { !newval &&val}
  {newval && <input className={Styles.input} type={"text"} value={val} onChange={(e)=>Setval(e.target.value)}/>}
    
  </p>
  </div>
  <div className={Styles.diva}></div>
  <div  className={Styles.butt}>
    <button className={Styles.button}>View Full Report(Printable)</button>
  </div>
   </div>
   
   </>
  )
}

export default Todayexercise