import Exercise from '../components/Exercise';

const PropositionalLogic: React.FC = () => {
  const logicExercise = {
    question: "Si p y q son proposiciones, ¿cuál es el resultado de p ∧ (p → q)?",
    options: ["p ∧ q", "p", "q", "¬p ∨ q"],
    correctAnswer: "p ∧ q",
    explanation: (
      <div>
        <p>Analicemos paso a paso:</p>
        <ol>
          <li>Primero, recordemos que p → q es equivalente a ¬p ∨ q</li>
          <li>Entonces, p ∧ (p → q) = p ∧ (¬p ∨ q)</li>
          <li>Por la ley distributiva: (p ∧ ¬p) ∨ (p ∧ q)</li>
          <li>p ∧ ¬p = F (falso)</li>
          <li>Por lo tanto: F ∨ (p ∧ q) = p ∧ q</li>
        </ol>
      </div>
    )
  };

  return (
    <div className="topic-page">
      <h1>Lógica Proposicional</h1>
      <section className="topic-intro">
        <h2>Introducción</h2>
        <p>La lógica proposicional es el estudio de las proposiciones y sus relaciones lógicas.</p>
      </section>
      <section className="topic-content">
        <Exercise {...logicExercise} />
      </section>
    </div>
  );
}

export default PropositionalLogic; 