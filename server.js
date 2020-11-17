// Server Dependencies
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
// Database Connection Request
require('dotenv/config');
const connectDB = require("./config/connectDB.js");

//Bring in models
const db = require("./models");

// Create an instance of the express app.
let app = express();
// Added so body parser can handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Host Static Files so css and js files can be retrieved
app.use(express.static(path.join(__dirname, '/public')));
// Set the port of our application, process.env.PORT lets the port be set by Heroku
let PORT = process.env.PORT || 8080;