// src/components/MealRecipeAPI.jsx
import React from 'react';
import '../assets/styles/MealRecipeAPI.css'; // Import the CSS for this component

const MealRecipeAPI = ({ recipeData }) => {
  if (!recipeData) return null; // Don't display anything if no recipe data is passed

  return (
    <div className="meal-recipe-api">
      <h3>{recipeData.title}</h3>
      <img
        src={recipeData.image}
        alt={recipeData.title}
        className="recipe-image"
      />
      <p>Here is a recipe suggestion for your meal!</p>
    </div>
  );
};

export default MealRecipeAPI;
