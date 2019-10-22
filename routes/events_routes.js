import * as Controller from '../controllers/events_controller';

const express = require('express');
const router = express.Router();

// Admin Routes

// Create Event
router.post('/', Controller.makeNewEvent);
// Deletes Event by :id
// router.delete('/:id', removeEvent);
// Updates a Event by :id
// router.put('/:id',changeProduct);

// User Routes
// Gets all Events
router.get('/', Controller.getAllEvents);
// Gets Event by id
// router.get('/:id', Controller.getEventById);
// Gets all Events from a particular user
// router.get('/:user', Controller.getAllEventsByUser);







module.exports = router;