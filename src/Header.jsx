```javascript
import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import logo from "./assets/logo.png";
import ServiceHead from "./components/service/ServiceHead";
import ServiceItem from "./components/service/ServiceItem";
import menu from "./assets/menu.png";
import { NavLink } from "react-router-dom";
import { useBlogData } from './context/Context';

const Header = () => {
  // Service categories data
  const serviceCategories = [
    {
      title: "Mobile Development",
      icon: "ri-smartphone-fill",
      items: [
        { name: "iOS", icon: "ri-apple-fill" },
        { name: "Android", icon: "ri-android-fill" },
        { name: "Cross-Platform", icon: "ri-device-line" }
      ]
    },
    {
      title: "Web Development",
      icon: "ri-computer-line",
      items: [
        { name: "Fullstack JS", icon: "ri-javascript-fill" },
        { name: "Ecommerce&CMS", icon: "ri-shopping-cart-2-line" },
        { name: "Magneto", icon: "ri-magnet-line" },
        { name: "Wordpress", icon: "ri-wordpress-fill" },
        { name: "Progressive Web App", icon: "ri-global-line" }
      ]
    },
    {
      title: "Animation Services",
      icon: "ri-movie-2-line",
      items: [
        { name: "Animation Services", icon: "ri-film-line" },
        { name: "Explainer Video", icon: "ri-video-line" }
      ]
    },
    {
      title: "BlockChain",
      icon: "ri-links-line",
      items: [
        { name: "Smart Contract", icon: "ri-file-list-3-line" },
        { name: "dApps", icon: "ri-apps-2-line" },
        { name: "Crypto Currency", icon: "ri-coin-line" }
      ]
    },
    {
      title: "Digital Marketing",
      icon: "ri-megaphone-line",
      items: [
        { name: "App Store Optimization", icon: "ri-store-2-line" },
        { name: "Social Media Optimization", icon: "ri-share-line" },
        { name: "Search Engine Optimization", icon: "ri-search-2-line" }
      ]
    }
  ];

  // Improved code with better organization and comments
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Improved accessibility by adding aria-label to menu toggle
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <img src={menu} alt="Menu" />
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item">
              <NavLink to="/" className="mobile-menu-link">Home</NavLink>
            </li>
            <li className="mobile-menu-item">
              <NavLink to="/about" className="mobile-menu-link">About</NavLink>
            </li>
            <li className="mobile-menu-item">
              <NavLink to="/services" className="mobile-menu-link">Services</NavLink>
            </li>
            <li className="mobile-menu-item">
              <NavLink to="/blog" className="mobile-menu-link">Blog</NavLink>
            </li>
            <li className="mobile-menu-item">
              <NavLink to="/contact" className="mobile-menu-link">Contact</NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
```
# Auto improvement by Melius