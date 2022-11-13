// backend/app.js

const express = require("express");
// const path = require('path'); REMOVED
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const indexRouter = require('./routes/index'); REMOVED
const usersRouter = require('./routes/api/users'); // update the import file path
const tweetsRouter = require('./routes/api/tweets');

const app = express();

app.use(logger('dev')); // log request components (URL/method) to terminal
app.use(express.json()); // parse JSON request body
app.use(express.urlencoded({ extended: false })); // parse urlencoded request body
app.use(cookieParser()); // parse cookies as an object on req.cookies
//app.use(express.static(path.join(__dirname, 'public'))); REMOVED// serve the static files in the public folder

// Attach Express routers
// app.use('/', indexRouter); REMOVED
app.use('/api/users', usersRouter); // update the path
app.use('/api/tweets', tweetsRouter);

module.exports = app;