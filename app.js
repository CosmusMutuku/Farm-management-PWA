const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Middleware for parsing JSON data
app.use(express.json());

// Define your API routes and controllers here
// For example: app.use('/api/daily-records', require('./routes/dailyRecords'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
