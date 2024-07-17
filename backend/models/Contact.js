// models/Contactus.js
const mongoose = require('mongoose');

const ContactusSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  message: String,
  inquiry: String,
});

module.exports = mongoose.model('Contactus', ContactusSchema);
