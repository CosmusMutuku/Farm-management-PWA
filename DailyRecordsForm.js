// DailyRecordsForm.js
import React, { useState } from 'react';
import axios from 'axios';

const DailyRecordsForm = () => {
  const [data, setData] = useState({
    date: '',
    foodAmount: '',
    waterAmount: '',
    // Add more fields as needed
  });

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to create a new daily record
      const response = await axios.post('/api/daily-records', data);
      console.log('Record created:', response.data);
      // Reset the form or handle success as needed
    } catch (error) {
      console.error('Error creating record:', error);
      // Handle errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input
        type="date"
        value={data.date}
        onChange={(e) => setData({ ...data, date: e.target.value })}
        required
      />
      <label>Food Amount:</label>
      <input
        type="number"
        value={data.foodAmount}
        onChange={(e) => setData({ ...data, foodAmount: e.target.value })}
        required
      />
      <label>Water Amount:</label>
      <input
        type="number"
        value={data.waterAmount}
        onChange={(e) => setData({ ...data, waterAmount: e.target.value })}
        required
      />
      {/* Add more form fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DailyRecordsForm;
