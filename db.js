const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('farm_management.db');

// Create tables for daily records, expenses, and revenue if they don't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS daily_records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    foodAmount REAL,
    waterAmount REAL,
    observations TEXT,
    extras TEXT,
    deaths INTEGER,
    sickness INTEGER,
    structuralChanges TEXT,
    materialsBought TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    commodity TEXT,
    cost REAL
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS revenue (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    source TEXT,
    quantity INTEGER,
    price REAL
  )`);
});

module.exports = db;
