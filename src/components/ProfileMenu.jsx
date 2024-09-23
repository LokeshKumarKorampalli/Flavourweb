// src/components/ProfileMenu.jsx
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../assets/styles/ProfileMenu.css';

const ProfileMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Handle the Account Settings click
  const handleAccountSettings = () => {
    navigate('/profile'); // Navigate to /profile
  };

  return (
    <div 
      className="profile-menu-container" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <FaUserCircle className="profile-image" />
      
      {/* Display the menu when hovered */}
      {isHovered && (
        <div className="profile-dropdown">
          <div className="profile-info">
            <p className="profile-name">John Doe</p>
            <p className="profile-email">john.doe@example.com</p>
          </div>
          <div className="profile-actions">
            <button className="profile-button" onClick={handleAccountSettings}>Account Settings</button>
            <button className="profile-button">Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
