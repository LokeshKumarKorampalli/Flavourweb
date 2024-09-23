import React from 'react';
import '../assets/styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/Home">Home</Link>
        <Link to="/Features">Features</Link>
        <Link to="/Profile">Profile</Link>
    </nav>
  );
}

export default Navbar;
