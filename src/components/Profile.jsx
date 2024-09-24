// src/components/Profile.jsx
import React from 'react';
import '../assets/styles/Profile.css'; // Make sure you have a CSS file for styling
import Sidebar from './Sidebar'; // Import the Sidebar
import ProfileMenu from './ProfileMenu';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: '1234 React Street, Redux City, JS 12345',
    height: '180 cm',
    weight: '75 kg',
    age: '30',
    gender: 'Male',
    activity: 'Active (Exercise 4-5 times a week)',
    eaterType: 'Vegetarian',
    bio: 'A passionate developer who loves React and enjoys a healthy lifestyle!',
    profilepicurl: 'someimage.com',
  };

  return (
    <div className="profile-container">
      <Sidebar />
      <ProfileMenu />
      <div className="profile-details">
        <h1>Profile Details</h1>
        <div className="profile-pic-container">
          <div className="profile-pic">
            <img src={user.profilepicurl} />
          </div>
          <button className="edit-profile-pic-button">Edit Profile Picture</button>
        </div>
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Height:</strong> {user.height}</p>
          <p><strong>Weight:</strong> {user.weight}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Activity Level:</strong> {user.activity}</p>
          <p><strong>Dietary Preferences:</strong> {user.eaterType}</p>
        </div>

        {/* The "Edit Profile" button should be directly below the profile-info div */}
        <button className="edit-profile-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
