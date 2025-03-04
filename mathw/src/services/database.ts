import { Database } from 'sqlite3';

const db = new Database('mathwiki.db');

export const getTopics = async () => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT t1.*, GROUP_CONCAT(t2.id) as subtopics
       FROM topics t1
       LEFT JOIN topics t2 ON t2.parent_id = t1.id
       WHERE t1.parent_id IS NULL
       GROUP BY t1.id`,
      (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      }
    );
  });
}; 