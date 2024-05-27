import React from 'react'
import { useParams } from 'react-router-dom';
import '../styles/userdash.scss';
import {motion} from 'framer-motion';
function Userdashboard(props) {
    const {username}=useParams();

    function search()
    {
        window.location.href="/test";
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

    const buttonvariants={
      initial:{
        y:-500,
        opacity:0
      },
    
      animate:{
        y:0,
        opacity:1,
        transition:{
          duration:1,
          staggerchildren:0.5
        }
      },
    }


  return (
    <motion.div className='container' initial="initial" animate="animate">

        <motion.p variants={textvariants}  id='username'>Welcome! {username}</motion.p>

        <motion.p variants={textvariants} id='searching'>Want to know tailors around you??? <motion.button variants={buttonvariants} onClick={search}>Search</motion.button> </motion.p>

        
    </motion.div>
  )
}

export default Userdashboard