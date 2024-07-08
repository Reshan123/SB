const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: String,
  data: String,
  contentType: String,
  image: Buffer,
});

const eventSchema = new mongoose.Schema({
  eventDate: Date,
  startTime: String,
  eventName: String,
  description: String,
  images:[imageSchema]
 
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
