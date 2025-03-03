import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Logo clicked');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
        <h1>facetapa</h1>
      </Link>
      
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