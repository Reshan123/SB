const Event = require('../models/event_model');
const multer = require('multer');




const createEvent = async (req, res) => {
  try {
    const {eventDate, startTime, eventName, description} = req.body;
    
    
 
   

    const imagesData = req.files.map(file => ({
      data: file.buffer.toString('base64'),
      contentType: file.mimetype,
    }));
   
   
   

    // Create event
    const event = await Event.create({
      eventDate,
      startTime,
      eventName,
      description,
      images: imagesData,
     
    });

    if (!req.files || req.files.length === 0) {
      return res.status(201).json({ success:true, message: 'No files were uploaded.' });
    }
    else {
      res.json({ success: true, message: 'Event created successfully' });
    }
  } catch (error) {
    console.error('Error creating event:', error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
   
};
const getUpcommingEvents = async (req, res) => {
  

  const date = new Date()
  console.log(date)

  try {
    
    const event = await Event.find({ eventDate: { $gt: date } })
    res.status(200).json(event)
  } catch (error) {
    
    res.status(400).json({error:error.message})
  }

}
 const getPastEvents = async (req, res) => {
  

  const date = new Date()

  try {
    
    const event = await Event.find({ eventDate: { $lt: date } })
    res.status(200).json(event)
  } catch (error) {
    
    res.status(400).json({error:error.message})
  }

}

  const getcurrentEvents = async (req, res) => {
  
    const yesterday = new Date();
    yesterday.setDate(new Date().getDate() - 1);
    
    const tommorow = new Date();
    tommorow.setDate(new Date().getDate() + 1);
   
    console.log(tommorow)

  try {
    
    const event = await Event.find({ eventDate: {
    $gte: yesterday,
    $lte: tommorow
  } } )
    res.status(200).json(event)
  } catch (error) {
    
    res.status(400).json({error:error.message})
  }

 }




module.exports = { createEvent,getUpcommingEvents,getPastEvents,getcurrentEvents};
