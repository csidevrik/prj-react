import React, { useState } from 'react';
import styles from './Search.module.css';

interface SearchResult {
  id: string;
  icon?: string;
  title: string;
  description?: string;
  type: 'history' | 'suggestion';
}

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Simulación de resultados
    if (value) {
      setResults([
        {
          id: '1',
          icon: '🏢',
          title: 'EMOV EP',
          description: 'Government office · 3XR6+GGG, Carlos Arízaga Toral, Cuenca',
          type: 'suggestion'
        },
        {
          id: '2',
          title: 'emov multas',
          type: 'history'
        },
        {
          id: '3',
          title: 'emov consultas',
          type: 'history'
        }
      ]);
    } else {
      setResults([]);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Buscar..."
          className={styles.searchInput}
        />
        {searchTerm && (
          <button 
            className={styles.clearButton}
            onClick={() => {
              setSearchTerm('');
              setResults([]);
            }}
          >
            ✕
          </button>
        )}
      </div>
      
      {results.length > 0 && (
        <div className={styles.resultsContainer}>
          {results.map((result) => (
            <div key={result.id} className={styles.resultItem}>
              {result.type === 'suggestion' && (
                <div className={styles.suggestionIcon}>{result.icon}</div>
              )}
              {result.type === 'history' && (
                <div className={styles.historyIcon}>🕒</div>
              )}
              <div className={styles.resultContent}>
                <div className={styles.resultTitle}>{result.title}</div>
                {result.description && (
                  <div className={styles.resultDescription}>{result.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search; 