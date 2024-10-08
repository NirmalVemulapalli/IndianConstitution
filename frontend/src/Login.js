// src/Login.js
import React, { useState } from 'react';
import './Login.css';

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Invalid email format');
      return;
    }

    // Implement login logic
    console.log('Logging in:', { email, password });
    setMessage('Login successful!');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
