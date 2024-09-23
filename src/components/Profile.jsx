import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Profile.css';

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens, user data)
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
        <h1 className="profile-name">John Doe</h1>
        <p className="profile-bio">
          A brief bio about John Doe. Passionate about web development, design, and technology.
        </p>
      </div>
      <div className="profile-details">
        <h2>Contact Information</h2>
        <p>Email: johndoe@example.com</p>
        <p>Phone: +123 456 7890</p>
        <h2>Follow Me</h2>
        <div className="social-links">
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <button className="logout-button" onClick={handleLogout}>Logout</button> {/* Add this line */}
      </div>
    </div>
  );
}

export default Profile;
