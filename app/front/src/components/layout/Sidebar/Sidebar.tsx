import React from 'react';
import './Sidebar.css'; 
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item">
          <i className="icon">👤</i>
          <Link to="/facturas">Facturas</Link>
          {/* <span>Facturas</span> */}
        </li>
        <li className="menu-item">
          <i className="icon">⚙️</i>
          <span>General</span>
        </li>
        <li className="menu-item">
          <i className="icon">✉️</i>
          <span>Mail</span>
        </li>
        <li className="menu-item">
          <i className="icon">📅</i>
          <span>Calendar</span>
        </li>
        <li className="menu-item">
          <i className="icon">👥</i>
          <span>People</span>
        </li>
        <li className="menu-item">
          <i className="icon">⭐</i>
          <span>Premium</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;