const express = require('express');
const router = express.Router();
const Contactus = require('../models/Contact'); // Correct import for the model
var nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message, inquiry } = req.body;
  
  // Use the correct model to create a new instance
  const newContactus = new Contactus({
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
    inquiry,
  });

  try {
    const savedContactus = await newContactus.save();
    res.status(201).json(savedContactus);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sandreenjayawardena@gmail.com',
        pass: 'unww zwkv ctlm vthp'
      }
    });
    
    var mailOptions = {
      from: 'tdabey20@gmail.com',
      to: email,
      subject: 'Welcome to IEEE Student Branch Of SLIIT',
      text: `Dear ${firstName} ${lastName},\n\n` +
            `Thank you for contacting us. We have received your inquiry:\n\n` +
            `Inquiry Type: ${inquiry}\n` +
            `Message: ${message}\n\n` +
            `We will get in touch with you soon.\n\n` +
            `Best regards,\n` +
            `IEEE Student Branch Of SLIIT`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
