const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());


// Define API routes and controllers here
app.use('/api/daily-records', require('./routes/dailyRecords'));
app.use('/api/expenses', require('./routes/expenses'));
app.use('/api/revenue', require('./routes/revenue'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
