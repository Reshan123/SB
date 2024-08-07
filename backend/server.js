const express = require('express')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
const mongoose = require('mongoose') //mongo db library
const cors = require('cors') //Cors will let us accept cross origin request from our frontend to backend.
const dotenv = require('dotenv') //for keep secret and non shareable properies
// const multer = require('multer') //Multer is a middleware that will let us handle multipart/form data sent from our frontend form.
const morgan = require('morgan') //used to log information of each request that server receives.
// var forms = multer();
// const config = require('./config');
const Grid = require('gridfs-stream');

const server = http.createServer(app)

//api configuration
app.use(express.json({extended : true}))
app.use(express.urlencoded({extended : true}))
// app.use(forms.array()); 
app.use(bodyParser.json({limit : '250mb', extended : true}))
app.use(bodyParser.urlencoded({limit : '250mb', extended : true, parameterLimit:50000}))
app.use(morgan("common"))
dotenv.config()

//allow cross origin policy
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
   allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions));
app.use(function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    next();
});


//events
const eventRoutes = require('./routes/event_route')
app.use('/event_api', eventRoutes);
//feedback
const  feedbackRoutes = require('./routes/feedback_route')
app.use('/event_api/feedback',feedbackRoutes);

//admin
const adminRoutes = require('./routes/adminAuthRoute');
app.use('/auth',adminRoutes);



//mongo setup
const PORT = process.env.PORT
mongoose.set('strictQuery', true)
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {console.log(`server running on port ${PORT}`);})
    })
    .catch((err) => {console.log(err);})
