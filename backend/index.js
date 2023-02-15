const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routs = require('./rotes/routs')
const app = express()
const port = process.env.PORT || 3000

// add db to main file
require('./db/mongoose')


app.use(cors());


// parsers
app.use(bodyParser.text())
app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// api
app.use('/', routs)

// server
app.listen(port, ()=>{
    console.log(`Server working on: localhost:${port}`)
})