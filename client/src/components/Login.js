import React, { useState } from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/users/login', { email, password });
      alert('Login successful');
      navigate('/profiles');
    } catch (error) {
      const msg = error.response?.data?.message || error.message;
      alert('Login failed: ' + msg);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
      />
      <button type="submit">Login</button>
      <p style={{ marginTop: '10px' }}>
        <a href="/forgot-password">Forgot Password?</a>
      </p>
      <p>
        Don't have an account? <a href="/register">Create Account</a>
      </p>
    </form>
  );
}

export default Login;
