import ReTct from 'react'
import { useParams } from 'react-router-dom';
import {motion} from 'framer-motion';

function Tailordashboard() {
   const {name,currentrating}=useParams();
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
    <motion.div initial="initial" animate="animate">
      <motion.p variants={textvariants}className='name'>Welcome! {name}</motion.p>
          <motion.p variants={textvariants} className='cont'>Check your current Rating {name}!!
            <br/>
            <br/>
           <span className='rates'>
             {currentrating}/5
            </span>
          </motion.p>
        
    </motion.div>
    
  )
}
export default Tailordashboard;