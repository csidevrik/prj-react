import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <span>facetapa</span>
        </div>
      </div>

      <div className={styles.centerSection}>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.searchButton}>
          <i className="search-icon">🔍</i>
        </button>
        <button className={styles.notificationButton}>
          <i className="notification-icon">🔔</i>
        </button>
        <div className={styles.avatar}>
          <img src="/default-avatar.png" alt="User avatar" />
        </div>
        <button className={styles.trialButton}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 