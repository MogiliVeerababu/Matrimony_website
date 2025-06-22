import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('Verifying...');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/users/verify/${token}`);
        setMessage('✅ Email verified successfully. Redirecting to login...');
        setTimeout(() => navigate('/login'), 3000); // redirect after 3 seconds
      } catch (err) {
        setMessage('❌ Invalid or expired verification link.');
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{message}</h2>
    </div>
  );
}

export default VerifyEmail;
