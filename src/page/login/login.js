// src/Login.js
import React, { useState } from 'react';
import './login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'shubh@gmail.com' && password === '1234567') {
      alert('Login successful!');
      setErrorMessage('');

    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="flex-container">
        <form onSubmit={handleLogin}>
            <h1 className="heading">Please Login</h1>
            <div className="input-group">
            <input
              type="email"
              className="email"
              placeholder="Email Id"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            </div>
            <div className="input-group">
            <input
              type="password"
              className="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            </div>
         {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button className="login-form" type="submit">
              Login
            </button>
        </form>
      </div>
  );
};

export default Login;
