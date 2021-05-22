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
            res.status(201).json(createQuote)
        }
    })

})




// DELETE ROUTE
quotes.delete('/:id', (req, res)=>{

    quotesModel.findByIdAndDelete(req.params.id, (error, deletedQuote)=>{
        if (error){
            res.status(400).json({error: error.message})
        }
        else if (deletedQuote === null){
            res.status(404).json({message: 'Quote id not Found'})
        }
        else{
            res.status(200).json({message: `Quote ${deletedQuote.quote} deleted successfully`})
        }
    })
})


// UPDATE ROUTE
quotes.put('/:id', (req, res)=>{

        quotesModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedQuote)=>{
            if (error){
                res.status(400).json({error: error.message})
            }
            else{
                res.status(200).json({
                    message: `Quote ${updatedQuote.id} updated successfully`,
                    data: updatedQuote
                })
            }
        })
})















module.exports = quotes