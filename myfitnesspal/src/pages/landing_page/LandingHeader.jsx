import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

import Drawer from './Drawer';
import style from "./header.module.css";
import LandBody from './LandBody';
import LandingNavbar from './LandingNavbar';


const LandingHeader = () => {
  const [isflag, setisflag] = useState(false)
 
  let changeflagtotrue=()=>{
    setisflag(true)
  }
  let changeflagtofalse=()=>{
      setisflag(false)
  }
  return (
    <div>
      {isflag?<Drawer changeflagtofalse={changeflagtofalse}/>:""}
    <div className={isflag?style.blur:""}>
        <div className={style.headcar}>
            <i className="fa-solid fa-bars" onClick={changeflagtotrue}></i>
           <Link to="/"><img src="https://i.pinimg.com/originals/53/24/0a/53240a99b0159c5a16937e5ac479f78a.png" alt="" /></Link>
            <h2>myfitnesspal</h2>
            <div className={style.lscar}>
                <Link to="/login" className={style.headlog}>Log In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
        <LandingNavbar/>
        <LandBody/>
        
    </div>
    {/* <Footer/> */}
    </div>
  )
}

export default LandingHeader