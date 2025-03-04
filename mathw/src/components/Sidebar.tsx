import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

interface TopicItem {
  id: string;
  name: string;
  icon: string;
  keywords?: string[]; // Palabras clave para búsqueda
  content?: string; // Contenido del tema para búsqueda
}

const Sidebar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const topics: TopicItem[] = [
    { 
      id: 'algebra', 
      name: 'Álgebra', 
      icon: '➗',
      keywords: ['ecuaciones', 'variables', 'polinomios'],
      content: 'Resolución de ecuaciones, operaciones algebraicas...'
    },
    { 
      id: 'propositional-logic', 
      name: 'Lógica Proposicional', 
      icon: '🎓',
      keywords: ['proposiciones', 'verdadero', 'falso', 'conectivos'],
      content: 'Estudio de proposiciones, conectivos lógicos, tablas de verdad...'
    },
    { id: 'calculus', name: 'Cálculo', icon: '∫' },
    { id: 'geometry', name: 'Geometría', icon: '📏' },
    { id: 'trigonometry', name: 'Trigonometría', icon: '📐' },
    { id: 'probability', name: 'Probabilidad', icon: '🎲' },
    { id: 'statistics', name: 'Estadística', icon: '📊' },
    { id: 'linear-algebra', name: 'Álgebra Lineal', icon: '🔢' },
    { id: 'discrete-mathematics', name: 'Matemática Discreta', icon: '🯰' },
    { id: 'number-theory', name: 'Teoría de Números', icon: '♠' },
  ];

  const filteredTopics = topics.filter(topic => {
    const searchLower = searchQuery.toLowerCase();
    return (
      topic.name.toLowerCase().includes(searchLower) ||
      topic.keywords?.some(keyword => keyword.toLowerCase().includes(searchLower)) ||
      topic.content?.toLowerCase().includes(searchLower)
    );
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <div className="logo">MathWiki</div>
        <button 
          className="search-icon"
          onClick={() => setShowSearch(!showSearch)}
        >
          🔍
        </button>
      </div>
      {showSearch && (
        <div className="search-container">
          <input 
            type="text" 
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Buscar temas..."
            className="search-input"
            autoFocus
          />
        </div>
      )}
      <nav className="nav-menu">
        {filteredTopics.map(topic => (
          <Link key={topic.id} to={`/topic/${topic.id}`} className="nav-item">
            <span className="topic-icon">{topic.icon}</span>
            <span className="topic-name">
              {searchQuery ? (
                <HighlightText text={topic.name} highlight={searchQuery} />
              ) : (
                topic.name
              )}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

// Componente auxiliar para resaltar el texto buscado
const HighlightText: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <span>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="highlight">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

export default Sidebar; 