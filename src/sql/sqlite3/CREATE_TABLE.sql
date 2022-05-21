CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title CHAR(50) NOT NULL,
  description TEXT NOT NULL,
  image CHAR(100) NOT NULL,
  is_showcase INTEGER NOT NULL 
);
