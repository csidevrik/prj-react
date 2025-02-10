import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="outlook-navbar">
      <div className="navbar-left">
        <div className="brand">
          <h1>facetapa</h1>
        </div>
      </div>
      
      <div className="navbar-center">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Buscar" 
            className="search-input"
          />
          <button className="search-button">
            <i className="search-icon">🔍</i>
          </button>
        </div>
      </div>

      <div className="navbar-right">
        <button className="icon-button">💡</button>
        <button className="icon-button">📝</button>
        <button className="icon-button">🔔</button>
        <button className="icon-button">⚙️</button>
        <button className="icon-button">➖</button>
        <button className="icon-button">⬜</button>
        <button className="icon-button">✖️</button>
      </div>
    </nav>
  )
}

export default Navbar;