import Exercise from '../components/Exercise';

function Topic() {
  const sampleExercise = {
    question: "¿Cuál es el peso de 1 cuadrado?",
    options: ["4", "8", "10", "16"],
    correctAnswer: "8",
    explanation: (
      <div>
        <div className="explanation-visual">
          {/* Aquí iría la visualización de los 5 cuadrados */}
        </div>
        <p>
          Como cinco cuadrados tienen un peso de 40, un solo cuadrado debe pesar
          una quinta parte de ese total:
        </p>
        <div className="math-formula">
          40 ÷ 5 = 8
        </div>
        <p>Por lo tanto, cada cuadrado pesa 8.</p>
      </div>
    )
  };

  return (
    <div className="topic-page">
      <Exercise {...sampleExercise} />
    </div>
  );
}

export default Topic; 