const fs = require('fs');

const logger = require('../utils/logger');
const { json } = require('express');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);

  if (req.params.id * 1 > tours.length) {
    //logger.log(req, 'Invalid ID', 'error');
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    //logger.log(req, 'Missing name or price', 'error');
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price'
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours
    }
  });
  //logger.log(req, `Total tours: ${tours.length}`, 'info');
};

exports.getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const tour = tours.find(el => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
  //logger.log(req, `Get Tour id: ${id}`, 'info');
};

exports.createTour = (req, res) => {
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}\\..\\dev-data\\data\\tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
      console.log(`${__dirname}\\..\\dev-data\\data\\tours-simple.json`);
      //logger.log(req, 'success', 'info');
    }
  );
};

exports.updateTour = (req, res) => {
  try {
    res.status(200).json({
      status: 'success'
    });
    //logger.log(req, `Updated Tour ${req.params.id}`, 'info');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
    //logger.log(req, `Fail to update Tour ${req.params.id}`, 'error');
  }
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
  //logger.log(req, 'Deleted', 'info');
};
