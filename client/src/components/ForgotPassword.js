import React, { useState } from 'react';
import { api } from '../api';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/users/forgot-password', { email });
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ForgotPassword;
