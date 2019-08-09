const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect('mongodb+srv://husam:husamhusam@cluster0-s3a1g.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, () => {
  console.log('Db connected');
});
