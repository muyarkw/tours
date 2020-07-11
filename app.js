/* eslint-disable prefer-rest-params */
const express = require('express');
const morgan = require('morgan');
const winston = require('winston');

const logger = require('./utils/logger');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const CustomErrorWithDetails = require('./errors/CustomErrorWithDetails');
const httpError = require('./errors/httpError');

const app = express();

// const loggers = {
//   mjson: winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     transports: [new winston.transports.File({ filename: 'app-info.log' })]
//   }),

//   simple: winston.createLogger({
//     level: 'error',
//     format: winston.format.simple(),
//     transports: [new winston.transports.File({ filename: 'app-error.log' })]
//   })
// };

// function logResponseBody(req, res, next) {
//   const oldWrite = res.write;
//   const oldEnd = res.end;

//   const chunks = [];

//   res.write = function(chunk) {
//     chunks.push(chunk);

//     return oldWrite.apply(res, arguments);
//   };

//   res.end = function(chunk) {
//     if (chunk) chunks.push(chunk);

//     const body = Buffer.concat(chunks).toString('utf8');
//     const jsonbody = JSON.parse(body);
//     console.log(body);
//     logger.log(req, jsonbody.status, jsonbody.data);
//     //console.log(req.path, body);

//     oldEnd.apply(res, arguments);
//   };

//   next();
// }

// app.use(logResponseBody);

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
