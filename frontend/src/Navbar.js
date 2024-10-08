import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll style this later

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
