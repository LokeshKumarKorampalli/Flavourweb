// src/components/Sidebar.jsx
import React, { useState } from 'react';
import '../assets/styles/Sidebar.css';
import logo from '../assets/images/profilepic.jpeg';
import { FaHome, FaInfoCircle, FaPhone, FaBars, FaChevronRight } from 'react-icons/fa';
import { BiSolidFoodMenu } from "react-icons/bi";
import { GiMeal } from "react-icons/gi";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false); // State for controlling submenu visibility

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle hover to show/hide submenu
  const handleMouseEnter = () => {
    setIsSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsSubmenuVisible(false);
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
            <li className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a className="nav-link" href="/recipe">
                    <BiSolidFoodMenu className="nav-icon" /> 
                    {isExpanded && (
                        <span className="nav-text">
                            Recipe Generator
                            <FaChevronRight className="arrow-icon" />
                        </span>
                    )}
                </a>
                {isExpanded && isSubmenuVisible && (
                    <ul className="submenu">
                        <li className="submenu-item">
                            <a href="/recipe-to-ingredients">Recipe to Ingredients</a>
                        </li>
                        <li className="submenu-item">
                            <a href="/ingredients-to-recipe">Ingredients to Recipe</a>
                        </li>
                    </ul>
                )}
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/meal">
                    <GiMeal className="nav-icon" /> 
                    {isExpanded && (
                        <span className="nav-text">
                            Meal Planner
                            <FaChevronRight className="arrow-icon" />
                        </span>
                    )}
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <FaInfoCircle className="nav-icon" /> 
                    {isExpanded && <span className="nav-text">About</span>}
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
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
