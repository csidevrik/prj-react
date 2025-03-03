import React from 'react';
import styles from './src/components/FileIcon/FileIcon.module.css';  
// import { FaFile as DocumentIcon } from 'react-icons/fa';

interface FileIconProps {
  filename: string;
}

const FileIcon: React.FC<FileIconProps> = ({ filename }) => {
  const getIconByExtension = (filename: string) => {
    const ext = filename.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'pdf': return '📄';
      case 'xml': return '📋';
      case 'json': return '{ }';
      case 'csv': return '📊';
      case 'xlsx':
      case 'xls': return '📑';
      default: return '📁';
    }
  };

  return (
    <div className={styles.icon}>
      {getIconByExtension(filename)}
    </div>
  );
};

const getFileColor = (fileType: string) => {
  const types: { [key: string]: string } = {
    'application/pdf': '#e53935',    // Rojo
    'application/xml': '#1976d2',    // Azul
    'application/json': '#f57c00',   // Naranja
    'text/csv': '#388e3c',          // Verde
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '#7b1fa2', // Morado
    'application/vnd.ms-excel': '#7b1fa2',
  };
  // ... resto del código
};

export default FileIcon; 