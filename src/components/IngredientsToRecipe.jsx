// src/components/IngredientsToRecipe.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import ProfileMenu from './ProfileMenu'; // Assuming this is used
import '../assets/styles/IngredientsToRecipe.css';

function IngredientsToRecipe() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=YOUR_API_KEY`
      );
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="IngredientsToRecipe">
      <Sidebar />
      <div className="top-bar">Ingredients to Recipe</div>
      <ProfileMenu />

      <div className="main-content">
        <h1>Ingredients to Recipe</h1>
        <div className="input-section">
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter Ingredients (comma-separated)"
          />
          <button onClick={fetchRecipes}>Find Recipes</button>
        </div>
        {recipes.length > 0 && (
          <ul className="recipe-list">
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>Used Ingredients: {recipe.usedIngredientCount}</p>
                <p>Missing Ingredients: {recipe.missedIngredientCount}</p>
                <img src={recipe.image} alt={recipe.title} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default IngredientsToRecipe;
