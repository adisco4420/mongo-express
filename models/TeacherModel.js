const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const TeacherModel = mongoose.model('Teacher', TeacherSchema);

module.exports = TeacherModel;
