import * as Controller from '../controllers/events_controller';

const express = require('express');
const router = express.Router();

// Create Event
router.post('/', Controller.makeNewEvent);
// Gets all Events
router.get('/', Controller.getAllEvents);
// Deletes Event by :id
// router.delete('/:id', removeProduct);
// Updates a Event by :id
// router.put('/:id',changeProduct);

module.exports = router;