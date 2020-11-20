const express = require('express')
const Quote = require('inspirational-quotes')

const app = express()

app.get("/", function(req, res) {
    res.send(Quote.getQuote())
})

const port = process.env.PORT || 5000

app.listen(port, function() {
    console.log("Server started successfully")
})



