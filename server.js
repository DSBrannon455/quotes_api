const express = require('express')
const app = express()
const PORT = 3003






// controllers
app.use('/quotes', require('./controllers/quotesController'))


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})