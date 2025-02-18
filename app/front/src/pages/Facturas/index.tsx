import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './Facturas.module.css';
import FileIcon from '../../components/FileIcon';
import { getFileIcon, getFileColor } from '../../utils/fileHelpers';

interface FileWithPreview extends File {
    preview?: string;
}

const Facturas = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/xml': ['.xml'],
      'application/json': ['.json'],
      'text/csv': ['.csv'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
    }
  });

  return (
    <div className={styles.container}>
      <div {...getRootProps()} className={styles.dropzone}>
        <input {...getInputProps()} />
        <div className={styles.dropzoneContent}>
          {isDragActive ? (
            <p>Suelta los archivos aquí...</p>
          ) : (
            <p>Arrastra archivos aquí o haz clic para seleccionar</p>
          )}
        </div>
      </div>

      <div className={styles.filesGrid}>
        {files.map((file, index) => (
          <div
            key={index}
            className={styles.fileCard}
            style={{
              animationDelay: `${index * 0.05}s`
            }}
          >
            <div 
              className={styles.filePreview}
              style={{ 
                backgroundColor: `${getFileColor(file.type)}15`
              }}
            >
              <div 
                className={styles.fileIcon}
                style={{ 
                  color: getFileColor(file.type)
                }}
              >
                <FileIcon filename={file.name} />
              </div>
            </div>
            <div className={styles.fileInfo}>
              <span className={styles.fileName}>{file.name}</span>
              <span className={styles.fileSize}>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facturas; 