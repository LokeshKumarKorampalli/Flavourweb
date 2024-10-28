import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProfileMenu from './ProfileMenu';
import '../assets/styles/RecipeToIngredients.css';

function RecipeToIngredients() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate(); 

  const fetchRecipes = async (searchQuery) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=121fb04d12c64a81bb2c52c6685ba143&query=${searchQuery}`
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchRecipes(query);
    }
  };

  return (
    <div className="RecipeToIngredients">
      <Sidebar />
      <div className="top-bar">Search Recipes</div>
      <ProfileMenu />
      
      <div className="main-content">
        <h1>Search Recipes by Name</h1>
        <div className="input-section">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown} 
            placeholder="Enter recipe name (e.g., pasta)"
          />
          <button onClick={() => fetchRecipes(query)}>Search</button>
        </div>
        {recipes.length > 0 && (
          <ul className="recipe-list">
            {recipes.map((recipe, index) => (
              <li key={index} onClick={() => handleCardClick(recipe.id)} className="recipe-card">
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt={recipe.title} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default RecipeToIngredients;
