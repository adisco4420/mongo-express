const express = require('express');
const SubjectModel = require('../models/SubjectModel');
const router = express.Router();

router.post('/', async function(req, res) {
  try {
    const subject = await SubjectModel.create(req.body);
    res.status(200).json({
      status: 'success',
      data: subject,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      status: 'error',
      message: 'An error occured while creating subject 😭',
    });
  }
});

// Update a subject
router.put('/:_id', async function(req, res) {
  try {
    const updatedTeacher = await SubjectModel.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );

    // Check if the subject was found and updated
    if (!updatedTeacher) {
      res.status(404).json({
        status: 'error',
        message: 'Sorry that subject does not exist 😭',
      });
    }

    res.json({
      status: 'success',
      data: updatedTeacher,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      status: 'error',
      message: 'An error occured while updating the writ',
    });
  }
});

router.delete('/:_id', async function(req, res) {
  try {
    const deletedTeacher = await SubjectModel.findOneAndDelete({
        _id: req.params._id,
    });

    if (!deletedTeacher) {
      res.status(404).json({
        status: 'error',
        message: 'Sorry you cannot delete a subject that does not exist',
      });
      return;
    }

    res.json({
      status: 'success',
      message: '👋🏿 successfully deleted subject',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'An error occured while deleting the subject',
    });
  }
});

router.get('/:_id', async function(req, res) {
  try {
    const subject = await SubjectModel.findOne({ _id: req.params._id });

    if (!subject) {
      res.status(404).json({
        status: 'error',
        message: 'The subject was not found',
      });
      return;
    }

    res.json({
      status: 'success',
      data: subject,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      status: 'error',
      message: 'An error occured while getting the subject 😭',
    });
  }
});



module.exports = router;
