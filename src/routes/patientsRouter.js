const express = require('express');
const Patient = require('../models/patient');

const patientsRouter = express.Router();

function router() {
  patientsRouter.route('/')
    .get((req, res) => {
      Patient.find({}, function (err, patients) {
        if (err) {
          console.log('Error => ' + err);
          res.send('patients GET error');
        } else {
          console.log('patient =>' + patients);
          res.send(patients);
        }
      });
    })  
    
    .post((req, res) => {
      const { firstName, lastName, dni_type, dni_number } = req.body;
      Patient.create({ firstName, lastName, dni_type, dni_number }, function(err, createdPatient) {
        if (err) {
          console.log('Error => ' + err);
          res.send('Patients POST error');
        } else {
          console.log('new patient => ' + createdPatient);
          res.send(createdPatient);
        }
      });
    });

  return patientsRouter;
}

module.exports = router;
