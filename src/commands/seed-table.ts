import sqlite3 from "sqlite3";
import fs from "fs";

import { SQLITE3_DB_PATH, SQL_SQLITE3_BASE } from "../env";

const db = new sqlite3.Database(SQLITE3_DB_PATH);

db.serialize(() => {
  const sql = fs.readFileSync(`${SQL_SQLITE3_BASE}/SEED_TABLE.sql`);
  db.run(sql.toString());
});

db.close();

