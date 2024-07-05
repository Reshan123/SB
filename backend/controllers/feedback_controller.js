const Feedback = require('../models/feedback_model');

exports.submitFeedback = async (req, res) => {
    try {
        const newFeedback = new Feedback({
            username: req.body.Username,
            email: req.body.Email,
            feedback: req.body.Feedback,
        });

        await newFeedback.save();

        res.send('Feedback submitted successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getAllFeedbacks = async (req, res) => {
    try {
        const allFeedbacks = await Feedback.find();
        res.json(allFeedbacks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};