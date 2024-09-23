// src/components/Profile.jsx
import React from 'react';
import '../assets/styles/Profile.css'; // Make sure you have a CSS file for styling
import Sidebar from './Sidebar'; // Import the Sidebar
import ProfileMenu from './ProfileMenu';

const Profile = () => {
  // Assume these details would be fetched from an API or context in a real application
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '1234 React Street, Redux City, JS 12345',
    phone: '123-456-7890',
    bio: 'A passionate developer who loves React!'
  };

  return (
    <div className="profile-container">
      <Sidebar />
      {/* <ProfileMenu /> */}
      <h1>Profile Details</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
