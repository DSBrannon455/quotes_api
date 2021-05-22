const express = require('express')
const quotes = express.Router()
const quotesModel = require('../models/quotesModel')


// GET (index) list of quotes
quotes.get('/', (req, res)=>{
    // res.send('Get route is working!!!')
    quotesModel.find({}, (error, foundQuotes)=>{
        if (error){
            res.status(400).json(error)
        }
        else{
            res.status(200).json(foundQuotes)
        }
    })
})


// POST ROUTE
quotes.post('/', (req, res)=>{

    quotesModel.create(req.body, (error, createQuote)=>{
        if (error){
            res.status(400).json({error: error.message})
        }
        else{
            res.status(200).json(createQuote)
        }
    })

})



module.exports = quotes