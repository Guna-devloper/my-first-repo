import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const Navigate = useNavigate()
  const handleSubmit = () =>{
    Navigate("/")
  }
  return (
    <div className='login-body'>
    <div className="login-container">
      <div className="login-card">
        <h1 className="app-title">FuelMate</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
             
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              
            />
          </div>
          <button onClick={handleSubmit} className="login-button">
            Login
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
