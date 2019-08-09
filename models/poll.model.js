const mongoose = require('mongoose');
const validator = require('validator')
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  ng: {
    type: String
  },
  email:{
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error('Email is invalid')
        }
    }
  },
  message: {
    type: String,
    required: true
  }
});

const poll = mongoose.model('poll', pollSchema);

module.exports = poll;
