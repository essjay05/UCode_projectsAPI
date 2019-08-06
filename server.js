// Require DOTENV file
require('dotenv').config();

// Require constants
const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    PORT = process.env.PORT || 8000;

// Connect to database:
require('./db/mongoose');

// MIDDLEWARE connection:
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/public/views'));

// Routes
    // HOME Route
    app.get('/', (req, res) => {
        res.json({ Success : true })
    });
    // API Root ROUTE
    app.get('/api', (req, res)=> {
        res.json({ message : `API Root` })
    });

// Listening Port
app.listen(PORT, err => {
    console.log(err || `Server listening on PORT ${PORT}`)
});