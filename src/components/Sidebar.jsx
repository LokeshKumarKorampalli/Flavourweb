// Sidebar.jsx
import React, { useState } from 'react';
import { FaHome, FaServicestack, FaInfoCircle, FaPhone } from 'react-icons/fa'; // Import icons from react-icons
import '../assets/styles/Sidebar.css';
import logo from '../assets/images/profilepic.jpeg'; // Import your logo image

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };

    return (
        <div 
            className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="sidebar-brand">
                <a href="/home" className="brand-logo">
                    <img src={logo} alt="MyLogo" className="logo-image" />
                </a>
            </div>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <FaHome className="nav-icon" /> {/* Icon */}
                        {isExpanded && <span className="nav-text">Home</span>} {/* Display text only if expanded */}
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <FaServicestack className="nav-icon" /> {/* Icon */}
                        {isExpanded && <span className="nav-text">Services</span>} {/* Display text only if expanded */}
                    </a>
                    {isExpanded && (
                        <ul className="dropdown-menu">
                            <li><a href="#" className="dropdown-item">Service 1</a></li>
                            <li><a href="#" className="dropdown-item">Service 2</a></li>
                            <li><a href="#" className="dropdown-item">Service 3</a></li>
                        </ul>
                    )}
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <FaInfoCircle className="nav-icon" /> {/* Icon */}
                        {isExpanded && <span className="nav-text">About</span>} {/* Display text only if expanded */}
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <FaPhone className="nav-icon" /> {/* Icon */}
                        {isExpanded && <span className="nav-text">Contact</span>} {/* Display text only if expanded */}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
