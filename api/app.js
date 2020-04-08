var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const firebase = require("firebase");
const graphqlHTTP = require("express-graphql");
const cors = require('cors');


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

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('*', cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// const userSchema = require('./graphql').userSchema;
var userSchema = require('./grapql/index').userSchema;
app.use('/graphql', cors(), graphqlHTTP({
    schema: userSchema,
    rootValue: global,
    graphiql: true
}));

module.exports = app;
