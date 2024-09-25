// src/components/Section.jsx
import React from 'react';
import Card from './Card';
import '../assets/styles/Section.css';

const Section = ({ title, cards }) => {
  return (
    <div className="section">
      <h1 className="section-title">{title}</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card 
            key={index}
            title={card.title}
            description={card.description}
            onClick={card.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
