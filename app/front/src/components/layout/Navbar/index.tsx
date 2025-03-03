import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { NavbarProps } from './types';

const Navbar: FC<NavbarProps> = ({ onLogoClick }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    onLogoClick?.();
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarLogo} onClick={handleLogoClick}>
        <h1>facetapa</h1>
      </Link>
      
      <div className={styles.navbarSearch}>
        <input 
          type="text" 
          placeholder="Buscar"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <i className={styles.searchIcon}>🔍</i>
        </button>
      </div>

      <div className={styles.navbarActions}>
        <button className={styles.actionButton}>🔔</button>
        <div className={styles.windowControls}>
          <button className={styles.windowButton}>─</button>
          <button className={styles.windowButton}>□</button>
          <button className={styles.windowButton}>✕</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;