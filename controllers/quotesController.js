const express = require('express')
const quotes = express.Router()



// GET (index) list of quotes
quotes.get('/', (req, res)=>{
    res.send('Get route is working!!!')
})




module.exports = quotes