var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const firebase = require("firebase");

const config = {
    apiKey: "AIzaSyCt1O_lE1SQd89IRPPVVzm7-OeidvG1Ipk",
    authDomain: "phonebook-go.firebaseapp.com",
    databaseURL: "https://phonebook-go.firebaseio.com",
    projectId: "phonebook-go",
    storageBucket: "phonebook-go.appspot.com",
    messagingSenderId: "619960918463"
};
firebase.initializeApp(config);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
