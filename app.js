const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const StudentRoute = require('./api/routes/student_route');
const ClassRoute = require('./api/routes/class_route');
const SubjectRoute = require('./api/routes/subject_route');

app.use('/images', express.static('images'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Origin,X-Requested-With, Content-Type,Accept, Authorization');
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
});

app.use('/student', StudentRoute);
app.use('/class', ClassRoute);
app.use('/subject', SubjectRoute);

app.use((req, res, next) => {
  const error = Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;