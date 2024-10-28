// src/components/WeeklyMealPlanner.jsx
import React from 'react';
import Sidebar from './Sidebar';
import ProfileMenu from './ProfileMenu';
import '../assets/styles/Home.css';

const WeeklyMealPlanner = () => {
  return (
    <div className="Home">
      <Sidebar />
      <div className="top-bar">FLAVOUR SYNC</div>
      <ProfileMenu />
      <div className="main-content">
        <div className="placeholder-container">
          <h1>Weekly Meal Planner</h1>
          <p>Plan your meals for the entire week here.</p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyMealPlanner;
