'use strict';


debugger;

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

// Load database
require('./database');

// Load seed data
require('./seed');

// Create instance of Express server
var app = express();

// Serve static files
app.use('/', express.static('public'));

// Attach body parser
app.use(parser.json());

// Mount router to the app
app.use('/api', router); // Mount to /api, not /, to avoid conflicts with public folder.

app.listen(3000, function () {
    console.log("The server is running");
});