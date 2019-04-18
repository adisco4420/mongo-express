const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TeacherRoute = require('./routes/TeacherRoute');
const SubjectRoutes = require('./routes/SubjectRoutes');

const app = express();

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/school-mgt')
  .then(() => {
    console.log('✌🏾 Successfully connected to MongoDB');
  })
  .catch(err => {
    console.log('An error occured while conencting to MongoDB', err);
  });

app.use(cors());

// Add middlewares for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/teacher', TeacherRoute);
app.use('/subject', SubjectRoutes);

app.listen(2019).on('listening', () => {
  console.log('We are live on ' + 2019);
});
