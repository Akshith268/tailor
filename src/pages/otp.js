import React, { useState } from 'react';
import axios from 'axios';

const OTPComponent = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [message, setMessage] = useState('');
  const [showOTPFields, setShowOTPFields] = useState(false);



  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('https://backend-owo0.onrender.com/api/verifyOTP', { email, otp });
      setMessage(response.data.message);
      setShowOTPFields(false); // Hide OTP input fields after verification
      setOTP(''); // Clear the OTP field
      if(response.data.status=='ok')
      {
        alert("OTP verified successfully");
        window.location.href="/tailordashboard";
      }
    } catch (error) {
      setMessage('Failed to verify OTP');
    }
  };

  return (
    <div>
     <p>An otp has sent to the mail you have provided</p>
     <p>Once again provide email here</p>

      
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          /> <br /> <br />
          <input
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            placeholder="Enter OTP"
          />
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </div>

    </div>
  );
};

export default OTPComponent;
