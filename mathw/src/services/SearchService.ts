import { Database } from 'sqlite3';

interface ContractItem {
  id: string;
  title: string;
  type: string;
  keywords: string[];
  content: string;
  lastAccessed: Date;
  importance: number;
}

class SearchService {
  private db: Database;
  private searchCache: Map<string, ContractItem[]>;

  constructor() {
    this.db = new Database('contracts.db');
    this.searchCache = new Map();
  }

  async searchContracts(query: string): Promise<ContractItem[]> {
    // Primero buscar en caché para respuesta instantánea
    const cachedResults = this.searchCache.get(query.toLowerCase());
    if (cachedResults) return cachedResults;

    // Búsqueda en base de datos con ranking
    return new Promise((resolve, reject) => {
      this.db.all(`
        SELECT 
          c.*, 
          (
            CASE 
              WHEN c.title LIKE ? THEN 10
              WHEN c.keywords LIKE ? THEN 5
              WHEN c.content LIKE ? THEN 1
            END +
            (julianday('now') - julianday(c.last_accessed)) * -0.1 +
            c.importance
          ) as rank
        FROM contracts c
        WHERE 
          c.title LIKE ? OR 
          c.keywords LIKE ? OR 
          c.content LIKE ?
        ORDER BY rank DESC
        LIMIT 10
      `, 
      Array(6).fill(`%${query}%`),
      (err, rows) => {
        if (err) reject(err);
        // Guardar en caché para futuras búsquedas
        const typedRows = rows as ContractItem[];
        this.searchCache.set(query.toLowerCase(), typedRows);
        resolve(typedRows);
      });
    });
  }
} 