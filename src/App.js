import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Search';
import UserPage from './pages/Test';
import './pages/tailor.js';
import Tailor from './pages/tailor.js';
import Tailordashboard from './pages/tailordashboard.js';
import Tailorlogin from './pages/tailorlogin.js';
import OTPComponent from './pages/otp.js';
import Ratings from './pages/Ratings.js';
import Userdashboard from './pages/userdashboard.js';
import './App.scss';
function App() {
 
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/search" exact element={<Search/>}/> */}
        <Route path="/test" exact element={<UserPage/>}/>
        <Route path="/tailor" exact element={<Tailor/>}/>
        <Route path='/tailordashboard/:name/:currentrating' exact element={<Tailordashboard/>} />
        <Route path='/tailorlogin' exact element={<Tailorlogin/>} />
        <Route path='/otp' exact element={<OTPComponent/>} />
        <Route path='/ratings/:name/:email/:phonenumber' exact element={<Ratings/>} />      
        <Route path='/userdashboard/:username' element={<Userdashboard/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
