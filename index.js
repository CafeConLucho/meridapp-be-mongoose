const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT | 8000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connection succesful');
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public/')));
// CORS Headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const dentistsRouter = require('./src/routes/dentistsRouter')();
/* const patientsRouter = require('./src/routes/patientsRouter')();
const paymentsRouter = require('./src/routes/paymentsRouter')();
const jobsRouter = require('./src/routes/jobsRouter')();
const usersRouter = require('./src/routes/usersRouter')(); */

app.use('/api/dentists', dentistsRouter);
/* app.use('/api/patients', patientsRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/users', usersRouter); */

app.get('/api', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => console.log(`App listening on port ${port}`));