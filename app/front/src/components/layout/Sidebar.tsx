import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard', path: '/' },
    { id: 'facturas', icon: '📚', label: 'Facturas', path: '/facturas' },
    { id: 'retenciones', icon: '📅', label: 'Retenciones', path: '/retenciones' },
    { id: 'pagos', icon: '💻', label: 'Pagos', path: '/pagos', badge: 'Upgrade' },
    { id: 'memos', icon: '🖥️', label: 'Memos', path: '/memos' },
  ];

  const handleItemClick = (itemId: string, path: string) => {
    setActiveItem(itemId);
    navigate(path);
  };

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navigation}>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`${styles.menuItem} ${activeItem === item.id ? styles.active : ''}`}
              onClick={() => handleItemClick(item.id, item.path)}
            >
              <i className={`icon-${item.id}`}>{item.icon}</i>
              <span>{item.label}</span>
              {item.badge && <span className={styles.upgradeBadge}>{item.badge}</span>}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.promoCard}>
        <h3>Try Plus or Pro with a 7-day free trial</h3>
        <p>Go deeper and learn job-ready skills. Practice with real-world projects, take assessments, and earn certificates.</p>
        <button className={styles.tryButton}>Try for free</button>
      </div>
    </aside>
  );
};

export default Sidebar; 