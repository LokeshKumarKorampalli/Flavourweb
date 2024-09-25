// src/components/Sidebar.jsx
import React, { useState } from 'react';
import '../assets/styles/Sidebar.css';
import logo from '../assets/images/profilepic.jpeg';
import { FaHome, FaInfoCircle, FaPhone, FaBars, FaChevronRight } from 'react-icons/fa';
import { BiSolidFoodMenu } from "react-icons/bi";
import { GiMeal } from "react-icons/gi";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRecipeSubmenuVisible, setIsRecipeSubmenuVisible] = useState(false); // State for controlling Recipe submenu visibility
  const [isMealSubmenuVisible, setIsMealSubmenuVisible] = useState(false); // State for controlling Meal Planner submenu visibility

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle hover for Recipe submenu
  const handleRecipeMouseEnter = () => {
    setIsRecipeSubmenuVisible(true);
  };

  const handleRecipeMouseLeave = () => {
    setIsRecipeSubmenuVisible(false);
  };

  // Handle hover for Meal Planner submenu
  const handleMealMouseEnter = () => {
    setIsMealSubmenuVisible(true);
  };

  const handleMealMouseLeave = () => {
    setIsMealSubmenuVisible(false);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button className="menu-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="/home">
            <FaHome className="nav-icon" />
            {isExpanded && <span className="nav-text">Home</span>}
          </a>
        </li>

        {/* Recipe Generator Menu Item with Submenu */}
        <li className="nav-item" onMouseEnter={handleRecipeMouseEnter} onMouseLeave={handleRecipeMouseLeave}>
          <a className="nav-link">
            <BiSolidFoodMenu className="nav-icon" />
            {isExpanded && (
              <span className="nav-text">
                Recipe Generator
                <FaChevronRight className="arrow-icon" />
              </span>
            )}
          </a>
          {isExpanded && isRecipeSubmenuVisible && (
            <ul className="submenu">
              <li className="submenu-item">
                <a href="/meal-to-recipe">Meal to Recipe</a>
              </li>
              <li className="submenu-item">
                <a href="/ingredients-to-recipe">Ingredients to Recipe</a>
              </li>
            </ul>
          )}
        </li>

        {/* Meal Planner Menu Item with Submenu */}
        <li className="nav-item" onMouseEnter={handleMealMouseEnter} onMouseLeave={handleMealMouseLeave}>
          <a className="nav-link">
            <GiMeal className="nav-icon" />
            {isExpanded && (
              <span className="nav-text">
                Meal Planner
                <FaChevronRight className="arrow-icon" />
              </span>
            )}
          </a>
          {isExpanded && isMealSubmenuVisible && (
            <ul className="submenu">
              <li className="submenu-item">
                <a href="/weekly-meal-planner">Weekly Meal Planner</a>
              </li>
              <li className="submenu-item">
                <a href="/monthly-meal-planner">Monthly Meal Planner</a>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/info">
            <FaInfoCircle className="nav-icon" />
            {isExpanded && <span className="nav-text">About</span>}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">
            <FaPhone className="nav-icon" />
            {isExpanded && <span className="nav-text">Contact</span>}
          </a>
        </li>
      </ul>
      
      <div className="sidebar-brand">
        <a href="/home" className="brand-logo">
          <img src={logo} alt="MyLogo" className="logo-image" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
