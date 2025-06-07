var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');

var homeRouter = require('./routes/home');
var aboutRouter = require('./routes/about');
var contactsRouter = require('./routes/contacts');
var donateRouter = require('./routes/donate');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configurar express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'partials/layout'); // layout.ejs dentro de views/partials/

// Middleware para setar a página ativa (para navbar)
app.use((req, res, next) => {
  const pathSegment = req.path.split('/')[1] || 'home';
  res.locals.activePage = pathSegment;
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/contacts', contactsRouter);
app.use('/donate', donateRouter);

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
