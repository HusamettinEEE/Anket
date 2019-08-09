const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

const PollModel = require('../models/poll.model');

router.get('/', (req, res, next) => {
  res.sendFile('index.html');
});

router.post('/', (req, res, next) => {
  const pollcreate = new PollModel({
    name: req.body.name,
    surname: req.body.surname,
    ng: req.body.ng,
    email: req.body.email,
    message: req.body.message
  });

  pollcreate
    .save()
    .then(data => {
      res.send('<h1>poll sended</h1>');
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
