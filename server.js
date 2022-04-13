const express = require('express');
const path = require('path');
// session middleware
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const exporessLayouts = require('express-ejs-layouts');
// load the env consts
require('dotenv').config();

// create the Express app
const app = express();

// connect to the MongoDB with mongoose
require('./config/database');
// configure Passport
require('./config/passport');
const indexRouter = require('./routes/index');
const servicesRouter = require('./routes/services');
const usersRouter = require('./routes/users');
const vehiclesRouter = require('./routes/vehicles');

const checkAuth = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/');
  }
}


// view engine setup
app.use(exporessLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// mount the session middleware
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user; // assinging a property to res.locals, makes that said property (user) availiable in every
  // single ejs view
  next();
});

app.locals.jsonToStr = obj => JSON.stringify(obj);

// mount all routes with appropriate base paths
app.use('/users', usersRouter);
app.use('/vehicles', checkAuth, vehiclesRouter);
app.use('/services', checkAuth, servicesRouter);
app.use('/', indexRouter);

// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;
