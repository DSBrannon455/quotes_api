const mongoose = require('mongoose')
const {Schema, model} = mongoose


const quotesSchema = new Schema({
    quote: {type: String, required: true},
    read: {type:Boolean, default: false},
    author: {type: String},
    likes: {type: Number, default:0}
})




module.exports = model('Quote', quotesSchema)