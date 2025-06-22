import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';

function ResetPassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`/users/reset-password/${token}`, { newPassword });
      setMessage(res.data.message);
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
        />
        <button type="submit">Reset Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ResetPassword;
