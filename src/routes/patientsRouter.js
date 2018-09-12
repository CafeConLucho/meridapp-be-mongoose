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
      /* 
        {
          "firstName": "Diego",
          "lastName": "Merida",
          "dni": {
            "type": "DNI",
            "number": 34123456
          },
          "medicalInsurance": {
            "medicalInsuranceId": "5b9958f28fd3a6501090e1fd",
            "affiliateNumber": "123456"
          },
          "birthday": "1989-10-14",
          "phone": "2235235948"
        }
      */
      Patient.create(req.body, function(err, createdPatient) {
        if (err) {
          console.log('Error => ' + err);
          res.send('Patients POST error');
        } else {
          console.log('new patient => ' + createdPatient);
          res.send(createdPatient);
        }
      });
    });

  patientsRouter.route('/:id')
    .get((req, res) => {
      Patient.find({_id: req.params.id}, function (err, patient) {
        if (err) {
          console.log('Error => ' + err);
          res.send('Dentist GET error');
        } else {
          console.log('dentists =>' + patient);
          res.send(patient);
        }
      });
    })  
    
    .put((req, res) => {
      //const {firstName, lastName, dni_type, dni_number} = req.body;
      Patient.findByIdAndUpdate(req.params.id, req.body, function(err, patient) {
        Patient.find({_id: patient.id}, function(err, updatedPatient) {
          if (err) {
            console.log('Error => ' + err);
            res.send('Dentist PUT error');
          } else {
            console.log('Updated dentist => ' + updatedPatient);
            res.send(updatedPatient);
          }
        });
      });
    })
    
    .delete((req,res) => {
      Patient.findByIdAndRemove(req.params.id, function(err, deletedPatient) {
        if (err) {
          console.log('Error => ' + err);
          res.send('Dentist DELETE error');
        } else {
          console.log('Deleted dentist => ' + deletedPatient);
          res.send(deletedPatient);
        }
      });
    });

  return patientsRouter;
}

module.exports = router;
