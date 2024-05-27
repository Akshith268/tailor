import React, { useEffect } from 'react'
import '../styles/home.scss';

import {motion} from 'framer-motion';

function Home() {

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
    <motion.div className='home' initial="initial" animate="animate">
    
        <motion.h1 variants={textvariants}>Tailor Connect</motion.h1>
      <motion.div variants={textvariants} className='content'>
        <p> <a href="/login">IAM A USER</a> </p>
        <br />
        <p><a href='/tailorlogin'>IAM A TAILOR!!</a></p>
      </motion.div>
    </motion.div>
  )
}

export default Home