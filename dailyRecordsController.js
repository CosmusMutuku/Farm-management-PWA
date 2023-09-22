const db = require('../db');
const Chart = require('chart.js');

function calculateTotalExpenses() {
  // Implement logic to calculate total expenses from the database (e.g., SQL query)
}


function calculateTotalRevenue() {
  // Implement logic to calculate total revenue from the database (e.g., SQL query)
}

function calculateProfit() {
  const totalExpenses = calculateTotalExpenses();
  const totalRevenue = calculateTotalRevenue();
  return totalRevenue - totalExpenses;
}

function generateCharts() {
  // Implement logic to generate charts (using Chart.js, D3.js, or any other library)
}

exports.create = (req, res) => {
  const {
    date,
    foodAmount,
    waterAmount,
    observations,
    extras,
    deaths,
    sickness,
    structuralChanges,
    materialsBought
  } = req.body;

  const query = `INSERT INTO daily_records
    (date, foodAmount, waterAmount, observations, extras, deaths, sickness, structuralChanges, materialsBought)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.run(
    query,
    [
      date,
      foodAmount,
      waterAmount,
      observations,
      extras,
      deaths,
      sickness,
      structuralChanges,
      materialsBought
    ],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      // Calculate profit when creating a daily record
      const profit = calculateProfit();

      // Generate charts (for example, using Chart.js)
      generateCharts();

      res.json({ message: 'Daily record created successfully', profit });
    }
  );
};

exports.getAll = (req, res) => {
  const query = 'SELECT * FROM daily_records';

  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    // Calculate total expenses, total revenue, and profit
    const totalExpenses = calculateTotalExpenses();
    const totalRevenue = calculateTotalRevenue();
    const profit = calculateProfit();

    // Generate charts (for example, using Chart.js)
    generateCharts();

    res.json({ dailyRecords: rows, totalExpenses, totalRevenue, profit });
  });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM daily_records WHERE id = ?';

  db.get(query, [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ message: 'Daily record not found' });
      return;
    }
    res.json(row);
  });
};

exports.update = (req, res) => {
  const {
    id,
    date,
    foodAmount,
    waterAmount,
    observations,
    extras,
    deaths,
    sickness,
    structuralChanges,
    materialsBought
  } = req.body;

  const query = `UPDATE daily_records SET
    date = ?,
    foodAmount = ?,
    waterAmount = ?,
    observations = ?,
    extras = ?,
    deaths = ?,
    sickness = ?,
    structuralChanges = ?,
    materialsBought = ?
    WHERE id = ?`;

  db.run(
    query,
    [
      date,
      foodAmount,
      waterAmount,
      observations,
      extras,
      deaths,
      sickness,
      structuralChanges,
      materialsBought,
      id
    ],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      // Calculate profit when updating a daily record
      const profit = calculateProfit();

      // Generate charts (for example, using Chart.js)
      generateCharts();

      res.json({ message: 'Daily record updated successfully', profit });
    }
  );
};

exports.delete = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM daily_records WHERE id = ?';

  db.run(query, [id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    // Recalculate total expenses, total revenue, and profit after deletion
    const totalExpenses = calculateTotalExpenses();
    const totalRevenue = calculateTotalRevenue();
    const profit = calculateProfit();

    // Generate charts (for example, using Chart.js)
    generateCharts();

    res.json({ message: 'Daily record deleted successfully', totalExpenses, totalRevenue, profit });
  });
};
