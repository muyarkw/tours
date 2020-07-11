const winston = require('winston');

const express = require('express');

const app = express();

const message = {
  ip: null,
  url: null,
  method: null,
  result: null,
  body: null,
  reqDateTime: null,
  userAgent: null
};

const loggers = {
  mjson: winston.createLogger({
    level: 'info',
    // format: winston.format.json(),
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.colorize(),
      winston.format.printf(info => {
        return `${info.message.ip} ${info.message.reqDateTime} ${info.level} ${
          message.userAgent
        } ${info.message.method} ${info.message.url}  ${info.message.result} ${
          info.message.body
        } `;
      })
    ),
    transports: [new winston.transports.File({ filename: 'app-info.log' })],
    exceptionHandlers: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'app-error.log' })
    ]
  }),

  simple: winston.createLogger({
    level: 'error',
    // format: winston.format.simple(),
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.colorize(),
      winston.format.printf(error => {
        return `${error.message.ip} ${info.message.reqDateTime} ${
          error.level
        } ${message.userAgent} ${error.message.method} ${error.message.url} ${
          error.message.result
        } ${error.message.body}`;
      })
    ),
    transports: [new winston.transports.File({ filename: 'app-info.log' })],
    exceptionHandlers: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'app-error.log' })
    ]
  })
};

exports.log = (req, result, type) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  let reqDateTime = new Date(req.requestTime);
  reqDateTime = String(reqDateTime).split('(');

  message.ip = req.ip;
  message.url = fullUrl;
  message.method = req.method;
  message.result = result;
  message.reqDateTime = reqDateTime[0];
  message.userAgent = req.get('User-Agent');
  console.log(req.body);

  if (req.body !== null && req.body !== undefined) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0)
      message.body = '';
    else message.body = String(JSON.stringify(req.body));
  } else message.body = '';

  if (type === 'error') {
    loggers.simple.error(message);
  } else if (type === 'info') {
    loggers.mjson.info(message);
  }
};
