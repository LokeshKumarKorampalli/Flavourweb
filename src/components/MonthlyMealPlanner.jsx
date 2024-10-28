// src/components/MonthlyMealPlanner.jsx
import React from 'react';
import Sidebar from './Sidebar';
import ProfileMenu from './ProfileMenu';
import '../assets/styles/Home.css';

const MonthlyMealPlanner = () => {
  return (
    <div className="Home">
      <Sidebar />
      <div className="top-bar">FLAVOUR SYNC</div>
      <ProfileMenu />
      <div className="main-content">
        <div className="placeholder-container">
          <h1>Monthly Meal Planner</h1>
          <p>Organize your meals for the whole month in advance.</p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyMealPlanner;
