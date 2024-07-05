
const express = require('express');
const feedbackController = require('../controllers/feedback_controller');

const router = express.Router();

router.post('/submit-feedback', feedbackController.submitFeedback);
router.get('/get-feedbacks', feedbackController.getAllFeedbacks);
module.exports = router;
