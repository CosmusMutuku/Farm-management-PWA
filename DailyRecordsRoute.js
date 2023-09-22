const express = require('express');
const router = express.Router();
const dailyRecordsController = require('../controllers/dailyRecordsController');

// Create a new daily record
router.post('/', dailyRecordsController.create);


// Get all daily records
router.get('/', dailyRecordsController.getAll);

// Get a specific daily record by ID
router.get('/:id', dailyRecordsController.getById);

// Update a daily record by ID
router.put('/:id', dailyRecordsController.update);

// Delete a daily record by ID
router.delete('/:id', dailyRecordsController.delete);

module.exports = router;
