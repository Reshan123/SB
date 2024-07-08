// routes/event_routes.js
const express = require('express');
const multer = require("multer");
const router = express.Router();
const eventController = require('../controllers/event_controller');

// Create a storage object with a given configuration
const storage = multer.memoryStorage(); // Use memory storage

const upload = multer({ storage });

// image array is passed to multer with 4 slots
router.post('/createEvent', upload.array("images", 4), eventController.createEvent);

router.get('/upcommingEvent', eventController.getUpcommingEvents)//upcomming events

router.get('/pastEvent', eventController.getPastEvents)

router.get('/currentEvent',eventController.getcurrentEvents)

module.exports = router;
