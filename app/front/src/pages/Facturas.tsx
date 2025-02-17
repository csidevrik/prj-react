import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './Facturas.module.css';

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
      'image/*': ['.png', '.jpg', '.jpeg']
    }
  });

  return (
    <div className={styles.facturasContainer}>
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
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className={styles.filePreview}>
              {file.type.includes('image') ? (
                <img src={file.preview} alt={file.name} />
              ) : (
                <div className={styles.pdfIcon}>PDF</div>
              )}
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