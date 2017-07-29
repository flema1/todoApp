const express = require('express');

// put this with the rest of your dependencies
const logger = require('morgan');
// we don't need this yet but might as well add it now
const path = require('path');
// put this right above the port
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const passport = require('passport');
const app = express()
// add our dotenv files
//require('dotenv').config();

// middlewares
app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(methodOverride('_method'));
// app.use(cookieParser());

app.get('/', function (req, res) {
  res.send('Hello Franklin!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get('/toDos', (req, res) => {
  res.send('Info about toDos!');
});


// get anything that hasn't already been matched
app.get('*', (req, res) => {
    // create a new error
    const err = new Error('not found!');
    // and send a response
    res.status(404).send(err);
});