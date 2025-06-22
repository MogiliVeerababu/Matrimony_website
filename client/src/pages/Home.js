import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // ✅ Fixed: import Link
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay">
        <div className="form-box">
          <h2>Create a Matrimony Profile</h2>
          <form>
            <select>
              <option>Matrimony profile for</option>
              <option>Myself</option>
              <option>Brother</option>
              <option>Sister</option>
            </select>
            <input type="text" placeholder="Enter Name" />
            <input type="tel" placeholder="Enter Number" />
            <button type="button" onClick={() => navigate('/register')}>Register Free →</button>
          </form>
          <p>
            Already a member?{' '}
            <Link to='/login' style={{
              padding: '10px 20px',
              backgroundColor: '#2ecc71',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px'
            }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
