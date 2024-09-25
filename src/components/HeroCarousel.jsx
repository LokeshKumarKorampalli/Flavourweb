// src/components/HeroCarousel.jsx
import React, { useState, useEffect } from 'react';
import '../assets/styles/HeroCarousel.css';

// Import your images
import topRecipeImage from '../assets/images/image1.png';
import makeYourMealImage from '../assets/images/image2.png';
import healthyEatingImage from '../assets/images/image3.png';

const carouselItems = [
  {
    title: "Top Recipe",
    description: "Discover the most popular recipes now!",
    image: topRecipeImage, // Use the imported image
    buttonText: "View Recipes",
    link: "/recipes"
  },
  {
    title: "Make Your Meal Now",
    description: "Plan your meals quickly and easily!",
    image: makeYourMealImage, // Use the imported image
    buttonText: "Start Planning",
    link: "/meal-planner"
  },
  {
    title: "Healthy Eating",
    description: "Discover healthy recipes for a balanced diet!",
    image: healthyEatingImage, // Use the imported image
    buttonText: "Learn More",
    link: "/healthy-eating"
  }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically rotate the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = carouselItems[currentIndex];

  return (
    <div className="hero-carousel">
      <div className="carousel-container">
        <div className="carousel-card" style={{ backgroundImage: `url(${currentItem.image})` }}>
          <div className="carousel-content">
            <h1>{currentItem.title}</h1>
            <p>{currentItem.description}</p>
            <a href={currentItem.link} className="carousel-button">{currentItem.buttonText}</a>
          </div>
        </div>
        <div className="carousel-navigation">
          {carouselItems.map((_, index) => (
            <span
              key={index}
              className={`navigation-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
