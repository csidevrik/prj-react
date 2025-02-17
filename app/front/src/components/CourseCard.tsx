import React from 'react';
import styles from './CourseCard.module.css';

interface CourseCardProps {
  type: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  hasCertificate?: boolean;
}

const CourseCard = ({ type, title, description, level, duration, hasCertificate }: CourseCardProps) => {
  return (
    <div className={styles.courseCard}>
      <span className={styles.courseType}>{type}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        {hasCertificate && (
          <div className={styles.certificate}>
            <span>With Certificate</span>
          </div>
        )}
        <div className={styles.meta}>
          <span>{level}</span>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard; 