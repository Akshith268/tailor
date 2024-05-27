import React, { useState } from 'react';
import axios from 'axios';
import '../styles/tailorregistration.scss';
import {motion} from 'framer-motion';

const Tailor = () => {
  const [tailorData, setTailorData] = useState({
    name: '',
    email: '',
    location: { // Initialize with the first option's latitude and longitude
      latitude: 0,
      longitude: 0
    },
    password: '',
    Number:'',
    url:'',
    // Other fields as needed for registration
  });

  const locations={
    option1:{   
        latitude: 17.5393,
        longitude: 78.4834
        },  
    option2:{
        latitude: 17.5378,
        longitude: 78.4846
        },
      option3:{
        latitude: 18.0072,
        longitude: 79.5584
        },
      option4:{
        latitude:17.600308,
        longitude:78.4839631
        },
      option5:{
        latitude:17.6039,
        longitude:78.4914
      }
    }
  

  const handleLocationChange = (event) => {
    // Update latitude and longitude based on the selected location
    const selectedLocation = event.target.value;
    // Retrieve latitude and longitude for the selected location from your predefined options

    // Update the tailorData state with the selected location's latitude and longitude
    setTailorData({
      ...tailorData,
      selectedLocation,
      location: {
        latitude: locations[selectedLocation].latitude,
        longitude: locations[selectedLocation].longitude
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send tailor registration data to the backend API
     const response= await axios.post('https://backend-owo0.onrender.com/api/tailorRegistration', tailorData);
      // Handle success or redirect to another page
      if(response.data.status=='success')
      {
        alert("Tailor registered successfully");
        window.location.href="/otp";
      }
    } catch (error) {
      console.error('Error registering tailor:', error);
    }
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

  return (

    <motion.div className='App'>
      <motion.div className="form-page" initial="initial" animate="animate">
    <motion.div variants={textvariants} className="form-container">
        <p className='title'>Tailor Signup</p>
     
    <form className='form' onSubmit={handleSubmit}>
      <div className="input-group">
      <label>
        Name:
        </label>
        <input
          type="text"
          value={tailorData.name}
          onChange={(event) => setTailorData({ ...tailorData, name: event.target.value })}
        />
      </div>
      {/* Other fields for registration */}
      <div className="input-group">
      <label>
        Email:
        </label>
        <input
          type="text"
          value={tailorData.email}
          onChange={(event) => setTailorData({ ...tailorData, email: event.target.value })}
        />
      </div>
      <div className="input-group">
      <label>
        Location:
      </label>
        <select value={tailorData.location} onChange={handleLocationChange}>
          {/* Options for predefined locations */}
          <option value="option1">kompally</option>
          <option value="option2">Kompally jayabheri park</option>
          <option value="option3">Hanamkonda</option>
          <option value="option4">Technical campus</option>
          <option value="option5">Oxygenpark</option>
          {/* Add other predefined options */}
        </select>
      </div>
      <div className="input-group">
      <label>
        Password:
        </label>
        <input
          type="password"
          value={tailorData.password}
          onChange={(event) => setTailorData({ ...tailorData, password: event.target.value })}
        />
      </div>
      <div className="input-group">
       <label>
        phone number:
       </label>
        <input type='number' value={tailorData.Number}
         onChange={(event)=> setTailorData ({...tailorData,Number: event.target.value}) } />
        </div>
        <div className="input-group">
       <label>
        Social media url:
      </label>
        <input type='url' value={tailorData.url} 
        onChange={(event)=>setTailorData({...tailorData,url:event.target.value})} />
        </div>
      <br />

        <button type='submit' className='sign'>Signup</button>
    </form>
    <p className="signup">Already have an account? <a rel="noopener noreferrer" href="/tailorlogin" className="signin">Sign in</a></p>
    </motion.div>
    </motion.div>
    </motion.div>
  );
};

export default Tailor;
