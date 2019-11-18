const cors = require('cors')

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let indexRouter = require('./routes/index');
let detailRouter = require('./routes/detail');
let listRouter = require('./routes/list');
var castRouter = require('./routes/cast');
var seasonRouter = require('./routes/season');
var episodeRouter = require('./routes/episode');
let usuarioRouter = require('./routes/usuario');
let dataRouter = require('./routes/data');


var app = express();

var mongoose = require('./connection/mongo');

app.use(cors({
  exposedHeaders: ['Authorization', 'authorization', 'Content-Length'],
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/detail', detailRouter);
app.use('/list', listRouter);
app.use('/cast', castRouter);
app.use('/season', seasonRouter);
app.use('/episode', episodeRouter);
app.use('/api/usuarios', usuarioRouter);
app.use('/data', dataRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;