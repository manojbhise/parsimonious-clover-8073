import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useState } from 'react'
import styles from "../styling/Login.module.css"
import style from "../pages/landing_page/header.module.css";
import axios from "axios"
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import {useNavigate} from "react-router-dom"
import LandingNavbar from '../pages/landing_page/LandingNavbar';
import LandBody from '../pages/landing_page/LandBody';

export const Login = () => {
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("")
    const [user,setuser] = useState({})
    const [e,sete] = useState(true)
    const [open, setOpen] = React.useState(false);
    const [flag,setflag] = useState(true)
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
    const handleSubmit = () => {
       let payload = {
         email, password
       }
       if(payload.email.length < 1 || payload.password.length < 1) {
         setflag(false)
         sete(true)
         console.log(payload.email.length)
       }
       else if(payload.email.length > 0 && payload.password.length > 0) {
        axios.post("https://sheltered-sands-26559.herokuapp.com/auth/login",payload)
        .then((response) => {
             setuser(response.data)
             console.log(response.data[0])
             localStorage.setItem("fitnesspal",JSON.stringify(response.data[0]))
             sete(true)
             setOpen(true)
             setflag(true)
         
             setTimeout(()=>{
               navigate("/")
             },3000)
        })
        .catch((error) => {
         sete(false)
         setflag(true)
         console.log(error.message)
        })
       }
      //  console.log(payload)
     
    }
   
  return (
    <div style={{width:"100%",backgroundColor:"white"}}>
      
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
        <br/>
       {flag? null :  <Alert severity="error">This is an error alert — Required all Credentials !</Alert>}
      {e ? null : <Alert severity="error">This is an error alert — Wrong Credentials !</Alert>}
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Login Successful. This is a success message!
        </Alert>
      </Snackbar>
         <br/>
     <div id={styles.justforboxshadow} style={{width: '30%',margin:"auto", backgroundColor:"white"}}>
        <br/>
        <br/>
        <br/>
        <h2>Member Login</h2>
        <br/>
     <TextField 
       margin="normal"
       required
       fullWidth
       name="email"
       label="Email Address"
       onChange = {(e)=>setemail(e.target.value)}
     />
        <TextField
          margin="normal"
          
          required
          fullWidth
          name="password"
          label="Password"
          onChange = {(e)=>setpassword(e.target.value)}
        />
      <p style={{textAlign:"start",color:"rgb(0,102,238)"}}>Forgot Password?</p>
          <Button
          onClick={handleSubmit}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{ backgroundColor: "rgb(0,102,238)" }}
        >
          LOG IN
        </Button>
        <Typography variant="body2" color="text.secondary" align="center">
          {"New User © "}
          <Link color="inherit" href="/signup">
           Sign up
          </Link>{""}
          <br/>
          { new Date().getFullYear()}
          {"."}
        </Typography>
     </div>
     <br/>
     <br/>
     <br/>
    </div>
  )
}
