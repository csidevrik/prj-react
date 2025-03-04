import { useState, useEffect } from 'react';
import './PredictiveSearch.css';

interface SearchProps {
  onSearch: (query: string) => Promise<any[]>;
  debounceTime?: number;
}

export const PredictiveSearch: React.FC<SearchProps> = ({ 
  onSearch, 
  debounceTime = 300 
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length >= 2) {
        setIsLoading(true);
        try {
          const results = await onSearch(query);
          setSuggestions(results);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSuggestions([]);
      }
    }, debounceTime);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar contratos..."
        className="search-input"
      />
      {isLoading && <div className="search-loader" />}
      {suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map((item) => (
            <div key={item.id} className="suggestion-item">
              <div className="suggestion-title">{item.title}</div>
              <div className="suggestion-type">{item.type}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}; 