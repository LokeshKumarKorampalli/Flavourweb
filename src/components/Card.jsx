// src/components/Card.jsx
import React from 'react';
import '../assets/styles/Card.css';

const Card = ({ title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
