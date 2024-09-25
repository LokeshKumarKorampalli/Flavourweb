// src/components/MealToRecipe.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar
import ProfileMenu from './ProfileMenu'; // Import ProfileMenu
import MealRecipeAPI from './MealRecipeAPI'; // Import the MealRecipeAPI component
import '../assets/styles/MealToRecipe.css'; // Import CSS

const MealToRecipe = () => {
  const [meal, setMeal] = useState('');
  const [recipeData, setRecipeData] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const apiKey = 'd86b4d5161c743c7829762825c846cea'; // Replace with your actual Spoonacular API key

  // Function to handle meal input submission and fetch data from the API
  const handleGenerateRecipe = async () => {
    if (!meal.trim()) {
      alert('Please enter a meal');
      return;
    }

    setLoading(true); // Set loading state
    setError(null); // Clear any previous error

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${meal}&number=1&apiKey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch recipe data');
      }

      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setRecipeData(data.results[0]); // Set the first result as the recipe data
      } else {
        setError('No recipes found for the entered meal.');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="meal-to-recipe-page">
      {/* Sidebar and ProfileMenu components */}
      <Sidebar />
      <ProfileMenu />

      {/* Main content area for Meal to Recipe */}
      <div className="meal-to-recipe-container main-content">
        <h1>Meal to Recipe Converter</h1>
        <input
          type="text"
          placeholder="Enter your meal..."
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          className="meal-input"
        />
        <button onClick={handleGenerateRecipe} className="generate-recipe-button" disabled={loading}>
          {loading ? 'Loading...' : 'Generate Recipe'}
        </button>

        {/* Display error message if any */}
        {error && <p className="error-message">{error}</p>}

        {/* Pass the recipe data to the MealRecipeAPI component */}
        <MealRecipeAPI recipeData={recipeData} />
      </div>
    </div>
  );
};

export default MealToRecipe;
