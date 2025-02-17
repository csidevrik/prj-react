import React from 'react';
import styles from './Dashboard.module.css';
import CourseCard from '../../components/CourseCard';

const Dashboard = () => {
    return (
    <div className={styles.dashboard}>
      {/* Panel Principal */}
        <main className={styles.mainContent}>
        {/* Keep Learning Section */}
        <section className={styles.keepLearning}>
            <h2>Keep learning</h2>
            <div className={styles.courseCard}>
                <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '0%' }}>
                    0%
                </div>
                </div>
                <div className={styles.courseInfo}>
                    <span className={styles.courseLabel}>Course</span>
                    <h3>Learn Go</h3>
                    <p>Current Module: Learn Go: Introduction</p>
                </div>
                <div className={styles.courseActions}>
                    <button className={styles.syllabusButton}>View syllabus</button>
                    <button className={styles.resumeButton}>Resume</button>
                </div>
            </div>
        </section>

        {/* Progress Section */}
        <section className={styles.progressSection}>
            <h2>Follow your progress</h2>
            <div className={styles.progressGrid}>
                <div className={styles.skillsCard}>
                    <h3>Skills</h3>
                    <p>Take action to stay motivated</p>
                    <p>Move forward in your learning and watch your skills grow.</p>
                    <button>Continue in Learn Go</button>
                </div>
            
            <div className={styles.targetCard}>
                <h3>No weekly target set yet</h3>
                <button className={styles.setTargetButton}>Set target</button>
            </div>

            <div className={styles.goalCard}>
                <div className={styles.goalHeader}>
                <h3>Your goal</h3>
                <button className={styles.editButton}>Edit</button>
                </div>
                <p>Learn for school</p>
            </div>
        </div>
        </section>

        {/* Recommended Section */}
        <section className={styles.recommendedSection}>
            <h2>Recommended for you</h2>
            <div className={styles.courseGrid}>
            <CourseCard
                type="Course"
                title="Revisa n facturas "
                description="Learn to handle files and errors effectively and master web programming in Go in this..."
                level="Intermediate"
                duration="3 hours"
                hasCertificate={true}
            />
            {/* Más tarjetas aquí */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard; 