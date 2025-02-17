import { useState } from 'react';
import styles from './GoalSelection.module.css';

interface Goal {
  id: string;
  icon: string;
  text: string;
}

const goals: Goal[] = [
  { id: 'professional', icon: '📈', text: 'Professional growth' },
  { id: 'sharp', icon: '🎯', text: 'Staying sharp' },
  { id: 'school', icon: '📚', text: 'Excelling in school' },
  { id: 'child', icon: '👶', text: 'Helping my child learn' },
  { id: 'students', icon: '🍎', text: 'Helping my students learn' },
  { id: 'other', icon: '🦄', text: 'Something else' },
];

const GoalSelection = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton}>←</button>
        <div className={styles.progressBar}>
          <div className={styles.progress}></div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.questionBox}>
          <div className={styles.avatar}>😊</div>
          <div className={styles.bubble}>
            <p>What's your top goal?</p>
          </div>
        </div>

        <div className={styles.goalsList}>
          {goals.map((goal) => (
            <button
              key={goal.id}
              className={`${styles.goalButton} ${selectedGoal === goal.id ? styles.selected : ''}`}
              onClick={() => setSelectedGoal(goal.id)}
            >
              <span className={styles.goalIcon}>{goal.icon}</span>
              <span className={styles.goalText}>{goal.text}</span>
            </button>
          ))}
        </div>

        <button 
          className={styles.continueButton}
          disabled={!selectedGoal}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default GoalSelection; 