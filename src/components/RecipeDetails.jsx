import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Added useNavigate
import axios from 'axios';
import { jsPDF } from 'jspdf';  // Import jsPDF
import Sidebar from './Sidebar';
import ProfileMenu from './ProfileMenu';
import '../assets/styles/RecipeDetails.css';

function RecipeDetails() {
  const { id } = useParams();
  const [recipeCard, setRecipeCard] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        // Fetch recipe card
        const cardResponse = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/card?apiKey=121fb04d12c64a81bb2c52c6685ba143`
        );
        setRecipeCard(cardResponse.data);

        // Fetch ingredients
        const ingredientResponse = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=121fb04d12c64a81bb2c52c6685ba143`
        );
        setIngredients(ingredientResponse.data.ingredients);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Add recipe title and ingredients to the PDF
    doc.text('Recipe Details', 10, 10);
    
    if (recipeCard) {
      doc.addImage(recipeCard.url, 'JPEG', 10, 20, 180, 80); // Add recipe image
    }

    doc.text('Ingredients:', 10, 110);
    ingredients.forEach((ingredient, index) => {
      doc.text(
        `${ingredient.name} - ${ingredient.amount.us.value} ${ingredient.amount.us.unit}`,
        10,
        120 + index * 10
      );
    });

    // Save the PDF
    doc.save('recipe.pdf');
  };

  return (
    <div className="RecipeDetails">
      <Sidebar />
      <div className="top-bar">Recipe Details</div>
      <ProfileMenu />

      <div className="main-content">
        {/* Go Back Button */}
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Go back
        </button>

        <h1>Recipe Details</h1>
        {recipeCard && (
          <div className="recipe-card">
            <img src={recipeCard.url} alt="Recipe Card" />
          </div>
        )}
        <h2>Ingredients</h2>
        <ul className="ingredient-list">
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} - {ingredient.amount.us.value} {ingredient.amount.us.unit}
            </li>
          ))}
        </ul>

        {/* Download PDF Button */}
        <button className="download-button" onClick={handleDownloadPDF}>
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default RecipeDetails;
