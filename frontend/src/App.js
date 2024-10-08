// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Home from './Home'; // Import Home component
import background from './assets/background.jpg';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleRegisterSuccess = () => {
    setIsAuthenticated(true);
  };

  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Router>
      <div style={backgroundStyle}>  {/* Keep background style here */}
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home route */}
            <Route
              path="/login"
              element={<Login onSuccess={handleLoginSuccess} />} 
            />
            <Route
              path="/register"
              element={<Register onSuccess={handleRegisterSuccess} />}
            />
          </Routes>
          {isAuthenticated && (
            <div>
              <h2>Welcome! You are logged in.</h2>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
