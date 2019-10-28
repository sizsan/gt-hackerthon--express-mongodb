import * as Controller from '../controllers/events_controller';

const express = require('express');
const router = express.Router();

// Admin Routes

// Create Event
router.post('/', Controller.makeNewEvent);
// Deletes Event by :id
router.delete('/:id', Controller.removeEvent);
// Updates a Event by :id
router.put('/:id', Controller.changeEvent);

// User Routes
// Gets all Events
router.get('/', Controller.getAllEvents);
// Gets all Events from a category
router.get('/:category', Controller.getEventsByCategory);
// Gets all Events from a particular user
// router.get('/:user', Controller.getEventsByUser);







module.exports = router;