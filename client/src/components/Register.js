import React, { useState } from 'react';
import { api } from '../api';

function Register() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', dob: '', gender: '', religion: '', caste: '', profession: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/register', formData);
      alert('Registered successfully!');
    } catch (error) {
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Register</h2>
      {Object.keys(formData).map((field) => (
        <input
          key={field}
          type={field === 'password' ? 'password' : field === 'dob' ? 'date' : 'text'}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={formData[field]}
          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
          style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
          required
        />
      ))}
      <button type='submit'>Register</button>
    </form>
  );
}
export default Register;



