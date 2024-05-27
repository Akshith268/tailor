import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/tailorlogin.scss';
import { useHistory, useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';

function Tailorlogin() {
      

    const[password,setpassword]=useState("");
    const[name,setusername]=useState("");
    const navigate = useNavigate();

    async function loginuser(e) {
      e.preventDefault();
  
        const result = await fetch("https://backend-owo0.onrender.com/api/tailorlogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "name": name,
            "password": password,
          })
        });
    
      
    
        const data = await result.json();
         if(data.status=='ok')
         {
            alert("Login Successfull");
            navigate(`/tailordashboard/:${name}/:${data.currentrating}`);
         }
         else
         {
           alert("Invalid Credentia");
         }
    }

    const textvariants={
      initial:{
        x:-500,
        opacity:0
      },
    
      animate:{
        x:0,
        opacity:1,
        transition:{
          duration:1,
          staggerchildren:0.5
        }
      },
    }




     
  return (
    <motion.div className='App'>
      
        <motion.div className='form-page' initial="initial" animate="animate">
          <motion.div className='form-container' variants={textvariants}>
            <p className='title'>Tailor Login</p>
        <form className='form' action="https://backend-owo0.onrender.com/api/tailorlogin" method="POST" onSubmit={loginuser} >
            <div className='input-group'>
            <label> Username: </label>
            <input type="text" name="name"  value={name} onChange={(e)=>setusername(e.target.value)} />
            </div>
            <br />
            <div className='input-group'>
            <label> Password: </label>
            <input type="password" name="password" id="password" value={password} onChange={(e)=> setpassword(e.target.value)} />
            </div>
            <br />
            <button type='submit' value="Login" className="sign">Sign in</button>
        </form>
        <p className="signup">Don't have an account?
<a rel="noopener noreferrer" href="/tailor" className="">Sign up</a>
</p>
        </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Tailorlogin;