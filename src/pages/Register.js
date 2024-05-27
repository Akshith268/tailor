
import {useState} from 'react';
import {motion} from 'framer-motion';


function Register() {
 
  const[name,setname]=useState("");
  const[password,setpassword]=useState("");
  const[confirmpassword,setconfirmpassword]=useState("");

  async function registeruser(e) {
    e.preventDefault();
  
    try {
      const result = await fetch("https://backend-owo0.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name": name,
          "password": password,
          "confirmpassword": confirmpassword
        })
      });
  
      if (!result.ok) {
        throw new Error('Network response was not OK');
      }
  
      const data = await result.json();

      if(data.status==='ok')
      {
        window.location.href="/login";
      }


      console.warn("result", data);
    } catch (error) {
      console.error('Error registering user:', error);
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
    <motion.div className="App">
   <motion.div  className="form-page" initial="initial" animate='animate' >
    <motion.div variants={textvariants} className="form-container">
        <p className='title'>Signup</p>

          <form className='form' onSubmit={registeruser}>
            <div className="input-group">
            <label>UserName: </label>
            <input value={name} onChange={(e)=>setname(e.target.value)} type="text" name="Name" required />
            </div>
       
            <div className="input-group">
            <label> Password: </label>
            <input value={password} onChange={(e)=> setpassword(e.target.value)} type="password" name="password" required />
            </div>
         
            <div className="input-group">
            <label> Confirm Password: </label>
            <input value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} type="password" name="confirmPassword" required />
            </div>
            <br />
            <button type='submit' className='sign'>Signup</button>
          </form>
          <br />
          <p className="signup">Already have an account? <a rel="noopener noreferrer" href="/login" className="signin">Sign in</a></p>
      </motion.div>
    </motion.div>
    </motion.div>
  );
}

export default Register;

