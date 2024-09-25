// src/components/Home.jsx
import React from 'react';
import Sidebar from './Sidebar';
import ProfileMenu from './ProfileMenu';
import HeroCarousel from './HeroCarousel'; // Import the HeroCarousel component
import Section from './Section';
import '../assets/styles/Home.css';

function Home() {
  // Card data for "Recipe Generator" section
  const recipeGeneratorCards = [
    {
      title: 'Meal to Recipe',
      description: 'Convert meals into recipes with easy steps!',
      onClick: () => alert('Navigating to Meal to Recipe') // Replace with actual navigation logic
    },
    {
      title: 'Ingredients to Meal',
      description: 'Find recipes based on your available ingredients!',
      onClick: () => alert('Navigating to Ingredients to Meal') // Replace with actual navigation logic
    }
  ];

  // Card data for "Meal Planner" section
  const mealPlannerCards = [
    {
      title: 'Weekly Planner',
      description: 'Plan your meals for the entire week!',
      onClick: () => alert('Navigating to Weekly Planner') // Replace with actual navigation logic
    },
    {
      title: 'Monthly Planner',
      description: 'Organize your meals for the whole month!',
      onClick: () => alert('Navigating to Monthly Planner') // Replace with actual navigation logic
    }
  ];

  return (
    <div className="Home">
      <Sidebar />
      <ProfileMenu />
      <HeroCarousel /> {/* Add the HeroCarousel component at the top */}
      <div className="main-content">
        {/* Recipe Generator Section */}
        <Section title="Recipe Generator" cards={recipeGeneratorCards} />

        {/* Meal Planner Section */}
        <Section title="Meal Planner" cards={mealPlannerCards} />
      </div>
    </div>
  );
}

export default Home;
