import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import styles from "../styling/Login.module.css"
import style from "../pages/landing_page/header.module.css";
import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import LandingNavbar from '../pages/landing_page/LandingNavbar';

export const Signup = () => {
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [username,setusername] = useState("")
  const [password,setpassword] = useState("")
  const [gender,setgender]= useState("")
  const [e,sete] = useState(true)
  const [open, setOpen] = React.useState(false);
  const [isflag, setisflag] = useState(false)
 const navigate = useNavigate()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  let changeflagtotrue=()=>{
    setisflag(true)
  }
  let changeflagtofalse=()=>{
      setisflag(false)
  }
  const handleSubmit = ()=>{
    let payload = {
        name,
        email,
        username,
        password,
        gender
    }
    console.log(payload)
    axios.post("https://sheltered-sands-26559.herokuapp.com/auth/signup",payload)
    .then((res)=>{
        console.log(res)
        sete(true)
        setOpen(true)
        setTimeout(()=>{
          navigate("/login")
        },3000)
    })
    .catch((error) => {
      sete(false)
     })
  }

  return (
    <div>
        <div className={isflag?style.blur:""}>
        <div className={style.headcar}>
            <i className="fa-solid fa-bars" onClick={changeflagtotrue}></i>
            <img src="https://i.pinimg.com/originals/53/24/0a/53240a99b0159c5a16937e5ac479f78a.png" alt="" />
            <h2>myfitnesspal</h2>
            <div className={style.lscar}>
                <Link to="/login" className={style.headlog}>Log In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
        <LandingNavbar/>
        
    </div>
           <div style={{width:"100%",backgroundColor:"white"}}>
         <br/>
         {e ? null : <Alert severity="error">This is an error alert — Required All Credentials !</Alert>}
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          SignUp Successful. Your account has been Created !
        </Alert>
      </Snackbar>
         <br/>
     <div id={styles.justforboxshadow} style={{width: '30%',margin:"auto", backgroundColor:"white"}}>
       
      
       
        <h2>Create Your Account</h2>
        <br/>
        <TextField 
        onChange={(e)=>setname(e.target.value)}
       margin="normal"
       required
       fullWidth
       name="name"
       label="Name"
     />
     <TextField 
     onChange={(e)=>setemail(e.target.value)}
       margin="normal"
       required
       fullWidth
       name="email"
       label="Email Address"
     />
      <TextField 
      onChange={(e)=>setusername(e.target.value)}
       margin="normal"
       required
       fullWidth
       name="username"
       label="Username"
     />
        <TextField 
        onChange={(e)=>setpassword(e.target.value)}
          margin="normal"
          required
          fullWidth
          id="make-year"
          label="Password"
          name="password"
        />
     <div id={styles.radiobuttonhere} >
        <br/>
     <input  type="radio" value="male" name="gender" onChange={()=>{setgender("male")}} /> Male
        <input  type="radio" value="female" name="gender" onChange={()=>{setgender("female")}}/> Female
     </div>
          <Button
          onClick={handleSubmit}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{ backgroundColor: "rgb(0,102,238)" }}
        >
          SIGN UP
        </Button>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Already have an account ? "}
          <Link color="inherit" href="/login">
            Login
          </Link>{""}
          <br/>
          { new Date().getFullYear()}
          {"."}
        </Typography>
     </div>
     <br/>
   
    </div>
    </div>
  )
}
