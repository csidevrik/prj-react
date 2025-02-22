import { FC } from 'react';
import styles from './Home.module.css';

const Home: FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <h1>Bienvenido a Facetapa</h1>
        <p>Sistema de gestión de facturas</p>
      </div>
    </div>
  );
};

export default Home;
