import { useState } from 'react';
import './Exercise.css';

interface ExerciseProps {
  question: string;
  options: string[];
  explanation: React.ReactNode;
  correctAnswer: string;
}

const Exercise: React.FC<ExerciseProps> = ({ 
  question, 
  options, 
  explanation, 
  correctAnswer 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const handleAnswerSelect = (answer: string): void => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctAnswer);
  };

  return (
    <div className="exercise-container">
      <div className="question-section">
        <h3>{question}</h3>
        <div className="visualization">
          {/* Aquí irían los componentes visuales específicos del ejercicio */}
        </div>
      </div>

      <div className="options-grid">
        {options.map((option) => (
          <button
            key={option}
            className={`option-button ${selectedAnswer === option ? 
              (isCorrect ? 'correct' : 'incorrect') : ''}`}
            onClick={() => handleAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedAnswer && (
        <div className="feedback-section">
          <div className="result-bar">
            {isCorrect ? (
              <>
                <span className="correct-icon">🎉</span>
                <span>¡Correcto!</span>
                <span className="xp-gain">+15 XP</span>
              </>
            ) : (
              <span className="incorrect-text">Inténtalo de nuevo</span>
            )}
            
            <button 
              className="why-button"
              onClick={() => setShowExplanation(!showExplanation)}
            >
              ¿Por qué?
            </button>

            <button className="continue-button">
              Continuar
            </button>
          </div>

          {showExplanation && (
            <div className="explanation-panel">
              <h4>Explicación</h4>
              {explanation}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Exercise; 