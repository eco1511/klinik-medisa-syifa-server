var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override') // method overdrive
const moment = require("moment"); // moment date

var dashboardRouter = require('./app/dashboard/router');
var pasienRouter = require('./app/pasien/router');
var layananRouter = require('./app/layanan/router');
var daftarRouter = require('./app/daftar/router');
var periksaRouter = require('./app/periksa/router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((req, res, next)=>{
  res.locals.moment = moment;
  next();
});
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/adminlte', express.static(path.join(__dirname, '/node_modules/admin-lte/')))

app.use('/', dashboardRouter);
app.use('/pasien', pasienRouter);
app.use('/layanan', layananRouter);
app.use('/daftar', daftarRouter);
app.use('/periksa', periksaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
