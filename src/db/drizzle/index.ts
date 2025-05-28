import { drizzle } from "drizzle-orm/better-sqlite3";
import { postsTable } from "./schemas";
import Database from "better-sqlite3";
import { resolve } from "path";

const sqliteDbPath = resolve(process.cwd(), 'db.sqlite3');
const sqliteDb = new Database(sqliteDbPath);

export const drizzleDb = drizzle(sqliteDb, {
  schema: {
    posts: postsTable
  },
  logger: false,
});