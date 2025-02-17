import React from 'react';
import styles from '../styles/FileIcon.module.css';
import { FaFile as DocumentIcon } from 'react-icons/fa';

const FileIcon = ({ filename }) => {
  const getExtension = (filename) => {
    return filename.split('.').pop().toUpperCase();
  };

  return (
    <div className={styles.fileIcon}>
      <DocumentIcon />
      <span className={styles.extension}>.{getExtension(filename)}</span>
    </div>
  );
};

export default FileIcon; 