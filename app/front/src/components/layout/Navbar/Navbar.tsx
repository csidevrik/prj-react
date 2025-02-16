import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>facetapa</h1>
      </div>
      
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Buscar"
          className="search-input"
        />
        <button className="search-button">
          <i className="search-icon">🔍</i>
        </button>
      </div>

      <div className="navbar-actions">
        
        <button className="action-button">🔔</button>
        <div className="window-controls">
          <button className="window-button">─</button>
          <button className="window-button">□</button>
          <button className="window-button">✕</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;