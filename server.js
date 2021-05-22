//DEPENDENCIES
const express = require('express')
const app = express()
const PORT = 3003
const mongoose = require('mongoose')



// MIDDLEWARE
// this will tell the server to parse the JSON data, and create the req.body object.
app.use(express.json())




// SETUP mongoose
mongoose.connect('mongodb://localhost:27017/quotesDB',{
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