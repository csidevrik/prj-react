import { FC } from 'react';
import styles from './Invoices.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Invoices: FC = () => {
  return (
    <div className={styles.invoicesContainer}>
      <div className={styles.leftPanel}>
        {/* Panel izquierdo */}
        <h2>Panel Izquierdo</h2>
        {/* Aquí puedes agregar contenido como filtros, lista de facturas, etc. */}
      </div>
      <div className={styles.rightPanel}>
        {/* Panel derecho */}
        <h2>Panel Derecho</h2>
        {/* Aquí puedes agregar el detalle de la factura seleccionada */}
      </div>
    </div>
  );
};

export default Invoices; 