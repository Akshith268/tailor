import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ratings.scss';
import { motion } from 'framer-motion';

const Ratings = (props) => {
  const { name, email, phonenumber } = useParams();
  const [selectedRating, setSelectedRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false); // Track if rating is submitted

  const handleRatingChange = (e) => {
    setSelectedRating(Number(e.target.value));
  };

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

  const handleSubmitRating = async () => {
    const result = await axios.post('https://backend-owo0.onrender.com/api/rate', {
      rating: selectedRating,
      name: name,
    });

    const data = await result.data;
    if (data.status === 'ok') {
      alert('Rating Submitted');
      setRatingSubmitted(true); // Set ratingSubmitted to true after successful submission
    } else {
      alert('Rating Not Submitted');
    }
  };

  const gfg = (n) => {
    setSelectedRating(n);
  };

  const removeCard = ratingSubmitted ? 'no-display' : 'card'; // Add 'no-display' class if rating is submitted

  return (
    <motion.div initial="initial" animate="animate">
      <motion.p variants={textvariants} className='name'>Hi! I am {name}</motion.p>
      <motion.p variants={textvariants} className='cont'>
        CONTACT ME HERE : <br /><br/> Email: {email}  <br /> <br />phone:{phonenumber}
      </motion.p>


      {ratingSubmitted ? (
        <p className='rated'>You have rated!</p>
        ) : (
          <div className={removeCard}>
          <h1 className='heading'>Rate me here</h1>
          <span onClick={() => gfg(1)} className='star'>
            ★
          </span>
          <span onClick={() => gfg(2)} className='star'>
            ★
          </span>
          <span onClick={() => gfg(3)} className='star'>
            ★
          </span>
          <span onClick={() => gfg(4)} className='star'>
            ★
          </span>
          <span onClick={() => gfg(5)} className='star'>
            ★
          </span>
          <h3 id='output'>Rating is: {selectedRating}/5</h3>

          <button onClick={handleSubmitRating}>Submit Rating</button>
        </div>
      )}
    </motion.div>
  );
};

export default Ratings;
