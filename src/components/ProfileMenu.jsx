// src/components/ProfileMenu.jsx
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import profile icon
import '../assets/styles/ProfileMenu.css'; // Import the ProfileMenu CSS

const ProfileMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Functions to handle hover events
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
            <button className="profile-button">Account Settings</button>
            <button className="profile-button">Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
