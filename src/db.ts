import sqlite3 from "sqlite3";

import { SQLITE3_DB_PATH } from "./env";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const db = new sqlite3.Database(SQLITE3_DB_PATH);

export const getProducts = () => {
  return new Promise<Product[]>((resolve, reject) => {
    db.serialize(() => {
      const sql = "SELECT * FROM products";
      db.all(sql, (err: Error, rows: Product[]) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  });
};
