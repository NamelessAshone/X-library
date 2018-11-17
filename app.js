const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db');

// NOTE: ADD_ROUTER
/** NOTOS: If you want to add a new router
 *  First, write a router file under ./routes, and export this router.
 *  Second, add this router here.
 *  Third, use this router. Search keyword 'USE_ROUTER' in this file.
*/
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// NOTE: USE_ROUTER
/**
 *  If you want to make a router be effective, use it here.
 */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', booksRouter);

/**
 * Connect db here.
 */
app.db = db;

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
