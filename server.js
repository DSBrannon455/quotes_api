//DEPENDENCIES
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const mongoose = require('mongoose')
const cors = require('cors')


// MIDDLEWARE
// this will tell the server to parse the JSON data, and create the req.body object.
app.use(express.json())

// Setup Cors middleware
const whitelist = ['http://localhost:3000', process.env.BASEURL, "https://quotes-front-end.herokuapp.com"]
const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS')) 
        }
    }
}

app.use(cors(corsOptions))



// SETUP mongoose
mongoose.connect(process.env.MONGODBURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// set up listeners to monitor your DB connections
const db = mongoose.connection
db.once('open', ()=> console.log('DB connected...'))
db.on('error', (error)=> console.log(error.message))
db.on('disconnected', ()=> console.log('Mongoose disconnected...'))









// controllers
app.use('/quotes', require('./controllers/quotesController'))


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})