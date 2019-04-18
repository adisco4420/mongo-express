const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  code: {
    type: String,
    required: true,
  },
  takenBy: {
    type: String,
  },

});

const SubjectModel = mongoose.model('Subject', SubjectSchema);

module.exports = SubjectModel;
