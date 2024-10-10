// src/components/Header.js
import React from 'react';
import logo from '../assets/images/logo.png'; // Import the logo

const Header = () => (
  <header className="header">
    <img src={logo} alt="College Placement Management System Logo" style={{ height: '50px' }} />
    <h1>College Placement Management System 2024</h1>
  </header>
);

export default Header;
