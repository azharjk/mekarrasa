import sqlite3 from "sqlite3";

import { SQLITE3_DB_PATH } from "./env";

export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  is_showcase: number;
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

export const getShowcaseProducts = () => {
  return new Promise<Product[]>((resolve, reject) => {
    db.serialize(() => {
      const sql = "SELECT * FROM products WHERE is_showcase = 1";
      db.all(sql, (err: Error, rows: Product[]) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  });
};

export const getProduct = (id: number) => {
  return new Promise<Product>((resolve, reject) => {
    db.serialize(() => {
      const sql = `SELECT * FROM products WHERE id = ${id}`;
      db.get(sql, (err: Error, rows: Product) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  });
};
