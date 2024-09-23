// src/components/Home.jsx
import React from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar
import ProfileMenu from './ProfileMenu'; // Import the new ProfileMenu
import '../assets/styles/Home.css'; // Import CSS

function Home() {
  return (
    <div className="Home">
      <Sidebar />
      <ProfileMenu /> {/* Add the ProfileMenu component */}
      <div className="main-content">
        <h1>Welcome to the Home Page!</h1>
        <h1>Welcome to the Home Page!</h1>
      </div>
    </div>
  );
}

export default Home;
